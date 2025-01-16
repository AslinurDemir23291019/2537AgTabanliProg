// LocalStorage kullanmayeı bu kaynaktan inceledim ve sitemdeki yorum kısmı için bunu kullandım
// https://academy.patika.dev/courses/javascript/localstorage-ile-veri-eklemek-duzenlemek-ve-silmek
const messagesDiv = document.getElementById('message-slider');
let currentMessageIndex = 0;


document.addEventListener('DOMContentLoaded', function () {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    if (storedMessages.length > 0) {
        storedMessages.forEach((message, index) => {
            
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            if (index === 0) messageElement.classList.add('active'); // İlk aktif
            messageElement.innerHTML = `
                <h4>${message.name}</h4>
                <p>${message.message}</p>
            `;
            messagesDiv.appendChild(messageElement);
        });

        
        startSlider(storedMessages.length);
    } else {
        
        messagesDiv.innerHTML = '<p>Henüz bir yorum yok.</p>';
    }
});


function startSlider(totalMessages) {
    setInterval(() => {
        const messages = document.querySelectorAll('.message');
        messages[currentMessageIndex].classList.remove('active'); 
        currentMessageIndex = (currentMessageIndex + 1) % totalMessages; 
        messages[currentMessageIndex].classList.add('active'); 
    }, 3000); 
}


const form = document.getElementById('feedbackForm');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!name || !message) {
        alert('Lütfen adınızı ve mesajınızı giriniz!');
        return;
    }

   
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const newComment = { name, message };
    storedMessages.push(newComment);
    localStorage.setItem('messages', JSON.stringify(storedMessages));

    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <h4><u>${name}</u></h4>
        <p>${message}</p>
    `;
    messagesDiv.appendChild(messageElement);

    
    if (storedMessages.length === 1) {
        messageElement.classList.add('active');
        startSlider(storedMessages.length);
    }

    
    form.reset();
});
const clearButton = document.getElementById('clearMessages');
clearButton.addEventListener('click', function () {
    localStorage.removeItem('messages');
    messagesDiv.innerHTML = 'anasayfa.html'; 
});


const learnMoreButtons = document.querySelectorAll('.learn-more');


learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Sayfanın yenilenmesini engelle
        
        if (index === 0) {
            
            const column = button.closest('.column');
            const additionalText = document.createElement('p');
            additionalText.textContent = 'Anıtkabir gibi tarihi simgeler, büyüleyici müzeler ve geniş parklarla çevrili şehir, ziyaretçilerine hem huzur hem de tarihi bir yolculuk sunar. Modern mimarisiyle dikkat çeken Ankara, aynı zamanda geleneksel Türk kültürünün izlerini taşır. Şehirdeki her köşe, geçmişin ve geleceğin birleşimidir.';
            column.appendChild(additionalText);
            button.remove(); 
        } else if (index === 1) {
            const column = button.closest('.column');
            const additionalText = document.createElement('p');
            additionalText.textContent = 'Ayrıca, 21. yüzyılda hızla gelişen şehir, alışveriş merkezleri, sanat galerileri ve dünya mutfağından lezzetler sunan restoranlarla da dikkat çeker. Geçmişin ve modernizmin harmanlandığı Ankara, her yaştan ziyaretçiye hitap eden sayısız gezilecek mekâna sahiptir.';
            column.appendChild(additionalText);
            button.remove();
        }
    });
});


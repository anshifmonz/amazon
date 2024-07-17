let imgSelect = 0;
const sliderImageSelect = () => {
    const images = ['beauty', 'books', 'game', 'kitchen', 'toys'];
    const slider = document.getElementById('slide-img');
    const newImg = document.createElement('img');
    const imgElement = slider.querySelector('img');
    newImg.src = `assets/slider/${images[imgSelect]}.jpg`;

    if (imgElement) {
        imgElement.remove();
    }
    slider.appendChild(newImg);
    
    if (imgSelect === images.length - 1) {
        imgSelect = 0;
    } else {
        imgSelect++;
    }
};

sliderImageSelect();
setInterval(sliderImageSelect, 5000);
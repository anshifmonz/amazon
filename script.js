//Search bar
const searchBar = () => {
    const search_Bar = document.getElementById("search-bar")
    const navCenter = document.getElementById("nav-center")
    const opacityOverlay  = document.getElementById('opacity');
    
    search_Bar.addEventListener('focus', () => {
        navCenter.classList.add('active');
        opacityOverlay.style.position = 'fixed';
    });
    search_Bar.addEventListener('blur', () => {
        navCenter.classList.remove('active');
        opacityOverlay.style.position = '';
    });
};
searchBar()

//Image slider
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
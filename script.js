if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
const user = document.querySelector('.user-card');
const name = document.querySelector('.user-name');
const country = document.querySelector('.country');
const image = document.querySelector('.pattern-top img');
const statsCount = document.querySelectorAll('.count');
const statsAttr = document.querySelectorAll('.attribute');

document.addEventListener('mousemove', (e) => {
    const ax = -(window.innerWidth / 2 - e.pageX) / 20;
    const ay = (window.innerHeight / 2 - e.pageY) / 20;

    user.style.transform = `rotateX(${ay}deg) rotateY(${ax}deg)`;
});

user.addEventListener('mouseenter', () => {
    name.style.transform = 'translateZ(50px)';
    country.style.transform = 'translateZ(50px)';
    image.style.transform = 'translateZ(50px)';
    statsCount.forEach(item => {
        item.style.transform = 'translateZ(50px)';
    });
    statsAttr.forEach(item => {
        item.style.transform = 'translateZ(50px)';
    });
});

user.addEventListener('mouseleave', () => {
    name.style.transform = 'none';
    country.style.transform = 'none';
    image.style.transform = 'none';
    statsCount.forEach(item => {
        item.style.transform = 'none';
    });
    statsAttr.forEach(item => {
        item.style.transform = 'none';
    });
});
}

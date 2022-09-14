const slider = document.getElementById('slider');
const btnRight = document.getElementById('btn-right');
const btnLef = document.getElementById('btn-left');

let sliderSection = document.querySelectorAll('.slider__section'),
    sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
} 

function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section'),
        sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
} 

btnRight.onclick = () => {
    Next()
};

btnLef.onclick = () => {
    Prev()
};
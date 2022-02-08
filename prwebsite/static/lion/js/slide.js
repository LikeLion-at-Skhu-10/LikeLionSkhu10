const slides = document.querySelector('.slides-box');
const slideimg = document.querySelectorAll('.slide-li img');
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideimg.length;// 슬라이드 개수
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 1500;
const slideMargin = 100;
makeClone();
initfunction();//슬라이드 넓이 및 위치값 초기화
autoSlide();

function makeClone() {
    let cloneSlide_first = slideimg[0].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first);
    slides.insertBefore(cloneSlide_last, slides.firstElementChild);

}

function initfunction() {
    slides.style.width = (slideWidth + slideMargin) * (slideCount+2) + 'px';
    slides.style.left = -(slideWidth + slideMargin) + 'px';
}

function autoSlide() { //자동슬라이드 코드
    console.log('check');
    setInterval(function () {
        if (currentIdx <= slideCount -1){
            slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
            slides.style.transition = `${0.5}s ease-out`;
        }
        if (currentIdx === slideCount - 1) {
            setTimeout(function () {
                slides.style.left = -(slideWidth + slideMargin) + 'px';
                slides.style.transition = `${0}s ease-out`;
            }, 500);
            currentIdx = -1;
        }
        currentIdx += 1;
    }, 4000);
}

next.addEventListener('click', function(){
    console.log(currentIdx);
    if (currentIdx <= slideCount -1){
        slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
        slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === slideCount - 1) {
        setTimeout(function () {
            slides.style.left = -(slideWidth + slideMargin) + 'px';
            slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = -1;
    }
    currentIdx += 1;
});

prev.addEventListener('click', function(){
    console.log(currentIdx);
    if (currentIdx >=0) {
        slides.style.left = -currentIdx * (slideWidth + slideMargin)+'px';
        slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === 0){
        setTimeout(function() {
            slides.style.left = -slideCount * (slideWidth + slideMargin) +'px';
            slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = slideCount;
    }
    currentIdx -= 1;
});
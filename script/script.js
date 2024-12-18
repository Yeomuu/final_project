const header = document.querySelector('header');
const logo = document.querySelector('header .logo');
const menu = document.querySelectorAll('.menu li a');
const headerIcon = document.querySelectorAll('.quick iconify-icon');
const heroImg = document.querySelector('.hero');
const productList = document.querySelector('.productList');
const productImg = document.querySelector('.productImg');
const products = document.querySelectorAll('.product');
const eventImgBG = document.querySelector('.eventImg');
const eventMoveImg = document.querySelector('.eventImg .move');
const events = document.querySelectorAll('.event');
const eventText1 = document.querySelectorAll('.event .title');
const eventText2 = document.querySelectorAll('.event .date');
const scrollItem = document.querySelector('.scroll-event');

document.addEventListener('scroll', function(){
  // 헤더 컬러 변경
  let start = window.innerHeight;

  if (window.scrollY >= start) {
    logo.style.filter = "invert(0)";
    header.style.backgroundColor = '#ffffff';
    menu.forEach(a => {
        a.style.color = "#454545";
      });
    headerIcon.forEach(b => {
        b.style.color = "#454545";
      });
  } else {
    logo.style.filter = "";
    header.style.backgroundColor = "";
    menu.forEach(a => {
        a.style.color = "";
      });
    headerIcon.forEach(b => {
        b.style.color = "";
      });
  }
});

// 히어로 이미지 위 마우스 커서 위치에 따른 이펙트 생성
heroImg.addEventListener('mousemove', function(e){
  const effect = document.createElement('div');
  heroImg.appendChild(effect);

  // 이펙트 생성 위치(마우스 커서 기준)
  const x = e.pageX + (Math.random() * 20-10);
  const y = e.pageY + (Math.random() * 20-10);

  // 이펙트 클래스 추가
  effect.className = 'effect';
  effect.style.left = `${x}px`;
  effect.style.top = `${y}px`;

  // 이펙트 생성
  setTimeout(() => {
    effect.style.transform = 'scale(8)';
    effect.style.opacity = '0';
  }, 10);

  // 이펙트 삭제
  setTimeout(() => {
    effect.remove();
  }, 1000);
});

// 프로덕트 목록 스크롤 시 좌측 이미지 변경
productList.addEventListener('scroll', function() {
    const listHeight = productList.getBoundingClientRect().height;
    const listTop = productList.getBoundingClientRect().top;
    const listCenter = listTop + (listHeight / 4);

    products.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;

        if (itemTop <= listCenter && itemBottom >= listCenter) {
            productImg.src = `images/product-0${index + 1}.jpg`;
            item.style.opacity = '1';
        } else{
            item.style.opacity = ''
        }
    });

    // 목록 스크롤 시 스크롤 유도 사라짐
    if(productList.scrollTop > 0){
        scrollItem.style.opacity = '0';
    } else{
        scrollItem.style.opacity = '';
    }
});

// 이벤트 목록 마우스 오버 시 우측 이미지 변경
events.forEach((item, index) => {
    item.addEventListener('mouseover', function() {
        eventImgBG.style.backgroundImage = `url('images/event${index + 1}-1.jpg')`;
        eventMoveImg.style.backgroundImage = `url('images/event${index + 1}-2.png')`;

        eventText1.forEach(text => text.style.color = '');
        eventText2.forEach(text => text.style.color = '');
        events.forEach(event => event.style.color = '');

        eventText1[index].style.color = '#222222';
        eventText2[index].style.color = '#222222';
        item.style.color = '#222222';

        if (index === events.length - 1) {
            eventMoveImg.style.width = '130%';
            eventMoveImg.style.left = '-18%';
        } else {
            eventMoveImg.style.width = '';
            eventMoveImg.style.left = '';
        }
    });
});
const selBox1 = document.querySelectorAll('.mood .imgList div');
const selImg1 = document.querySelectorAll('.mood .imgList div img');
const selBox2 = document.querySelectorAll('.aroma .imgList div');
const selImg2 = document.querySelectorAll('.aroma .imgList div img');
const btn = document.querySelector('button');
const bg = document.querySelector('body');

let clicked1 = null;
let clicked2 = null;

let bgC1 = ['#DDD8D4', '#D2EBFF', '#FED2BC', '#F8EBDE', '#FBE9DF', '#EDF9FE'];
let bgC2 = ['#FDDB48', '#F3A5A5', '#CD9251', '#DEE8E9', '#F47C75', '#FFECBC'];

// 버튼 활성화
function btnOn(){
    if (clicked1 && clicked2) {
        btn.disabled = false;
        btn.style.color = '#fff';
        btn.style.backgroundColor = '#222222';
    } else {
        btn.disabled = true;
        btn.style.color = '';
        btn.style.backgroundColor = '';
    }
};

// 분위기 선택
selImg1.forEach((item, index) => {
    const text = item.nextElementSibling;

    // 마우스 오버 시 이미지 설명
    item.addEventListener('mouseover', function() {
        if (!clicked1 || clicked1 !== item) {
            item.style.filter = 'brightness(0.7)';
            selBox1[index].style.flex = '1.4';
            text.style.display = 'inline';
        }
    });

    // 마우스 아웃 시 원래대로
    item.addEventListener('mouseleave', function() {
        if (!clicked1 || clicked1 !== item) {
            item.style.filter = ''; 
            selBox1[index].style.flex = '';
            text.style.display = '';
        }
    });

    // 이미지 선택 시 마우스 오버 이벤트 고정 & 해제
    item.addEventListener('click', function() {
        if (clicked1 === item) {
            clicked1.style.filter = ''; 
            clicked1.closest('.imgList div').style.flex = '';
            clicked1.nextElementSibling.style.display = '';
            clicked1 = null;
        } else {
            if (clicked1 && clicked1 !== item) {
                clicked1.style.filter = ''; 
                clicked1.closest('.imgList div').style.flex = '';
                clicked1.nextElementSibling.style.display = '';
            }
            
            clicked1 = item;
            item.style.filter = 'brightness(0.7)';
            selBox1[index].style.flex = '1.4';
            text.style.display = 'inline';

            // 클릭 시 일정시간 배경 색 변경
            bg.style.backgroundColor = bgC1[index];
            
            setTimeout(() => {
                bg.style.backgroundColor = '';
            }, 500);
        }

        btnOn();
    });
});

// 향 선택
selImg2.forEach((item, index) => {
    const text = item.nextElementSibling;

    // 마우스 오버 시 이미지 설명
    item.addEventListener('mouseover', function() {
        if (!clicked2 || clicked2 !== item) {
            item.style.filter = 'brightness(0.7)';
            selBox2[index].style.flex = '1.4';
            text.style.display = 'inline';
        }
    });

    // 마우스 아웃 시 원래대로
    item.addEventListener('mouseleave', function() {
        if (!clicked2 || clicked2 !== item) {
            item.style.filter = ''; 
            selBox2[index].style.flex = '';
            text.style.display = '';
        }
    });

    // 이미지 선택 시 마우스 오버 이벤트 고정 & 해제
    item.addEventListener('click', function() {
        if (clicked2 === item) {
            clicked2.style.filter = ''; 
            clicked2.closest('.imgList div').style.flex = '';
            clicked2.nextElementSibling.style.display = '';
            clicked2 = null;
        } else {
            if (clicked2 && clicked2 !== item) {
                clicked2.style.filter = ''; 
                clicked2.closest('.imgList div').style.flex = '';
                clicked2.nextElementSibling.style.display = '';
            }
            
            clicked2 = item;
            item.style.filter = 'brightness(0.7)';
            selBox2[index].style.flex = '1.4';
            text.style.display = 'inline';

            // 클릭 시 일정시간 배경 색 변경
            bg.style.backgroundColor = bgC2[index];

            setTimeout(() => {
                bg.style.backgroundColor = '';
            }, 500);
        }

        btnOn();
    });
});

btnOn();

// 분위기와 향이 선택 되었을 때, 페이지 이동
btn.addEventListener('click', function(){
    if(clicked1 && clicked2){
        location.href = 'index-2-1.html';
    }
});
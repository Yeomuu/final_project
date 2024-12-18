const textBox = document.querySelectorAll('.text');
const imgBox = document.querySelectorAll('main .photo');

document.addEventListener('scroll', function(){
    // 형광펜 효과
    textBox.forEach(item => {
        let boxTop = item.getBoundingClientRect().top;
        let boxBottom = item.getBoundingClientRect().bottom;
        let veiwIn = window.innerHeight / 2.2;

        const line = item.querySelector('span');
    
        if(boxTop <= veiwIn && boxBottom >= veiwIn){
                line.style.background = 'linear-gradient(to top, #FFD78D 60%, transparent 40%)';
        };
    });

    // 이미지 페럴렉스 효과
    imgBox.forEach(item => {
        let boxTop = item.getBoundingClientRect().top;
        let boxBottom = item.getBoundingClientRect().bottom;
            let veiwIn = window.innerHeight / 4;

        const images = item.querySelector('img');

        if(boxTop <= veiwIn && boxBottom >= veiwIn){
            images.style.transform = `scale(1.05) translateY(${scrollY/-100}px)`;
        }else{
            images.style.transform = "";
        }
    });
});
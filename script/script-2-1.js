const listBox = document.querySelector('.productList');
const productList = document.querySelectorAll('.productList figure');
const moreBtn = document.querySelector('button');

let moreCount = 0;

moreBtn.addEventListener('click', function(){
    if(moreCount < 3){
        productList.forEach(item => {
            const clone = item.cloneNode(true);
            listBox.appendChild(clone);
        })

            moreCount++;
    }

    if(moreCount == 3){
        moreBtn.disabled = true;
        moreBtn.style.color = '#656565';
        moreBtn.style.backgroundColor = '#E6E6E6';
    }
});
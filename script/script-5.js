const categoryList = document.querySelectorAll('.category ul li');
const productList = document.querySelectorAll('.productList figure');
const listBox = document.querySelector('.productList')
const productNone = document.querySelector('#itemNone');
const btn = document.querySelector('button');

// 카테고리 이벤트트
categoryList.forEach((category) => {
    category.addEventListener('click', () => {
        const selectedCategory = category.getAttribute('data-category');
        let item = false;
        let productNum = 0;

        // 카테고리를 선택하면 추가(복제)된 아이템들은 사라짐
        const clonedItems = listBox.querySelectorAll('.cloned');
        clonedItems.forEach(item => {
            item.remove();
        });

        moreCount = 0;

        // 선택된 카테고리명 색상 변경
        categoryList.forEach((cat) => {
            cat.classList.remove('active');
        });
        category.classList.add('active');

        // 카테고리 선탟 시 해당 카테고리 아이템만 보임임
        productList.forEach((product) => {
            if (product.getAttribute('data-category') === selectedCategory || selectedCategory === 'all') {
                product.style.display = 'block';
                item = true;
                productNum++;
            } else {
                product.style.display = 'none';
            }

            if (item) {
                productNone.style.display = 'none';
                btn.style.color = '';
                btn.style.backgroundColor = '';
                btn.disabled = false;
            } else {
                productNone.style.display = 'block';
                btn.style.color = '#656565';
                btn.style.backgroundColor = '#E6E6E6';
                btn.disabled = true;
            }

            if(productNum < 8){
                btn.style.color = '#656565';
                btn.style.backgroundColor = '#E6E6E6';
                btn.disabled = true;
            } else{
                btn.style.color = '';
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }
        });
    });
});

// 더보기 버튼 이벤트트
let moreCount = 0;

btn.addEventListener('click', function(){
    // 버튼 클릭 시 제품 목록 추가(복제)
    if(btn.disabled == false && moreCount < 3){
        productList.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('cloned');
            listBox.appendChild(clone);
        })

        moreCount++;
    }

    // 버튼 3번 클릭하면 버튼 비활성화
    if(moreCount == 3){
        btn.disabled = true;
        btn.style.color = '#656565';
        btn.style.backgroundColor = '#E6E6E6';
    }
});

function effect() {
    const subtract = document.querySelectorAll('.subtract');
    const add = document.querySelectorAll('.add');
    const num = document.querySelectorAll('.number input');
    const allSelect = document.querySelector('.all_select');
    const allSelectn = document.querySelector('.all_selectn');
    const select = document.querySelectorAll('.select');
    const price = document.querySelectorAll('.price');
    const totalPrice = document.querySelectorAll('.total_price');
    const total = document.querySelector('main .bottom h4');
    const allDelect = document.querySelector('.all_delect');
    const delect = document.querySelectorAll('.delect');
    const li = document.querySelectorAll('main nav li');
    const number = document.querySelector('main .bottom p span');
    const length = li.length;
    let sidarr = [];
    let numarr = [];
    // 选择&计算商品数量、总价
    // 设置初始状态
    let money = 0;
    allSelect.checked = allSelectn.checked = true;
    for (let i = 0; i < length; i++) {
        select[i].checked = true;
    };
    getTotal();
    // 全选
    let mark = true;
    allSelectn.onclick = allSelect.onclick = function () {
        if (this.className === 'all_select') {
            allSelectn.checked = allSelect.checked;
        } else {
            allSelect.checked = allSelectn.checked;
        }
        if (mark) {
            for (let i = 0; i < length; i++) {
                select[i].checked = false;
            }
            mark = false;
        } else {
            for (let i = 0; i < length; i++) {
                select[i].checked = true;
            }
            mark = true;
        };
        getTotal();
    }
    // 单选
    for (let i = 0; i < length; i++) {
        select[i].onclick = function () {
            let flag = true;
            for (let j = 0; j < length; j++) {
                if (j === i) {
                    continue;
                };
                if (!select[j].checked) {
                    flag = false;
                }
            };
            if (flag) {
                allSelectn.checked = allSelect.checked = true;
                mark = true;
            };
            if (!select[i].checked) {
                allSelectn.checked = allSelect.checked = false;
                mark = false;
            };
            getTotal();
        }
    };
    // 计算总商品数量&总价
    function getTotal() {
        let count = 0;
        money = 0;
        const selectNew = document.querySelectorAll('.select');
        const totalPriceNew = document.querySelectorAll('.total_price');
        for (let n = 0; n < selectNew.length; n++) {
            if (selectNew[n].checked === true) {
                count++;
                money += Number(totalPriceNew[n].innerHTML);
            }
        };
        number.innerHTML = count;
        total.innerHTML = money.toFixed(2);
    };



    // 商品数量价格更改并存储到本地存储中
    if (localStorage.getItem('sid') && localStorage.getItem('num')) {
        sidarr = localStorage.getItem('sid').split(',');
        numarr = localStorage.getItem('num').split(',');
    };
    for (let i = 0; i < length; i++) {
        subtract[i].onclick = function () {
            if (num[i].value > 1) {
                num[i].value--;
            };
            if (num[i].value == 1) {
                subtract[i].style.cursor = 'not-allowed';
            };
            changeStorage(i);
            changeSmallPrice(i);
        };
        add[i].onclick = function () {
            num[i].value++;
            subtract[i].style.cursor = 'pointer';
            changeStorage(i);
            changeSmallPrice(i);
        };
        num[i].onblur = function () {
            num[i].value = Math.round(num[i].value);
            if (num[i].value == 1) {
                subtract[i].style.cursor = 'not-allowed';
            } else {
                subtract[i].style.cursor = 'pointer';
            };
            if (num[i].value < 1) {
                num[i].value = 1;
            };
            changeStorage(i);
            changeSmallPrice(i);
        }
    };
    function changeStorage(i) {
        numarr[sidarr.indexOf(num[i].alt)] = num[i].value;
        localStorage.setItem('num', numarr.toString());
    };
    function changeSmallPrice(i) {
        totalPrice[i].innerHTML = Number(num[i].value * price[i].innerHTML).toFixed(2);
        getTotal();
    };



    // 删除
    // 全部删除
    allDelect.onclick = function () {
        for (let i = 0; i < length; i++) {
            if (select[i].checked === true) {
                delectGoods(i);
            }
        };
        getTotal();
    };
    // 单个删除
    for (let i = 0; i < length; i++) {
        delect[i].onclick = function () {
            delectGoods(i);
            getTotal();
        }
    };
    function delectGoods(i) {
        li[i].parentNode.removeChild(li[i]);
        sidarr.splice(sidarr.indexOf(num[i].alt), 1);
        numarr.splice(sidarr.indexOf(num[i].alt), 1);
        localStorage.setItem('sid', sidarr.toString());
        localStorage.setItem('num', numarr.toString());
    }
};
export { effect };
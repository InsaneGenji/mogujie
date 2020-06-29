import { hover } from './hover.js';
import { bufferMove } from './bufferMove.js';
function effect() {
    const appcode = document.querySelector('aside ul li:first-of-type');
    const appcode_hover = document.querySelector('.appcode');
    const service = document.querySelector('aside ul li:nth-of-type(5)');
    const service_hover = document.querySelector('aside ul li:nth-of-type(5) nav');
    const backstage = document.querySelector('aside ul li:nth-of-type(6)');
    const backstage_hover = document.querySelector('aside ul li:nth-of-type(6) nav');
    const subtract = document.querySelector('.number button:first-of-type');
    const add = document.querySelector('.number button:last-of-type');
    const number = document.querySelector('.number input');
    const main = document.querySelector('main');
    const sf = document.querySelector('.sf');
    const spic = document.querySelector('.spic');
    const smallpic = document.querySelector('.smallpic');
    const bf = document.querySelector('.bf');
    const bpic = document.querySelector('.bpic');
    const pic_list = document.querySelector('.pic_list');
    const lbtn = document.querySelector('.pic_list button:first-of-type');
    const rbtn = document.querySelector('.pic_list button:last-of-type');
    const picul = document.querySelector('.pic_list nav ul');
    // 放大镜
    const scale = bpic.offsetWidth / spic.offsetWidth;
    spic.onmouseover = function () {
        sf.style.visibility = 'visible';
        bf.style.visibility = 'visible';
        window.onmousemove = function (ev) {
            var ev = ev || window.event;
            let x = ev.pageX - main.offsetLeft - sf.offsetWidth / 2;
            let y = ev.pageY - main.offsetTop - sf.offsetHeight / 2;
            if (x <= 0) {
                x = 0;
            } else if (x >= spic.offsetWidth - sf.offsetWidth) {
                x = spic.offsetWidth - sf.offsetWidth;
            };
            if (y <= 0) {
                y = 0;
            } else if (y >= spic.offsetHeight - sf.offsetHeight) {
                y = spic.offsetHeight - sf.offsetHeight;
            };
            sf.style.left = x + 'px';
            sf.style.top = y + 'px';
            bpic.style.left = -scale * x + 'px';
            bpic.style.top = -scale * y + 'px';
        };
        spic.onmouseout = function () {
            sf.style.visibility = 'hidden';
            bf.style.visibility = 'hidden';
        }
    };




    // 侧边栏鼠标悬浮
    hover(appcode, appcode_hover);
    hover(service, service_hover);
    hover(backstage, backstage_hover);
    if (number.value == 1) {
        subtract.style.cursor = 'not-allowed';
    };
    // 商品数量加减
    subtract.onclick = function () {
        if (number.value > 1) {
            number.value--;
        };
        if (number.value == 1) {
            subtract.style.cursor = 'not-allowed';
        }
    };
    add.onclick = function () {
        number.value++;
        subtract.style.cursor = 'pointer';
    };
    number.onblur = function () {
        number.value = Math.round(number.value);
        if (number.value == 1) {
            subtract.style.cursor = 'not-allowed';
        }else{
            subtract.style.cursor = 'pointer';
        };
        if (number.value < 1) {
            number.value = 1;
        };
    };
    // 颜色、尺码选中
    const colorul = document.querySelector('.color ul');
    const sizeul = document.querySelector('.size ul');
    select(colorul, 'color');
    select(sizeul, 'size');
    function select(ul, obj) {
        ul.onclick = function (ev) {
            var ev = ev || window.event;
            let li = null;
            if (obj === 'color') {
                li = ev.target.parentNode;
            } else if (obj === 'size') {
                li = ev.target;
            }
            if (li.nodeName === 'LI') {
                if (li.classList.item(0) == `${obj}select`) {
                    li.classList.remove(`${obj}select`);
                } else {
                    let lis = document.querySelectorAll(`.${obj} ul li`);
                    for (let i = 0; i < lis.length; i++) {
                        lis[i].classList.remove(`${obj}select`);
                    };
                    li.classList.add(`${obj}select`);
                }
            }
        }
    };



    // 小图列表悬浮切换图片
    picul.onmouseover = function (ev) {
        var ev = ev || window.event;
        let img = ev.target;
        if (img.nodeName === 'IMG') {
            let imglist = document.querySelectorAll('.pic_list nav ul li img');
            for (let i = 0; i < imglist.length; i++) {
                imglist[i].style.opacity = '.5';
                imglist[i].parentNode.style.borderBottomColor = 'transparent';
            }
            img.style.opacity = '1';
            img.parentNode.style.borderBottomColor = '#ef2f23';
            smallpic.src = img.src;
            bpic.src = img.src;
        }
    };



    // 左右按钮
    let count = 0;
    pic_list.onmouseover = function (ev) {
        var ev = ev || window.event;
        const piclists = document.querySelectorAll('.pic_list nav ul li');
        const flag = Math.floor(piclists.length / 5);
        console.log(flag);
        if (ev.target.nodeName === 'BUTTON') {
            lbtn.onclick = function () {
                bufferMove(picul, {
                    left: picul.offsetLeft + 340
                });
                count--;
                if (count === 0) {
                    lbtn.classList.remove('show');
                };
                if (count < flag) {
                    rbtn.classList.add('show');
                }
            };
            rbtn.onclick = function () {
                bufferMove(picul, {
                    left: picul.offsetLeft - 340
                });
                count++;
                if (count === flag) {
                    rbtn.classList.remove('show');
                };
                if (count > 0) {
                    lbtn.classList.add('show');
                }
            }
        }
    }
};
export { effect };
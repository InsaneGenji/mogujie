import { myDNS } from './myDNS.js';
import { $ajax } from './$ajax.js';
import { addCookie } from './cookie.js';
function effect() {
    const phpip = `${myDNS}php/`;
    let title = document.querySelectorAll('main article .title div');
    let lr = document.querySelectorAll('main article section div');
    const warning = document.querySelector('main article section .warning');
    const formR = document.querySelector('.register form');
    const inputR = document.querySelectorAll('.register form p input');
    const span = document.querySelectorAll('.register form p span');
    const inputL = document.querySelectorAll('.login form input');
    // tab切换
    for (let i = 0; i < title.length; i++) {
        title[i].onclick = function () {
            for (let j = 0; j < title.length; j++) {
                title[j].classList.remove("active");
                lr[j].classList.remove("show");
            }
            title[i].classList.add("active");
            lr[i].classList.add("show");
        }
    };



    // 登录
    for (let i = 0; i < inputL.length - 1; i++) {
        inputL[i].value = '';
    };
    window.onkeydown = function (ev) {
        var ev = ev || window.event;
        if (ev.keyCode == 13) {
            login();
        }
    };
    inputL[2].onclick = function () {
        login();
    };
    inputL[0].onfocus = inputL[1].onfocus = function () {
        warning.classList.remove('show');
    };
    function login() {
        $ajax({
            url: phpip + 'login.php',
            type: 'post',
            data: {
                uep: inputL[0].value,
                key: inputL[1].value
            }
        }).then(function (echo) {
            if (echo) {//登录成功
                addCookie('username', echo, 10);//存储用户信息
                window.history.back();//页面跳转
            } else {
                warning.innerHTML = `用户名或者密码错误`;
                warning.classList.add('show');
            }
        })
    };



    // 注册
    for (let i = 0; i < inputR.length; i++) {
        inputR[i].value = '';
        inputR[i].alt = 'true';
        inputR[i].setAttribute('data', 'true');
        inputR[i].setAttribute('index', i);
        span[i].setAttribute('index', i);
    };
    // 用户名
    inputR[0].onblur = function () {
        const _this = this;
        check(_this, { yhm: _this.value }, '用户名', /^[\w]{4,16}$/);
    };
    // 邮箱
    inputR[1].onblur = function () {
        const _this = this;
        check(_this, { yx: _this.value }, '邮箱', /^[a-zA-Z0-9]{1,16}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/);
    };
    // 手机号
    inputR[2].onblur = function () {
        const _this = this;
        check(_this, { sjh: _this.value }, '手机号', /^1[3456789]\d{9}$/);
    };
    // 密码
    inputR[3].onblur = function () {
        const sign = document.querySelector(`span[index="${this.getAttribute('index')}"]`);
        const reg = /^[\w]{6,16}$/;
        if (!reg.test(this.value)) {
            warning.innerHTML = '密码不合法，请重新输入';
            warning.classList.add('show');
            sign.innerHTML = '×';
            sign.style.color = '#ff5777';
            this.alt = true;
        } else {
            sign.innerHTML = '√';
            sign.style.color = '#34c284';
            this.alt = false;
        };
        this.onfocus = function () {
            warning.classList.remove('show');
        }
    };
    // 确认密码
    inputR[4].onblur = function () {
        const sign = document.querySelector(`span[index="${this.getAttribute('index')}"]`);
        if (this.value !== inputR[3].value) {
            warning.innerHTML = '密码不一致，请重新输入';
            warning.classList.add('show');
            sign.innerHTML = '×';
            sign.style.color = '#ff5777';
            this.alt = true;
        } else {
            sign.innerHTML = '√';
            sign.style.color = '#34c284';
            this.alt = false;
        };
        this.onfocus = function () {
            warning.classList.remove('show');
        }
    };
    // 表单提交
    formR.onsubmit = function () {
        if (inputR[0].alt === 'true' || inputR[1].alt === 'true' || inputR[2].alt === 'true' || inputR[3].alt === 'true' || inputR[4].alt === 'true' || inputR[0].getAttribute('data') === 'true' || inputR[0].getAttribute('data') === 'true' || inputR[0].getAttribute('data') === 'true') {
            return false;
        } else {
            alert('注册成功，将跳转到登录页面');
        }
    };
    // 表单验证（查重、正则）
    function check(_this, information, message, reg) {
        const sign = document.querySelector(`span[index="${_this.getAttribute('index')}"]`);
        let [flag1, flag2] = [true, true];
        $ajax({
            url: phpip + 'register.php',
            type: 'post',
            data: information
        }).then(function (echo) {
            if (echo) {
                warning.innerHTML = `${message}已被注册`;
                warning.classList.add('show');
                flag1 = true;
                _this.alt = true;
            } else {
                flag1 = false;
                _this.alt = false;
            }
            if (!reg.test(_this.value)) {
                warning.innerHTML = `${message}不合法，请重新输入`;
                warning.classList.add('show');
                flag2 = true;
                _this.setAttribute('data', 'true');
            } else {
                flag2 = false;
                _this.setAttribute('data', 'false');
            }
            if (flag1 || flag2) {
                sign.innerHTML = '×';
                sign.style.color = '#ff5777';
            } else {
                sign.innerHTML = '√';
                sign.style.color = '#34c284';
            }
        });
        _this.onfocus = function () {
            warning.classList.remove('show');
        }
    }
};
export { effect };
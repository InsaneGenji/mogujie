import { myDNS } from './myDNS.js';
import { $ajax } from './$ajax.js';
//渲染数据
function render() {
    const phpip = `${myDNS}php/`;
    let themeLi = document.querySelector('.theme_list');
    let hotLi = document.querySelector('.hot_list');
    let popularLi = document.querySelector('.popular_list');
    let picLi = document.querySelector('.pic_list');
    let textLi = document.querySelector('.text_list');
    //热门品牌
    $ajax({
        url: phpip + 'hot_list.php',
        dataType: 'json'
    }).then(function (hot_list) {
        let hothtml = '';
        for (let value of hot_list) {
            hothtml += `<li>
                        <a href="">
                            <p>${value.text}</p>
                        </a>
                    </li>`;
        }
        hotLi.innerHTML += hothtml;
    });
    //流行话题
    $ajax({
        url: phpip + 'popular_list.php',
        dataType: 'json'
    }).then(function (popular_list) {
        let popularhtml = '';
        for (let value of popular_list) {
            popularhtml += `<li>
                        <a href="">
                            <p>${value.text}</p>
                        </a>
                    </li>`;
        }
        popularLi.innerHTML += popularhtml;
    });
    // 图片列表&目录主题市场
    $ajax({
        url: phpip + 'pic_list.php',
        dataType: 'json'
    }).then(function (pic_list) {
        let pichtml = '';
        let themehtml = '';
        for (let value of pic_list) {
            pichtml += `<li>
                        <a href="" style="background-image:url(${value.url})">
                            <p>${value.text}</p>
                        </a>
                    </li>`;
            themehtml += `<li>
                        <a href="">
                            <p>${value.text}</p>
                        </a>
                    </li>`;
        }
        picLi.innerHTML += pichtml;
        themeLi.innerHTML += themehtml;
    });
    // 文字列表
    $ajax({
        url: phpip + 'text_list.php',
        dataType: 'json'
    }).then(function (text_list) {
        let texthtml = '';
        for (let value of text_list) {
            texthtml += `<li>
                        <a href="">
                            <p>${value.text}</p>
                        </a>
                    </li>`;
        }
        textLi.innerHTML += texthtml;
    })
};
export { render };
function addEvent(obj, etype, fn) {//obj:元素对象  etype:事件类型   fn:事件处理函数
    if (obj.addEventListener) {//标准
        obj.addEventListener(etype, fn, false);
    } else {//IE
        obj.attachEvent('on' + etype, fn);
    }
};
export { addEvent };

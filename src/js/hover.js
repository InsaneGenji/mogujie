function hover(parents, children) {
    parents.onmouseover = function () {
        children.classList.add('show');
    }
    parents.onmouseout = function () {
        children.classList.remove('show');
    }
    children.onmouseover = function () {
        children.classList.add('show');
    }
    children.onmouseout = function () {
        children.classList.remove('show');
    }
};
export { hover };
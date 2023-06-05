/**
* Фиксированная шапка
*/
const init = () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', showBlock);
    function showBlock() {
        if (window.pageYOffset > header.offsetHeight * 2) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }
}

export default {
    init
};
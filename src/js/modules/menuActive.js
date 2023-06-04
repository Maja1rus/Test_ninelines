/**
* Подсветка активного пункта меню
*/
const init = () => {
    const menuLinks = document.querySelectorAll('.header__nav a');

    menuLinks.forEach((el) => {
        el.addEventListener('click', () => {

            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].classList.remove('is-active')
                
            }

            el.classList.add('is-active');
        })
    });
}

export default {
	init
};
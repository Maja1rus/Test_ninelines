/**
* Логика работы кнопки на вверх
*/
const init = () => {
    const btn = document.querySelector('.js-sctoll-to-top');
    const circle = btn.querySelector('.scroll-to-top__circle');
    const text = btn.querySelector('.scroll-to-top__text');

    function buttonPercent () {

        let h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
    
        let percent = Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);

        

        if (percent >= 95) {
            btn.classList.add('is-arrow');
            circle.setAttribute("style", `--value:100`);
        } else {
            btn.classList.remove('is-arrow');
            circle.setAttribute("style", `--value:${percent}`);
        }
       
        text.innerHTML = `${percent}%`
    } 

    window.addEventListener('scroll', function (){ 
        buttonPercent();
    });

    buttonPercent();
}

export default {
	init
};
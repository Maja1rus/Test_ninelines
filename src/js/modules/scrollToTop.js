/**
* Логика работы кнопки на вверх
*/
const init = () => {
    const btn = document.querySelector('.js-sctoll-to-top');
    const text = btn.querySelector('span');

    function buttonPercent () {

        let h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
    
        let percent = Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);

        if (percent === 100) {
            btn.classList.add('is-arrow');
        } else {
            btn.classList.remove('is-arrow');
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
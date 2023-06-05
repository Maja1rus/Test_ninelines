/**
* Логика прелоудера
*/
const init = () => {
    const preloader = document.querySelector('.preloader');
    const html = document.querySelector('html');

    if (preloader) {
        html.classList.add('is-lock-scroll')

        window.addEventListener('DOMContentLoaded', () => {
            const mediaFiles = document.querySelectorAll('img, video');
            let i = 0;
    
            Array.from(mediaFiles).forEach((file) => {
                file.onload = () => {
                    i++;
                    let percents = ((i * 100) / mediaFiles.length).toFixed();
    
                    if (percents > 25) {
                        preloader.classList.add('preloader--step-2');
                    }
    
                    if(i+1 >= mediaFiles.length) {
                        preloader.classList.add('preloader--step-3');
    
                        setTimeout(() => {
                            preloader.classList.add('is-hidden');
                            html.classList.remove('is-lock-scroll')
                        }, "500");
                       
                        percents = 100;
                    }
                }
            });
        });
    }
}

export default {
	init
};
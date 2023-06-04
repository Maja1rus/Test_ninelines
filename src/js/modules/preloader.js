import helpers from '../helpers';

const init = () => {
    const preloader = document.querySelector('.preloader');

    if (preloader) {

        document.addEventListener('DOMContentLoaded', () => {
            helpers.lockScroll(true, helpers.$header.find(preloader), '');
            const mediaFiles = document.querySelectorAll('img, video');
            let i = 0
            
            mediaFiles.forEach((file, index) => {
                file.onload = () => {
                    i++
                    
                    console.log(percents);

                    if(i === mediaFiles.length) {
                        helpers.lockScroll(false, helpers.$header.find(preloader), '');
                        preloader.classList.add('preloader--hide')
                    }
                }
            })
        })
    }
}


export default {
	init
};
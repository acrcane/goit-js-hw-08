// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightboxContainer = document.querySelector('.gallery');

addToHtml(lightboxContainer)


function createLightboxGallery(array){
    return array.map(({preview, original, description}) => {
        return `<li class="gallery__item" >
                    <a href="${original}" class="gallery__link">
                        <img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image">
                    </a>
                </li>`           
    }).join('')
}

function addToHtml(container){
    container.innerHTML = createLightboxGallery(galleryItems)
}

new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
    preload: false,
})
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector ('.gallery')
const cardsGallery = gallaryCreateItem (galleryItems)

galleryContainer.insertAdjacentHTML ('beforeEnd', cardsGallery)

function gallaryCreateItem (galleryItems) {
    return galleryItems.map (({preview, original, description}) => {
        return `
            <a class = "gallery__link" href = "${original}">
                <img 
                    class = "gallery__image"
                    src = "${preview}" 
                    data-source = "${original}"
                    alt = "${description}" 
                />
            </a>
        `
    }).join ('')
}

 
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt'
});

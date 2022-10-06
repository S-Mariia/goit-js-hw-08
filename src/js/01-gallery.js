// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

function createGalleryMarkup(list) {
    return list.reduce((acc, {preview, original, description})=>acc+`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" loading="lazy" alt="${description}" />
</a> `,'')
}
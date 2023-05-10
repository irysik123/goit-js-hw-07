import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = (array) => 
    array.map(element => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
          <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
          />
        </a>
      </li>`
    }).join('');

const galleryCards = markup(galleryItems);

/* galleryEl.innerHTML = galleryCards;
 */

galleryEl.insertAdjacentHTML('afterbegin', galleryCards);

const onImgClick = event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    } 
    const instance = basicLightbox.create(`<img width="800" height="600" src="${event.target.dataset.source}">`);
    instance.show();

    const onEscClick = event => {
        if(event.code !== 'Escape') {
            return
        }
        instance.close();
        window.document.removeEventListener('keydown', onEscClick)
    }
    window.document.addEventListener('keydown', onEscClick)
}



galleryEl.addEventListener('click', onImgClick);

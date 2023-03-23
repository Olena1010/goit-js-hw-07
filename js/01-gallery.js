import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryMarkUp = document.querySelector('.gallery');
console.log(galleryMarkUp);

const galleryEl = galleryItems
    .map(({ preview, description, original }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`)
    .join('');
    // console.log(galleryEl);
galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl);
galleryMarkUp.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const modal = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener('keydown', onEscKeyPress),
            onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
    modal.show();

    function onEscKeyPress(evt) {
        if (evt.code === "Escape") {
            modal.close();
        }
    }
};
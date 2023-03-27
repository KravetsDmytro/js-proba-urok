import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');
// const galleryMarkup = createGalleryMarkup(galleryItems);

// galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

// function createGalleryMarkup(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `
//       <li>
//         <a class="gallery__link" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             alt="${description}"
//             />
//         </a>
//       </li>
//     `;
//     })
//     .join('');
// }

// let gallery = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
//   captionPosition: 'top',
//   showCounter: false,
// });

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createCardsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryEl.addEventListener("click", onGalleryClick);

function createCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link"  width="780" height="auto" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"  /></a></li>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 450,
  navText: ["←", "→"],
  captionPosition: "bottom",
  closeText: "×",
  focus: true,
});

function onGalleryClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  evt.preventDefault();
}

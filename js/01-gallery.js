import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(creatGalleryMarcup(galleryItems));

console.log(galleryItems);

// 1. створення змінної з лі(gallery);
// 2. через мап перебираю galeriitems , деструктизація властивостей і вкінці на метод map додаю метод join/.;
// 3. insertAdjacentHTML вставляю створену строку в html.

const galleryUlContainer = document.querySelector(".gallery");
const galleryMarcup = creatGalleryMarcup(galleryItems);

galleryUlContainer.addEventListener("click", galleryUlContainerClick);

function creatGalleryMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>    
    `;
    })
    .join("");
}

galleryUlContainer.insertAdjacentHTML("beforeend", galleryMarcup);
// додаємо розмітку в хтмл

// створення фунуції кліку на картинку
function galleryUlContainerClick(evt) {
  evt.preventDefault();

  const datasetSource = evt.target.dataset.source;
  console.log(datasetSource);
  // перевірка якщо не картинка то повернення
  if (!datasetSource) {
    return;
  }

  modal.element().querySelector("img").src = datasetSource;

  // console.log (datasetSource)
  modal.show();
}

// модальне вікно

const modal = basicLightbox.create(
  `
  <img width="1280" height="auto" src="">`,
  {
    onShow: (modal) => {
      window.addEventListener("keydown", onEscBtnPress);
    },
    onClose: (modal) => {
      window.removeEventListener("keydown", onEscBtnPress);
    },
  }
);

// закриття модального вікна через еск.
function onEscBtnPress(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  modal.close();
}

//   const modalWindow = basicLightbox.create(`
//   <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// if (evt.target.classList.contains())

// ____________далі 4_______________________

const menuBtn = document.querySelector('.menu-btn')
const menuContainer = document.querySelector('.menu-container')
const menuWindow = document.querySelector('.menu-window')
const menuInner = document.querySelector('.menu-inner')
const menuCloseBtn = document.querySelector('.menu-close-btn')

menuBtn.addEventListener('click', () => {
   menuContainer.classList.add('active');

   setTimeout(() => {
      menuWindow.classList.add('active');
   }, 1);

   setTimeout(() => {
   menuInner.classList.add('active');
    }, 1000)

})
menuCloseBtn.addEventListener('click', () => {
   setTimeout(()=> {
      menuContainer.classList.remove('active')
   }, 800)
   menuWindow.classList.remove('active');
   menuInner.classList.remove('active');
})



const swiper = new Swiper(".cardSwiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   slidesOffsetBefore: 0,
   slidesOffsetAfter: 0,
   speed: 800,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
     breakpoints: {
      660: {
         slidesPerView: 1.7,
         slidesOffsetBefore: 30,
      },
      710: {
         slidesPerView: 2,
         slidesOffsetBefore: 30,
      },
      780: {
         slidesPerView: 2.2,
         slidesOffsetBefore: 30,
      },
      885: {
         slidesPerView: 2.5,
         slidesOffsetBefore: 30,
         slidesOffsetAfter: 100
      },
      1070: {
         slidesPerView: 3,
         slidesOffsetBefore: 30,
         slidesOffsetAfter: 100
      },
      1280: {
         slidesPerView: 3.7,
         slidesOffsetBefore: 30,
         slidesOffsetAfter: 100
      },
      1560: {
         slidesPerView: 5,
         slidesOffsetBefore: 30,
         slidesOffsetAfter: 30
      }
   }

})



const header = document.querySelector("header")
const sliderNav = document.querySelector(".slider-nav")
const mailMediaLinks = document.querySelector(".main-media-links")

const modalContainer = document.querySelector(".modal-container")
const modalBoxes = document.querySelectorAll(".modal-box")
const modalContents = document.querySelectorAll(".modal-content")

const readMoreBtns = document.querySelectorAll(".read-more-btn")

const modalOpen = function(readMoreBtnClick){
   header.classList.add("hide")
   sliderNav.classList.add("hide")
   mailMediaLinks.classList.add("hide")

   modalContainer.classList.add("active")

   modalBoxes[readMoreBtnClick].classList.add("active")

   setTimeout(() => {
      modalContents[readMoreBtnClick].classList.add("active")
   }, 2000)
}

readMoreBtns.forEach((readMoreBtn, i) => {
   readMoreBtn.addEventListener("click", ()=> {
      modalOpen(i)
   })
})


const modalCloseBtns = document.querySelectorAll(".modal-close-btn")
modalCloseBtns.forEach((modalCloseBtn) => {
   modalCloseBtn.addEventListener("click", () =>{
      header.classList.remove("hide")
      sliderNav.classList.remove("hide")
      mailMediaLinks.classList.remove("hide")

      modalContainer.classList.remove("active")

      modalBoxes.forEach((modalBox) => {
         modalBox.classList.remove("active")
      })

      modalContents.forEach((modalContent) => {
         modalContent.classList.remove("active")
      })
   })
})

const swiperSlides = document.querySelectorAll(".swiper-slide")

swiperSlides.forEach((swiperSlide) => {
   const redMoreBtn = swiperSlide.querySelector(".read-more-btn")

   redMoreBtn.addEventListener("click", ()=> {
      function addHideClassWithDelay(elements){
         elements.forEach((element, index) => {
            const delay = 150;

            setTimeout(() => {
               element.classList.add("hide")
            }, index * delay)
         })
      }
      const startingElement = document.querySelector(".swiper-slide.swiper-slide-active")

      if(startingElement){
         const elements = document.querySelectorAll(".swiper-slide");
         const elementArray = Array.from(elements);
         const startingIndex = elementArray.indexOf(startingElement)
         const elementToHide = elementArray.slice(startingIndex)

         readMoreBtns.forEach((redMoreBtn) => {
            redMoreBtn.addEventListener("click", addHideClassWithDelay(elementToHide))
         })
      }
   })
})

modalBoxes.forEach((modalBox) => {
   const modalCloseBtn = modalBox.querySelector(".modal-close-btn")

   modalCloseBtn.addEventListener("click", () => {
      function removeHideClassWithDelay(elements){
         elements.forEach((element, index) => {
            const delay = 150;

            setTimeout(() => {
               element.classList.remove("hide")
            }, index * delay)
         })
      }

      const startingElement = document.querySelector(".swiper-slide.swiper-slide-active")

      if(startingElement){
         const elements = document.querySelectorAll(".swiper-slide");
         const elementArray = Array.from(elements);
         const startingIndex = elementArray.indexOf(startingElement)
         const elementToShow = elementArray.slice(startingIndex)

         modalCloseBtns.forEach((modalCloseBtn) => {
            modalCloseBtn.addEventListener("click", removeHideClassWithDelay(elementToShow))
         })
      }
   })
})


document.addEventListener("DOMContentLoaded", ()=> {
   const searchInput = document.querySelector(".search-input")
   const searchResults = document.querySelector(".search-results")
   const CardContainer = document.getElementById("CardContainer")


   searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLocaleLowerCase();
      const matchingCards = Array.from(CardContainer.getElementsByClassName("card")).filter(card => card.dataset.title.toLowerCase().includes(searchTerm))

      searchResults.innerHTML = '';

      matchingCards.forEach(card => {
         const link = document.createElement("a");

         link.classList.add("search-resut-link");
         link.href = "#";
         link.textContent = card.dataset.title;
         link.addEventListener("click", (event) => {
            event.preventDefault();
            openModal(card.dataset.title)
         });

         searchResults.appendChild(link)
      })

      if(matchingCards.length > 0) {
         searchResults.style.display = "block"
      }else {
         searchResults.style.display = "none"
      }
   })

   function openModal(cardTitle) {
      const modalToOpen = document.getElementById(`modal_${cardTitle.replace(/\s/g, '')}`);

      if(modalToOpen) {
         modalToOpen.classList.add("active")

         header.classList.add("hide")
         sliderNav.classList.add("hide")
         mailMediaLinks.classList.add("hide")
      
         modalContainer.classList.add("active")

         const thisModalContent = modalToOpen.querySelector(".modal-content")

         setTimeout(() => {
            thisModalContent.classList.add("active")
         }, 2000)

         function addHideClassWithDelay(elements){
            elements.forEach((element, index) => {
               const delay = 150;
   
               setTimeout(() => {
                  element.classList.add("hide")
               }, index * delay)
            })
         }
         const startingElement = document.querySelector(".swiper-slide.swiper-slide-active")
   
         if(startingElement){
            const elements = document.querySelectorAll(".swiper-slide");
            const elementArray = Array.from(elements);
            const startingIndex = elementArray.indexOf(startingElement)
            const elementToHide = elementArray.slice(startingIndex)

            const searchResultLinks = document.querySelectorAll(".search-result-link")
   
            searchResultLinks.forEach((searchResultLink) => {
               searchResultLink.addEventListener("click", addHideClassWithDelay(elementToHide))
            })
         }
         searchInput.value = '';
      }
   }

   searchInput.addEventListener("input", () => {
      if(searchInput.value.length === 0) {
         searchResults.style.display = "none";
      }
   })

   document.addEventListener("click", (event) => {
      if(!event.target.matches("#searchInput")){
         searchResults.style.display = "none";
      }
   })
})
   
      
   

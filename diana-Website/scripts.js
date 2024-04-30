/* TANG DESIGNS */

window.addEventListener('DOMContentLoaded', tang);

function tang() {


  // WORK FILTERS
  if (document.querySelector('.work-filters')) {
    let filters = document.querySelectorAll('.work-filters .filter')
    for (let i = 0; i < filters.length; i++) {
      let filter = filters[i]
      filter.addEventListener('click', () => {
        console.log(filter)
        let _x = document.querySelector('.active-filter')
        _x.classList.remove('active-filter')
        filter.classList.add('active-filter')
        document.querySelector('main').className = ''
        document.querySelector('main').classList.add(filter.id)
      })
    }
  }


  // WORK OVERLAY
  if (document.querySelector('.work-overlay')) {

    let overlay = document.querySelector('.work-overlay')
    let cards = document.querySelectorAll('.work-card')
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i]
      card.addEventListener('click', function () {

        // SET UP OVERLAY
        let info = this.querySelector('.work-card-info').textContent;
        let imgs = this.querySelectorAll('.work-slider-images img')
        let _content = `<div class="work-overlay-content">`
        _content += `<div class="work-slider">`
        for (let i = 0; i < imgs.length; i++) {
          if (i === 0) {
            _content += `<div class="work-slider-slide active-slide"><img src="${imgs[i].src}"></div>`
          } else {
            _content += `<div class="work-slider-slide"><img src="${imgs[i].src}"></div>`
          }
        }
        if (imgs.length > 1) {
          _content += `<div class="next-slide"><img src="images/next.svg" alt="Next slide"></div>`
          _content += `<div class="prev-slide"><img src="images/prev.svg" alt="Prev slide"></div>`
        }
        _content += `</div>`
        _content += `<div class="work-info">${info}</div>`
        _content += `<div class="work-close"><img src="images/close.svg" alt="Close"></div>`
        _content += `</div>`
        overlay.innerHTML = _content
        document.body.classList.add('overlay-active')

        // CLOSE OVERLAY
        let close = document.querySelector('.work-close')
        close.addEventListener('click', () => {
          document.body.classList.remove('overlay-active')
          overlay.innerHTML = ''
        })

        // NEXT AND PREV SLIDES
        let next = document.querySelector('.next-slide')
        let prev = document.querySelector('.prev-slide')
        let slides = document.querySelectorAll('.work-slider-slide')
        let total = slides.length - 1
        let count = 0
        next.addEventListener('click', () => {
          count < total ? count++ : count = 0;
          document.querySelector('.work-slider-slide.active-slide').classList.remove('active-slide')
          slides[count].classList.add('active-slide') 
        })
        prev.addEventListener('click', () => {
          count > 0 ? count-- : count = total;
          document.querySelector('.work-slider-slide.active-slide').classList.remove('active-slide')
          slides[count].classList.add('active-slide')  
        })

      })
    }
  }

}

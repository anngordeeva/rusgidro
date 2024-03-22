const btnOpen = document.getElementById('steps-open')
const btnClose = document.getElementById('popup-close')
const popup = document.getElementById('popup')

// open popup 

btnOpen.addEventListener('click', function() {
  popup.classList.add('open')
})

//close popup

btnClose.addEventListener('click', function() {
  popup.classList.remove('open')
})

// navigation 

const buttonForward = document.getElementById('btn-forward')
const buttonBack = document.getElementById('btn-back')
const stepNumber = document.querySelectorAll('.number-button')
const stepContent = document.querySelectorAll('.popup__text')

const nubmerArr = Array.from(stepNumber);
const contentArr = Array.from(stepContent)

let currentActiveIndex = 0;

buttonForward.addEventListener('click', function() {
  if (currentActiveIndex <= 7) {
    currentActiveIndex = currentActiveIndex + 1;
    buttonBack.classList.remove('disabled')

    for(let i = 0; i < currentActiveIndex; i++) {
      nubmerArr[i].classList.remove('active')
      nubmerArr[i].classList.add('done')
      contentArr[i].classList.remove('active')
    }
  } if (currentActiveIndex === 8) {
    buttonForward.classList.add('disabled')
  } 
    nubmerArr[currentActiveIndex].classList.add('active')
    contentArr[currentActiveIndex].classList.add('active')
})

buttonBack.addEventListener('click', function() {
  if (currentActiveIndex >= 1) {
    currentActiveIndex = currentActiveIndex - 1;

    buttonForward.classList.remove('disabled')
    nubmerArr[currentActiveIndex].classList.remove('done')
    contentArr[currentActiveIndex+1].classList.remove('active')
  } if (currentActiveIndex === 0) {
    buttonBack.classList.add('disabled')
  }

  nubmerArr[currentActiveIndex+1].classList.remove('active')
  contentArr[currentActiveIndex].classList.add('active')
  nubmerArr[currentActiveIndex].classList.add('active')
})
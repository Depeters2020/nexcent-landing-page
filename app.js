const toggleBtn = document.querySelector('#toggle')

const displayMenu = document.querySelector('#menu')

toggleBtn.addEventListener('click', (clicked) => {
  displayMenu.classList.toggle('hidden')
})



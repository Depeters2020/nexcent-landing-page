const toggleBtn = document.querySelector('#toggle')

const displayMenu = document.querySelector('#menu')

toggleBtn.addEventListener('click', () => {
  displayMenu.classList.toggle('hidden')
})



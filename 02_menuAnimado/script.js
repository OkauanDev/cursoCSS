
const navBar = document.querySelector('.navBar')
const allLi = document.querySelectorAll('li')


allLi.forEach((li,index) => {

    li.addEventListener("click", e => {
        navBar.querySelector(".activeList")
    })
})
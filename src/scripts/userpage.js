import { Api } from "./api.js";
import { RenderLogin } from "./render.js";

const token = localStorage.getItem("kenzie@companies:token");
const admin = localStorage.getItem("kenzie@companies:admin")

if(!token){
    window.location.replace("/index.html")
}else if(admin == "true"){
    window.location.replace("/src/pages/dashboard.html")
}

const toggleDarkMode = document.querySelector(".main__button--darkmode")
toggleDarkMode.addEventListener("click", event => {
    event.preventDefault()
    const html = document.querySelector("html")
    html.classList.toggle("dark_mode")
    const coverDark = document.getElementById("cover__dark--mode")
    coverDark.classList.toggle("main__darkmode--over")
    coverDark.classList.toggle("main__darkmode--over2")
})

const listCoworkers = document.getElementById("listCoworkers")
listCoworkers.addEventListener("click", event =>{
    event.preventDefault()
    Api.getCoworkers()
})
const listDepartment = document.getElementById("listDepartment")
listDepartment.addEventListener("click", event =>{
    event.preventDefault()
    Api.getDepartment()
})
const listCompany = document.getElementById("listCompany")
listCompany.addEventListener("click", event =>{
    event.preventDefault()
    Api.getCompany()
})
const editInfo = document.getElementById("editInfo")
editInfo.addEventListener("click", event =>{
    event.preventDefault()
    RenderLogin.renderEdit()

})
const logoutUser = document.querySelector(".header__container--logout")
logoutUser.addEventListener("click", event =>{
    event.preventDefault()
    localStorage.clear()
    window.location.replace("/index.html")
})

Api.getUserSettings()
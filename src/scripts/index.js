import { Api } from "./api.js";
import { instanceWithToken } from "./axios.js";


const btnSignUp = document.getElementById("btnSignUp")
btnSignUp.addEventListener("click", event => {
    event.preventDefault()
    const modalSignup = document.getElementById("modalSignup")
    modalSignup.classList.toggle("hidden")
})
const btnSendSignUp = document.getElementById("sendSignup")
btnSendSignUp.addEventListener("click", event =>{
    event.preventDefault()
    const nameSignup = document.getElementsByName("Name")[0].value
    const emailSignup = document.getElementsByName("EmailSignup")[0].value
    const senhaSignup = document.getElementsByName("SenhaSignup")[0].value
    const optSignup = document.getElementsByName("LevelSignup")[0].value

    const data = {
        "password": senhaSignup,
        "email": emailSignup,
        "professional_level": optSignup,
        "username": nameSignup
    }
    console.log(data)
    Api.signUp(data)
})
const btnClose = document.getElementById("btnClose")
btnClose.addEventListener("click", event =>{
    event.preventDefault()
    const modalSignup = document.getElementById("modalSignup")
    modalSignup.classList.toggle("hidden")
})
const btnSendLogin = document.getElementById("sendLogin")
btnSendLogin.addEventListener("click", event =>{
    event.preventDefault()
    const modalSignup = document.getElementById("modalSignup")
    modalSignup.classList.toggle("hidden")
    const modalLogin = document.getElementById("modalLogin")
    modalLogin.classList.toggle("hidden")
})

const btnCloseLogin = document.getElementById("btnCloseLogin")
btnCloseLogin.addEventListener("click", event =>{
    event.preventDefault()
    const modalLogin = document.getElementById("modalLogin")
    modalLogin.classList.toggle("hidden")
})
const btnBackSignup = document.getElementById("backSignup")
btnBackSignup.addEventListener("click", event =>{
    event.preventDefault()
    const modalLogin = document.getElementById("modalLogin")
    modalLogin.classList.toggle("hidden")
    const modalSignup = document.getElementById("modalSignup")
    modalSignup.classList.toggle("hidden")
})
const btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener("click", event =>{
    event.preventDefault()
    const modalLogin = document.getElementById("modalLogin")
    modalLogin.classList.toggle("hidden")
})
const submitLogin = document.getElementById("submitLogin")
submitLogin.addEventListener("click", event =>{
    event.preventDefault()
    const emailLogin = document.getElementsByName("loginEmail")[0].value
    const passwordLogin = document.getElementsByName("loginPassword")[0].value

    const data = {
        "email": emailLogin,
        "password": passwordLogin
    }
    Api.login(data)
})

const toggleDarkMode = document.querySelector(".main__button--darkmode")
toggleDarkMode.addEventListener("click", event => {
    event.preventDefault()
    const html = document.querySelector("html")
    html.classList.toggle("dark_mode")
    const coverDark = document.getElementById("cover__dark--mode")
    coverDark.classList.toggle("main__darkmode--over")
    coverDark.classList.toggle("main__darkmode--over2")
})
Api.getCompanies()
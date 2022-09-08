import {
    Api
} from "./api.js";
import {
    Toast
} from "./toast.js";

export class RenderLogin {
    static renderCompanies(list) {
        const containerCards = document.getElementById("companies")
        list.forEach(element => {
            const divCompany = document.createElement("div")
            const divCard = document.createElement("div")
            const sectorCard = document.createElement("h2")
            const imgCard = document.createElement("img")
            const nameCard = document.createElement("h3")
            const descriptionCard = document.createElement("p")
            const timeCard = document.createElement("span")

            divCompany.classList.add("main__container--company")
            divCard.classList.add("main__company--card")
            sectorCard.classList.add("main__company--section")
            imgCard.classList.add("main__company--img")
            nameCard.classList.add("main__company--name")
            descriptionCard.classList.add("main__company--description")
            timeCard.classList.add("main__company--time")

            switch (element.sectors.description) {
                case "Alimenticio":
                    imgCard.src = "./src/img/005-apple.png"
                    break;
                case "Varejo":
                    imgCard.src = "./src/img/008-wholesale.png"
                    break;
                case "Textil":
                    imgCard.src = "./src/img/004-roll.png"
                    break;
                case "Manufatura":
                    imgCard.src = "./src/img/007-manufacturing.png"
                    break;
                case "Aeroespacial":
                    imgCard.src = "./src/img/002-spaceship.png"
                    break;
                case "Automotiva":
                    imgCard.src = "./src/img/006-car.png"
                    break;
                case "TI":
                    imgCard.src = "./src/img/001-data-management.png"
                    break;
                case "Atacado":
                    imgCard.src = "./src/img/003-shipping-cart.png"
                    break;

                default:
                    break;
            }

            imgCard.alt = element.sectors.description
            nameCard.innerText = element.name
            descriptionCard.innerText = element.description
            timeCard.innerText = `Horario de abertura:${element.opening_hours}`

            containerCards.append(divCompany)
            divCompany.append(divCard)
            divCard.append(sectorCard, imgCard, nameCard, descriptionCard, timeCard)
        });
        return containerCards
    }
    static async renderCoworkers(data) {
        console.log(data)
        if (data.length === 0) {
            Toast.create("Você não está em uma empresa", "red")
        } else {
            const body = document.querySelector("body")
            const sectionModal = document.createElement("section")
            const divFuncCompany = document.createElement("div")
            const divHeaderFuncModalCreate = document.createElement("div")
            const titleHeaderFuncModalCreate = document.createElement("h2")
            const buttonModalCreateInner = document.createElement("button")
            const imageFuncModalCreate = document.createElement("img")
            const divCarousel = document.createElement("div")
            const divInner2Carousel = document.createElement("div")
            const previousPageFunc = document.createElement("a")
            const previousPageFuncSpan = document.createElement("span")
            const previousPageFuncSpan2 = document.createElement("span")
            const nextPageFunc = document.createElement("a")
            const nextPageFuncSpan = document.createElement("span")
            const nextPageFuncSpan2 = document.createElement("span")
            
            body.append(sectionModal)
            sectionModal.append(divFuncCompany)
            divFuncCompany.append(divHeaderFuncModalCreate, divCarousel)
            divHeaderFuncModalCreate.append(titleHeaderFuncModalCreate, buttonModalCreateInner)
            buttonModalCreateInner.append(imageFuncModalCreate)
            divCarousel.append(divInner2Carousel, previousPageFunc, nextPageFunc)
            previousPageFunc.append(previousPageFuncSpan, previousPageFuncSpan2)
            nextPageFunc.append(nextPageFuncSpan, nextPageFuncSpan2)
        
            imageFuncModalCreate.src = "../img/cancel.png"
            titleHeaderFuncModalCreate.innerText = `Colegas de Trabalho`
            sectionModal.classList.add("main__modal")
            divFuncCompany.classList.add("main__modal--container")
            divHeaderFuncModalCreate.classList.add("main__container--div")
            buttonModalCreateInner.classList.add("main__modal--close")
            titleHeaderFuncModalCreate.classList.add("main__container--title")

            imageFuncModalCreate.classList.add("main__modal--image")
        
            divCarousel.classList.add("carousel")
            divCarousel.classList.add("slide")
            divCarousel.setAttribute("id", "carouselExampleControls")
            divCarousel.setAttribute("data-ride", "carousel")
            divInner2Carousel.classList.add("carousel-inner")
            previousPageFunc.classList.add("carousel-control-prev")
            previousPageFunc.href = "#carouselExampleControls"
            previousPageFunc.setAttribute("role", "button")
            previousPageFunc.setAttribute("data-slide", "prev")
            previousPageFuncSpan.classList.add("carousel-control-prev-icon")
            previousPageFuncSpan.setAttribute("aria-hidden", "true")
            previousPageFuncSpan2.classList.add("sr-only")
            nextPageFunc.classList.add("carousel-control-next")
            nextPageFunc.href = "#carouselExampleControls"
            nextPageFunc.setAttribute("role", "button")
            nextPageFunc.setAttribute("data-slide", "next")
            nextPageFuncSpan.classList.add("carousel-control-next-icon")
            nextPageFuncSpan.setAttribute("aria-hidden", "true")
            nextPageFuncSpan2.classList.add("sr-only")
            previousPageFuncSpan2.innerText = "Previous"
            nextPageFuncSpan2.innerText = "Next"
            
            data[0].users.forEach((element, index) =>{

                    const div = document.createElement("div")
                    const name = document.createElement("h2")
                    const description  = document.createElement("p")
                    const level  = document.createElement("p")
                    const work  = document.createElement("p")
                    
        
                    div.classList.add("carousel-item")
                    div.classList.add("carousel__text")
                    name.classList.add("d-block")
                    description.classList.add("d-block")
                    level.classList.add("d-block")
                    work.classList.add("d-block")
                    
                    
                    name.innerText = element.username
                    description.innerText = element.email
                    level.innerText = element.kind_of_work
                    work.innerText = element.professional_level
                   
                    divInner2Carousel.append(div)
                    div.append(name, description, level, work)
                
                

            })

            const divTeste = divInner2Carousel.firstChild
            divTeste.classList.add("active")

            buttonModalCreateInner.addEventListener("click", event =>{
                event.preventDefault()
                sectionModal.parentNode.removeChild(sectionModal)
            })
        }

    }
    static renderDepartment(data) {
        const body = document.querySelector("body")
        const sectionModal = document.createElement("section")
        const divMain = document.createElement("div")
        const divTitle = document.createElement("div")
        const companyName = document.createElement("h2")
        const btnFechar = document.createElement("button")
        const imgFechar = document.createElement("img")
        const divList = document.createElement("div")

        body.append(sectionModal)
        sectionModal.append(divMain)
        divMain.append(divTitle, divList)
        divTitle.append(companyName, btnFechar)
        btnFechar.append(imgFechar)

        divMain.classList.add("main__modal--container")
        sectionModal.classList.add("main__modal")
        divTitle.classList.add("main__container--div")
        companyName.classList.add("main__container--title")
        btnFechar.classList.add("main__modal--close")
        imgFechar.classList.add("main__modal--image")
        divList.classList.add("modal__list--coworkers")

        companyName.innerText = data.name
        imgFechar.src = "../img/cancel.png"
        data.departments.forEach(element => {
            console.log(element)
            const myId = localStorage.getItem("kenzie@companies:department_uuid")
            if(element.uuid === myId){
                const divItem = document.createElement("div")
                const departmentName = document.createElement("h2")
                const departmentDescription = document.createElement("h3")
    
                divItem.classList.add("main__company--coworker")
                departmentName.classList.add("main__company--name")
                departmentDescription.classList.add("main__company--description")
    
                departmentName.innerText = element.name
                departmentDescription.innerText = element.description
    
                divList.append(divItem)
                divItem.append(departmentName, departmentDescription)
                console.log(departmentDescription)
            }
        });
        btnFechar.addEventListener("click", event =>{
            event.preventDefault()
            sectionModal.parentNode.removeChild(sectionModal)
        })
    }
    static renderCompany(data) {
        console.log(data)
        const body = document.querySelector("body")
        const sectionModal = document.createElement("section")
        const divModal = document.createElement("div")
        const divTitle = document.createElement("div")
        
        const companyName = document.createElement("h2")
        const sectionName = document.createElement("h2")
        const companyDescription = document.createElement("h3")
        const companyTime = document.createElement("span")
        const companySection = document.createElement("p")
        const btnFechar = document.createElement("button")
        const imgFechar = document.createElement("img")
        const divList = document.createElement("div")

        body.append(sectionModal)
        sectionModal.append(divModal)
        divModal.append(divTitle, divList)
        divTitle.append(sectionName, btnFechar)
        btnFechar.append(imgFechar)
        divList.append(companyName, companyDescription, companyTime)

        sectionModal.classList.add("main__modal")
        divModal.classList.add("main__modal--container")
        divTitle.classList.add("main__container--div")
        companySection.classList.add("main__container--title")
        companyName.classList.add("main__company--name")
        companyDescription.classList.add("main__company--description")
        companyTime.classList.add("main__company--time")
        btnFechar.classList.add("main__modal--close")
        imgFechar.classList.add("main__modal--image")
        divList.classList.add("modal__list--coworkers")

        sectionName.innerText = "Sua Empresa"
        companyName.innerText = data.name
        companyTime.innerText = `Horario de abertura: ${data.opening_hours}`
        companyDescription.innerText = data.description
        imgFechar.src = "../img/cancel.png"

        btnFechar.addEventListener("click", event =>{
            event.preventDefault(
            sectionModal.parentNode.removeChild(sectionModal)
            )
        })
    }
    static renderEdit() {
        const body = document.querySelector("body")
        const sectionEdit = document.createElement("section")
        const divEdit = document.createElement("div")
        const divHeaderEdit = document.createElement("div")
        const titleEdit = document.createElement("h2")
        const buttonEditClose = document.createElement("button")
        const imageClose = document.createElement("img")
        const formEdit = document.createElement("form")
        const labelNameEdit = document.createElement("label")
        const inputNameEdit = document.createElement("input")
        const labelEmailEdit = document.createElement("label")
        const inputEmailEdit = document.createElement("input")
        const labelPasswordEdit = document.createElement("label")
        const inputPasswordEdit = document.createElement("input")
        const buttonEdit = document.createElement("button")

        sectionEdit.classList.add("main__modal")
        divEdit.classList.add("main__modal--container")
        divHeaderEdit.classList.add("main__container--div")
        titleEdit.classList.add("main__container--title")
        buttonEditClose.classList.add("main__modal--close")
        imageClose.classList.add("main__modal--image")
        formEdit.classList.add("main__modal--form")
        labelNameEdit.classList.add("main__section--title")
        inputNameEdit.classList.add("main__modal--input")
        labelEmailEdit.classList.add("main__section--title")
        inputEmailEdit.classList.add("main__modal--input")
        labelPasswordEdit.classList.add("main__section--title")
        inputPasswordEdit.classList.add("main__modal--input")
        buttonEdit.classList.add("main__button--primary")

        inputNameEdit.required = true
        inputEmailEdit.required = true
        inputPasswordEdit.required = true

        labelNameEdit.innerText = "Nome"
        labelEmailEdit.innerText = "Email"
        labelPasswordEdit.innerText = "Senha"
        inputNameEdit.placeholder = "Modifique o seu nome"
        inputEmailEdit.placeholder = "Modifique o seu email"
        inputPasswordEdit.placeholder = "Modifique a sua senha"
        inputPasswordEdit.type = "password"
        inputEmailEdit.type = "email"

        buttonEdit.innerText = "Editar"
        titleEdit.innerText = "Editar Perfil"
        imageClose.src = "../img/cancel.png"
        buttonEditClose.addEventListener("click", event => {
            event.preventDefault()
            sectionEdit.parentNode.removeChild(sectionEdit)
        })

        buttonEdit.addEventListener("click", event => {
            event.preventDefault()
            const email = inputEmailEdit.value
            const name = inputNameEdit.value
            const pass = inputPasswordEdit.value
            let data = {
                "username": name,
                "email": email,
                "password": pass
            }
            Object.keys(data).forEach(key => {
                if (!data[key]) {
                    delete data[key]
                }
            })

            Api.editUser(data)
            inputNameEdit.value = ""
            inputEmailEdit.value = ""
            inputPasswordEdit.value = ""
        })
        body.append(sectionEdit)
        sectionEdit.append(divEdit)
        divEdit.append(divHeaderEdit, formEdit)
        divHeaderEdit.append(titleEdit, buttonEditClose)
        buttonEditClose.append(imageClose)
        formEdit.append(labelNameEdit, inputNameEdit, labelEmailEdit, inputEmailEdit, labelPasswordEdit, inputPasswordEdit, buttonEdit)
    }
    static renderModalCreate(data) {
        const body = document.querySelector("body")
        const modalCreate = document.createElement("section")
        const divModalCreate = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")

        const formModalCreate = document.createElement("form")
        const labelNameModalCreate = document.createElement("label")
        const inputNameModalCreate = document.createElement("input")
        const labelTimeModalCreate = document.createElement("label")
        const inputTimeModalCreate = document.createElement("input")
        const labelDescriptionModalCreate = document.createElement("label")
        const inputDescriptionModalCreate = document.createElement("input")
        const labelSectorModalCreate = document.createElement("label")
        const selectSectorModalCreate = document.createElement("select")
        const buttonSubmitModalCreate = document.createElement("button")

        body.append(modalCreate)
        modalCreate.append(divModalCreate)
        divModalCreate.append(divHeaderModalCreate, formModalCreate)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        formModalCreate.append(labelNameModalCreate, inputNameModalCreate, labelTimeModalCreate, inputTimeModalCreate,
            labelDescriptionModalCreate, inputDescriptionModalCreate, labelSectorModalCreate, selectSectorModalCreate, buttonSubmitModalCreate)

        modalCreate.classList.add("main__modal")
        divModalCreate.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")
        formModalCreate.classList.add("main__modal--form")
        labelNameModalCreate.classList.add("main__section--title")
        inputNameModalCreate.classList.add("main__modal--input")
        labelTimeModalCreate.classList.add("main__section--title")
        inputTimeModalCreate.classList.add("main__modal--input")
        labelDescriptionModalCreate.classList.add("main__section--title")
        inputDescriptionModalCreate.classList.add("main__modal--input")
        labelSectorModalCreate.classList.add("main__section--title")
        selectSectorModalCreate.classList.add("main__modal--input")
        buttonSubmitModalCreate.classList.add("main__button--primary")

        labelNameModalCreate.for = "companyName"
        labelTimeModalCreate.for = "companyTime"
        labelDescriptionModalCreate.for = "companyDescription"
        labelSectorModalCreate.for = "companySector"
        labelNameModalCreate.innerText = "Nome da empresa"
        labelTimeModalCreate.innerText = "Horario de Abertura"
        labelDescriptionModalCreate.innerText = "Descrição"
        labelSectorModalCreate.innerText = "Setor"

        inputNameModalCreate.required = "true"
        inputTimeModalCreate.required = "true"
        inputDescriptionModalCreate.required = "true"
        selectSectorModalCreate.required = "true"

        inputNameModalCreate.type = "text"
        inputTimeModalCreate.type = "time"
        inputDescriptionModalCreate.type = "text"

        inputNameModalCreate.name = "companyName"
        inputTimeModalCreate.name = "companyTime"
        inputDescriptionModalCreate.name = "companyDescription"
        inputNameModalCreate.placeholder = "Nome da Empresa"
        inputDescriptionModalCreate.placeholder = "Descrição da empresa"
        selectSectorModalCreate.name = "companySector"

        titleHeaderModalCreate.innerText = "Criar Empresa"
        buttonSubmitModalCreate.innerText = "Criar"
        imageModalCreate.src = "../img/cancel.png"

        data.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.description
            option.setAttribute("id", element.uuid)
            selectSectorModalCreate.append(option)
        })
        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            modalCreate.parentNode.removeChild(modalCreate)
        })
        buttonSubmitModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            const data = {
                "name": inputNameModalCreate.value,
                "opening_hours": inputTimeModalCreate.value,
                "description": inputDescriptionModalCreate.value,
                "sector_uuid": selectSectorModalCreate.selectedOptions[0].id
            }
            Api.createCompany(data)
        })
    }
    static async renderOptions(){
        const data = await Api.getCompaniesSelect()
        const companySelect = document.getElementById("CompanySelect")
        data.forEach(element =>{
            const option = document.createElement("option")
            option.classList.add("main__section--opt")
            option.setAttribute("id", element.uuid)
            option.innerText = element.name
            companySelect.append(option)
        })
        return companySelect
    }
    static createModalCompany(data, id){
       data.forEach(element =>{
        if(element.uuid == id){
            const body = document.querySelector("body")
            const sectionCompany = document.createElement("section")
            const divCompany = document.createElement("div")
            const divHeaderModalCreate = document.createElement("div")
            const titleHeaderModalCreate = document.createElement("h2")
            const buttonModalCreate = document.createElement("button")
            const imageModalCreate = document.createElement("img")
            const divMainCard = document.createElement("div")
            const sectorCard = document.createElement("h2")
            const imgCard = document.createElement("img")
            const descriptionCard = document.createElement("p")
            const timeCard = document.createElement("span")

            sectionCompany.classList.add("main__modal")
            divCompany.classList.add("main__modal--container")
            divHeaderModalCreate.classList.add("main__container--div")
            titleHeaderModalCreate.classList.add("main__container--title")
            buttonModalCreate.classList.add("main__modal--close")
            imageModalCreate.classList.add("main__modal--image")
            sectorCard.classList.add("main__company--section")
            imgCard.classList.add("main__company--img")
            descriptionCard.classList.add("main__company--description")
            timeCard.classList.add("main__company--time")
            divMainCard.classList.add("main__company--card")
            imageModalCreate.src = "../img/cancel.png"
            switch (element.sectors.description) {
                case "Alimenticio":
                    imgCard.src = "../img/005-apple.png"
                    break;
                case "Varejo":
                    imgCard.src = "../img/008-wholesale.png"
                    break;
                case "Textil":
                    imgCard.src = "../img/004-roll.png"
                    break;
                case "Manufatura":
                    imgCard.src = "../img/007-manufacturing.png"
                    break;
                case "Aeroespacial":
                    imgCard.src = "../img/002-spaceship.png"
                    break;
                case "Automotiva":
                    imgCard.src = "../img/006-car.png"
                    break;
                case "TI":
                    imgCard.src = "../img/001-data-management.png"
                    break;
                case "Atacado":
                    imgCard.src = "../img/003-shipping-cart.png"
                    break;

                default:
                    break;
            }

            imgCard.alt = element.sectors.description
            titleHeaderModalCreate.innerText = element.name
            descriptionCard.innerText = element.description
            timeCard.innerText = `Horario de abertura:${element.opening_hours}`

            body.append(sectionCompany)
            sectionCompany.append(divCompany)
            divCompany.append(divHeaderModalCreate, divMainCard)
            divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
            buttonModalCreate.append(imageModalCreate)
            divMainCard.append(imgCard, sectorCard, descriptionCard, timeCard)

            buttonModalCreate.addEventListener("click", event =>{
                event.preventDefault()
                sectionCompany.parentNode.removeChild(sectionCompany)
            })
        }
       })
    }
    static async renderOptionsSectors(){
        
        const data = await Api.getSectionsCreate()
        const sectorsSelect = document.getElementById("SectorSelect")
        data.forEach(element =>{
            const option = document.createElement("option")
            option.classList.add("main__section--opt")
            option.setAttribute("id", element.uuid)
            option.innerText = element.description
            sectorsSelect.appendChild(option)
        })
        return sectorsSelect
    }
    static renderMyCompanies(data){
        const body = document.querySelector("body")
        const sectionCompany = document.createElement("section")
        const divCompany = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")
        const divCarousel = document.createElement("div")
        const divInnerCarousel = document.createElement("div")
        const previousPage = document.createElement("a")
        const previousPageSpan = document.createElement("span")
        const previousPageSpan2 = document.createElement("span")
        const nextPage = document.createElement("a")
        const nextPageSpan = document.createElement("span")
        const nextPageSpan2 = document.createElement("span")

        divCarousel.classList.add("carousel")
        divCarousel.classList.add("slide")
        divCarousel.setAttribute("id", "carouselExampleControls")
        divCarousel.setAttribute("data-ride", "carousel")
        divInnerCarousel.classList.add("carousel-inner")
        previousPage.classList.add("carousel-control-prev")
        previousPage.href = "#carouselExampleControls"
        previousPage.setAttribute("role", "button")
        previousPage.setAttribute("data-slide", "prev")
        previousPageSpan.classList.add("carousel-control-prev-icon")
        previousPageSpan.setAttribute("aria-hidden", "true")
        previousPageSpan2.classList.add("sr-only")
        nextPage.classList.add("carousel-control-next")
        nextPage.href = "#carouselExampleControls"
        nextPage.setAttribute("role", "button")
        nextPage.setAttribute("data-slide", "next")
        nextPageSpan.classList.add("carousel-control-next-icon")
        nextPageSpan.setAttribute("aria-hidden", "true")
        nextPageSpan2.classList.add("sr-only")
        previousPageSpan2.innerText = "Previous"
        nextPageSpan2.innerText = "Next"

        body.append(sectionCompany)
        sectionCompany.append(divCompany)
        divCompany.append(divHeaderModalCreate, divCarousel)
        divCarousel.append(divInnerCarousel, previousPage, nextPage)
        previousPage.append(previousPageSpan, previousPageSpan2)
        nextPage.append(nextPageSpan, nextPageSpan2)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        

        imageModalCreate.src = "../img/cancel.png"
        titleHeaderModalCreate.innerText = `Minhas Empresas`
        sectionCompany.classList.add("main__modal")
        divCompany.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")

        data.forEach((element, index) =>{
            const div = document.createElement("div")
            const name = document.createElement("h2")
            const description  = document.createElement("p")
            const time  = document.createElement("p")
            const imgCard  = document.createElement("img")

            div.classList.add("carousel-item")
            div.classList.add("carousel__text")
            if(index == 0){
                div.classList.add("active")
            }
            name.classList.add("d-block")
            description.classList.add("d-block")
            time.classList.add("d-block")
            imgCard.classList.add("d-block")
            imgCard.classList.add("footer__container--icon")

            name.innerText = element.name
            description.innerText = element.description
            time.innerText = `Horario de abertura:${element.opening_hours}`
            imgCard.alt = element.sectors.description
            div.append(imgCard, name, description, time,)
            divInnerCarousel.append(div)
            
            switch (element.sectors.description) {
                case "Alimenticio":
                    imgCard.src = "../img/005-apple.png"
                    break;
                case "Varejo":
                    imgCard.src = "../img/008-wholesale.png"
                    break;
                case "Textil":
                    imgCard.src = "../img/004-roll.png"
                    break;
                case "Manufatura":
                    imgCard.src = "../img/007-manufacturing.png"
                    break;
                case "Aeroespacial":
                    imgCard.src = "../img/002-spaceship.png"
                    break;
                case "Automotiva":
                    imgCard.src = "../img/006-car.png"
                    break;
                case "TI":
                    imgCard.src = "../img/001-data-management.png"
                    break;
                case "Atacado":
                    imgCard.src = "../img/003-shipping-cart.png"
                    break;
    
                default:
                    break;
            }
        })
        


       

        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            sectionCompany.parentNode.removeChild(sectionCompany)
        })
    }
    static async renderOptionsDepartment(){
        
        const data = await Api.getCompaniesSelect()
        const departmentCreateSelect = document.getElementById("DepartmentCreateSelect")
        data.forEach(element =>{
            const option = document.createElement("option")
            option.classList.add("main__section--opt")
            option.setAttribute("id", element.uuid)
            option.innerText = element.name
            departmentCreateSelect.append(option)
        })
        return departmentCreateSelect
    }
    static async renderModalDepartment(id){
        const body = document.querySelector("body")
        const modalCreate = document.createElement("section")
        const divModalCreate = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")

        const formModalCreate = document.createElement("form")
        const labelNameModalCreate = document.createElement("label")
        const inputNameModalCreate = document.createElement("input")
        const labelDescriptionModalCreate = document.createElement("label")
        const inputDescriptionModalCreate = document.createElement("input")
        const labelSectorModalCreate = document.createElement("label")
        const buttonSubmitModalCreate = document.createElement("button")

        body.append(modalCreate)
        modalCreate.append(divModalCreate)
        divModalCreate.append(divHeaderModalCreate, formModalCreate)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        formModalCreate.append(labelNameModalCreate, inputNameModalCreate, labelDescriptionModalCreate, inputDescriptionModalCreate, buttonSubmitModalCreate)

        modalCreate.classList.add("main__modal")
        divModalCreate.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")
        formModalCreate.classList.add("main__modal--form")
        labelNameModalCreate.classList.add("main__section--title")
        inputNameModalCreate.classList.add("main__modal--input")
        labelDescriptionModalCreate.classList.add("main__section--title")
        inputDescriptionModalCreate.classList.add("main__modal--input")
        labelSectorModalCreate.classList.add("main__section--title")
        buttonSubmitModalCreate.classList.add("main__button--primary")

        labelNameModalCreate.for = "companyName"
        labelDescriptionModalCreate.for = "companyDescription"
        labelSectorModalCreate.for = "companySector"

        labelNameModalCreate.innerText = "Nome do departamento"
        labelDescriptionModalCreate.innerText = "Descrição do departamento"

        inputNameModalCreate.required = "true"
        inputDescriptionModalCreate.required = "true"

        inputNameModalCreate.type = "text"
        inputDescriptionModalCreate.type = "text"

        inputNameModalCreate.name = "companyName"
        inputDescriptionModalCreate.name = "companyDescription"
        inputNameModalCreate.placeholder = "Nome do departamento"
        inputDescriptionModalCreate.placeholder = "Descrição do departamento"

        titleHeaderModalCreate.innerText = "Criar Departamento"
        buttonSubmitModalCreate.innerText = "Criar"
        imageModalCreate.src = "../img/cancel.png"

        
        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            modalCreate.parentNode.removeChild(modalCreate)
        })
        buttonSubmitModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            const data = {
                "name": inputNameModalCreate.value,
                "description": inputDescriptionModalCreate.value,
                "company_uuid": id
            }
            Api.createDepartment(data)
            inputNameModalCreate.value = ""
            inputDescriptionModalCreate.value = ""
        })
    }
    static async renderOptionsCompaniesDepartment(){
        const data = await Api.getCompaniesSelect()
        const departmentListSelect = document.getElementById("DepartmentListSelect")
        data.forEach(element =>{
            const option = document.createElement("option")
            option.classList.add("main__section--opt")
            option.setAttribute("id", element.uuid)
            option.innerText = element.name
            departmentListSelect.append(option)
        })
        return departmentListSelect
    }
    static async listDepartmentsCompany(data){
        const body = document.querySelector("body")
        const sectionCompany = document.createElement("section")
        const divCompany = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")
        const divCarousel = document.createElement("div")
        const divInnerCarousel = document.createElement("div")
        const previousPage = document.createElement("a")
        const previousPageSpan = document.createElement("span")
        const previousPageSpan2 = document.createElement("span")
        const nextPage = document.createElement("a")
        const nextPageSpan = document.createElement("span")
        const nextPageSpan2 = document.createElement("span")
        const textClick = document.createElement("p")

        body.append(sectionCompany)
        sectionCompany.append(divCompany)
        divCompany.append(divHeaderModalCreate, divCarousel, textClick)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        divCarousel.append(divInnerCarousel, previousPage, nextPage)
        previousPage.append(previousPageSpan, previousPageSpan2)
        nextPage.append(nextPageSpan, nextPageSpan2)

        textClick.innerText = "Aperte em um departamento para ver os funcionários"
        imageModalCreate.src = "../img/cancel.png"
        titleHeaderModalCreate.innerText = `Departamentos de ${data[0].companies.name}`
        sectionCompany.classList.add("main__modal")
        divCompany.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")
        textClick.classList.add("main__container--title")
        divCarousel.classList.add("carousel")
        divCarousel.classList.add("slide")
        divCarousel.setAttribute("id", "carouselExampleControls")
        divCarousel.setAttribute("data-ride", "carousel")
        divInnerCarousel.classList.add("carousel-inner")
        previousPage.classList.add("carousel-control-prev")
        previousPage.href = "#carouselExampleControls"
        previousPage.setAttribute("role", "button")
        previousPage.setAttribute("data-slide", "prev")
        previousPageSpan.classList.add("carousel-control-prev-icon")
        previousPageSpan.setAttribute("aria-hidden", "true")
        previousPageSpan2.classList.add("sr-only")
        nextPage.classList.add("carousel-control-next")
        nextPage.href = "#carouselExampleControls"
        nextPage.setAttribute("role", "button")
        nextPage.setAttribute("data-slide", "next")
        nextPageSpan.classList.add("carousel-control-next-icon")
        nextPageSpan.setAttribute("aria-hidden", "true")
        nextPageSpan2.classList.add("sr-only")
        previousPageSpan2.innerText = "Previous"
        nextPageSpan2.innerText = "Next"
        console.log(data)
        data.forEach((element, index) =>{
            const div = document.createElement("div")
            const name = document.createElement("h2")
            const description  = document.createElement("p")
            
            div.setAttribute("id", element.uuid)
            div.classList.add("carousel-item")
            div.classList.add("carousel__text")
            if(index == 0){
                div.classList.add("active")
            }
            name.classList.add("d-block")
            description.classList.add("d-block")

           
            name.innerText = element.name
            description.innerText = element.description
           
            
            div.addEventListener("click", async event =>{
                event.preventDefault()
                console.log(event.path[1].id)
                const sectionCompany = document.querySelector("section")
                const divFuncCompany = document.createElement("div")
                const divHeaderFuncModalCreate = document.createElement("div")
                const titleHeaderFuncModalCreate = document.createElement("h2")
                const buttonModalCreateInner = document.createElement("button")
                const imageFuncModalCreate = document.createElement("img")
                const divCarousel = document.createElement("div")
                const divInner2Carousel = document.createElement("div")
                const previousPageFunc = document.createElement("a")
                const previousPageFuncSpan = document.createElement("span")
                const previousPageFuncSpan2 = document.createElement("span")
                const nextPageFunc = document.createElement("a")
                const nextPageFuncSpan = document.createElement("span")
                const nextPageFuncSpan2 = document.createElement("span")
                
        
                sectionCompany.append(divFuncCompany)
                divFuncCompany.append(divHeaderFuncModalCreate, divCarousel)
                divHeaderFuncModalCreate.append(titleHeaderFuncModalCreate, buttonModalCreateInner)
                buttonModalCreateInner.append(imageFuncModalCreate)
                divCarousel.append(divInner2Carousel, previousPageFunc, nextPageFunc)
                previousPageFunc.append(previousPageFuncSpan, previousPageFuncSpan2)
                nextPageFunc.append(nextPageFuncSpan, nextPageFuncSpan2)
        
                imageFuncModalCreate.src = "../img/cancel.png"
                titleHeaderFuncModalCreate.innerText = `Funcionarios de ${data[0].name}`
                sectionCompany.classList.add("main__modal")
                divFuncCompany.classList.add("main__modal--container")
                divHeaderFuncModalCreate.classList.add("main__container--div")
                buttonModalCreateInner.classList.add("main__modal--close")
                titleHeaderFuncModalCreate.classList.add("main__container--title")

                imageFuncModalCreate.classList.add("main__modal--image")
        
                divCarousel.classList.add("carousel")
                divCarousel.classList.add("slide")
                divCarousel.setAttribute("id", "carouselExampleControls")
                divCarousel.setAttribute("data-ride", "carousel")
                divInner2Carousel.classList.add("carousel-inner")
                previousPageFunc.classList.add("carousel-control-prev")
                previousPageFunc.href = "#carouselExampleControls"
                previousPageFunc.setAttribute("role", "button")
                previousPageFunc.setAttribute("data-slide", "prev")
                previousPageFuncSpan.classList.add("carousel-control-prev-icon")
                previousPageFuncSpan.setAttribute("aria-hidden", "true")
                previousPageFuncSpan2.classList.add("sr-only")
                nextPageFunc.classList.add("carousel-control-next")
                nextPageFunc.href = "#carouselExampleControls"
                nextPageFunc.setAttribute("role", "button")
                nextPageFunc.setAttribute("data-slide", "next")
                nextPageFuncSpan.classList.add("carousel-control-next-icon")
                nextPageFuncSpan.setAttribute("aria-hidden", "true")
                nextPageFuncSpan2.classList.add("sr-only")
                previousPageFuncSpan2.innerText = "Previous"
                nextPageFuncSpan2.innerText = "Next"
                buttonModalCreateInner.addEventListener("click", event =>{
                    event.preventDefault()
                    divFuncCompany.parentNode.removeChild(divFuncCompany)
               
                })

                const funcionarios = await Api.workerForce()
                console.log({element, funcionarios})
                console.log(funcionarios)
                    funcionarios.forEach((element, index) =>{
                    
                        if(element.department_uuid == event.path[1].id){
                            const div = document.createElement("div")
                            const name = document.createElement("h2")
                            const description  = document.createElement("p")
                            const level  = document.createElement("p")
                            const work  = document.createElement("p")
                            
                
                            div.classList.add("carousel-item")
                            div.classList.add("carousel__text")
                            // div.classList.add("active")
                            name.classList.add("d-block")
                            description.classList.add("d-block")
                            level.classList.add("d-block")
                            work.classList.add("d-block")
                            
                            
                            name.innerText = element.username
                            description.innerText = element.email
                            level.innerText = element.kind_of_work
                            work.innerText = element.professional_level
                           
                            divInner2Carousel.append(div)
                            div.append(name, description, level, work)
                            const divTeste = divInner2Carousel.firstChild
                            divTeste.classList.add("active")
                        }
                        
    
                    })
                    
                

            
                
            })


            divInnerCarousel.append(div)
            div.append(name, description)
        })

        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            sectionCompany.parentNode.removeChild(sectionCompany)
        })
        
    }
    static async renderAllDepartment(){
        const data = await Api.listDepartmentsAll()
        const departmentCreateSelect = document.getElementById("employeeContractCompany")
        data.forEach(element =>{
            const option = document.createElement("option")
            option.classList.add("main__section--opt")
            option.setAttribute("id", element.uuid)
            option.innerText = `${element.name} - ${element.companies.name}`
            departmentCreateSelect.append(option)
        })
        return departmentCreateSelect
    }
    static async renderAllUnemployed(){
        const data = await Api.workersOutOfWork()
        const selectEmploy = document.getElementById("employeeContractDepartment")
        selectEmploy.innerText = ""
        data.forEach(element =>{
            const option = document.createElement("option")
            option.classList.add("main__section--opt")
            option.setAttribute("id", element.uuid)
            option.innerText = `${element.username}`
            selectEmploy.append(option)
        })
        return selectEmploy
    }
    static async renderAllEmployed(){
        const data = await Api.workerForce()
        const fireWorker = document.getElementById("fireEmployeeDepartment")
        fireWorker.innerText = ""
        data.forEach(element =>{
            if(element.department_uuid == null){
            }else{
                const option = document.createElement("option")
                option.classList.add("main__section--opt")
                option.setAttribute("id", element.uuid)
                option.innerText = `${element.username}`
                fireWorker.append(option)
            }
        })
        return fireWorker
    }
    static async renderAllUnemployedList(data){
        const body = document.querySelector("body")
        const sectionCompany = document.createElement("section")
        const divCompany = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")
        const divItems = document.createElement("div")

        body.append(sectionCompany)
        sectionCompany.append(divCompany)
        divCompany.append(divHeaderModalCreate)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        divCompany.append(divItems)

        divItems.classList.add("main__modal--list")
        titleHeaderModalCreate.innerText = `Usuários sem emprego`
        sectionCompany.classList.add("main__modal")
        divCompany.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")

        data.forEach(element =>{
            const divMainCard = document.createElement("div")
            const nameCard = document.createElement("h2")
            const sectorCard = document.createElement("h2")
            const descriptionCard = document.createElement("p")
            const timeCard = document.createElement("span")
    
            nameCard.classList.add("main__company--title")
            sectorCard.classList.add("main__company--section")
            descriptionCard.classList.add("main__company--description")
            timeCard.classList.add("main__company--time")
            divMainCard.classList.add("main__company--card")
            imageModalCreate.src = "../img/cancel.png"
           
            nameCard.innerText = element.name
            descriptionCard.innerText = element.description
           
            divItems.append(divMainCard)
            divMainCard.append(nameCard, descriptionCard)
        })

        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            sectionCompany.parentNode.removeChild(sectionCompany)
        })

    }
    static async renderListUnemployed(data){
        const body = document.querySelector("body")
        const modalCreate = document.createElement("section")
        const divModalCreate = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")
        const divCarousel = document.createElement("div")
        const divInnerCarousel = document.createElement("div")
        const previousPage = document.createElement("a")
        const previousPageSpan = document.createElement("span")
        const previousPageSpan2 = document.createElement("span")
        const nextPage = document.createElement("a")
        const nextPageSpan = document.createElement("span")
        const nextPageSpan2 = document.createElement("span")

        divCarousel.classList.add("carousel")
        divCarousel.classList.add("slide")
        divCarousel.setAttribute("id", "carouselExampleControls")
        divCarousel.setAttribute("data-ride", "carousel")
        divInnerCarousel.classList.add("carousel-inner")
        previousPage.classList.add("carousel-control-prev")
        previousPage.href = "#carouselExampleControls"
        previousPage.setAttribute("role", "button")
        previousPage.setAttribute("data-slide", "prev")
        previousPageSpan.classList.add("carousel-control-prev-icon")
        previousPageSpan.setAttribute("aria-hidden", "true")
        previousPageSpan2.classList.add("sr-only")
        nextPage.classList.add("carousel-control-next")
        nextPage.href = "#carouselExampleControls"
        nextPage.setAttribute("role", "button")
        nextPage.setAttribute("data-slide", "next")
        nextPageSpan.classList.add("carousel-control-next-icon")
        nextPageSpan.setAttribute("aria-hidden", "true")
        nextPageSpan2.classList.add("sr-only")
        previousPageSpan2.innerText = "Previous"
        nextPageSpan2.innerText = "Next"

        data.forEach((element, index) =>{
            const div = document.createElement("div")
            const name = document.createElement("h2")
            const email  = document.createElement("p")
            const level  = document.createElement("p")
            const type  = document.createElement("p")

            div.classList.add("carousel-item")
            div.classList.add("carousel__text")
            if(index == 0){
                div.classList.add("active")
            }
            name.classList.add("d-block")
            email.classList.add("d-block")
            level.classList.add("d-block")
            type.classList.add("d-block")

            name.innerText = element.username
            email.innerText = element.email
            level.innerText = element.professional_level
            type.innerText = element.kind_of_work
            div.append(name, email, level, type)
            divInnerCarousel.append(div)
        })
        
        body.append(modalCreate)
        modalCreate.append(divModalCreate)
        divModalCreate.append(divHeaderModalCreate, divCarousel)
        divCarousel.append(divInnerCarousel, previousPage, nextPage)
        previousPage.append(previousPageSpan, previousPageSpan2)
        nextPage.append(nextPageSpan, nextPageSpan2)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        

        modalCreate.classList.add("main__modal")
        divModalCreate.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")
        

        titleHeaderModalCreate.innerText = "Lista de Usuários sem emprego"
        imageModalCreate.src = "../img/cancel.png"

        
        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            modalCreate.parentNode.removeChild(modalCreate)
        })
       
    
    }
    static async renderListWorkers(data){
        const select = document.getElementById("editUser")
        const dataCompany = await Api.workerForce()
        const dataDepartment = await Api.listDepartmentsAll()
        select.innerText = ""
        dataCompany.forEach(element =>{
            if(element.department_uuid == null){
            }else{
                dataDepartment.forEach(department =>{
                    if(department.uuid == element.department_uuid){
                        const option = document.createElement("option")
                        option.classList.add("main__section--opt")
                        option.setAttribute("id", element.uuid)
                        option.innerText = `${element.username} - ${department.name} - ${department.companies.name}`
                        select.append(option)               
                    }
                })
            }
        })
    }
    static async renderModalEdit(id){
        const body = document.querySelector("body")
        const sectionCompany = document.createElement("section")
        const divCompany = document.createElement("div")
        const divHeaderModalCreate = document.createElement("div")
        const titleHeaderModalCreate = document.createElement("h2")
        const buttonModalCreate = document.createElement("button")
        const imageModalCreate = document.createElement("img")
        const divMainCard = document.createElement("div")
        const formModal = document.createElement("form")
        const labelKind = document.createElement("label")
        const inputKind = document.createElement("input")
        const labelLevel = document.createElement("label")
        const inputLevel = document.createElement("input")
        const buttonSubmitModalCreate = document.createElement("button")

        sectionCompany.classList.add("main__modal")
        divCompany.classList.add("main__modal--container")
        divHeaderModalCreate.classList.add("main__container--div")
        titleHeaderModalCreate.classList.add("main__container--title")
        buttonModalCreate.classList.add("main__modal--close")
        imageModalCreate.classList.add("main__modal--image")
        // divMainCard.classList.add("main__company--card")
        imageModalCreate.src = "../img/cancel.png"
        formModal.classList.add("main__modal--form") 
        labelKind.classList.add("main__section--title") 
        inputKind.classList.add("main__modal--input") 
        labelLevel.classList.add("main__section--title")
        inputLevel.classList.add("main__modal--input")
        buttonSubmitModalCreate.classList.add("main__button--primary")
        inputKind.type = "text"
        inputLevel.type = "text"
        inputKind.placeholder = "Tipo de trabalho"
        inputLevel.placeholder = "Nivel profissional"
        labelKind.innerText = "Tipo : home office, hibrido ou presencial"
        labelLevel.innerText = "estagiario, júnior, pleno ou sênior"
        buttonSubmitModalCreate.innerText = "Enviar"
        titleHeaderModalCreate.innerText = "Editar Funcionário"
        body.append(sectionCompany)
        sectionCompany.append(divCompany)
        divCompany.append(divHeaderModalCreate, divMainCard)
        divHeaderModalCreate.append(titleHeaderModalCreate, buttonModalCreate)
        buttonModalCreate.append(imageModalCreate)
        divMainCard.append(formModal)
        formModal.append(labelKind, inputKind, labelLevel, inputLevel, buttonSubmitModalCreate)

        buttonModalCreate.addEventListener("click", event =>{
            event.preventDefault()
            sectionCompany.parentNode.removeChild(sectionCompany)
        })
        const idValue = id
        buttonSubmitModalCreate.addEventListener("click", async event =>{
            event.preventDefault()
            const valueKind = inputKind.value
            const valueLevel = inputLevel.value

            let data = {
                "kind_of_work": valueKind,
                 "professional_level": valueLevel
            }
            Object.keys(data).forEach(key => {
                if (!data[key]) {
                    delete data[key]
                }
            })
            const edit = await Api.editUserWorking(data, idValue)
            console.log(data)
        })



       
    }
}


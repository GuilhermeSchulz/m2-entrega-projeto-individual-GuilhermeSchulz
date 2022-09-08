const enumImages = {
    "Alimenticio": (ALIMENTACAO, index) => {
        const image = "../img/005-apple.png"
        const elementoHTML = renderFooter.createItem({
            ...ALIMENTACAO,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },
    "Varejo": (VAREJO, index) => {
        const image = "../img/008-wholesale.png"
        const elementoHTML = renderFooter.createItem({
            ...VAREJO,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },

    "Textil": (TEXTIL, index) => {
        const image = "../img/004-roll.png"
        const elementoHTML = renderFooter.createItem({
            ...TEXTIL,
            image,
            index
            
        })
        return renderFooter.appendHTML(elementoHTML)
    },

    "Manufatura": (MANUFATURA, index) => {
        const image = "../img/007-manufacturing.png"
        const elementoHTML = renderFooter.createItem({
            ...MANUFATURA,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },

    "Aeroespacial": (AEROESPACIAL, index) => {
        const image = "../img/002-spaceship.png"
        const elementoHTML = renderFooter.createItem({
            ...AEROESPACIAL,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },

    "Automotiva": (AUTOMOTIVA, index) => {
        const image = "../img/006-car.png"
        const elementoHTML = renderFooter.createItem({
            ...AUTOMOTIVA,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },
    "TI": (TI, index) => {
        const image = "../img/001-data-management.png"
        const elementoHTML = renderFooter.createItem({
            ...TI,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },

    "Atacado": (ATACADO, index) => {
        const image = "../img/003-shopping-cart.png"
        const elementoHTML = renderFooter.createItem({
            ...ATACADO,
            image,
            index
        })
        return renderFooter.appendHTML(elementoHTML)
    },


}

export class renderFooter{
    static renderListItems(list){
        return list.map((element, index) => enumImages[element.description](element, index))
    }

    static createItem(element) {
        const {
            uuid,
            description,
            image,
            index
        } = element
        const divCarouselItem = document.createElement("div")
        const imageCarouselItem = document.createElement("img")
        const titleCarouselItem = document.createElement("h4")
    
        if(index == 0){
            divCarouselItem.classList.add("active")
        }
        divCarouselItem.classList.add("carousel-item")
        divCarouselItem.setAttribute('id', uuid);
        imageCarouselItem.src = image
        imageCarouselItem.classList.add("d-block")
        imageCarouselItem.classList.add("footer__container--icon")
        titleCarouselItem.innerText = description
        titleCarouselItem.classList.add("footer__container--title")
        divCarouselItem.append(imageCarouselItem, titleCarouselItem)
    
    
        return divCarouselItem
    }

    static appendHTML(element) {

        return document.querySelector(".carousel-inner").append(element)
    }
}


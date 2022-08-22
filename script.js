let img_1 = document.querySelector('#ris-1')
let img_2 = document.querySelector('#ris-2')
let img_3 = document.querySelector('#ris-3')
let img_4 = document.querySelector('#ris-4')
let img_5 = document.querySelector('#ris-5')
let immmg = document.querySelector('#immmg')
let colorText = document.querySelector('#color-name')

img_1.onclick = () => {
    if (immmg.getAttribute('src') !== "./img/iphone-13-pro-finish-green.jfif") {
        immmg.setAttribute('src', "./img/iphone-13-pro-finish-green.jfif")
        colorText.innerHTML = 'Alpine Green'
    } else {
        console.log("non");
    }
}
img_2.onclick = () => {
    if (immmg.getAttribute('src') !== "./img/iphone-13-pro-finish-white.jfif") {
        immmg.setAttribute('src', "./img/iphone-13-pro-finish-white.jfif")
        colorText.innerHTML = 'Silver'

    } else {
        console.log("non");
    }
}
img_3.onclick = () => {
    if (immmg.getAttribute('src') !== "./img/iphone-13-pro-finish-gold.jfif") {
        immmg.setAttribute('src', "./img/iphone-13-pro-finish-gold.jfif")
        colorText.innerHTML = 'Gold'

    } else {
        console.log("non");
    }
}
img_4.onclick = () => {
    if (immmg.getAttribute('src') !== "./img/iphone-13-pro-finish-black.jfif") {
        immmg.setAttribute('src', "./img/iphone-13-pro-finish-black.jfif")
        colorText.innerHTML = 'Graphite'

    } else {
        console.log("non");
    }
}
img_5.onclick = () => {
    if (immmg.getAttribute('src') !== "./img/iphone-13-pro-finish-blue.jfif") {
        immmg.setAttribute('src', "./img/iphone-13-pro-finish-blue.jfif")
        colorText.innerHTML = 'Sierra Blue'

    } else {
        console.log("non");
    }
}


let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let openBtn = document.querySelector('.modelwindowbtn')
let closeBtn = document.querySelector('.close-modal-btn')

openBtn.onclick = () => {
    modal.style.display = "flex"
    modal_bg.style.display = "block"

    setTimeout(() => {
        modal.style.transform = "translate(-50%, -50%) scale(1)"
        modal.style.opacity = "1"
        modal_bg.style.opacity = "1"


    }, 200);


}
closeBtn.onclick = () => {
    modal.style.transform = "translate(-50%, -50%) scale(0)"
    modal.style.opacity = "0"
    modal_bg.style.opacity = "0"

    setTimeout(() => {

        modal.style.display = "none"
        modal_bg.style.display = "none"
    }, 200);

}



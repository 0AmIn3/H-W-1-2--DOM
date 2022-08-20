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



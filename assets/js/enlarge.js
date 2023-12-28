const divImage = document.querySelector('.panel')
const body = document.querySelector('body')

function enlargedImage(imagem){
    const bigImage = document.querySelector('.enlarged-image img')
    bigImage.src = imagem.target.attributes.src.nodeValue
    divImage.style.display = 'block'
    body.style.overflow = 'hidden'
}

const btn = document.querySelector('.close-image')
btn.addEventListener('click', ()=>{
    divImage.style.display = 'none'
    body.style.overflow = 'visible'
})
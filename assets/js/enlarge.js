const divImage = document.querySelector('.panel')

function enlargedImage(imagem){
    const bigImage = document.querySelector('.enlarged-image img')
    bigImage.src = imagem.target.attributes.src.nodeValue
    divImage.style.display = 'block'
}

const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
    divImage.style.display = 'none'
})
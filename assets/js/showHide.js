const btnSearchCode = document.querySelector('.btn-search-code')
const btnCloseCode = document.querySelector('.btn-close-code')
const searchCode = document.querySelector('.search-code')

btnSearchCode.addEventListener('click', () => {
    searchCode.style.display = 'block'

    hideButtons()
})

btnCloseCode.addEventListener('click', () => {
    const inputCode = document.querySelector(".filter-code");
    inputCode.value = ''
    filterCode()
    searchCode.style.display = 'none';

    showButtons();
})

const btnSearchName = document.querySelector('.btn-search-name')
const btnCloseName = document.querySelector('.btn-close-name')
const searchName = document.querySelector('.search-name')

btnSearchName.addEventListener('click', () => {
    searchName.style.display = 'block'

    hideButtons()
})

btnCloseName.addEventListener('click', () => {
    const inputName = document.querySelector(".filter-name");
    inputName.value = ''
    filterCode()
    searchName.style.display = 'none';

    showButtons();
})

const btnSearchDescription = document.querySelector('.btn-search-description')
const btnCloseDescription = document.querySelector('.btn-close-description')
const searchDescription = document.querySelector('.search-description')

btnSearchDescription.addEventListener('click', () => {
    searchDescription.style.display = 'block'

    hideButtons()
})

btnCloseDescription.addEventListener('click', () => {
    const inputDescription = document.querySelector(".filter-description");
    inputDescription.value = ''
    filterCode()
    searchDescription.style.display = 'none';

    showButtons();
})


const btnSearchObservation = document.querySelector('.btn-search-observation')
const btnCloseObservation = document.querySelector('.btn-close-observation')
const searchObservation = document.querySelector('.search-observation')

btnSearchObservation.addEventListener('click', () => {
    searchObservation.style.display = 'block'

    hideButtons()
})

btnCloseObservation.addEventListener('click', () => {
    const inputObservation = document.querySelector(".filter-name");
    inputObservation.value = ''
    filterCode()
    searchObservation.style.display = 'none'

    showButtons();
})

function showButtons() {
    btnSearchCode.style.display = 'inline-block'
    btnSearchName.style.display = 'inline-block'
    btnSearchDescription.style.display = 'inline-block'
    btnSearchObservation.style.display = 'inline-block'
}

function hideButtons() {
    btnSearchCode.style.display = 'none'
    btnSearchName.style.display = 'none'
    btnSearchDescription.style.display = 'none'
    btnSearchObservation.style.display = 'none'
}

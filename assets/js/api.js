async function fetchMaterial() {
    const urlMaterial = './assets/data/materiais.json'

    const fetching = await fetch(urlMaterial)
    return await fetching.json()
}

async function fetchCYP() {
    const urlCYP = '../assets/data/cyp.json'

    const fetching = await fetch(urlCYP)
    return await fetching.json()
}


async function fetchSNP() {
    const urlSNP = '../assets/data/snp.json'

    const fetching = await fetch(urlSNP)
    return await fetching.json()
}

async function fetchTEL() {
    const urlTEL = '../assets/data/tel.json'

    const fetching = await fetch(urlTEL)
    return await fetching.json()
}

async function fetchPCI() {
    const urlPCI = '../assets/data/pci.json'

    const fetching = await fetch(urlPCI)
    return await fetching.json()
}

async function fetchCYC() {
    const urlCYC = '../assets/data/cyc.json'

    const fetching = await fetch(urlCYC)
    return await fetching.json()
}

async function fetchMaterial() {
    const urlMaterial = './assets/data/materiais.json'

    const fetching = await fetch(urlMaterial)
    return await fetching.json()
}

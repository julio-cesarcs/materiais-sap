async function fetchMaterial() {
    const url = './assets/data/materiais.json'

    const fetching = await fetch(url)
    return await fetching.json()
}

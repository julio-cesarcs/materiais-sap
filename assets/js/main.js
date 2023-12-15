(async () => {
    const material = await fetchMaterial();
    material.sort((a, b) => a.nome.localeCompare(b.nome));
    updateTable(material);
})();


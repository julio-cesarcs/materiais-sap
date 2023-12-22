(async () => {
    const material = await fetchCYP();
    material.sort((a, b) => a.nome.localeCompare(b.nome));
    updateTable(material);
})();


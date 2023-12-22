(async () => {
    const material = await fetchSNP();
    material.sort((a, b) => a.nome.localeCompare(b.nome));
    updateTable(material);
})();


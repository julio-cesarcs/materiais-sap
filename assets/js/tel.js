(async () => {
    const material = await fetchTEL();
    material.sort((a, b) => a.nome.localeCompare(b.nome));
    updateTable(material);
})();


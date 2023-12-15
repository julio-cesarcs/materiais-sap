function filterTable() {
    
    const input = document.getElementById("filterEquipment");
    const filtro = input.value.toUpperCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");
    let celula;
    let txtValor;

    for (let i = 0; i < rows.length; i++) {
        celula = rows[i].getElementsByTagName("td")[1]; // Filtrar pela primeira coluna (índice 0)

        if (celula) {
            txtValor = celula.textContent || celula.innerText;

            if (txtValor.toUpperCase().indexOf(filtro) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
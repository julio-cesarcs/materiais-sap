function filterCode() {
    
    const input = document.querySelector(".filter-code");
    const filtro = input.value.toUpperCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");
    let cell;
    let txtValor;

    for (let i = 0; i < rows.length; i++) {
        cell = rows[i].getElementsByTagName("td")[0]; // Filtrar pela primeira coluna (índice 0)

        if (cell) {
            txtValor = cell.textContent || cell.innerText;

            if (txtValor.toUpperCase().indexOf(filtro) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function filterName() {
    
    const input = document.querySelector(".filter-name");
    const filtro = input.value.toUpperCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");
    let cell;
    let txtValor;

    for (let i = 0; i < rows.length; i++) {
        cell = rows[i].getElementsByTagName("td")[1]; // Filtrar pela primeira coluna (índice 1)

        if (cell) {
            txtValor = cell.textContent || cell.innerText;

            if (txtValor.toUpperCase().indexOf(filtro) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function filterDescription() {
    
    const input = document.querySelector(".filter-description");
    const filtro = input.value.toUpperCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");
    let cell;
    let txtValor;

    for (let i = 0; i < rows.length; i++) {
        cell = rows[i].getElementsByTagName("td")[2]; // Filtrar pela primeira coluna (índice 2)

        if (cell) {
            txtValor = cell.textContent || cell.innerText;

            if (txtValor.toUpperCase().indexOf(filtro) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function filterObservation() {
    
    const input = document.querySelector(".filter-observation");
    const filtro = input.value.toUpperCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");
    let cell;
    let txtValor;

    for (let i = 0; i < rows.length; i++) {
        cell = rows[i].getElementsByTagName("td")[3]; // Filtrar pela primeira coluna (índice 3)

        if (cell) {
            txtValor = cell.textContent || cell.innerText;

            if (txtValor.toUpperCase().indexOf(filtro) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
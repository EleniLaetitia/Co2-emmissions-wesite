document.addEventListener('DOMContentLoaded', function() {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));

    const sortTable = (index) => {
        const sortedRows = rows.sort((rowA, rowB) => {
            const cellA = rowA.querySelectorAll('td')[index].innerText;
            const cellB = rowB.querySelectorAll('td')[index].innerText;
            return cellA.localeCompare(cellB);
        });
        table.innerHTML = '';
        sortedRows.forEach(row => table.appendChild(row));
    };

    document.querySelectorAll('th').forEach((header, index) => {
        header.addEventListener('click', () => sortTable(index));
    });
});

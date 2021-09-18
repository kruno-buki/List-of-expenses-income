export const preload = {
    renderHardcoded: (items) => {
        const tr = document.createElement('tr');
        const table = document.querySelector('table');
        for (let item of items) {
            const td = document.createElement('td');
            td.textContent = item;
            tr.append(td);
        }
        table.append(tr);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    let employeeId = 1;

    employeeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const department = document.getElementById('department').value;

        if (name && position && department) {
            const row = employeeTable.insertRow();
            row.setAttribute('data-id', employeeId);
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = position;
            row.insertCell(2).textContent = department;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                employeeTable.removeChild(row);
            });
            row.insertCell(3).appendChild(deleteButton);

            employeeId++;

            // Clear form fields
            employeeForm.reset();
        }
    });
});

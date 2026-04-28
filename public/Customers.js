function loadCustomersData(){
    fetch('/customers')
    .then((result) => result.json()
    .then((resultJson) => {
        console.log(resultJson);
        const table = document.createElement('table');
        table.setAttribute('id', 'customerInfo');
        const tableRow = document.createElement('tr');
        

        const tableHeadingFirstName = document.createElement('th');
        tableHeadingFirstName.innerText = 'First Name';
        tableRow.appendChild(tableHeadingFirstName);
        table.appendChild(tableRow);

        const tableHeadingLastName = document.createElement('th');
        tableHeadingLastName.innerText = 'Last Name';
        tableRow.appendChild(tableHeadingLastName);
        table.appendChild(tableRow);

        const tableHeadingFirstName = document.createElement('th');
        tableHeadingFirstName.innerText = 'First Name';
        tableRow.appendChild(tableHeadingFirstName);
        table.appendChild(tableRow);

        resultJson.forEach((customer) => {
            const customerTableRow = document.createElement('tr');
            const customerTableFirstName = document.createElement('td');
            const customerTableLastName = document.createElement('td');
            const customerTableState = document.createElement('td');

            customerTableFirstName.innerText = customer[customer_first_name];
            customerTableLastName.innerText = customer[customer_last_name];
            customerTableState.innerText = customer[customer_state];

            customerTableRow.appendChild(customerTableFirstName);
            customerTableRow.appendChild(customerTableLastName);
            customerTableRow.appendChild(customerTableState);
            table.appendChild(customerTableRow);
        });

        document.body.appendChild(table);
        
    }));

}

window.onload = loadCustomersData;

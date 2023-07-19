console.log('Hello World!');

let totalSalaries = [];
let monthlyTotal = 0;

function submitForm(event){
    event.preventDefault();
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let salary = Number(document.getElementById('salary').value);

    let employees = document.getElementById('employeeList');

    employees.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onClick="removeRow(event)">Remove</button></td>
        </tr>
    `

    clearInputs();

    totalSalaries.push(salary);
    console.log(totalSalaries);
    let monthlyTotal = equateMonthly();
    document.querySelector('#monthly').innerHTML = monthlyTotal;
    redSalary(monthlyTotal);
    }

    function clearInputs(){
        document.getElementById('employee-form').reset();
    }

    function equateMonthly(){
        let monthly = 0;
        for (let i = 0; i < totalSalaries.length; i++){
            monthly += totalSalaries[i] / 12;
        }
        console.log(monthly.toFixed(2));
        return "Monthly Total:" , monthly;
    }

    function redSalary(monthly){
        if (monthly >= 20000){
            document.querySelector('#monthly').style.backgroundColor = 'red';
        }
    }
    

    function removeRow(event){
        event.target.closest('tr').remove();
    }
    


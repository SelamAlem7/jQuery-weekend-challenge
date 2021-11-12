console.log('client js');

$(document).ready(onReady)

let employees = [];


function onReady(){
    renderEmployeeInfo(employees);
    renderTotalMonthly(employees)
    $('#submit-button').on('click', handleSubmitButtonClick )

}


/////////////////////////////////////////////////////

function renderEmployeeInfo(employeesToRender) {
    $('#employee-table-body').empty();

    for (let employee of employeesToRender){
        let newTableRow =  `
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
        </tr>
        `;

        $('#employee-table-body').append(newTableRow)
    }
}

/////////////////////////////////////////////////////

function renderTotalMonthly(salaryToSum) { //=renderTotalPrice
    let totalSalary = calculateMonthlyTotal(salaryToSum);
    $('#total-monthly').text(totalSalary)

}
/////////////////////////////////////////////////////


function calculateMonthlyTotal(salaryToSum){
    let sum =0;

    for (let employee of  salaryToSum){
        sum += employee.annualSalary/12;
    }

    return sum;
}


/////////////////////////////////////////////////////

function handleSubmitButtonClick() {
    //collect the values of what the user puts in these inputs
    let newFirst = $('#first-name-input').val();
    let newLast = $('#last-name-input').val();
    let newId = $('#id-number-input').val();
    let newTitle = $('#job-title-input').val();
    let newSalary = $('#annual-salary-input').val();  

    //creating a new variable that will take in these inputs 
    let newEmployee = {
        firstName: newFirst,
        lastName: newLast,
        idNumber: Number(newId),
        title: newTitle,
        annualSalary: Number(newSalary),
    }

    employees.push(newEmployee);

    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-number-input').val('');
    $('#job-title-input').val('');
    $('#annual-salary-input').val('');

    renderEmployeeInfo(employees);
    renderTotalMonthly(employees);
}



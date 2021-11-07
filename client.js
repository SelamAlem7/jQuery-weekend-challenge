console.log('client js');

$(document).ready(onReady);

let totalMonthly = [];


function onReady(){
    renderEmployeeInfo(totalMonthly)
    givenTotalMonthly(totalMonthly);
    $('#submit-button').on('click',handleSubmitButtonClick )

}

/////////////////////////////////////////////////////

function renderEmployeeInfo(inputsToRender) {
    $('#employee-table-body').empty();

    for (let totalMonth of inputsToRender){
        let newTableRow =  `
        <tr>
            <td>${totalMonth.firstName}</td>
            <td>${totalMonth.lastName}</td>
            <td>${totalMonth.idNumber}</td>
            <td>${totalMonth.jobTitle}</td>
            <td>${totalMonth.annualSalary}</td>
        </tr>
        `;

        $('#employee-table-body').append(newTableRow)
    }
}




/////////////////////////////////////////////////////

function givenTotalMonthly(employeesToSum) { //=renderTotalPrice
    let totalSalary = calculateMonthlyTotal(employeesToSum);
    $('#total-monthly').text(totalSalary)

}
/////////////////////////////////////////////////////


function calculateMonthlyTotal(employeesToSum){
    let sum =0;

    for (let totalMonth of  employeesToSum){
    sum += totalMonth.annualSalary/12;
    }

    return sum;
}


/////////////////////////////////////////////////////

function handleSubmitButtonClick() {
    //collect the values of what the user puts in these inputs
    let firstNameInput = $('#first-name-input').val();
    let lastNameInput = $('#last-name-input').val();
    let idNumberInput = $('#id-number-input').val();
    let jobTitleInput = $('#job-title-input').val();
    let annualSalaryInput = $('#annual-salary-input').val();  

    //creating a new variable that will take in these inputs 
    let newEmployee = {
        FirstName: firstNameInput,
        LastName: lastNameInput,
        ID: Number(idNumberInput),
        Title: jobTitleInput,
        Annual: Number (annualSalaryInput),
    }

    totalMonthly.push(newEmployee);

    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-number-input').val('');
    $('#job-title-input').val('');
    $('#annual-salary-input').val('');

    renderEmployeeInfo(totalMonthly);
    givenTotalMonthly(totalMonthly);
}


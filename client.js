console.log('client js');

$(document).ready(onReady);

let totalMonthly = [];


function onReady(){
    $('#submit-button').on('click',handleSubmitButtonClick )
}

/////////////////////////////////////////////////////

function givenTotalMonthly() { //=renderTotalPrice
    let totalMonthly = calculateTotalPrice(employeesToSum);
    $('#total-monthly').text(totalMonthly)

}
/////////////////////////////////////////////////////


function calculateMonthlyTotal(employeesToSum){
    let sum =0;

    for (let totalMonthly of  employeesToSum){
    sum += totalMonthly.annualSalary/12;
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
    let employeeInfo = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        idNumber: Number(idNumberInput),
        jobTitle: jobTitleInput,
        annualSalary: Number (annualSalaryInput),
    }

    totalMonthly.push(employeeInfo);

    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-number-input').val('');
    $('#job-title-input').val('');
    $('#annual-salary-input').val('');

    givenTotalMonthly(totalMonthly)
}


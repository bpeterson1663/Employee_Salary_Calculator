var employees =[];
var counter = 0;
var totalMonthlyCost = 0;
$(document).ready(function(){
  //listen for submit
  $('#employeeInfo').on('submit', function(event){
    //prevent default from happening
      event.preventDefault();
      var formValues ={};
      //cycle through each field and collect value to store in object
      $.each($("#employeeInfo").serializeArray(), function(i, field) {
          formValues[field.name] = field.value;

      });

      $('#employeeInfo').find('input[type=text]').val("");
      employees.push(formValues);//pushes employees from form to array
      //console.log(employees);
      calculateMonthly();
      appendEmpInfo();
      counter++;//increase employee counter to be used as a reference to append just the next employee
  });
  //Delete Each Employee by targeting all buttons in the #employeeData
  $('#employeeData').on('click', 'button', function(){
    var removeSalary = $(this).data('salary')/12; //Grabs the data-salary attribute and divideds by 12 for the montly salary to be removed
    console.log(removeSalary);
    $(this).closest('.employeeRow').remove();//grabs the closest class of employeeRow and removes that row
    totalMonthlyCost -= removeSalary;//subtracts removes Salary from totalMontlyCost
    $('#monthlysalarycost').text(totalMonthlyCost); //sets HTML text when employee is deleted
  });
  $('#monthlysalarycost').text(totalMonthlyCost);//sets Total to zero on page load
  //End Submit button clicked
});
//calculate montly cost by cycling through employees array and adding that to a global variable
function calculateMonthly(){
  for (var i = 0; i < employees.length; i++) { //creates a reference for each person in the array
    var employee = employees[i];
  }
    totalMonthlyCost += Math.round(parseInt(employee.yearlysalary)/12);
    //console.log(totalMonthlyCost);

  $('#monthlysalarycost').text(totalMonthlyCost);//set HTML text to montly cost when employee is add

}

function appendEmpInfo(){
    var employee = employees[counter];
    var salary = employee.yearlysalary;//grabs the employees Salary
    //create a new row for the table and set the data-salary attribute for the delete button to zero for reference later
    var row = '<tr class="employeeRow"><td>' + employee.firstname + '</td><td>'+ employee.lastname + '</td><td>' + employee.employeenumber + '</td><td>' + employee.jobtitle + '</td><td class="salaryColumn">' + employee.yearlysalary + '</td><td><button data-salary="' + salary + '">Delete</button></td></tr>';
    $('#employeeData').append(row);//append new row
    $('.salaryColumn').data('salary', salary); //sets the data-salary attribute to the value of the employees salary
}

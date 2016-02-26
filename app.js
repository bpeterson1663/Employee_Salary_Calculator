var employees =[];
var counter = 0;
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
      employees.push(formValues);
      console.log(employees);
      calculateMonthly();
      appendEmpInfo();
      counter++;
      //appendEmpInfo();
      //push values to an array
      //reset values
  });
  //calculateMonthly();
  //End Submit button clicked
});
//calculate montly cost by cycling through employees array and adding that to a global variable
function calculateMonthly(){
  var totalMonthlyCost = 0;
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    //$('#employeeData').append('<tr><td>' + employee.firstname + '</td></tr>');//<td>'+ employee.lastname + '</td><td>' + employee.employeenumber + '</td><td>' + employee.jobtitle + '</td><td>' + employee.yearlysalary + '</td></tr>');
    totalMonthlyCost += parseInt(employee.yearlysalary)/12;
    console.log(totalMonthlyCost);

  }
  $('#monthlysalarycost').text(totalMonthlyCost);

}

function appendEmpInfo(){
    var employee = employees[counter];
    $('#employeeData').append('<tr><td>' + employee.firstname + '</td><td>'+ employee.lastname + '</td><td>' + employee.employeenumber + '</td><td>' + employee.jobtitle + '</td><td>' + employee.yearlysalary + '</td></tr>');

}

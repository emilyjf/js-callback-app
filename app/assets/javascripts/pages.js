// // $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(data) {console.log(data);
// // });




// function getData() {
//   var employeesDiv = document.getElementById('employees');


//   $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
//     var htmlString = "";
    

//     var htmlString = "";

//     for (var i = 0; i < employees.length; i++) {
//       var employee = employees[i];
//       htmlString += '<div class="employee" onclick="changeEmployee(this)">'
//       htmlString += '<h2>' + employee.name + '</h2>';
//       htmlString += '<p>Job Title: ' + employee.job_titles + '<p>';
//       htmlString += '<p>Department: ' + employee.department + '<p>';
//       htmlString += '<p>Salary: ' + employee.annual_salary + '</h2>';
//       htmlString += '</br>';
//     htmlString += '</div>'
//     }

//     employeesDiv.innerHTML = htmlString;
//   });
// }

// function changeEmployee(employeeDiv) {
//   if (employeeDiv.style.color === 'lightgray') {
//     employeeDiv.style.color = ' ';
//   } else {
//   employeeDiv.style.color = 'lightgray';
//   }
// }

// function showAll() {
//   var employees = document.getElementsByClassName('employee');

//   for (var i = 0; i < employees.length; i++) {
//     var employee = employees[i];
//     employee.classList.remove('hidden');
//   }
// }

// function showPolice() {
//   var employees = document.getElementsByClassName('employee');

//   for (var i = 0; i < employees.length; i++) {
//     var employee = employees[i];
//     if (employee.innerHTML.indexOf('POLICE') !== -1) {
//       employee.classList.remove('hidden');
//   } else {
//     employee.classList.add('hidden'); 
//     }
//   }
// }

// ------
function getData() {
  var crimesDiv = document.getElementById('crimes');


  $.get('https://data.cityofchicago.org/resource/6zsd-86xi.json', function(crimes) {
    var htmlString = "";
    // console.log(crimes);

    var htmlString = "";

    for (var i = 0; i < crimes.length; i++) {
      var crime = crimes[i];
      htmlString += '<div class="crime" onclick="changeCrime(this)">' + crime.date + '</h2>';
        htmlString += '<p>Type: ' + crime.primary_type + '</p>';
        htmlString += '<p>Description: ' + crime.description + '</p>';
        htmlString += '<p>Arrest: ' + crime.arrest + '</p>';
        htmlString += '<p>Domestic: ' + crime.domestic + '</p>';
        htmlString += '</br>';
        htmlString += '</div>';
    }

    crimesDiv.innerHTML = htmlString;

      });
    

    function changeCrime(crimeDiv){
      if (crimeDiv.style.color === 'blue'){
        crimeDiv.style.color = ' ';
      } else {
        crimeDiv.style.color = 'blue';
      }
    }
    
    function showAll() {
      var crimes = document.getElementsByClassName('crime');

      for (var i = 0; i < crimes.length; i++) {
        var crime = crimes[i];
        crime.classList.remove('hidden');
      }
    }    

    for (var i = 0; i < crimes.length; i++) {
      var crime = crimes[i];
      if (crime.innerHTML.indexOf('MURDER') !== -1) {
        crime.classList.remove('hidden');
      } else {
        crime.classList.add('hidden');
        }
      }
    }
  

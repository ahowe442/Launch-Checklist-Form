// Write your JavaScript code here!
window.addEventListener("load", function () {
  let form = document.querySelector("form");

  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");
  let pilotStatus = document.querySelector('#pilotStatus');
  let copilotStatus = document.querySelector('#copilotStatus');
  let faultyItems = document.querySelector('#faultyItems');
  let fuelStatus = document.querySelector('#fuelStatus');
  let launchStatus = document.querySelector('#launchStatus');
  let cargoStatus = document.querySelector('cargoStatus');


  form.addEventListener("submit", function (event) {


    // valudation of user inputs

    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("Invalid Entry! All fields are required!");
      // stop the form submission
      event.preventDefault();
    } else if (allnumeric(fuelLevelInput)) {
      alert("fuelLevel must have numeric characters only");
      event.preventDefault();
    } else if (allnumeric(cargoMassInput)) {
      alert("Cargo Mass must have numeric characters only");
      event.preventDefault();
    };


    //testing variables
    // pilotNameInput = 'Abby';
    // copilotNameInput = 'Kellie';
    // fuelLevelInput = 3455;
    // cargoMassInput = 2000;

    // call functions
    showPilotNamesInStatusCheck();
    checkCargoMass();
    checkFuelLevel();





    function showPilotNamesInStatusCheck() {
      pilotStatus.innerHTML = `${pilotNameInput.value} is ready for launch`;
      document.querySelector("#pilotStatus").style.visibility = "visible";

      copilotStatus.innerHTML = `${copilotNameInput.value} is ready for launch`;
      copilotStatus.style.visibility = "visible";
    };

    function checkFuelLevel() {
      if (fuelLevelInput.value < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('fuelStatus').innerHTML = "There is not enough fuel for the journey";
        document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
        document.getElementById('launchStatus').style.color = "red";
      }
    };

    function checkCargoMass() {
      if (cargoMassInput.value < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('fuelStatus').innerHTML = "There is too much mass for the shuttle to take off";
        document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
        document.getElementById('launchStatus').style.color = "red";
      }
    };



  });

  function allnumeric(input) {
    var numbers = /^[0-9]+$/;
    if (input.value.match(numbers)) {
      return false;
    } else {
      return true;
    }
  }

  //Updating Shuttle Requirements


  /* This block of code shows how to format the HTML once you fetch some planetary JSON!
                       <h2>Mission Destination</h2>
                       <ol>
                          <li>Name: ${}</li>
                          <li>Diameter: ${}</li>
                          <li>Star: ${}</li>
                          <li>Distance from Earth: ${}</li>
                          <li>Number of Moons: ${}</li>
                       </ol>
                       <img src="${}">
                       */

});


// Ternary 
//class='${json[index].active ? "green" : "red"'
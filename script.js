// Write your JavaScript code here!
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    // alert("cargoMass: " + cargoMass.value);
    //alert("fuelLevel.value: " + typeof fuelLevel.value)

    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("Invalid Entry! All fields are required!");
      // stop the form submission
      event.preventDefault();
    }

    if (allnumeric(fuelLevelInput)) {
      alert("fuelLevel must have numeric characters only");
      event.preventDefault();
    }

    if (allnumeric(cargoMassInput)) {
      alert("Cargo Mass must have numeric characters only");
      event.preventDefault();
    }

    let pilotStatus = document.querySelector('#pilotStatus');
    let copilotStatus = document.querySelector('#copilotStatus');

    // console.log(pilotNameInput.value);
    // console.log(pilotStatus.innerHTML);
    pilotStatus.innerHTML = `${pilotNameInput.value} is ready for launch`;
    document.querySelector("#pilotStatus").style.visibility = "visible";

    copilotStatus.innerHTML = `${copilotNameInput}`;
    copilotStatus.style.visibility = "visible";

    if (fuelLevelInput < 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById('fuelStatus').innerHTML = "There is not enough fuel for the journey";
      document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
      document.getElementById('launchStatus').style.color = "red";
    }

    if (cargoMassInput < 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById('fuelStatus').innerHTML = "There is too much mass for the shuttle to take off";
    }




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
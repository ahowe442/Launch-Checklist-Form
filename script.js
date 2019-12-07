// Write your JavaScript code here!
window.addEventListener("load", function () {
  let form = document.querySelector("form");

  let pilotNameInput = document.querySelector("input[name=pilotName]");
  let copilotNameInput = document.querySelector("input[name=copilotName]");
  let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
  let cargoMassInput = document.querySelector("input[name=cargoMass]");
  let pilotStatus = document.querySelector("#pilotStatus");
  let copilotStatus = document.querySelector("#copilotStatus");
  let faultyItems = document.querySelector("#faultyItems");
  let fuelStatus = document.querySelector("#fuelStatus");
  let launchStatus = document.querySelector("#launchStatus");
  let cargoStatus = document.querySelector("cargoStatus");

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
    }


    //  Check if the shuttle is ready for launch. 
    isReadyForLaunch();

    function isReadyForLaunch() {
      isPilotReady();

      if (isCargoMassLight() === true && isFuelLevelFull() === true) {
        event.preventDefault();
        document.getElementById("launchStatus").innerHTML =
          "Shuttle ready for launch";
        document.getElementById("launchStatus").style.color = "green";

      } else {
        event.preventDefault();
        document.getElementById("launchStatus").innerHTML =
          "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
      }
    };


    function isPilotReady() {
      pilotStatus.innerHTML = `${pilotNameInput.value} is ready for launch`;
      copilotStatus.innerHTML = `${copilotNameInput.value} is ready for launch`;
    };

    function isFuelLevelFull() {
      if (fuelLevelInput.value < 10000) {
        event.preventDefault();
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML =
          "There is not enough fuel for the journey";
        document.getElementById("launchStatus").innerHTML =
          "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        //event.preventDefault();
        return false;
      } else {
        return true;
      }
    };

    function isCargoMassLight() {
      if (cargoMassInput.value > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML =
          "There is too much mass for the shuttle to take off";
        document.getElementById("launchStatus").innerHTML =
          "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        event.preventDefault();
        return false;
      } else {
        return true;
      }
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

  //Mission Destination Information
  let json = [];
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function (response) {
      response.json().then(function (json) {
        const missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                  <h2>Mission Destination</h2>
                       <ol>
                          <li>Name: ${json[0].name}</li>
                          <li>Diameter: ${json[0].diameter}</li>
                          <li>Star: ${json[0].star}</li>
                          <li>Distance from Earth: ${json[0].distance}</li>
                          <li>Number of Moons: ${json[0].moons}</li>
                       </ol>
                       <img src="${json[0].image}">
  `;
      });
    }
  );
});
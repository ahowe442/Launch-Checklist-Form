// Write your JavaScript code here!
window.addEventListener("load", function () {
      let form = document.querySelector("form");
      form.addEventListener("submit", function (event) {
          let pilotName = document.querySelector("input[name=pilotName]");
          let copilotName = document.querySelector("input[name=copilotName]");
          let fuelLevel = document.querySelector("input[name=fuelLevel]");
          let cargoMass = document.querySelector("input[name=cargoMass]");
          // alert("cargoMass: " + cargoMass.value);
          //alert("fuelLevel.value: " + typeof fuelLevel.value)

          if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert('Invalid Entry! Input needed for all fields')
            // stop the form submission
            event.preventDefault();
          });
        // if (pilotName.value === "" || copiolotName.value === "" || fuelLevel.value ===
        //    "" || cargoMass.value === "") {
        //    alert("All fields are required!");


        //       } else if (pilotName.value !== String || copiolotName.value !== String) {
        //          alert('Pilot Names must not include numbers')
        //       } else if (fuelLevel.value !== Number || cargomass.value !== Number) {
        //          alert('Must not include letters')
        //       });
      });

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
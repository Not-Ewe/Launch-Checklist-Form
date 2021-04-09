// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faulty = document.getElementById("faultyItems");
      let fuelMessage = document.getElementById("fuelStatus");
      let cargoMessage = document.getElementById("cargoStatus");
      let launch = document.getElementById("launchStatus")
      
      if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields must have values!");
         return;
      } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) {
         alert("Names MUST be strings!!");
         return;
      } else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Fuel Level and Cargo Mass MUST be numbers!!");
         return;
      } 
         let fuel = Number(fuelLevelInput.value);
         let cargo = Number(cargoMassInput.value);

         if (fuel < 10000 && cargo > 10000) {
            faulty.style.visibility = "visible";
            fuelMessage.innerHTML = "Fuel level is too low for launch.";
            cargoMessage.innerHTML = "Cargo Mass is too great for launch.";
            launch.innerHTML = "Shuttle not ready for launch";
            launch.style.color = "red";
         } else if (fuel >= 10000 && cargo > 10000){
            faulty.style.visibility = "visible";
            fuelMessage.innerHTML = "Fuel level high enough for launch.";
            cargoMessage.innerHTML = "Cargo Mass is too great for launch.";
            launch.innerHTML = "Shuttle not ready for launch";
            launch.style.color = "red";
         } else if (fuel < 10000 && cargo <= 10000) {
            faulty.style.visibility = "visible";
            fuelMessage.innerHTML = "Fuel level is too low for launch.";
            cargoMessage.innerHTML = "Cargo mass low enough for launch.";
            launch.innerHTML = "Shuttle not ready for launch";
            launch.style.color = "red";
         } else {
            launch.style.color = "green";
            launch.innerHTML = "Shuttle is ready for launch";
            fuelMessage.innerHTML = "Fuel level high enough for launch.";
            cargoMessage.innerHTML = "Cargo mass low enough for launch.";
      }
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
      
   });
}); 

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
      let destination = document.getElementById("missionTarget");
      destination.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
           <li>Name: ${json[1].name}</li>
           <li>Diameter: ${json[1].diameter}</li>
           <li>Star: ${json[1].star}</li>
           <li>Distance from Earth: ${json[1].distance}</li>
           <li>Number of Moons: ${json[1].moons}</li>
         </ol>
         <img src="${json[1].image}"></img>`;
   });
});

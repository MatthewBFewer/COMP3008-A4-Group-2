// const dropdowns = document.getElementById("dropdowns");

//ul to add location data to
const location_data = document.getElementById("location-data");


// displays all offices for the given location
function load_location_data(location) {

    const current_selection = locations[location];

    // clear previous locations
    location_data.replaceChildren([]);

    // add new ones
    for (let i=0;i<current_selection.length;i++) {
        let li = document.createElement("li");
        li.classList.add("location");       //used for styling

        //creating and appending all info per location li
        let name = document.createElement("a");
        name.href = current_selection[i].link;
        name.target = "blank";
        name.innerText = current_selection[i].name;
        li.appendChild(name);

        let hours = document.createElement("p");
        hours.innerText = "Hours of service: " + current_selection[i].service_hours;
        li.appendChild(hours);

        let wait_time = document.createElement("p");
        wait_time.innerText = "Estimated wait time: " + current_selection[i].est_wait_time + " min";
        li.appendChild(wait_time);

        let distance = document.createElement("p");
        distance.innerText = "Distance: " + current_selection[i].distance + " km";
        li.appendChild(distance);

        location_data.appendChild(li);
    }
    
 }
 
//test
 load_location_data("Gatineau");
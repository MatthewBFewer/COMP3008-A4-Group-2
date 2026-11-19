// const dropdowns = document.getElementById("dropdowns");

//ul to add location data to
const location_data = document.getElementById("location-data");

// for results confirmation message
const searchStatus = document.getElementById("search-status");

 // populate a dropdown using its options
function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);

    options.forEach(option => {
        const optionElement = document.createElement("option");

        optionElement.value = option;
        optionElement.textContent = option;

        dropdown.appendChild(optionElement);
    });
}

// populate all three dropdowns
populateDropdown("service", dropdown_options.Service);
populateDropdown("delivery", dropdown_options.Delivery);
populateDropdown("location", dropdown_options.Location);


// update office results when the user selects a location
const locationDropdown = document.getElementById("location");

locationDropdown.addEventListener("change", function() {
    const selectedLocation = locationDropdown.value;

    searchStatus.textContent = "";

    // clear existing results
    if (selectedLocation === "") {
        location_data.replaceChildren();
        return;
    }

    // current location detection not implemented
    if (selectedLocation === "Current Location") {
        location_data.replaceChildren();

        searchStatus.textContent =
        "Current location detection is unavailable in this demonstration. Please select a city manually.";

        return;
    }

    // display offices for the selected city
    load_location_data(selectedLocation);
});

// update office results when the completion time changes
const deliveryDropdown = document.getElementById("delivery");

deliveryDropdown.addEventListener("change", function() {
    const selectedLocation = locationDropdown.value;

    // clear previous feedback
    searchStatus.textContent = "";

    // Only load results if a city has been selected
    if (selectedLocation === "Current Location") {
        searchStatus.textContent =
            "Current location detection is unavailable in this demonstration. Please select a city manually.";
    } else if (selectedLocation !== "") {
        load_location_data(selectedLocation);
    }
});

// reset all search filters and clear displayed offices
const clearFiltersButton = document.getElementById("clear-filters");

clearFiltersButton.addEventListener("click", function() {
    // reset dropdowns to their placeholder options
    document.getElementById("service").selectedIndex = 0;
    document.getElementById("delivery").selectedIndex = 0;
    document.getElementById("location").selectedIndex = 0;

    // remove displayed office results
    location_data.replaceChildren();

    searchStatus.textContent = "";

    // restore the original instruction
    document.querySelector("#content h2").textContent =
        "Select a service and location to view offices";
});


// displays all offices for the given location
function load_location_data(location) {
    const selectedDelivery = document.getElementById("delivery").value;

    let current_selection = locations[location] || [];

    // filter by timeframe if one has been selected
    if (selectedDelivery !== "") {
        current_selection = current_selection.filter(office =>
            office.delivery_times.includes(selectedDelivery)
        );
    }

    // clear previous locations
    location_data.replaceChildren();

    // display feedback if no offices match the selected timeframe
    if (current_selection.length === 0) {
        const item = document.createElement("li");
        const message = document.createElement("h3");
        message.textContent =
            "No offices match your selected location and completion time. Try changing your filters.";
        item.appendChild(message);
        location_data.appendChild(item);
        return;
    }

    // update page message
    document.querySelector("#content h2").textContent =
        "Matching Service Canada Offices";

    // add new ones
    for (let i=0;i<current_selection.length;i++) {
        let li = document.createElement("li");
        li.classList.add("location");       //used for styling

        //creating and appending all info per location li
        let name = document.createElement("a");
        name.href = current_selection[i].link;
        name.target = "blank";
        name.innerText = current_selection[i].name;
        // confirm the user's office selection
        name.addEventListener("click", function() {
        searchStatus.textContent =
            "You selected " + current_selection[i].name +
            ". You can view its official page for further details.";
        });
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
    
    // confirm that matching offices have been displayed
    searchStatus.textContent = selectedDelivery
    ? "Showing offices that match your selected location and service completion time. Select an office to view its details."
    : "Showing offices in your selected city. Select an office to view its details.";

 }
 
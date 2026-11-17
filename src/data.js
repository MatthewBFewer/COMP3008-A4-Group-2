// All data to be dynamically loaded (locations + dropdown options)

const location_data = {
    Gatineau: [
        {
            name: "Gatineau-Hull Service Canada Centre and Passport Services",
            link: "https://offices.service.canada.ca/en/Office/2005",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 30,
            distance: 4.5
        },
        {
            name: "Gatineau-East Service Canada Centre",
            link: "https://offices.service.canada.ca/en/Office/2430",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 0,
            distance: 5.6
        }
    ],
    Ottawa: [
        {
            name: "Ottawa West Service Canada Centre and Passport Services",
            link: "https://offices.service.canada.ca/en/Office/3745",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 105,
            distance: 1.2
        }
    ],
    Cornwall: []
};

const dropdown_data = {
    Service: ["Passport & Biometrics","Other"],
    Delivery: ["2-9 Business Days","10-19 Business Days","20+ Business Days"],
    Location: ["Current Location","Ottawa","Gatineau","Cornwall"]
};
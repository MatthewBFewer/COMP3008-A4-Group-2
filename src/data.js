// All data to be dynamically loaded (locations + dropdown options)

const locations = {
    Gatineau: [
        {
            name: "Gatineau-Hull Service Canada Centre and Passport Services",
            link: "https://offices.service.canada.ca/en/Office/2005",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 30,
            distance: 4.5,
            delivery_times: ["10-19 Business Days"]
        },
        {
            name: "Gatineau-East Service Canada Centre",
            link: "https://offices.service.canada.ca/en/Office/2430",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 0,
            distance: 5.6,
            delivery_times: ["20+ Business Days"]
        }
    ],
    Ottawa: [
        {
            name: "Ottawa West Service Canada Centre and Passport Services",
            link: "https://offices.service.canada.ca/en/Office/3745",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 105,
            distance: 1.2,
            delivery_times: ["2-9 Business Days"]
        },
        {
            name: "Ottawa East Service Canada Centre and Passport Services",
            link: "https://offices.service.canada.ca/en/Office/3545",
            service_hours: "Monday to Friday from 8:30am to 4:00pm",
            est_wait_time: 45,
            distance: 19.1,
            delivery_times: ["10-19 Business Days"],
            delivery_note: "Express passports are picked up at Ottawa West in 2-9 business days. 10-business-day pickup or delivery by mail is also listed."
        }
    ],
    Cornwall: []
};

const dropdown_options = {
    Service: ["Passport & Biometrics","Other"],
    Delivery: ["2-9 Business Days","10-19 Business Days","20+ Business Days"],
    Location: ["Current Location","Ottawa","Gatineau","Cornwall"]
};
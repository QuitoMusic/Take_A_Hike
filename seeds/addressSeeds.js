const {Address} = require('../models')

// Data for seeding the Address table
const addressData = [
    {
      name: "Wekiwa Springs State Park",
      streetAddress: "1800 Wekiwa Cir",
      city: "Apopka",
      state: "FL",
      zipCode: "32712"
    },
  
    {
      name: "Biscayne National Park",
      streetAddress: "9700 SW 328th Street",
      city: "Homestead",
      state: "FL",
      zipCode: "33033"
    },
    {
      name: "Dry Tortugas National Park",
      streetAddress: "40001 State Highway 9336",
      city: "Homestead",
      state: "FL",
      zipCode: "33034"
    },
    {
      name: "Alafia River State Park",
      streetAddress: "14326 S County Rd 39",
      city: "Lithia",
      state: "FL",
      zipCode: "33547"
    },
    {
        name: "Everglades National Park",
        streetAddress: "40001 State Road 9336",
        city: "Homestead",
        state: "FL",
        zipCode: "33034"
    },
    {
        name: "Black Bear Wilderness",
        streetAddress: "5301 Michigan Ave",
        city: "Sanford",
        state: "FL",
        zipCode: "32771"
    },
    {
        name: "Little Big Econ State Forest",
        streetAddress: "1350 Snow Hill Rd",
        city: "Geneva",
        state: "FL",
        zipCode: "32732"
    },
    {
        name: "Hillsborough River",
        streetAddress: "15402 US-301",
        city: "Thonotosassa",
        state: "FL",
        zipCode: "33592"
    },
    {
        name: "Fort Caroline",
        streetAddress: "12713 Fort Caroline Rd",
        city: "Jacksonville",
        state: "FL",
        zipCode: "32225"
    },
  ];
  
  // Function to seed the Address table with addressData
  const seedAddresses = () => Address.bulkCreate(addressData);

  module.exports =  seedAddresses
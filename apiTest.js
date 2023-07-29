const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
  params: {
    lat: '40.7617398',
    lon: '-77.3602685'
  },
  headers: {
    'X-RapidAPI-Key': 'cb6fbd7330msh5582cf79606aff6p169d39jsn2b7f0c54770b',
    'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
  }
};

async function myfunction(){
 try {
 	const response = await axios.request(options);
 	console.log(response.data);
 } catch (error) {
 	console.error(error);
 }
}
myfunction()
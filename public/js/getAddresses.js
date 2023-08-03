//Under Development 

// Function to fetch addresses from the server and populate the address dropdown
// async function getAddresses() {
//     try {
//       const response = await fetch('/api/addresses');
//       const data = await response.json();
  
//       if (response.ok) {
//         const addressDropdown = document.getElementById('addressDropdown');
  
//         // Clear the existing options
//         addressDropdown.innerHTML = '';
  
//         // Add new options for each address
//         data.forEach((address) => {
//           const option = document.createElement('option');
//           option.value = address.id;
//           option.textContent = address.name;
//           addressDropdown.appendChild(option);
//         });
//       } else {
//         console.log('Error fetching addresses:', response.statusText);
//       }
//     } catch (error) {
//       console.log('Error fetching addresses:', error);
//     }
//   }
  
//   // Call the function when the page is loaded
//   document.addEventListener('DOMContentLoaded', getAddresses);
  
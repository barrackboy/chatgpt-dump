//Tab through navigation
// const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

// for (const toggle of dropdownToggles) {
//   toggle.addEventListener("keypress", function (e) {
//     if (e.which === 32) {
//       this.click();
//     }
//   });
// }

//Here's an example of creating an association between two objects in HubSpot using custom actions in JavaScript:
// const apiKey = "your_api_key";
// const fromObjectId = 12345;
// const toObjectId = 56789;
// const associationType = "DEAL_PARENT_COMPANY";

// const header = {
//   "Content-Type": "application/json",
//   "Authorization": "Bearer " + apiKey
// };

// const data = {
//   fromObjectId: fromObjectId,
//   toObjectId: toObjectId,
//   category: associationType
// };

// const endpoint = "https://api.hubapi.com/crm-associations/v1/associations";

// fetch(endpoint, {
//   method: "POST",
//   headers: header,
//   body: JSON.stringify(data)
// })
//   .then(response => {
//     if (response.ok) {
//       console.log("Association created successfully");
//     } else {
//       throw new Error("Failed to create association");
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });

//Here's an example of updating a contact property in HubSpot using the fetch API in JavaScript:
// const apiKey = "your_api_key";
// const contactId = 12345;

// const header = {
//   "Content-Type": "application/json",
//   "Authorization": "Bearer " + apiKey
// };

// const data = {
//   properties: [
//     {
//       property: "lifecyclestage",
//       value: "customer"
//     }
//   ]
// };

// const endpoint = `https://api.hubapi.com/contacts/v1/contact/vid/${contactId}/profile`;

// fetch(endpoint, {
//   method: "POST",
//   headers: header,
//   body: JSON.stringify(data)
// })
//   .then(response => {
//     if (response.ok) {
//       console.log("Contact property updated successfully");
//     } else {
//       throw new Error("Failed to update contact property");
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });

//Here's an example of how to send a POST request using the fetch API for items with a city value of "jos", and a PATCH request for all other items:

// const data = {
//   items: [
//     { name: "item1", price: 12.99, city: "lagos" },
//     { name: "item2", price: 9.99, city: "vegas" },
//     { name: "item3", price: 19.99, city: "jos" },
//   ],
// };

// data.items.forEach(item => {
// if (item.city === "jos") {
//   fetch("https://your-api-endpoint.com", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(item)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// } else {
//   fetch("https://your-api-endpoint.com", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(item)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }
// });

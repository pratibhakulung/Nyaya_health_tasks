const countries = [
  "USA",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Peru",
  "Colombia",
  "Ecuador",
  "Bolivia",
];

const jsonData = {
  people: [
    { id: 001, name: "user 1", age: 22 },

    { id: 002, name: "user 2", age: 23 },
  ],
};
const datalist = document.getElementById("countriesList");
for (const country of countries) {
  const option = document.createElement("option");
  option.value = country;
  datalist.appendChild(option);
}

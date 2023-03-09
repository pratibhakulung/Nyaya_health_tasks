var jsonData = {
  people: [
    {
      id: "001",
      name: "John Doe",
      age: 30,
      occupation: "student",
      address: "address 1",
      contact: 11111,
      temp_address: "temp 1",
      blood: "A",
      Nationality: "Nepal",
      Language: "Nepali",
    },
    {
      id: "002",
      name: "Jane Smith",
      age: 25,
      occupation: "teacher",
      address: "address 2",
      contact: 2222,
      temp_address: "temp 2",
      blood: "B",
      Nationality: "Indian",
      Language: "Hindi",
    },
  ],
};

const peoplelist = document.getElementById("people-list");
debugger;
for (let i = 0; i < jsonData.people.length; i++) {
  const option = document.createElement("option");
  debugger;
  option.value = `${jsonData.people[i].id},${jsonData.people[i].name},
  ${jsonData.people[i].age}, ${jsonData.people[i].occupation},${jsonData.people[i].address},
  ${jsonData.people[i].contact},${jsonData.people[i].temp_address},${jsonData.people[i].blood},
  ${jsonData.people[i].Nationality},${jsonData.people[i].Language}`;
  debugger;
  peoplelist.append(option);
  debugger;
}

const people_id = document.getElementById("people_id");

people_id.addEventListener("change", function () {
  //const selectedOption = document.querySelector(`[value="${people_id.value}"]`);
  const selectedOption = document.getElementById("people_id").value;
  console.log(selectedOption);
  debugger;
  let selectValue = selectedOption;
  debugger;
  const selectedId = selectValue.split(",");
  debugger;
  people_id.value = selectedId[0];
  let item = [
    document.getElementById("person_name"),
    document.getElementById("person_age"),
    document.getElementById("person_occupation"),
    document.getElementById("person_address"),
    document.getElementById("person_contact"),
    document.getElementById("person_temp_address"),
    document.getElementById("person_blood"),
    document.getElementById("person_nationality"),
    document.getElementById("person_language"),
  ];

  debugger;

  for (let i = 1; i < selectedId.length; i++) {
    item[i - 1].value = selectedId[i];
    debugger;
  }
  debugger;
});

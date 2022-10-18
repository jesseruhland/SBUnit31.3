const baseURL = "http://numbersapi.com/";
const body = document.querySelector("body");

// Part 1.1

async function getFavNumFact() {
  let data = await axios.get(baseURL + "40/?json");
  console.log(data);
}
getFavNumFact();

// const favNumURL = baseURL + "40/?json";
// const resolvedPromise = axios.get(favNumURL);

// resolvedPromise.then((data) => console.log(data));

// Part 1.2

async function getFourNumFacts() {
  let data = await axios.get(baseURL + "237,77,58,953258");
  for (key in data.data) {
    let newFact = document.createElement("p");
    newFact.innerText = data.data[key];
    body.append(newFact);
  }
}
getFourNumFacts();

// const fourNumURL = baseURL + "237,77,58,953258";
// const fourNumPromise = axios.get(fourNumURL);

// fourNumPromise.then((data) => {
//   for (key in data.data) {
//     let newFact = document.createElement("p");
//     newFact.innerText = data.data[key];
//     body.append(newFact);
//   }
// });

// Part 1.3

async function getFourFacts(num) {
  let response = await Promise.all([
    axios.get(baseURL + `${num}/?json`),
    axios.get(baseURL + `${num}/?json`),
    axios.get(baseURL + `${num}/?json`),
    axios.get(baseURL + `${num}/?json`),
  ]);
  for (i in response) {
    let newFact = document.createElement("p");
    newFact.innerText = response[i].data.text;
    body.append(newFact);
  }
}
getFourFacts(40);

// const fourFactURL = baseURL + "40/?json";
// axios
//   .get(fourFactURL)
//   .then((data) => {
//     let newFact = document.createElement("p");
//     newFact.innerText = data.data.text;
//     body.append(newFact);
//     return axios.get(fourFactURL);
//   })
//   .then((data) => {
//     let newFact = document.createElement("p");
//     newFact.innerText = data.data.text;
//     body.append(newFact);
//     return axios.get(fourFactURL);
//   })
//   .then((data) => {
//     let newFact = document.createElement("p");
//     newFact.innerText = data.data.text;
//     body.append(newFact);
//     return axios.get(fourFactURL);
//   })
//   .then((data) => {
//     let newFact = document.createElement("p");
//     newFact.innerText = data.data.text;
//     body.append(newFact);
//     return axios.get(fourFactURL);
//   })
//   .catch((err) => console.log("Error!"));

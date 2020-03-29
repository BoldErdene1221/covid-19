/*home.html API request */

let req = new XMLHttpRequest();
setInterval(req.onreadystatechange, 1000);
req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    let contentJSON = JSON.parse(req.responseText);
    let earth = document.getElementById("earthCases");

    let cases = document.createElement("p");
    let txtOne = document.createTextNode("Cases");
    cases.appendChild(txtOne);
    cases.setAttribute("class", "casesP");

    let numOfCases = document.createElement("p");
    let numOfCase = document.createTextNode(contentJSON.cases);
    numOfCases.appendChild(numOfCase);

    let deaths = document.createElement("p");
    let death = document.createTextNode("Deaths");
    deaths.appendChild(death);
    deaths.setAttribute("class", "deathsP");

    let numOfDeaths = document.createElement("p");
    let numOfDeath = document.createTextNode(contentJSON.deaths);
    numOfDeaths.appendChild(numOfDeath);

    let recovered = document.createElement("p");
    let txtThree = document.createTextNode("Recovered");
    recovered.appendChild(txtThree);
    recovered.setAttribute("class", "recovP");

    let numOfRecs = document.createElement("p");
    let numOfRec = document.createTextNode(contentJSON.recovered);
    numOfRecs.appendChild(numOfRec);

    let updated = document.createElement("p");
    let txtFour = document.createTextNode("Updated");
    updated.appendChild(txtFour);
    updated.setAttribute("class", "updatedP");

    let numOfUpdated = document.createElement("p");
    let numOfUpdate = document.createTextNode(contentJSON.updated);
    numOfUpdated.appendChild(numOfUpdate);

    earth.appendChild(cases);
    earth.appendChild(numOfCases);

    earth.appendChild(deaths);
    earth.appendChild(numOfDeaths);

    earth.appendChild(updated);
    earth.appendChild(numOfUpdated);

    earth.appendChild(recovered);
    earth.appendChild(numOfRecs);
  }
};

req.open("GET", "https://corona.lmao.ninja/all", true);
req.setRequestHeader("Content-type", "application/json");
req.send();

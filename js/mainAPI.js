let req = new XMLHttpRequest();
//3 сек тутамд refresh хийгдэнэ
setInterval(req.onreadystatechange, 3000);
req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    let contentJSON = JSON.parse(req.responseText);
    let body = document.getElementById("body");
    for (const x in contentJSON) {
      //main Div
      let mainDiv = document.createElement("div");
      mainDiv.setAttribute("class", "uk-animation-toggle");
      mainDiv.setAttribute("tabindex", "0");
      mainDiv.setAttribute("id", "mainDiv");
      body.appendChild(mainDiv);
      //second Div
      let secDiv = document.createElement("div");
      secDiv.setAttribute("class", "card uk-card uk-card-default uk-card-body");
      secDiv.setAttribute("id", "secDiv");
      mainDiv.appendChild(secDiv);
      //header
      let img = document.createElement("img");
      img.setAttribute("src", "asserts/" + contentJSON[x].country + ".png");
      img.setAttribute("class", "flags");
      secDiv.appendChild(img);

      let name = document.createElement("p");
      let nameC = document.createTextNode(contentJSON[x].country);
      name.setAttribute("class", "coutryName");
      name.setAttribute("id", "coutryName");
      name.appendChild(nameC);
      secDiv.appendChild(name);

      //cases
      let caseDiv = document.createElement("div");
      caseDiv.setAttribute("id", "coutryCases");
      caseDiv.setAttribute("class", "uk-child-width-1-4@s");
      caseDiv.setAttribute("uk-grid", "");
      secDiv.appendChild(caseDiv);

      let cases = document.createElement("p");
      let txtOne = document.createTextNode("Cases");
      cases.appendChild(txtOne);
      cases.setAttribute("class", "txtCases");
      caseDiv.appendChild(cases);

      let numOfCases = document.createElement("p");
      let numOfCase = document.createTextNode(contentJSON[x].cases);
      numOfCases.appendChild(numOfCase);
      caseDiv.appendChild(numOfCases);

      let todayCases = document.createElement("p");
      let todayCase = document.createTextNode("Today Cases");
      todayCases.appendChild(todayCase);
      todayCases.setAttribute("class", "txtCases");
      caseDiv.appendChild(todayCases);

      let numOfTodayCases = document.createElement("p");
      let numOfTodayCase = document.createTextNode(contentJSON[x].todayCases);
      numOfTodayCases.appendChild(numOfTodayCase);
      caseDiv.appendChild(numOfTodayCases);

      let deaths = document.createElement("p");
      let death = document.createTextNode("Deaths");
      deaths.appendChild(death);
      deaths.setAttribute("class", "txtDead");
      caseDiv.appendChild(deaths);

      let numOfDeaths = document.createElement("p");
      let numOfDeath = document.createTextNode(contentJSON[x].deaths);
      numOfDeaths.appendChild(numOfDeath);
      caseDiv.appendChild(numOfDeaths);

      let todayDeaths = document.createElement("p");
      let todayDeath = document.createTextNode("Today Deaths");
      todayDeaths.appendChild(todayDeath);
      todayDeaths.setAttribute("class", "txtDead");
      caseDiv.appendChild(todayDeaths);

      let numOfTodayDeaths = document.createElement("p");
      let numOfTodayDeath = document.createTextNode(contentJSON[x].todayDeaths);
      numOfTodayDeaths.appendChild(numOfTodayDeath);
      caseDiv.appendChild(numOfTodayDeaths);

      let recovered = document.createElement("p");
      let txtThree = document.createTextNode("Recovered");
      recovered.appendChild(txtThree);
      recovered.setAttribute("class", "txtRecov");
      caseDiv.appendChild(recovered);

      let numOfRecs = document.createElement("p");
      let numOfRec = document.createTextNode(contentJSON[x].recovered);
      numOfRecs.appendChild(numOfRec);
      caseDiv.appendChild(numOfRecs);

      let criticals = document.createElement("p");
      let critical = document.createTextNode("Criticals");
      criticals.appendChild(critical);
      criticals.setAttribute("class", "txtCritical");
      caseDiv.appendChild(criticals);

      let numOfCriticals = document.createElement("p");
      let numOfCritical = document.createTextNode(contentJSON[x].critical);
      numOfCriticals.appendChild(numOfCritical);
      caseDiv.appendChild(numOfCriticals);
    }
  }
};

req.open("GET", "https://corona.lmao.ninja/countries", true);
req.setRequestHeader("Content-type", "application/json");
req.send();

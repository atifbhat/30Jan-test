console.log("Started practising the api");



let btn = document.getElementById("btn");
let table = document.getElementById("table");



document.getElementById("btn").addEventListener("click", getData);

function getInputValue(data) {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    var inputVals = document.getElementById("myInputs").value;
    var sum = inputVal + inputVals;

    // Displaying the value
    // alert(sum);
    return sum;
}



function getData() {
    var n = getInputValue();

    console.log(n);


    document.getElementById("btn").classList.add("dnone");
    document.getElementById("table_header").classList.remove("dnone");

    console.log("starting get data");
    url = `http://universities.hipolabs.com/search?country=${n}`;

    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.json();

    }).then((data) => {
        console.log("inside second then");
        console.log(data);


        for (i = 0; i < data.length; i++) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");

            var country = document.createElement("td");
            var state = document.createElement("td");
            var alpha = document.createElement("td");

            // var td = document.createElement("td");
            td.innerText = data[i].name;
            country.innerText = data[i].country;
            state.innerText = data[i]["state-province"];
            alpha.innerText = data[i].alpha_two_code;

            // td.innerText = data[i].country;
            // td.innerText = data[i]['state-province']; 
            // tr.appendChild(td);
            // tr.appendChild(td);
            tr.appendChild(td);
            tr.appendChild(country);
            tr.appendChild(state);
            tr.appendChild(alpha);

            table.appendChild(tr);


        }

    })



}
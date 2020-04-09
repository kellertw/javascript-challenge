// copy data from data.js
var tableData = data;
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $search = document.querySelector("button");

buildTable();
$search.addEventListener("click", handleSearchButtonClick);

function buildTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
        //append a table to your web page
        var address = tableData[i];
        var fields = Object.keys(address);
        //then adds new rows of data for each UFO sighting
        var $row = $tbody.insertRow(i);
        for(var j = 0; j< fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        };
    };
};    

//build search table
function handleSearchButtonClick() {
    var filterDate = $dateInput.value;
    tableData = data;
    if (filterDate) {
        tableData = data.filter(address => address.datetime === filterDate);
        $dateInput.value = "";
    };
    buildTable();
};
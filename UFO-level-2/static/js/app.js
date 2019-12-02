// from data.js
var tableData = data;
var tbody = d3.select("tbody");
function newTableData(data){
    
    data.forEach((ufoData) => {
        //console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
        //console.log(key, value);
        //   Append a cell to the row for each value
        // in object
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
newTableData(tableData);

// YOUR CODE HERE!

function eventHandler(event){
    var filteredData = tableData;
    
    filteredData = applyFilter("datetime", filteredData, (row, value) => row.datetime === value);
    filteredData = applyFilter("city", filteredData, (row, value) => row.city === value);
    filteredData = applyFilter("state", filteredData, (row, value) => row.state === value);
    filteredData = applyFilter("country", filteredData, (row, value) => row.country === value);
    filteredData = applyFilter("shape", filteredData, (row, value) => row.shape === value);

    tbody.text("");
    newTableData(filteredData);
}

function applyFilter(id, tableData, predicate) {
    var field = d3.select("#" + id);
    var value = field.property("value");
    if(value)
    {
        return tableData.filter(data => predicate(data, value));
    }
    return tableData;
}

  // Input fields can trigger a change event when new text is entered.
var button = d3.selectAll("filter-btn");
button.on("click", eventHandler);

var filters = document.getElementsByClassName("filter");
for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener("change", eventHandler);
}
// from data.js
var tableData = data;
var tbody = d3.select("tbody");
function newTableData(data){
    
    data.forEach((ufoData) => {
        console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
        console.log(key, value);
        //   Append a cell to the row for each value
        // in the object
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
newTableData(tableData);

// YOUR CODE HERE!
var inputField = d3.select("#datetime");
var button = d3.selectAll("filter-btn");
function eventHandler(){
    d3.event.preventDefault();
    tbody.text("");
    var filteredTable = tableData.filter(data => data.datetime === inputField.property("value"));
    console.log(filteredTable);
    newTableData(filteredTable);
}
  
  // Input fields can trigger a change event when new text is entered.
button.on("click", eventHandler);
inputField.on("change", eventHandler);
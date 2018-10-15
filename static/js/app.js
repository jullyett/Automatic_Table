// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });  

function filterDate(){

  // Declare variables

  var input = document.getElementById("datetime");

  var filterValue = input.value.toUpperCase();
   
  var table = document.getElementById("ufo-table");

  var tr = table.getElementsByTagName("tr");

  //  Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++){
    var td = tr[i].getElementsByTagName("td")[0];
      //if matched
      if(td){
        if(td.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
}
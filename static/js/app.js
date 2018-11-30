var tableData = data;

var submit = d3.select("#filter-btn");



submit.on("click", function(){
	d3.event.preventDefault();
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");
	
	
	

	console.log(inputValue);
	console.log(tableData);

	var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

	console.log(filteredData);
	buildtable(filteredData);
}
);

function buildtable(table){
	var tbody = d3.select("tbody");
	tbody.html("");
	console.log(table);
	table.forEach(function(ufoReport){
	console.log(ufoReport)
	});

	table.forEach(function(ufoReport){
		var row = tbody.append("tr");

		Object.entries(ufoReport).forEach(function([key, value]) {
			console.log(key, value);
			var cell = tbody.append("td");
			cell.text(value);
		});
	});

};
buildtable(data);
//function make table
// clear table
// for each/append
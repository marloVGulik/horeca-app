var addNew = true;
var orders = [];

while(addNew) {
	var added = prompt("Wat wilt U drinken/eten?");
	if(added == "fris" || added == "Fris") {
		orders[orders.length] = "Fris";
		alert("Fris bij de bestelling gedaan");
	} else if(added == "bier" || added == "Bier" || added == "pils" || added == "Pils") {
		orders[orders.length] = "Bier";
		alert("Bier bij de bestelling gedaan");
	} else if(added == "wijn" || added == "Wijn") {
		orders[orders.length] = "Wijn";
		alert("Wijn bij de bestelling gedaan");
	} else if(added == "bitterballen" || added == "Bitterballen") {
		var amount = prompt("Hoeveel bitterballen wilt U hebben? (8 of 16)");
		if(amount == 8) {
			orders[orders.length] = "8 bitterballen";
			alert("8 bitterballen bij de bestelling gedaan");
		} else if(amount == 16) {
			orders[orders.length] = "16 bitterballen";
			alert("16 bitterballen bij de bestelling gedaan");
		} else {
			alert("Geen bitterballen bij de bestelling gedaan omdat je geen 8 of 16 heb ingevoerd");
		}
	} else if(added == "stop" || added == "Stop") {
		alert("Bestellen gestopt");
		addNew = false;
	} else {
		alert("Niks bij de bestelling gedaan, verkeerde invoer gedaan");
	}
}

var itemCount = 0;
orders.forEach(function(item) {
	var listItem = document.createElement("LI");
	listItem.appendChild(document.createTextNode(item));
	document.getElementById("List").appendChild(listItem);
});
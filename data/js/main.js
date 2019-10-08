var addNew = true;
var orders = [];
var totalPrice = 0.0;

while(addNew) {
	var added = prompt("Wat wilt U drinken/eten?");
	if(added == "fris" || added == "Fris") {
		orders[orders.length] = "Fris, \u20AC1.50";
		totalPrice += 1.50;
		alert("Fris bij de bestelling gedaan");
	} else if(added == "bier" || added == "Bier" || added == "pils" || added == "Pils") {
		orders[orders.length] = "Bier, \u20AC2.50";
		totalPrice += 2.50;
		alert("Bier bij de bestelling gedaan");
	} else if(added == "wijn" || added == "Wijn") {
		orders[orders.length] = "Wijn, \u20AC3.50";
		totalPrice += 3.50;
		alert("Wijn bij de bestelling gedaan");
	} else if(added == "snack" || added == "Snack") {
		var amount = prompt("Hoeveel bitterballen wilt U hebben? (8 of 16)");
		if(amount == 8) {
			orders[orders.length] = "8 bitterballen, \u20AC1.50";
			totalPrice += 1.50;
			alert("8 bitterballen bij de bestelling gedaan");
		} else if(amount == 16) {
			orders[orders.length] = "16 bitterballen, \u20AC2.50";
			totalPrice += 2.50;
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

document.getElementById("price").innerHTML = "\u20AC" + totalPrice;
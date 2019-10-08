var addNew = true;
var orders = [];
var totalPrice = 0.0;

while(addNew) {
	var added = prompt("Wat wilt U drinken/eten?");
	if(added == "fris" || added == "Fris") {
		addItems("Fris", 1.5);
	} else if(added == "bier" || added == "Bier" || added == "pils" || added == "Pils") {
		addItems("Bier", 2.5);
	} else if(added == "wijn" || added == "Wijn") {
		addItems("Wijn", 3.5);
	} else if(added == "snack" || added == "Snack") {
		var amount = prompt("Hoeveel bitterballen wilt U hebben? (8 of 16)");
		if(amount == 8) {
			addItems("8 bitterballen", 1.5);
		} else if(amount == 16) {
			addItems("16 bitterballen", 2.5);
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

function addItems(thingToAdd, priceOfThing) { // Function to easily add stuff
	var amountToAdd = prompt("Hoeveel " + thingToAdd + " wil je bestellen?");
	if(amountToAdd > 0) {
		console.log("Amount is " + amountToAdd);
		var localPrice = 0;
		localPrice += amountToAdd * priceOfThing;
		orders[orders.length] = amountToAdd + " " + thingToAdd + ", \u20AC" + localPrice;
		alert(amountToAdd + " " + thingToAdd + " bij de bestelling gedaan");
		totalPrice += localPrice;
	}
}

var itemCount = 0;
orders.forEach(function(item) { // Create list item with the right properties
	var listItem = document.createElement("LI");
	listItem.appendChild(document.createTextNode(item));
	document.getElementById("List").appendChild(listItem);
});

document.getElementById("price").innerHTML = "\u20AC" + totalPrice; // Print total price on screen
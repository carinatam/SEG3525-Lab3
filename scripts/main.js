// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function populateListProductChoices(slct1, slct2) {

	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	

	s2.innerHTML = "";

	var optionArray = restrictListProducts(products);
	optionArray.sort(compare);

	for(i = 0; i<optionArray.length; i++) {

		console.log("optionArray[i]: ", optionArray[i]);

		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var productImage = optionArray[i].img;

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.price = productPrice;
		s2.appendChild(checkbox);


		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " - $" + productPrice));
		s2.appendChild(label);

		s2.appendChild(document.createElement('br'));
		var image = document.createElement('img');
		image.src = productImage;
		image.setAttribute("height", "200px");
		image.setAttribute("width", "200px");
		s2.appendChild(image);
		s2.appendChild(document.createElement('br'));
		s2.appendChild(document.createElement('hr'));


	}
}

function compare(a, b){
	if(a.price < b.price){
		return -1;
	}
	else if(a.price > b.price){
		return 1;
	}
	return 0;
}

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "Here is your cart.<br><br>You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value + " - $" + ele[i].price));
			para.appendChild(document.createElement("br"));
			// para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}


	if(chosenProducts.length == 0){
		para.innerHTML = "Your shopping cart is empty. Please add at least one item to your cart before checking out.";
	}
		
	// add paragraph and total price
	
	if(chosenProducts.length > 0){
		// c.appendChild(document.createTextNode("Total Price is: $" + getTotalPrice(chosenProducts)));
		para.appendChild(document.createElement("br"));
		para.appendChild(document.createTextNode("Total Price is: $" + getTotalPrice(chosenProducts)));
	}
	c.appendChild(para);
		
}
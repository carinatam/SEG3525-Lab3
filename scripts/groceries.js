	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic broccoli",
		lactoseFree: true,
		nutFree: true,
		vegan: false,
		organic: true,
		price: 1.99,
		img: "photos/broccoli.png",
	},
	{
		name: "Bread",
		lactoseFree: false,
		nutFree: true,
		vegan: true,
		organic: false,
		price: 2.35,
		img: "photos/bread.png"
	},
	{
		name: "Organic salmon",
		lactoseFree: true,
		nutFree: true,
		vegan: false,
		organic: true,
		price: 9.99,
		img: "photos/salmon.jpg"
	},
	{
		name: "Tomatoes",
		lactoseFree: true,
		nutFree: true,
		vegan: true,
		organic: false,
		price: 2.99,
		img: "photos/tomato.jpg"
	},
	{
		name: "New York Striploin Steak",
		lactoseFree: true,
		nutFree: true,
		vegan: false,
		organic: false,
		price: 35.99,
		img: "photos/steak.jpg"
	},
	{
		name: "Skim milk",
		lactoseFree: false,
		nutFree: true,
		vegan: false,
		organic: false,
		price: 3.99,
		img: "photos/milk.jpg"
	},
	{
		name: "Organic eggs",
		lactoseFree: true,
		nutFree: true,
		vegan: false,
		organic: true,
		price: 11.99,
		img: "photos/eggs.jpg"
	},
	{
		name: "Organic brown rice pasta",
		lactoseFree: true,
		nutFree: true,
		vegan: true,
		organic: true,
		price: 4.99,
		img: "photos/pasta.jpg"
	},
	{
		name: "Organic avocado",
		lactoseFree: true,
		nutFree: true,
		vegan: false,
		organic: true,
		price: 4.99,
		img: "photos/avocado.jpeg"
	},
	{
		name: "Organic pistachio ice cream",
		lactoseFree: false,
		nutFree: false,
		vegan: false,
		organic: true,
		price: 14.99,
		img: "photos/icecream.png"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
	let all_products = [];
	for (let i=0; i<prods.length; i+=1) { // go through each individual product
		// set default all ingredients are included to true
		let included = true;
		if ((document.querySelector(".lactoseFreeCheckbox").checked) && (prods[i].lactoseFree == false)){
			included = false;
		}
		else if ((document.querySelector(".nutFreeCheckbox").checked) && (prods[i].nutFree == false)){
			included = false;
		}
		else if((document.querySelector(".veganCheckbox").checked) && (prods[i].vegan == false)) {
			included = false;
		}
		else if ((document.querySelector(".organicCheckbox").checked) && (prods[i].organic == false)){
			included = false;
		}
		if(included){
			all_products.push({name: prods[i].name, price: prods[i].price, img: prods[i].img});
		}
		
	}
	console.log("restrictListProducts: ", all_products);
	return all_products;
}

// TO DO: CHANGE THIS FUNCTION

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

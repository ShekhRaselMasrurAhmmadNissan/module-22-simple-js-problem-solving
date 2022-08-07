/**
 * @description
 * @author Shekh Rasel Masrur Ahmmad
 * @date 08/08/2022
 * @param {Array} shoppingCart
 * @returns {Number}
 */
function totalCostCalculate(shoppingCart) {
	let totalCost = 0;
	for (let i = 0; i < shoppingCart.length; i++) {
		totalCost += shoppingCart[i].price * shoppingCart[i].quantity;
	}
	return totalCost;
}

const shoppingCart = [
	{
		name: 'shoe',
		price: 1200,
		quantity: 5,
	},
	{
		name: 'shirt',
		price: 2200,
		quantity: 5,
	},
	{
		name: 'pant',
		price: 3700,
		quantity: 5,
	},
	{
		name: 'belt',
		price: 600,
		quantity: 5,
	},
];

let totalCost = totalCostCalculate(shoppingCart);
console.log('Your total expense is', totalCost, 'BDT. Kindly pay the bill.');

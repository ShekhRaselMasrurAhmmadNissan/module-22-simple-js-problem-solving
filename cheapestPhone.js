/**
 * @description
 * @author Shekh Rasel Masrur Ahmmad
 * @date 08/08/2022
 * @param {Array} phones
 */
function findCheapestPhone(phones) {
	let cheapest = phones[0];
	for (let i = 0; i < phones.length; i++) {
		// let phone = phones[i];
		if (cheapest.price > phones[i].price) {
			cheapest = phones[i];
		}
	}
	return cheapest;
}

const PHONES = [
	{
		name: 'Samsung',
		camera: '12MP',
		storage: '32gb',
		price: 36000,
		color: 'Silver',
	},
	{
		name: 'Walton',
		camera: '10MP',
		storage: '32gb',
		price: 22000,
		color: 'Silver',
	},
	{
		name: 'iPhone',
		camera: '12MP',
		storage: '32gb',
		price: 82000,
		color: 'Silver',
	},
	{
		name: 'Xiaomi',
		camera: '12MP',
		storage: '32gb',
		price: 52000,
		color: 'Silver',
	},
	{
		name: 'Oppo',
		camera: '12MP',
		storage: '32gb',
		price: 20000,
		color: 'Silver',
	},
	{
		name: 'Nokia',
		camera: '12MP',
		storage: '32gb',
		price: 44000,
		color: 'Silver',
	},
	{
		name: 'HTC',
		camera: '12MP',
		storage: '32gb',
		price: 62000,
		color: 'Silver',
	},
];

let cheapestPhone = findCheapestPhone(PHONES);
console.log(cheapestPhone);

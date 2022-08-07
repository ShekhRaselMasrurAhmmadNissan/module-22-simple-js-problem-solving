/**
 * 1. if ticket number is less than 100, per ticket price is 100
 * 2. if ticket number is more than 100 but less than 200,first 100 ticket will be 100 taka per ticket  and rest price is 90 Taka
 * 3. if more than 200:
 * 		first 100 --> 100 Taka
 * 		101-200 --> 90 Taka
 * 		200 - Rest --> 70 Taka
 */

function calculateTicketPrice(ticketQuantity) {
	const firstHundredRate = 100;
	const secondHundredRate = 90;
	const restRate = 70;
	let price = 0;
	if (ticketQuantity <= 100) {
		price = ticketQuantity * firstHundredRate;
		return price;
	} else if (ticketQuantity <= 200) {
		let firstHundred = 100 * firstHundredRate;
		let secondHundred = (ticketQuantity - 100) * secondHundredRate;
		price = firstHundred + secondHundred;
		return price;
	} else {
		let firstHundred = 100 * firstHundredRate;
		let secondHundred = 100 * secondHundredRate;
		let restTicket = (ticketQuantity - 200) * restRate;
		price = firstHundred + secondHundred + restTicket;
		return price;
	}
}

let price = calculateTicketPrice(120);
console.log('Total Ticket Price is:', price);

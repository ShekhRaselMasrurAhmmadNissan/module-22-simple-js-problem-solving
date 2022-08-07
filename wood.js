/**
 * -->-->>-----Requirements------>>---
 * Fixed Values
 * 1. Chair -> 3 S.Ft.
 * 2. Table -> 10 S.Ft.
 * 3. Bed -> 50 S.Ft.
 */

/**
 * @function woodCalculator
 * @description This function will calculate the required wood to do some task
 * @author Shekh Rasel Masrur Ahmmad
 * @date 08/08/2022
 * @param {Number} chairQuantity
 * @param {Number} tableQuantity
 * @param {Number} bedQuantity
 */
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
	const perChairWoodRequired = 3;
	const perTableWoodRequired = 10;
	const perBedWoodRequired = 50;

	let totalWoodRequired =
		chairQuantity * perChairWoodRequired +
		tableQuantity * perTableWoodRequired +
		bedQuantity * perBedWoodRequired;
	return totalWoodRequired;
}

console.log('Total Wood Required', woodCalculator(2, 1, 2), 'S.Ft.');

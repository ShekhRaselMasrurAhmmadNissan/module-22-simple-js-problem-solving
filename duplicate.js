/**
 * @description
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {Array} names
 */
function removeDuplicate(names) {
	let uniqueNames = [];
	for (let i = 0; i < names.length; i++) {
		if (!uniqueNames.includes(names[i])) {
			uniqueNames.push(names[i]);
		}
	}
	return uniqueNames;
}
const names = [
	'abul',
	'babul',
	'cabul',
	'dabul',
	'ebul',
	'babul',
	'abul',
	'kabul',
	'gabul',
	'cabul',
	'babul',
	'abul',
	'abul',
];
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

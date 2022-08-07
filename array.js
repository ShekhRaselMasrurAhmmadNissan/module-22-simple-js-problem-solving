const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
	id: 121,
	class: 11,
	name: 'Agun',
};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// console.log(typeof friends);

/**
 * Check Array or not using Array.isArray()
 */
console.log(Array.isArray(friends));

/**
 * To check something is in the Array or not
 */
console.log(friends.includes(21));

/**
 * Concat-> Marge two array together
 */

const newFriends = [12, 13, 11, 13];
const allFriends = newFriends.concat(friends);
console.log(allFriends);

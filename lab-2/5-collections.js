const phonebook = [
	{ name: "Olga", phone: "+380970008989" },
	{ name: "Ekaterina", phone: "+380630000000" },
	{ name: "Emma", phone: "+380500000001" },
	{ name: "Robert", phone: "+380678888888" },
	{ name: "Jekson", phone: "+3806390909090" },
];

let findPhoneByName = (name) => {
	for (let person of phonebook) {
		if (person.name === name) return person.phone;
	}
};

console.log(findPhoneByName("Olga"));

const createHash = (people) => {
	const hash = {};
	for (let person of people) {
		hash[person.name] = person.phone;
	}
	return hash;
};

phonebookHash = createHash(phonebook);

findPhoneByName = (name) => {
	return phonebookHash[name];
};

console.log(findPhoneByName("Robert"));

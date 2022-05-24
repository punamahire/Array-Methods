const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
const insectusContacts = contacts.filter(contact => {
    return (contact.company === "INSECTUS");
})
console.log("Contacts that work at Insectus:", insectusContacts);

//2. an array all of the contacts, with only the name property
const names = contacts.map(contact => contact.name);
console.log("Names of contacts:", names);

//3. an array of all of the contacts over the age of 50
const contactsAgeOverFifty = contacts.filter(contact => contact.age > 50);
console.log("Contacts with age over 50:", contactsAgeOverFifty);

//4. the first ten contacts when alphabetically ordered by name
const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
const firstTenContacts = sortedContacts.slice(0, 10);
console.log("First 10 contacts sorted by name:", firstTenContacts);

//5. the oldest person's name
const contactsByReverseAge = contacts.sort((a, b) => b.age - a.age);
console.log("Oldest person from contacts:", contactsByReverseAge[0].name);

// Try using Math.Max or reduce to do above #5

//6. the contact id with the name Isabella Burke
const foundContact = contacts.find(contact => {
    if (contact.name === "Isabella Burke") {
        return contact;
    }
});
console.log("Isabella Burke's ID:", foundContact.id);

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
// let contactNames = [];

contacts.map(contact => {
    contact['firstName'] = contact.name.split(" ")[0];
    contact['lastName'] = contact.name.split(" ")[1];
    // contactNames.push({ firstName: contact.name.split(" ")[0], lastName: contact.name.split(" ")[1] })
});
// console.log("fullNames:", contacts); this works but output too long


//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

let allFriends = contacts.map(contact => {
    contact.friends.forEach(f => {
        if (contact['friendObj'] === undefined) {
            contact['friendObj'] = [contacts.find(c => c.id === f)];
        } else {
            contact['friendObj'].push(contacts.find(c => c.id === f));
        }
    })
});

console.log('-----------------------------------');
//console.log(contacts); this works but output is too long to print

//9. the average age of the contacts
let sumOfAges = 0;
const allAges = contacts.map(contact => {
    sumOfAges += contact.age;
});
const avgAge = sumOfAges / contacts.length;
console.log("Agerage age of contacts:", avgAge);

// Using reduce method
let ages = contacts.map(contact => contact.age);
const avg = ages.reduce((a, b) => (a + b), 0) / ages.length;
console.log("Avg age of contacts using reduce method", avg);

//10. the median age of the contacts
const contactsAges = contacts.map(contact => contact.age);
function median(ages) {
    const sorted = ages.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}
console.log(median(contactsAges));
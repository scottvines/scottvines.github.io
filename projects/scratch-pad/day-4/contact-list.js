// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      2. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      3. length(): returns the number of contacts within the list.
 *      4. find(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 * 
 * BONUS : add a all() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The all() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.add(); // => Max Gaudin
 *                                 John Fraboni
 *                                 Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#contact-list"
 */
 
// var contacts = require('./data/contact.json');

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        addContact: function(contact) {
            contacts.push(contact);
        },
        
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i] === contact) {
                    contacts.splice(i, 1);
                }
            }
                
            
            
        },
        
        find: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
        
        length: function() {
            return contacts.length;
        },
        
        all: function() {
            var allNames = '';
            for (var i = 0; i < contacts.length - 1; i++) {
                allNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
               
                
                
                
        } allNames += contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast;
        return allNames;
        
        
    
}
};
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
const findTheOldest = function(people) {
    return people.reduce((finalName, person) => {
        let yob = person.yearOfBirth, yod = new Date().getFullYear();
        if('yearOfDeath' in person) {
            yod = person.yearOfDeath;
        }

        let myob = finalName.yearOfBirth, myod = new Date().getFullYear();
        if('yearOfDeath' in finalName) {
            myod = finalName.yearOfDeath;
        }

        if(myod - myob < yod - yob) {

            finalName = person;
        }

        return finalName;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;

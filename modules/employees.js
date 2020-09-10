import {modelController} from './model.js'

export const employeeController = (function (data) {

    class Employee {
        constructor(firstName,lastName, lvl, experience) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.lvl = lvl;
            this.experience = experience;
        }

        experienceGained(){
            //Add experience to employee
        }

    }

    class Chef extends Employee {
        constructor(firstName,lastName,lvl,experience,cookingSpeed,title="Chef") {
            super(firstName,lastName,lvl,experience);
            this.title = title;
            this.cookingSpeed = cookingSpeed

        }
        cookingSkills() {
            // Effects cooking speed based on level
        }

    }

    class Prep extends Employee {
        constructor(firstName,lastName,lvl,experience,prepSpeed,title="Prep") {
            super(firstName,lastName,lvl,experience);
            this.title = title;
            this.prepSpeed = prepSpeed

        }
        prepSkills() {
            // Effects cooking speed based on level
        }
    }

    return{
        createChef(firstName,lastName,lvl,experience,cookingSpeed){
            let chef;
            chef = new Chef(firstName,lastName,lvl,experience,cookingSpeed);
            data.employeesForHire.push(chef);
           
        },
        createPrep(firstName,lastName,lvl,experience,prepSpeed){
            let prep;
            prep = new Prep(firstName,lastName,lvl,experience,prepSpeed)
            data.employeesForHire.push(prep);
           
        }
    }
    

})(modelController.data)
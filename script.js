import {modelController} from './modules/model.js'

import {UIController} from './modules/uiController.js'

import {employeeController} from './modules/employees.js'



const controller = (function (data, dom, createChef,createPrep) {
    const addInventory = () => {
        let html;
        for (const inventory in data.inventory) {
            html = `<li class="list-group-item">${inventory}: <span class="level">QTY: ${data.inventory[inventory]}</span></li>`;
            dom.inventoryList.innerHTML += html;
        }

    }

    const addRecipe = () => {
        // let html;
        // data.employees.forEach(element => {
        //     console.log(element['name'] + ' ' + element['lvl'] + ' ' + element['job'])
        //     html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
        //    dom.menu.innerHTML += html;
        // });
    }

    const addEmployee = () => {
        let html;
        data.employees.forEach(element => {
            console.log(element['firstName'] + ' ' + element['lastName'] + ' ' + element['lvl'] + ' ' + element['title'])
            html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
            dom.employeeList.innerHTML += html;
        });

    }

    const addEmployeeForHire = () =>{
        data.employeesForHire.forEach(element => {
            console.log(element['firstName'] + ' ' + element['lastName'] + ' ' + element['lvl'] + ' ' + element['title'])
            html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
            dom.hireList.innerHTML += html;
        });
    }

    const playersLevels = () => {
        // Checks players level and sets work time based on levels
    }

    const customerOrders = () => {
        /* 
        - Customers choose order index from orders object and pushes it into list

        - Customer appends random countdown to order object that count downs.

        - If order is completed before countdown then the time remaining is rated against percentage
        If above 70% payment is high, if above 40 payment is mediumm, if below 40 payment is low. if percentage is 0 no payment is recieved
        */
        ordersBeingProcess();
    }

    const ordersBeingProcess = (orders) => {
        // Orders are pushed from customerOrder and processes by chef and preps
        //Orders are passed to ordersCompleted

        ordersCompleted(); // Competed orders are passed as argument to ordersCompleted
    }

    const ordersCompleted = () => {

    }

    const buyInventory = () => {
        //Push purchased inventory into data.inventory
    }

    const employeeGenerator = () =>{

        const names = {
            firstNames:["Henry","Charlie","Krystal","Laura","Adam","Chris"],
            lastNames:["Byers","Molley","Hook","Bate","Ponce","Jenkin","Megan"],
        }

       

        const createRandomChef = () =>{
             // Get rid of repeating code in near future
   
            let randomValues = {
                randomFirst:Math.floor(Math.random() * names.firstNames.length),
                randomLast: Math.floor(Math.random() * names.lastNames.length),
                randomLvl: Math.floor(Math.random() * 25), 
            }
    
            const stats = {
                randomScore: randomValues.randomLvl * 1000,
                randomSpeed: randomValues.randomLvl * 1.5
            }

            createChef(names.firstNames[randomValues.randomFirst],names.lastNames[randomValues.randomLast],randomValues.randomLvl,stats.randomScore,stats.randomSpeed);
        }

        const createRandomPrep = () => {
            // Get rid of repeating code in near future
            let randomValues = {
                randomFirst:Math.floor(Math.random() * names.firstNames.length),
                randomLast: Math.floor(Math.random() * names.lastNames.length),
                randomLvl: Math.floor(Math.random() * 25), 
            }
    
            const stats = {
                randomScore: randomValues.randomLvl * 1000,
                randomSpeed: randomValues.randomLvl * 1.5
            }
            
            createPrep(names.firstNames[randomValues.randomFirst],names.lastNames[randomValues.randomLast],randomValues.randomLvl,stats.randomScore,stats.randomSpeed);
        }

            
        

      for(let i = 0; i < 5; i++){
            createRandomChef();
            createRandomPrep();
            
      }

      console.log(data.employeesForHire)
        
    }

    const purgeHire = () =>{
        // for(let i = 0; i < (data.employeesForHire.length * 3); i++){
        //     data.employeesForHire.pop();
           
        // }
        data.employeesForHire.length = 0;
        console.log(data.employeesForHire)
    }

  

    const events = () => {
        console.log('Day has started');
        // customerOrders();
                   



    }

    const init = () => {
        
        addInventory();
        addEmployee();
    }

    dom.hireBtn.addEventListener('click',employeeGenerator);
    dom.hireCloseBtn.addEventListener('click',purgeHire);
    dom.startDay.addEventListener('click', events);

    return {
        init: init
    }

})(modelController.data, UIController.DOM,employeeController.createChef,employeeController.createPrep);


controller.init();
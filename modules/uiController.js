
export const UIController = (function () {
    let DOM = {
        money: document.querySelector("#money"),
        inventoryList: document.querySelector("#inventory"),
        employeeList: document.querySelector("#employee"),
        customerOrders: document.querySelector("#customer_orders"),
        ordersProcessed: document.querySelector("#orders_processed"),
        startDay: document.querySelector("#start-day"),
        menu: document.querySelector("#menu"),
        hireList:document.querySelector("#hire-list"),
        hireBtn:document.querySelector("#hire-btn"),
        hireCloseBtn:document.querySelector("#hire-close")
    }

    

    return {
        DOM: DOM,
        
         addInventory(data) {
            let html;
            for (const inventory in data.inventory) {
                html = `<li class="list-group-item">${inventory}: <span class="level">QTY: ${data.inventory[inventory]}</span></li>`;
               DOM.inventoryList.innerHTML += html;
            }
    
        },
    
         addRecipe() {
            // let html;
            // data.forEach(element => {
            //     console.log(element['name'] + ' ' + element['lvl'] + ' ' + element['job'])
            //     html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
            //   DOM.menu.innerHTML += html;
            // });
        },
    
         addEmployee(data) {
            let html;
            data.forEach(element => {
                console.log(element['firstName'] + ' ' + element['lastName'] + ' ' + element['lvl'] + ' ' + element['title'])
                html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
               DOM.employeeList.innerHTML += html;
            });
    
        },
    
         addEmployeeForHire(data){
            let html;
            data.forEach(element => {
                console.log(element['firstName'] + ' ' + element['lastName'] + ' ' + element['lvl'] + ' ' + element['title'])
                html = `<li class="list-group-item">${element['title']}: ${element['firstName']} ${element['lastName']} <span class="level">LVL: ${element['lvl']}</span></li>`;
               DOM.hireList.innerHTML += html;
            });
        }

        

    }
})();
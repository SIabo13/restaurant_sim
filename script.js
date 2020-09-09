


  const modelController = (function(){
    class Employee {
        constructor(name,lvl) {
          this.name = name;
          this.lvl = lvl;
        }
       
      }
    
      class Chef extends Employee{
          constructor(cookingSpeed){
              super(name);
              this.cookingSpeed = cookingSpeed
    
          }
          cooking(){
    
          }
      }
    
      class Prep extends Employee{
    
      }


    let data = {
        inventory:{
            carrots:12,
            steak:2,
            rice: 3,
            beefPatties:10,
            wang:50
        },
        money:5000,
        customerOrders:[],
        ordersBeingProcess:[],
        ordersCompleted:[],
        employees: [
            {
                name:'Tom',
                lvl: 5,
                job:'Chef'
            },
            {
                name:'Krystal',
                lvl: 13,
                job:'Prep'
            },
            {
                name:'Charles',
                lvl:23,
                job:'Chef'
            }
        ],

        recipes:{
            burger:{
                ingredients:['1 set of buns','1 beef patty','1 lettuce leaf']
            },
            spaghetti:{
                ingredients:['1 pack of noodles','4 meatballs',"10 fl oz"]
            },
            chickenTenderMeal:{
                ingredients:["6 chicken tenders","1 pack"]
            },
            steakDinner:{
                ingredients:["10 oz steak","1 potato","3 cloves"]
            }
        },

        store:{
            potato:35,
            rice: 12,
            chicken: 15,
            buns: 2,
            beefPatties: 9,
            lettuce: 2
        },
        orders:{
            burger:{
                ingredients:['beef patty', 'buns','lettuce'],
                prepTime: 30,
                cookTime: 30
                
            },
            steakDinner:{
                ingredients:['beef steak','potato','broccoli'],
                prepTime: 10,
                cookTime:60
            }
        }
        }

        return{
            data:data
        }
    })();
    

  const UIController = (function(){
    let DOM = {
        money:document.querySelector("#money"),
        inventoryList: document.querySelector("#inventory"),
        employeeList: document.querySelector("#employee"),
        customerOrders:document.querySelector("#customer_orders"),
        ordersProcessed:document.querySelector("#orders_processed"),
        startDay:document.querySelector("#start-day"),
        menu:document.querySelector("#menu")
        }
        return {
            DOM:DOM
        }
  })();

 


  const controller = (function(data,dom){
    const addInventory = () =>{
        let html;
        for (const inventory in data.inventory) {
            html = `<li class="list-group-item">${inventory}: <span class="level">QTY: ${data.inventory[inventory]}</span></li>`;
            dom.inventoryList.innerHTML += html;
          }
        
    }

    const addRecipe = () =>{
        // let html;
        // data.employees.forEach(element => {
        //     console.log(element['name'] + ' ' + element['lvl'] + ' ' + element['job'])
        //     html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
        //    dom.menu.innerHTML += html;
        // });
    }

    const addEmployee = () =>{
        let html;
        data.employees.forEach(element => {
            console.log(element['name'] + ' ' + element['lvl'] + ' ' + element['job'])
            html = `<li class="list-group-item">${element['job']}: ${element['name']} <span class="level">LVL: ${element['lvl']}</span></li>`;
           dom.employeeList.innerHTML += html;
        });

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

        ordersCompleted();// Competed orders are passed as argument to ordersCompleted
    }

    const ordersCompleted = () =>{

    }

    const buyInventory = () => {
        //Push purchased inventory into data.inventory
    }

    const events = () => {
        console.log('Day has started');
        customerOrders();
        
        
        
    }

    const init = () =>{
        addInventory();
        addEmployee();
    }
    
    
    dom.startDay.addEventListener('click', events);

    return{
        init:init
    }

  })(modelController.data, UIController.DOM);
 
  controller.init();
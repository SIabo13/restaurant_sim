


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
        employees: [],

        meals:[
            
        ],

        store:{
            potato:35,
            rice: 12,
            chicken: 15,
            buns: 2,
            beefPatties: 9,
            lettuce: 2
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
        employees: document.querySelector("#employees"),
        customerOrders:document.querySelector("#customer_orders"),
        ordersProcessed:document.querySelector("#orders_processed"),
        startDay:document.querySelector("#start-day")
        }
        return {
            DOM:DOM
        }
  })();

 


  const controller = (function(data,dom){
    const addInventory = () =>{
        let html;
        for (const inventory in data.inventory) {
            html = `<li class="list-group-item">${inventory}: <span>${data.inventory[inventory]}</span></li>`;
            dom.inventoryList.innerHTML += html;
          }
        
    }

    const buyInventory = () => {
        //Push purchased inventory into data.inventory
    }

    const events = () => {
        console.log('Day has started');
        
        
    }

    const init = () =>{
        addInventory();
    }
    
    
    dom.startDay.addEventListener('click', events)

    return{
        init:init
    }

  })(modelController.data, UIController.DOM);
 
  controller.init();
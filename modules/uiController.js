
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
        DOM: DOM
    }
})();
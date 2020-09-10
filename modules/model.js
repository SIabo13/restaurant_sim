export const modelController = (function () {


    let data = {
        inventory: {
            carrots: 12,
            steak: 2,
            rice: 3,
            beefPatties: 10,
            wang: 50
        },
        money: 5000,
        customerOrders: [],
        ordersBeingProcess: [],
        ordersCompleted: [],
        employees: [],
        employeesForHire:[],

        recipes: {
            burger: {
                ingredients: ['1 set of buns', '1 beef patty', '1 lettuce leaf']
            },
            spaghetti: {
                ingredients: ['1 pack of noodles', '4 meatballs', "10 fl oz"]
            },
            chickenTenderMeal: {
                ingredients: ["6 chicken tenders", "1 pack"]
            },
            steakDinner: {
                ingredients: ["10 oz steak", "1 potato", "3 cloves"]
            }
        },

        store: {
            potato: 35,
            rice: 12,
            chicken: 15,
            buns: 2,
            beefPatties: 9,
            lettuce: 2
        },
        orders: {
            burger: {
                ingredients: ['beef patty', 'buns', 'lettuce'],
                prepTime: 30,
                cookTime: 30

            },
            steakDinner: {
                ingredients: ['beef steak', 'potato', 'broccoli'],
                prepTime: 10,
                cookTime: 60
            }
        }
    }

    return {
        data: data
    }
})();
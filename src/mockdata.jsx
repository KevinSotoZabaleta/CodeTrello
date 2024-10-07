import uuid from "react-uuid"

const mockData = {
    lists: {
    "01list":{
        id: "01list",
        title: "To do",
        cards: [{
            id: "01card",
            title: "Comprar lechuga"
        }, {
            id: "02card",
            title: "comprar tomate"
        }, {
            id: "03card",
            title: "comprar pan"
        }
    ]
    },
    "02list":{
        id: "02list",
        title: "In progress",
        cards: []
    }
},
    listIds: ["01list","02list"]
}

export default mockData
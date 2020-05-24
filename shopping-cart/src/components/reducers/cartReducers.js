const initState = {
    items: [
        {id:1,title:'Item 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:50},
        {id:2,title:'Item 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:100},
        {id:3,title:'Item 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:150},
        {id:4,title:'Item 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:200},
        {id:5,title:'Item 5', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:250},
        {id:6,title:'Item 6', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:300}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;
const initState ={
    posts:[
        {id:1,title: "Lorem Ipsum is text typesetting industry", body:" Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        {id:2,title: "printing and typesetting industry", body:" Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        {id:3,title: "simply dummy text of the printing and typesetting industry", body:" Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },

    ]
}
const rootReducer = (state=initState, action)=>{
    return state;
}

export default rootReducer;
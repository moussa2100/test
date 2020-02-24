const initstate = {
    projects: [
        { id:1,title: "title 111" ,content: "content 111" },
        { id:2,title: "title 1122" ,content: "content 222222" },
        { id:3,title: "title 3333" ,content: "content 33333" },
    ]
};

const projectreducer = (state=initstate,action )=>{
    
    debugger;
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project)
            return state;
        default:
            return state;

    }
}

export default projectreducer;
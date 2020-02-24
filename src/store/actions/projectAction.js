export const createProjectAction = (project)=>{

    debugger;
    return (dispatch,getstate,{ getFirebase,getFirestore }) =>{
        
        const firestore = getFirestore();
        
        firestore.collection('projects').add({
            ...project,
            autherFirest: "mohamed",
            authorLast : "moussa",
            authorID: "123",
            createdAt : new Date()
        }).then( 
            
            dispatch( { type: 'CREATE_PROJECT', project  })
        ).catch( err => console.log(err)) ;

        
    } 


    
}
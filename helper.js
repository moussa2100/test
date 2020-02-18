var prompt = require('prompt');


prompt.start();

var count = 0;


var countSchema = {
    properties: { 
        count: {
            message: "How many fields",
            required : true,
        }
    }
}

var typeSchema = {
    properties: { 
        type: {
            message: "Input Type",
            required : true,
        }
    }
}


 
 prompt.get( countSchema, (err,res) =>{

   count = res.count
 

        //ask for input type 
        for( var i = 0 ; i <= 5 ; i ++){
                prompt.get( typeSchema, (err,res) =>{

                    console.log( res.type )
                }  );
            
        }


   //end of count  prompt 

}  )


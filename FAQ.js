const mongoose = require("mongoose");

mongoose.model("FAQ",{
   //product, user, question 
    product_id:{
        type: String,
       
    },
    user_id:{
        type: String,
      
    },
    question:{
        type: String,
      
    }

});
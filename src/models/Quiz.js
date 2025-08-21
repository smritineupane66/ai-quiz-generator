//Define the structure of quiz data in database 

import mongoose from "mongoose";

//Define Schema
const quizSchema = new mongoose.Schema({
    title:{type:String,required:true},
    questions:[
        {
            question:{type:String,required:true},
            options:[String],
            answer:{type:String,required:true}
        }
    ],
},{ timestamps: true })  //this automatically adds two fields createdAt and updatedAt helps to track when quiz was created or updated 

const Quiz = mongoose.model('Quiz', quizSchema);  //convert schema into model
export default Quiz;
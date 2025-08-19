//Define the structure of quiz data in database 

import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title:{type:String,required:true},
    questions:[
        {
            question:{type:String,required:true},
            options:[String],
            answer:{type:String,required:true}
        }
    ],
},{ timestamps: true })

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;
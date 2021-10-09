const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    CourseName : {
        type: String,
        reqired:"Required"
    },
    CourseId : {
        type:String
    },
    CourseFee : {
        type:String,
    }
});

mongoose.model("Course", CourseSchema);
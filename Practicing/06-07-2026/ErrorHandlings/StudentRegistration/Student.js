function studentregistration(student){
    try{
        if(!student.name || student.name.trim() == ""){
            throw new Error("Name cannot be empty.");
        }
        if (student.age < 18 || student.age > 30) {
            throw new Error("Age must be between 18 and 30.");
        }
        if (!student.email.includes("@")) {
            throw new Error("Invalid email address.");
        }        
        const validCourses = ["JavaScript", "Python", "Java"];

        if (!validCourses.includes(student.course)) {
            throw new Error(
                "Course must be JavaScript, Python, or Java."
            );
        }

        console.log("Student Registered Successfully");
        console.log(student);

    }catch(error){
        console.log("Error:",error.message)
    }finally{
         console.log("Registration Process Finished");
    }
}

studentregistration({
    name:"Abdulrehaman",
    age:23,
    email:"Abdul@gmail.com",
    course : "Java"
})

studentregistration({
    name: "John",
    age: 35,
    email: "john@gmail.com",
    course: "JavaScript"
});



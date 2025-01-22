// SINGELTON OBJECT
/*
 const User = {}
  User.id= "Nitesh"
  User.age=21,
  User.Email="nitesh@gpt.com",
  User.islogedin = false
  console.log(User) ;

  const obj = {
    name : "nitesh",
    fullname : {
        username: {
            firstname: "Nitesh",
            Lastname: "Kumar"
        }
    }
  }
 console.log(obj.fullname)
 console.log(obj.fullname.username)
 console.log(obj.fullname.username.firstname)

*/
 // object destructuring
 const course = {
    name: "nitesh",
    price : "free",
    courseInstructor : "hitesh"
 }
  console.log(course.courseInstructure);
   // object destructuring
    const {courseInstructor: instructor} = course
    console.log(instructor)
let setStudentAgeApi = (student, age) => {
  console.log("1. Starting ..");
  setTimeout(() => {
    console.log("2. setting age for the student");
    student.age = age;
  }, 500);
  console.log("3. Done ..");
};

let student = { name: "denis" };

setStudentAgeApi((student, 20));
console.log(student);

//In asynchronous programming, tasks can be executed independently and simultaneously.

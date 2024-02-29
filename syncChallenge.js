const setStudentAgeApi = (student, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Number.isInteger(age)) {
        reject(new Error("Invalid input: Age should be a number"));
      }

      if (age < 0) {
        reject(new Error("Invalid input: Age cannot be negative"));
      }

      student.age = age;

      resolve(student);
    }, 2000);
  });
};

let student = { name: "Eric" };

// first way of consuming a promise
console.log("1. Starting ..");
setStudentAgeApi(student, "12")
  .then((data) => {
    console.log("2. setting age for the student");
    console.log(data);
    console.log("3. Done ..");
  })
  .catch((error) => {
    console.log("2. something goes wrong");
    console.log(error.message);
    console.log("3. Done ..");
  });

// second way of consuming a promise
const getStudentData = async () => {
  console.log("1. Starting ..");
  try {
    console.log("2. setting age for the student");
    const data = await setStudentAgeApi(student, 1);
    console.log(data);
    console.log("3. Done ..");
  } catch (error) {
    console.log("2. something goes wrong");
    console.log(error.message);
    console.log("3. Done ..");
  }
};

getStudentData();

//In synchronous programming, tasks are executed one after another, in sequence

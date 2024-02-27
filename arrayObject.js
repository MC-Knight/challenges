const arrayObject = (data) => {
  let result = {
    females: [],
    males: [],
  };

  for (let i = 0; i < data.length; i++) {
    let current = data[i].split(",");

    if (current[2].trim() === "male") {
      let nameParts = current[0].split(" ");
      let nameKey = nameParts[0];
      let secondName = nameParts[1].trim();
      let obj = {
        "second-name": secondName,
        age: parseInt(current[1].trim(), 10),
      };
      result.males.push({
        [nameKey]: obj,
      });
    } else if (current[2].trim() === "female") {
      let nameParts = current[0].split(" ");
      let nameKey = nameParts[0];
      let secondName = nameParts[1].trim();
      result.females.push({
        [nameKey]: {
          "second-name": secondName,
          age: parseInt(current[1].trim(), 10),
        },
      });
    }
  }

  return result;
};

console.log(
  JSON.stringify(
    arrayObject([
      "Patrick wyne, 30, male",
      "lil wyne, 32, male",
      "Eric mimi, 21, female",
      "Dodos deck, 21,male",
      "Alian Dwine, 22, male",
      "Patrick wyne, 33, male",
      "Patrick wyne, 10,male",
      "Patrick wyne, 40,male",
    ]),
    null,
    2
  )
);

const setfamilyProperties = (families) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < families.length; i++) {
        if (families[i].fatherName.toLowerCase() == "Yves".toLowerCase()) {
          reject(new Error("Error: Yves is not an allowed dad in 2022."));
        }

        if (!Number.isInteger(families[i].childrenNumber)) {
          reject(new Error("Error: childrenNumber should be a number"));
        }

        if (families[i].childrenNumber < 0) {
          reject(new Error("Error: childrenNumber cannot be negative"));
        }

        families[i].totalNumberofFamilyMembers = families[i].childrenNumber + 2;
      }

      resolve(families);
    }, 1000);
  });
};

const familyMembers = [
  {
    fatherName: "John",
    motherName: "Mary",
    childrenNumber: 2,
  },
  {
    fatherName: "Patrick",
    motherName: "Sarah",
    childrenNumber: 3,
  },
  {
    fatherName: "Michael",
    motherName: "Emily",
    childrenNumber: 1,
  },
];

const getFamilies = async () => {
  try {
    const data = await setfamilyProperties(familyMembers);
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

getFamilies();

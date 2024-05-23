  const userInputString = prompt(
  );

  const stringArray = userInputString.split(",");

  console.log("An array of your flavors:", stringArray)

  const flavors = {};  

   stringArray.forEach(flavor => {
      if (flavors[flavor]) {
          flavors[flavor]++;
      } else {
          flavors[flavor]= 1;
      }
   });
   console.table(flavors)
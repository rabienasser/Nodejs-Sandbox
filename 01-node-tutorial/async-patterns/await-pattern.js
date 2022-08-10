const { readFile } = require("fs");

// PROMISE METHOD
const getText = (path) => {
   return new Promise((resolve, reject) => {
      readFile(path, "utf8", (err, data) => {
         if (err) {
            reject(err);
         } else {
            resolve(data);
         }
      });
   });
};

getText("../content/second.txt")
   .then((result) => console.log(result))
   .catch((err) => console.log(err));

// Async/Await
const start = async () => {
   try {
      const firstTxt = await getText("../content/first.txt");
      const secondTxt = await getText("../content/second.txt");
      console.log(firstTxt);
   } catch (err) {
      console.log(err);
   }
};
start();

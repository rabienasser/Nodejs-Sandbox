const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, res) => {
   if (err) {
      console.log(err);
      return;
   } else {
      const firstTxt = res;
      readFile("./content/second.txt", "utf8", (err, res) => {
         if (err) {
            console.log(err);
         } else {
            const secondTxt = res;
            writeFile(
               "./content/result-async.txt",
               `This is the async result: ${firstTxt} and ${secondTxt}`,
               (err, res) => {
                  if (err) {
                     return;
                  } else {
                     console.log(res);
                  }
               }
            );
         }
      });
   }
});

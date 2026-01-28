import fs from "fs";
//write file sync -- blocking
const writeFileSync = ()=>{
   try{
     fs.writeFileSync("./example.txt","this data is writeen with the help of'writeFileSync.'");
     console.log("Successfully")
   }
   catch(error){
    console.log("Some error occcured");
   }
}
writeFileSync();
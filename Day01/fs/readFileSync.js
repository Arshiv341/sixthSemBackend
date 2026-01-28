import fs from "fs";
//write file sync -- blocking
const readFileSync =() =>{
    try{
      const data=  fs.readFileSync("./example.txt","utf-8");
      console.log(data);
    }catch(error){
        console.log("Some Error")
    }
}
readFileSync();
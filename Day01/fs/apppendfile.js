import fs from "fs";
//write file sync -- blocking
const appendFile = (data) =>{
    try{
        fs.appendFileSync("./example.txt",data);
    console.log("Succcessfully");
    }catch(error){
        console.log("some error");
    }
}
appendFile("this is appenddata through appendFileSync");
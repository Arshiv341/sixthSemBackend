import fs from "fs/promises";
export const fileStatus= async (path)=>{
    try{
        const stats= await fs.stat(path);
        console.log(stats);
        return stats;
    }
    catch(error){
        console.log("unable to find status")
    }
}
fileStatus("../Day01");
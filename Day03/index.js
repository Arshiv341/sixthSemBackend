import { fileStatus } from "./service.js";
const useFileStats =async(path)=>{
    const stat=await fileStatus(path);
    console.log(stat.size);
}
useFileStats("../Day01");
import fs from "fs/promises";

// WRITE FILE
const writeFileAsync = async (data) => {
    try {
        await fs.writeFile("./example01.txt", data);
        console.log("File written successfully");
    } catch (error) {
        console.log("Error in write file");
    }
};

// READ FILE
const readFileAsync = async () => {
    try {
        const data = await fs.readFile("./example01.txt", "utf-8");
        console.log("File data:", data);
    } catch (error) {
        console.log("Error in read file");
    }
};

// APPEND FILE
const appendFileAsync = async (data) => {
    try {
        await fs.appendFile("./example01.txt", data);
        console.log("Data appended successfully");
    } catch (error) {
        console.log("Error in append file");
    }
};

// FUNCTION CALLS
await writeFileAsync("Hello Arshiv 👋\n");
await appendFileAsync("This is Node.js File System\n");
await readFileAsync();

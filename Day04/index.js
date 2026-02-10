import { readFile, writeFile } from "./readAndWrite.js";

const fileData = async (path) => {
    try {
        const data = await readFile(path);
        console.log(data);
        return data;
    } catch (error) {
        console.log("Service is not working");
    }
};

const addStudent = async (path, newStudent) => {
    const students = await fileData(path);
    students.push(newStudent);
    await writeFile(path, students);
};

// read
await fileData("./studdents.json");

// write
await addStudent("./studdents.json", { id: 4, name: "D" });

// read again
await fileData("./studdents.json");

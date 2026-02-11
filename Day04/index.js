import { readFile, writeFile } from "./readAndWrite.js";

const addStudent = async (path, name) => {
    const students = await readFile(path);
    const studentArray = Array.isArray(students) ? students : [];
    const maxId = studentArray.length > 0
        ? Math.max(...studentArray.map(s => s.id))
        : 0;

    const newStudent = {
        id: maxId + 1,
        name: name
    };

    studentArray.push(newStudent);

    await writeFile(path, studentArray);

    console.log("Student Added:", newStudent);
};

await addStudent("./studdents.json", "E");

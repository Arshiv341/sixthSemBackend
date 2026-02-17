import fs from "fs/promises";

// READ FILE
export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");

        if (!data.trim()) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {

        if (error.code === "ENOENT") {
            return [];
        }

        console.log("Error reading file:", error.message);
        return [];
    }
};


// WRITE FILE
export const writeFile = async (path, data) => {
    try {
        await fs.writeFile(
            path,
            JSON.stringify(data, null, 2),
            "utf-8"
        );

        console.log("Data written successfully");

    } catch (error) {
        console.log("Error writing file:", error.message);
    }
};


// ✅ UPDATE FILE
export const updateFile = async (id, newData, path) => {
    try {
        const fileData = await readFile(path);

        // 🔴 Agar data hi nahi hai
        if (!fileData.length) {
            console.log("Data is empty");
            return;
        }

        const index = fileData.findIndex(d => d.id === id);

        // 🔴 Agar id nahi mila
        if (index === -1) {
            console.log("Record not found");
            return;
        }

        // ✅ Update existing object
        fileData[index] = {
            ...fileData[index],
            ...newData
        };

        await writeFile(path, fileData);

        console.log("Record updated successfully");

    } catch (error) {
        console.log("Error updating file:", error.message);
    }
};

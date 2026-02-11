import fs from "fs/promises";

// READ FILE
export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");

        // agar file empty hai
        if (!data.trim()) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {

        // agar file exist nahi karti
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
            JSON.stringify(data, null, 2), // pretty JSON
            "utf-8"
        );

        console.log("Data written successfully");

    } catch (error) {
        console.log("Error writing file:", error.message);
    }
};

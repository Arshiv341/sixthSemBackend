import { readFile, writeFile } from "./readAndWrite.js";

export const logLogin = async (user) => {
    try {
        const logs = await readFile("./loginLogs.json");
        const logArray = Array.isArray(logs) ? logs : [];

        const logEntry = {
            userId: user.id,
            name: user.name,
            email: user.email,
            loginTime: new Date().toISOString()
        };

        logArray.push(logEntry);

        await writeFile("./loginLogs.json", logArray);

        console.log("Login logged successfully");

    } catch (error) {
        console.log("Error logging login");
    }
};

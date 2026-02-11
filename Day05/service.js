import { readFile } from "./readAndWrite.js";
import { logLogin } from "./logger.js";

export const loginUser = async (email) => {
    try {
        const users = await readFile("./user.json");

        const user = users.find(u => u.email === email);

        if (!user) {
            console.log("User not found");
            return;
        }

        console.log("Login Successful:", user);

        await logLogin(user);

    } catch (error) {
        console.log("Login service error");
    }
};

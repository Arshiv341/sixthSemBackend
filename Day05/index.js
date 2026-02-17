import readline from "readline";
import { updateUser } from "./service.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const startUpdate = async () => {
    try {
        const id = await askQuestion("Enter User ID: ");
        const name = await askQuestion("Enter New Name (leave blank to skip): ");
        const email = await askQuestion("Enter New Email (leave blank to skip): ");

        const updatedData = {};

        if (name.trim()) updatedData.name = name;
        if (email.trim()) updatedData.email = email;

        if (Object.keys(updatedData).length === 0) {
            console.log("No changes provided");
            rl.close();
            return;
        }

        await updateUser(Number(id), updatedData);

    } catch (error) {
        console.log("Error in CLI");
    }

    rl.close();
};

startUpdate();

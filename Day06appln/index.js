import readline from "readline";
import {
    registerUser,
    loginUser,
    updateUser,
    deleteUser
} from "./service.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (q) => new Promise(res => rl.question(q, res));

const menu = async () => {
    console.log(`
==== USER SYSTEM ====
1. Register
2. Login
3. Update
4. Delete
5. Exit
`);

    const choice = await ask("Choose option: ");

    switch (choice) {
        case "1":
            const name = await ask("Name: ");
            const email = await ask("Email: ");
            const password = await ask("Password: ");
            await registerUser(name, email, password);
            break;

        case "2":
            const logEmail = await ask("Email: ");
            const logPass = await ask("Password: ");
            await loginUser(logEmail, logPass);
            break;

        case "3":
            const id = await ask("User ID: ");
            const newName = await ask("New Name: ");
            await updateUser(Number(id), { name: newName });
            break;

        case "4":
            const delId = await ask("User ID: ");
            await deleteUser(Number(delId));
            break;

        case "5":
            console.log("Bye 👋");
            rl.close();
            return;

        default:
            console.log("Invalid choice ❌");
    }

    menu();
};

menu();

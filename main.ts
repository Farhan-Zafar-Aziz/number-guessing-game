#! usr/bin/env node

import inquirer from "inquirer";

async function startFunc() {
    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your number B/W 1 to 10:",
        }
    ])
    const {userGuess} = userNum;
    console.log("your Guess: ", userGuess, "\nSystem's Guess:", systemNum);
    if(userGuess === systemNum) {
        console.log("Your Guess number is correct \nYou Won!")
    } else {
        console.log("Better Luck Next Time")
    }
}
async function startAgain() {
    do{
        await startFunc();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? press y or n:",
            }
        ])
    } while(again.restart == "y");
}
await startAgain();
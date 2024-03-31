#! /usr/bin/cnv node 
import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
let accountPin = await inquirer.prompt([
    {
        name: "myPin",
        message: "Please enter your password",
        type: "number",
    }
]);
if (accountPin.myPin === pin) {
    console.log("You entered correct password.");
    let operation = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "Please select option",
            choices: ["withdraw", "Cheak Balance",],
        }
    ]);
    if (operation.option === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "ammountt",
                type: "number",
                message: "Enter ammount what you want to withdraw.",
            }
        ]);
        if (amount.ammountt <= balance) {
            let remainbalance = balance - amount.ammountt;
            console.log(`You have successfuly withdraw ${amount.ammountt}`);
            console.log(`Your remaining balance is ${remainbalance}`);
        }
        else if (amount.ammountt > balance) {
            console.log("Insufficient Balance");
        }
    }
    else if (operation.option === "Cheak Balance") {
        console.log(`Your balance is ${balance}`);
    }
}
else {
    console.log("You enter incorrect password!");
}

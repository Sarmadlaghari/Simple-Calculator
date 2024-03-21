#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter frist number", type: "number", name: "fristnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform opearation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.fristnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.fristnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.fristnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.fristnumber / answer.secondnumber);
}
else {
    console.log("please select valid operators");
}

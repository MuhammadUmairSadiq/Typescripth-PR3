#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation  from "chalk-animation"
import { clear } from "console";

var end = () => {
    return new Promise((res)=>{setTimeout(res,3000);})
}
async function starter(){
    var mix = chalkAnimation.rainbow(`

                       **      *********   *            *
                      *  *         *       * *         **
                     *    *        *       *  *       * *
                    *      *       *       *   *     *  *
                    ********       *       *    *   *   *
                    *      *       *       *     * *    *
                    *      *       *       *      *     *
    `)
    await end();
    mix.stop();
}
clear()
await starter() 

var count = 0;          // tranaction count
var accoutBalance = 1000000;  // Account Balance

async function input() {
        console.log(chalk.greenBright("  Login Successfully."));
        var Tans = await inquirer.prompt([
        {
            type:"list",
            name:"Ftype",
            message:chalk.redBright("Select your Function Type:"),
            choices:['Fast Withdrawal','Withdrawal Amount','Deposit Amount','Check Balance','Transaction Count']
        }
    ])

    if(Tans.Ftype == 'Fast Withdrawal') {
        var Tans = await inquirer.prompt([
            {
                type:"list",
                name:"Ftype",
                message:chalk.redBright("Select your Function Type:"),
                choices:[1000,2000,5000,10000,25000]
            }
        ])
        if(Tans.Ftype == 1000){
            accoutBalance=accoutBalance -  1000;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${Tans.Ftype} Withdrawn from your Account`))
            console.log(chalk.cyanBright(`  Your Remaining Account Balance is ${accoutBalance}`))
        }
        else if(Tans.Ftype == 2000){
            accoutBalance=accoutBalance -  2000;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${Tans.Ftype} Withdrawn from your Account`))
            console.log(chalk.cyanBright(`  Your Remaining Account Balance is ${accoutBalance}`))
        }
        else if(Tans.Ftype == 5000){
            accoutBalance=accoutBalance -  5000;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${Tans.Ftype} Withdrawn from your Account`))
            console.log(chalk.cyanBright(`  Your Remaining Account Balance is ${accoutBalance}`))
        }
        else if(Tans.Ftype == 10000){
            accoutBalance=accoutBalance -  10000;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${Tans.Ftype} Withdrawn from your Account`))
            console.log(chalk.cyanBright(`  Your Remaining Account Balance is ${accoutBalance}`))
        }
        else if(Tans.Ftype == 25000){
            accoutBalance=accoutBalance -  25000;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${Tans.Ftype} Withdrawn from your Account`))
            console.log(chalk.cyanBright(`  Your Remaining Account Balance is ${accoutBalance}`))
        }
        else{
            console.log(chalk.redBright("  You Cannot Choose other than That Options."))
        }
    }
    else if(Tans.Ftype == 'Withdrawal Amount') {
        var ans1 = await inquirer.prompt([
            {
                type:"number",
                name:"withdrawAm",
                message:chalk.blueBright("  Enter Your Amount you want to Withdraw:") 
            },
        ])
        if(ans1.withdrawAm < accoutBalance) {
            accoutBalance=accoutBalance-ans1.withdrawAm;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${ans1.withdrawAm} Withdrawn from your Account`))
            console.log(chalk.cyanBright(`  Your Remaining Account Balance is ${accoutBalance}`))
        }
        else{
            console.log(chalk.redBright("  Your Account is insufficent."))
        }
       
    }
    else if(Tans.Ftype == 'Deposit Amount') {
        var depans = await inquirer.prompt([
            {
                type:"number",
                name:"DepAm",
                message:chalk.redBright("Enter Your Amount you want to Withdraw:") 
            },
        ])
        if(depans.DepAm > 0) {
            let a = accoutBalance;
            accoutBalance=accoutBalance+depans.DepAm;
            count++;
            console.log(chalk.cyanBright(`  Transaction Number is ${count}.`))
            console.log(chalk.cyanBright(`  Transaction Successfull!! ${depans.DepAm} Deposited in your Account`))
            console.log(chalk.cyanBright(`  Your New Account Balance is ${accoutBalance}`))
        }
        else{
            console.log(chalk.redBright("  Your Account is insufficent."))
        }
    }
    else if(Tans.Ftype == 'Check Balance') {
        count++
        console.log(chalk.cyan(`  Your Account Balance is ${accoutBalance}.`));
        console.log(chalk.cyan(`  Transaction Number is ${count}.`))
    }
    else if(Tans.Ftype == 'Transaction Count') {
        count++
        console.log(chalk.cyan(`  Total Transaction is ${count}.`));
        console.log(chalk.cyan(`  This Transaction Number is ${count}.`))
    }
}

var flag = true;
async function Exit() {
    while(1) {
        if(flag) {
            var ans = await inquirer.prompt([
                {
                    type:"list",
                    name:"accType",
                    message:chalk.redBright("Select Your Account Type:"),
                    choices:['Saving Account','Current Account']
                },
                {
                    type:"input",
                    name:"accId",
                    message:chalk.redBright("Enter Your Account Number Here:")
                },
                {
                    type:"number",
                    name:"pass",
                    message:chalk.redBright("Enter Your Account Password Here:" )
                },
            ])
            if(ans.accId == "Umair" && ans.pass == 5316) {
                flag = false
            }
        }
        if(flag == false) {
        await input();
        var check = await inquirer
        .prompt ([
            {
                type:"list",
                name:"flag",
                message:chalk.yellowBright("Would You Like To Continue??"),
                choices:["Yes","No"]
            }
        ])
        
        if(check.flag == "No") { 
            var mix = chalkAnimation.pulse(`
     
    |***************************************************************************************************|
    |*********************************THANKS FOR USING THE ATM******************************************|
    |***************************************************************************************************|
    |************************************DEVELOPED BY UMAIR*********************************************|
    `)
            await end();
            mix.stop();
            break; 
        }
    }
    }
}
Exit();
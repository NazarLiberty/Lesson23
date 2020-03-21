document.getElementsByClassName(block)
block.onclick = function () {
    let age = prompt("Type your AGE")
    if (age >= 0 && age < 12) {
        message = "You are CHILD"
    }
    else if (age >= 12 && age < 18) {
        message = "You are TEENAGER"
    }
    else if (age >= 18 && age < 60) {
        message = "You are ADULT"
    }
    else {
        message = "You are OLD MAN"
    }
    alert(message);



    let number = prompt("Type number 0-9")
    if (number == 1) {
        message = "!"
    }
    else if (number == 2) {
        message = "@"
    }
    else if (number == 3) {
        message = "#"
    }
    else if (number == 4) {
        message = "$"
    }
    else if (number == 5) {
        message = "%"
    }
    else if (number == 6) {
        message = "^"
    }
    else if (number == 7) {
        message = "&"
    }
    else if (number == 8) {
        message = "*"
    }
    else if (number == 9) {
        message = "("
    }
    else if (number == 0) {
        message = ")"
    }
    else {
        message = "YOU HAVE TO TYPE 0-9 FFS"
    }
    alert(message);

    let threeDigitNumber = prompt("Type 3 digit number");
    let thirdDigit = threeDigitNumber % 10;
    let secondDigit = (threeDigitNumber % 100 - thirdDigit) / 10;
    let firstDigit = (threeDigitNumber - threeDigitNumber % 100) / 100;

    if (firstDigit == secondDigit || firstDigit == thirdDigit || secondDigit == thirdDigit) {
        alert("DO NOT REPEAT FKIN NUMBERS");
    }
    else {
        alert("Numbers does not repeat, GOOD WORK PAL")
    }

    let year = prompt("Type the year")

    if (year == 100) {
        message = "THIS YEAR IS NOT TALL"
    }
    else if (year % 4 == 0) {
        message = "This year is TALL"
    }
    else {
        message = "THIS YEAR IS NOT TALL"
    }
    alert(message);


    let userNumber = prompt("Type 5 digits number")

    let fivethNumber = userNumber % 10;
    let fourthNumber = Math.floor(userNumber % 100 / 10);
    let thirdNumber = Math.floor(userNumber % 1000 / 100);
    let secondNumber = Math.floor(userNumber % 10000 / 1000);
    let firstNumber = Math.floor(userNumber / 10000);

    let palindrom = firstNumber + secondNumber == fivethNumber + fourthNumber;
    if (palindrom) {
        message = "Palindrom have been detected! Your numbers is reversible"
    }
    else {
        message = "Palindrom doesn't exist"
    }
    alert(message);

    let ammountUSD = prompt("Type an ammount of your greenade$$$")
    const USD = 1;
    const EUR = 0.8;
    const UAH = 29;
    const AZN = 1.7;
    let choose = prompt("What kind of money you want to exchange for? (Type the correct number to choose) 1. EUR; 2. UAH; 3. AZN ?")
    if (choose == 1) {
        choose = EUR;
        let converter = ammountUSD * choose;
        message = `You have been converted ${ammountUSD} USD for ${converter} EURO`
    }
    else if (choose == 2) {
        choose = UAH;
        let converter = ammountUSD * choose;
        message = `You have been converted ${ammountUSD} USD for ${converter} UAH`
    }
    else if (choose == 3) {
        choose = AZN;
        let converter = ammountUSD * choose;
        message = `You have been converted ${ammountUSD} USD for ${converter} AZN`
    }
    else {
        message = "There only 1-3 choice"
    }
    alert(message)

    let userSumm = prompt("What is your shopping summ?")
    let discount;
    if (userSumm >= 200 && userSumm < 300) {
        discount = 0.03;
        finalSumm = userSumm - userSumm * discount;
        message = `You have been spend ${userSumm}$, your discount is ${Math.floor(discount * 100)}%, so final summ with the discount is ${finalSumm}$`
    }
    else if (userSumm >= 300 && userSumm < 500) {
        discount = 0.05;
        finalSumm = userSumm - userSumm * discount;
        message = `You have been spend ${userSumm}$, your discount is ${Math.floor(discount * 100)}%, so final summ with the discount is ${finalSumm}$`
    }
    else if (userSumm > 500) {
        discount = 0.07;
        finalSumm = userSumm - userSumm * discount;
        message = `You have been spend ${userSumm}$, your discount is ${Math.floor(discount * 100)}%, so final summ with the discount is ${finalSumm}$`
    }
    else {
        message = `You have been spend ${userSumm}$, NO DISCOUNT FOR YOU, so final summ is ${userSumm}$`
    }
    alert(message)
}

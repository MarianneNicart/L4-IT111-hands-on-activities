function checkIfEvenOrOdd(number) {
    if (number % 2 == 0){
        console.log(number + " is an even number.")
    }else{
        console.log(number + " is an odd number.")
    }
}

checkIfEvenOrOdd(5);
checkIfEvenOrOdd(8);

console.log("Printing the numbers from 1 to 10: ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
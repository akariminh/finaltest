// Function cho bài 2:
const input = document.getElementById("input");
const drawTriangle = document.getElementById("triangle-view");

function numberOneTriangle(number) {
    if (number < 1 || number > 10) {
        console.log("Number must be between 1-10")
    }
    else {
        for (let i = 1; i <= number; i++) {
            let row = '';
            for (let char = 1; char <= i; char++) {
                row += '*';
            }
            console.log(row);
        }
    }
}

numberOneTriangle(5);
numberOneTriangle(2);

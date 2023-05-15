// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). Hiển thị tổng các số nguyên tố trong khoảng a và b. Tạo giao diện nhập 2 số và in kết quả trên giao diện web
const form = document.querySelector('form');


// console.log(numA, " va ", numB)



function sum(a, b) {
    let sum = 0;
    for (let i=a; i <=b; i++){
        sum += i;
    }
    return sum;
}

console.log(sum(10,20));


form.addEventListener('submit', function(event){
    event.preventDefault();
    const numA = document.getElementById('numA').value;
    const numB = document.getElementById('numB').value;
    const result = document.getElementById('result');
    const sumAB = sum(Number(numA), Number(numB));
    result.innerHTML = `<p>Tổng các số trong khoảng ${numA} và ${numB} là: ${sumAB}</p>`

}
)
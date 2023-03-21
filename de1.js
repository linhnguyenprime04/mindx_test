var a = parseInt(prompt("Nhập số a:"));
var b = parseInt(prompt("Nhập số b:"));

console.log("Số nguyên giữa " + a + " và " + b + " là:");

for(let i = a; i < b; i++){
    let check = 0

    for(let x = 2; x < i; x++) {
        if(i % x == 0) {
            check = 1;
            break;
        }
    }

    if (i > 1 && check == 0){
        console.log(i);
    }
}



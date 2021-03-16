// function hello(){
//     alert("Hello Akseli");
//     whoareyou();
// }
// function whoareyou() {
//     let yourname = prompt("What is your name?");
//     let lastname = ("Miettinen");
//     greeting(yourname,lastname);
// }
// function greeting(name, second) {
//     document.write(name);
//     document.write(second);
// }
// hello();


function calculate(){
    let price = Number(document.getElementById("price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");
    
    //let answer=(Number)money/(Number)price;
    // console.log(price);
    // console.log(money);
    // console.log(money/price);

    answer.textContent = money/price;
    //return console.log(answer+" you pressed button :)");
}
calculate2=()=>{
    let price = Number(document.getElementById("price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");
    let liters = money/price;
    let text;
    let solution = document.getElementById("solution");
    answer.textContent = Math.floor(liters);
    // if(liters>=10) {
    //     text = "you can escape now!";
    // } else {
    //     text = "you have to stay here!";
    // }
    // solution.textContent = text;
    
    liters>=10
    ? (text = "good you can go")
    : (text = "Oops, not enough gas");
    solution.textContent = text;
}
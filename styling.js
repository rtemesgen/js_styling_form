console.log('\t \t \x1b[30;47m Simple practice program: styling \x1b[0m');
function error(message){
  console.log("\x1b[31m[ERROR]\x1b[0m " + "\x1b[35m" + message + "\x1b[0m");
}

function warning(message){
  console.log("\x1b[33m[WARNING]\x1b[0m " + "\x1b[36m" + message + "\x1b[0m");
}
function info(message){
  console.log("\x1b[32m[INFO]\x1b[0m " + "\x1b[34m" + message + "\x1b[0m");
}

error("This is a test message");
warning("This is a warning message");
info("This is an info message");

console.log('\t \t \x1b[30;45m Simple practice program: logging \x1b[0m');

function record(form){
    let errors = [];

    if (form.item === ""){
        console.log("\x1b[30;41m[Error]\x1b[0m \x1b[91m Item name is required\x1b[0m");
    } else {
        console.log("\x1b[30;42m[info]\x1b[0m \x1b[34m Item recorded \x1b[0m:" + "\x1b[32m" + form.item + "\x1b[0m");
    }
    if (form.quantity <= 0){
        console.log("\x1b[30;41m[Error]\x1b[0m \x1b[91m Quantity must be greater than zero\x1b[0m");
    } else {
        console.log("\x1b[30;42m[info]\x1b[0m \x1b[34m Quantity recorded \x1b[0m:" + "\x1b[32m" +form.quantity + "\x1b[0m")
    }
    if (form.price === "" || form.price < 0 || form.price === 0){
        console.log("\x1b[30;43m[Warning]\x1b[0m \x1b[93m Price should be a positive number greater than zero\x1b[0m");
    } else {
        console.log("\x1b[30;42m[info]\x1b[0m \x1b[34m Price recorded \x1b[0m:" + "\x1b[32m" + form.price + "\x1b[0m")
    }
        return errors;
    
};
console.log(record({
    item: "beans",
    quantity: 0,
    price: 0,

}))


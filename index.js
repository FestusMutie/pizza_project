 //User Interface logic
 
 var total,crust_cost,size_cost;
function getCostPerSize() {//get cost of pizza based on size
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}
function getCostPerCrust() {//get cost of per crust selected
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getQuantity() {//get price based on the number of items
    var selectedNumber = document.getElementById("pizzaquantity").value;
    return parseInt(selectedNumber);
}
function getType() {
    var selectedType = document.getElementById("type").value;
    return parseInt(selectedType);
}
function toppingss() {
    var mushroom = 0;
    var addMushroom = document.getElementById("tops");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}
//Business logic
function calctotalPrice(e) {//calculate total order price
    event.preventDefault();
    var totalPrice = (getCostPerSize() + getCostPerCrust() + toppingss()) * (getQuantity());
        console.log(totalPrice);
    alert("Dear customer you have ordered an amount of " + getQuantity() +  " pizzas and the amount you owe us is " + totalPrice +"." )
}
$(document).ready(function () {
    $("#home").submit(function () {
        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();
        alert("Dear!" + name + ". Wonder Price Pizza has received your order and it will soon be delivered to you at " +  location + ".Delivery will cost an extra Ksh. 250 payable on delivery.We are glad to serve you.Thank you for choosing us.");
    });
});
$(document).ready(function () {
    $("#pizzainfo").submit(function () {
        var type = $("optiont#type").val();
        var quantity = $("input#number").val();
        var crust = $("optiont#crust").val();
        var topping = $("option#toppingone").val();
        append("This is the summary of your order" + type + crust + yy)
    });
});
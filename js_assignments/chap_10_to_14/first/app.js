var num1 = parseInt(prompt("Type in the first number: "));

var num2 = parseInt(prompt("Type in the second number: "));

var sign = prompt("What mathematical operation you want to perform. Type in +, -, *, /, or %");


if (sign =="+"){
    var result = num1+num2;
    alert(num1+sign+num2 +" = "+result);
 }
else if (sign ==="-"){
    var result = num1 - num2;
    alert(num1+sign+num2 +" = "+result);
}
else if(sign ==="*"){
    var result = num1*num2;
    alert(num1+sign+num2 +" = "+result);
}
else if (sign ==="/"){
    var result = num1/num2;
    alert(num1+sign+num2 +" = "+result);
}
else if ( sign ==="%"){
    var result = num1%num2;
    alert(num1+sign+num2 +" = "+result);
}
else {
    alert("You did not put in a valid mathematical operation");
}

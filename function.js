//函式 function

function hello(name,age){
    document.write("你好"+name+"你今年"+age+"歲");
}
function add(num1,num2){
    document.write(num1+num2);
    document.write("<br/>")
    return 10;
}
hello("小白","82");
document.write("<br/>");
document.write(add(3,2));

//物件 object

// key value
//  鍵   值
var person={
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
            document.write(this.name);
    }
};
document.write(person.name);
document.write("<br/>");
document.write(person.age);
document.write("<br/>");
document.write(person.is_male);
document.write("<br/>");
person.print_name();
document.write("<br/>");
var phrase="hello";
document.write(phrase.length);
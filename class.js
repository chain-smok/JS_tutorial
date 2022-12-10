//class

class Phone{
   constructor(number,year,is_waterproof){
      this.number=number;
      this.year=year;
      this.is_waterproof=is_waterproof;
   }
   phone_age(){
       return 2021-this.year;
   }
}
var phone1=new Phone("123",2020,false);
var phone2=new Phone("456",2018,false);
document.write(phone1.number);
document.write("<br/>");
document.write(phone1.year);
document.write("<br/>");
document.write(phone1.is_waterproof);
document.write("<br/>");
document.write(phone1.phone_age());
document.write("<br/>");
document.write(phone2.number);
document.write("<br/>");
document.write(phone2.year);
document.write("<br/>");
document.write(phone2.is_waterproof);
document.write("<br/>");
document.write(phone2.phone_age());
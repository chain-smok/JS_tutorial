//event listener
//function handle_click(element){
//    alert("叫你按就按啊?");
//    element.innertext="按屁阿";
//    element.style.color="紅色";
//}
var btn=document.getElementById("btn");
//原本在html的button標籤裡要寫
//onclick="handle_click(element)"
btn.addEventListener("click",function(){
    alert("叫你按就按啊?");
    this.innerText="按屁阿";
    this.style.color="red";
})
var img=document.getElementById("img");
img.addEventListener("mouseover",function(){
    this.src="hotpot2.jpg";
})

img.addEventListener("mouseout",function(){
    this.src="hotpot1.jpg";
})
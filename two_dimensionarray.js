//二維陣列、巢狀迴圈
var number=[[1,2,3],
            [4,5,6],
            [7,8,9],
            [0]
];
document.write(number[2][2]);
document.write("<br/>");
for(var i=0;i<number.length;i++){
  for(var j=0;j<number[i].length;j++){
    document.write(number[i][j]);
  }
  document.write("<br/>");
}
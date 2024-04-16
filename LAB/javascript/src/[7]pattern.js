/*
4444
 333
  22
   1
*/

for(var i = 4 ; i >= 1 ; i--){
    for(var j = 4 ; j >i; j--){
       document.write("&nbsp;")
       document.write("&nbsp;")
       //document.write("*")
    }
    for(var k = 1 ;k <= i ; k++){
       // document.write(i+" ")
       document.write(i)
    }
    document.write("<br>")
}

alert('Hallo World!!');
prompt("masukkan nama kamu?");
confirm("will you ready?");

var input = prompt("masukkan nama kamu?");
alert("Hallo " + input);

var value = confirm("apakah sudah benar?");
if (value === true ){
    alert("Ya sudah Benar!");
}else{
    alert("Tidak Benar");
}

var lagi = true

while(lagi === true){
    var nama = prompt("Masukkan nama!");
    alert ('Hallo ' + nama);
    lagi = confirm ("Mau coba lagi?");
}

alert('Terimakasih!');

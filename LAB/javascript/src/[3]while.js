
var lagi = true

while(lagi === true){
    var nama = prompt("Masukkan nama!");
    alert ('Hallo ' + nama);
    lagi = confirm ("Mau coba lagi?");
}

alert('Terimakasih!');


var batas = prompt("Masukkan Jumlah angkot ")
var tanya = confirm("Apakah ada angkot yang rusak?")
var nilai = 1;
if (tanya === true){
    var rusak = prompt("Masukkan Nomor Angkot yang rusak")
    console.log(rusak)
    while (nilai <= batas){
        if (nilai === parseInt(rusak)){
            console.log ("Angkot No "+ nilai + " rusak") 
        }else{
            console.log ("Angkot No "+ nilai + " beroperasi baik")  
        }
    nilai++;
    }
}else{
    while (nilai <= batas){

    console.log ("Angkot No "+ nilai + " beroperasi baik")  
        nilai++;
    }
}
alert("Terimakasih")
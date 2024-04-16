var jmlAngkot = prompt ("Masukkan Jumlah Angkot")
var angkotBeroperasi = prompt("Jumlah Angkot Beroperasi")
var noAngkot = 1;

while(noAngkot<=parseInt(angkotBeroperasi)){
    console.log("Angkot No " + noAngkot + " beroperasi baik")
    noAngkot++;
}
for(noAngkot=parseInt(angkotBeroperasi)+1;noAngkot<=parseInt(jmlAngkot);noAngkot++){
    console.log("Angkot No " + noAngkot + " tidak beroperasi")
}
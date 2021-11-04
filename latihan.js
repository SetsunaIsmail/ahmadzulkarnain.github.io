function hitungip(){
    var absen = parseFloat(document.Akupunya.iabsen.value);
    var tugas = parseFloat(document.Akupunya.itugas.value);
    var uts   = parseFloat(document.Akupunya.iuts.value);
    var uas   = parseFloat(document.Akupunya.iuas.value);
    
    var ip =" ";
    var ket =" ";
    
    var nabsen = ((absen/16)*10);
    var ntugas = (0.20*tugas);
    var nuts = (0.35*uts);
    var nuas = (0.35*uas);
    var na = nabsen + ntugas + nuts + nuas;
    var na2 = na.toFixed(2);
    
    if (na2 > 100)
    {ip = "x"; ket="!!kelebihan muatan!!";}
    else if (( na2 >= 80 ) && (na2 <=100))
    {ip = "A"; ket="lulus dengan sangat baik!";}
    else if ((na2 >= 68) && (na2 <=79))
    {ip = "B"; ket="lulus dengan baik!";}
    else if ((na2 >= 55) && (na2 <=67))
    {ip = "C"; ket="lulus dengan cukup!";}
    else if ((na2 >= 38) && (na2 <=54))
    {ip = "D"; ket="lulus dengan kurang!";}
    else
    {ip = "E"; ket="Tidak lulus!";}
   
   document.Akupunya.iabsen.value= nabsen;
   document.Akupunya.itugas.value= ntugas;
   document.Akupunya.iuts.value= nuts;
   document.Akupunya.iuas.value= nuas;
   document.Akupunya.oip.value= ip + " " + "(" +na2+ ")";
   document.Akupunya.oket.value= ket;

}
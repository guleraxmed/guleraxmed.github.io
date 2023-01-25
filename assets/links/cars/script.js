
let btn= document.querySelector("#btn");
 
btn.innerHTML="unsplash.com";

function Getir(){

    let arr=['aiwuLjLPFnU','ZRns2R5azu0','a4S6KUuLeoM','hdMSxGizchk','FMbWFDiVRPs','4WBvCqeMaDE','1Ah8CAwk3vM','8e2gal_GIE8','7lGiQDLnkUs','j0YPbvXu4t0','Zv8GOTkNEXM','uG8RGApPGWk','G15HRVNAkMQ','Aqt08E8JzEc','TNybYN-LqJo','U06nswCc4l4','_CiyeM2kvqs','Apa13LFPClU'];
    let rdm="";
     rdm =Math.floor(Math.random() * arr.length);
     
    window.setTimeout(function(){location.href = `https://unsplash.com/photos/${arr[rdm]}`;}, 1500); 
}


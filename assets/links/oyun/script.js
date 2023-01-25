let ekran = document.getElementById("table");
let count=1;
let saniye=15;  
let set=setInterval(Qalan_vaxt, 1000);

function Start(){
      count=1;
      saniye=15;  
      set=setInterval(Qalan_vaxt, 1000);
      Table();
      Qalan_vaxt();
      
}
Table();
function Table(){
      let num=0;
      let tr="";
      let arr= [];
      let arr2=[];
      let rdm;
      for (let i=0;i<16;i++){
            arr[i]=i+1;
      }
      for ( let i=0; i<16;i++){
            rdm=Math.floor(Math.random()*arr.length);
            arr2[i]=arr[rdm];
            arr.splice(rdm,1);
      }
      for(let i=0; i<4; i++){
          
              tr += `<tr>`;
            for(let j=0; j<4; j++ ){
                
                   tr += `<td onclick="Click(${arr2[num]})" id="click${arr2[num]}" > ${arr2[num]}</td>`;
                   num++;
                   
             }  
                   tr += `</tr>`;
      }
      ekran.innerHTML = tr;
}

function Click(x){
      let td =document.getElementById("click"+x);
      if(count==x){
            td.style.backgroundColor="green";
            td.style.color="white";
            if(count==16){
                  alert("Uddun");
            }
            count++;
      }else{
            td.style.backgroundColor="red";
            td.style.color="white";
            setTimeout(function(){
                  alert("Uduzdun!");
                  clearInterval(set);
                  Start();
            },300);     
      }
}
      function Qalan_vaxt() {
            document.getElementById("show").innerHTML=`<span style="font-size: 30px; color: blueviolet; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Qalan vaxt:  ${saniye}</span>`;
            if (saniye > 0) {
                  saniye--;
                 }else {
                       clearInterval(set);
                       setTimeout(function(){
                        alert("Uduzdun!");
                        Start(); 
                  },100);
                       
                 }
            }             
    
           
            

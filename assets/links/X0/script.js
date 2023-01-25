let oyunsahesi= document.querySelectorAll("#table");
let oyunchu= "X";
let td= document.querySelectorAll("td");
let tr="";

Table();
function Table(){
    
    tr+=`
    <tr>
        <td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td>
    </tr>
`

document.getElementById("table").innerHTML=tr;
}

Sertler();
function Sertler(){
    $(document).ready(function(){
        $("td").click(function(){
            this.innerHTML=`${oyunchu}`;
        })
    });
    
    if(oyunchu=="X"){
        oyunchu="O";
    }else{
        oyunchu=="X";
    }
}
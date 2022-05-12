
let motsValue=[["paris",53,"capitale"],['llll',53,'keys'],['jjjj',53,'ke']];
let montsCompt =0;
let monterI;

var id;
var idvalue;
function monter(frame)
    {


        monterI=motsValue[montsCompt][1];
        id=document.getElementById(newId(0,monterI,"id"));
        js=JSON.parse(id.value);
        
        if (!js.fc)
        {
            idvalue=motsValue[montsCompt][0];
            EnvValue(newId(0,monterI,"id"),id.value,idvalue,"oo");
            EnvValue(newId(0,monterI+1,"id"),id.value,"ccc","ooinvi");
            motsValue[montsCompt][1] -=1;       
        }
        else
        {
            id=document.getElementById(newId(0,monterI+1,"id"));
            js=JSON.parse(id.value);
            monterI=-1;
        }
        if (monterI<1)
        {
            js.fc =motsValue[montsCompt][2];
            jsn =JSON.stringify(js);
            id.setAttribute("value",jsn);
            motsValue.splice(montsCompt,1);
        }
       
        if (montsCompt>motsValue.length-1)
        {
            montsCompt=0;
        }
       
        
        
        if (motsValue.length>0)  
        {requestAnimationFrame(monter);}
        
        
        
            
    }
requestAnimationFrame(monter);




let motsValue=[["paris",53,"capitale"],['llll',53,'keys'],['jjjj',53,'ke']];
let montsCompt =0;
let monterI;
let frameTime =0;
let frameTime0 =-1;
let frameT=1;
var id;
var idvalue;

function mvFrame(id,js,mstCompt)
    {
        
        if (!js.fc)
        {
            idvalue=motsValue[mstCompt][0];
            EnvValue(newId(0,monterI,"id"),id.value,idvalue,"oo");
            EnvValue(newId(0,monterI+1,"id"),id.value,"ccc","ooinvi");
            motsValue[mstCompt][1] -=1;       
        }
        else
        {
            id=document.getElementById(newId(0,monterI+1,"id"));
            js=JSON.parse(id.value);
            monterI=-1;
        }
        if (monterI<1)
        {
            js.fc =motsValue[mstCompt][2];
            jsn =JSON.stringify(js);
            id.setAttribute("value",jsn);
            motsValue.splice(mstCompt,1);
        }
       
        if (mstCompt>motsValue.length-1){mstCompt=0;}
        
    }
function monter(frame)
    {
        if (frameTime0==-1)
        {
            frameTime0=frame;
            frameTime=0;
        }
        frameTime= frame-frameTime0;
        if (frameTime>100*frameT)
        {
            frameT +=1;
            
            monterI=motsValue[montsCompt][1];
            id=document.getElementById(newId(0,monterI,"id"));
            js=JSON.parse(id.value);
            mvFrame(id,js,montsCompt);
        }
        
       
        if (motsValue.length>0)  
        {requestAnimationFrame(monter);}
        
    }
requestAnimationFrame(monter);



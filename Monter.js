
let motsValue=[];
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
function timeOk()
    {
        for (let i=0;i<motsValue.length;i++)
        {
            if (i==0 && motsValue[i][1]==null)
            {motsValue[i][1]=53;}
            else if (i>0 && motsValue[i][1]==null && motsValue[i-1][1]<52 && motsValue[i-1][1]!=null)
            {motsValue[i][1]=53;}
        }
        for (let i=0;i<motsValue.length;i++)
        {
            if ( motsValue[i][1]!=null)
            {
                monterI=motsValue[i][1];
                id=document.getElementById(newId(0,monterI,"id"));
                js=JSON.parse(id.value);
                mvFrame(id,js,i);
            }
        }  
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
            timeOk();
        }    
        if (motsValue.length>0)  
        {requestAnimationFrame(monter);}
        else{
            requestAnimationFrame(monter);
            

        }

        
    }
requestAnimationFrame(monter);



const inputs = document.querySelectorAll('button')
const selec2Virif =function(leselec)
    {

        let jss;
        const selem1 =selec[leselec-1];
        const selem2 =selec[leselec-2];
        let selecFc=false;
        let trBingo=false;
        let inbutton=false;
       
            
        if (selem1===selem2){inbutton=1;}
        else{selecFc=selecVerifSiPariter(leselec);}
        
        if (selecFc==-1){inbutton=1;}
        else
        {
          
            const keyr =baseDisco[selecFc['key']]
            if (keyr['capitale']==selecFc['capitale']){trBingo=1;}
            else{inbutton=1;}
        }
        if (inbutton) /*init button si rien de bon*/
        {
            initButton('oo');
            selec=[];
        }
        
        
        console.log(selecFc,trBingo);
    }
const initButton=function (cl)
    {
        let eleId;
        let jss;
        let nId;
        selec.forEach(ele=>
        {
            jss=JSON.parse(ele);
            nId=newId(jss.x,jss.y,"id");
            eleId =document.getElementById(nId)
            eleId.setAttribute('class',cl)          
        })
    }
const selecVerifSiPariter =function(leselec)
    {
        let selecFc={"key":false,"capitale":false};
        for (i=0;i<leselec;i++)
        {
            jss =JSON.parse(selec[i]);
            if (!selecFc[jss.fc]){selecFc[jss.fc]=jss.fcv;}
            else{return -1;}
        }
        return selecFc;
    }


function aa(ele=888,e="   b")
    {
        selec.push(ele.getAttribute('value'));
        ele.setAttribute('class','oos0')
        const leselec =selec.length;
        if (leselec>1)
        {selec2Virif(leselec);}       
    }

let selCompteur=0;
inputs.forEach(
    ele=>
        {
        ele.addEventListener('click',(e)=>{aa(ele,e);})
        }
)
    



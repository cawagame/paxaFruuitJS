


const initButton=function (cl)
    {
        let eleId;
        let jss;
        let nId;
        selec.forEach(ele=>
        {jsonNid(ele).setAttribute('class',cl)}
        )
    }
const selecVerifSiPariter =function(leselec)
    {
        let jss;
        let selecFc={"key":false,"capitale":false};
        for (i=0;i<leselec;i++)
        {
            jss =JSON.parse(selec[i]);
            if (!selecFc[jss.fc]){selecFc[jss.fc]=jss.fcv;}
            else{return -1;}
        }
        return selecFc;
    }


const selec2Virif =function(leselec)
    {

        
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
        {initButton('oo');}
        
        if (trBingo==1)
        {bingoWin();}
        
        if (inbutton==1)  /*save 1-n elemen */
        {svElem(leselec);}
        
        
        /*console.log(selecFc,trBingo);*/
    }


const selec3 =function ()
    {
        const leselec =selec.length;
        if (leselec>1)
        {
           selec2Virif(leselec);
        }
        
    }

var paragraphe =  document.getElementById('idtab');
paragraphe.addEventListener('click', 
                            (e)=>{selec3();}
                           );
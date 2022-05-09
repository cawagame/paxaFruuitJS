


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
        let selecFc=false;
        let trBingo=false;
        let inbutton=false;
       
        if (selec[leselec-1]===selec[leselec-2]){inbutton=1;}
        else{selecFc=selecVerifSiPariter(leselec);}
        
        if (selecFc==-1){inbutton=1;}
        else
        {
            const keyr =baseDisco[selecFc['key']]
            if (keyr['capitale']==selecFc['capitale']){trBingo=1;}
            else{inbutton=1;}
        }
        return [inbutton,trBingo];
    }


const selec3 =function ()
    {
        let trTouch=[false,false];
        const leselec =selec.length;
        if (leselec>1)
        {
           trTouch=selec2Virif(leselec);
        }
        if (trTouch[0]==1)  /*save 1-n elemen */
        {
            initButton('oo');
            svElem(leselec);
        }
        return trTouch;
    }
let trBingo;
var paragraphe =  document.getElementById('idtab');
paragraphe.addEventListener('click', 
                            (e)=>{
                                trBingo =selec3();
                                if (trBingo[1]==1)
                                {
                                    bingoWin();
                                    selec=[];
                                }
                                console.log('Fin Select',trBingo);
                                
                            }
                           );
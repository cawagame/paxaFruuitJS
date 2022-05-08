let azer=function (a,b){return a+b;}

function selOkk(key)
    {
        let nid;
        let pos;
        let pos2;
        let eleId;
        let vap ;
        let vap1;
        for (i=0;i<sek.length-2;i++)
        {   
            nid =newId(key[i][1],key[i][0],'id')
            vap =document.getElementById(nid);
            vap1 =vap.getAttribute("value");
            console.log(vap1);
            vap.remove();
        
        }
    }

function selOk()
    {
        Object.keys(selecOk).forEach(
        key=>{
            sek=Object.keys(selecOk[key]);
            console.log(selecOk[key]);
            if (!selecOk[key][3])
            {
                selOkk(selecOk[key]);
                selecOk[key][3]=1;
            }
            }
            );
    }

function selec3()
    {
        let js;
        let sek;
        if (selecOk.length)
        {
            selOk();
        }
    }


var paragraphe =  document.getElementById('idtab');
paragraphe.addEventListener('click', 
                            (e)=>{selec3();}
                           );

console.log(azer(1,3));
const inputs = document.querySelectorAll('button')

const distCase =function ()
    {
        selec[2]=[obselect(selec,4),obselect(selec,5)]
        const sec =obselect(selec)
        const vabs =Math.abs( selec[2][0])+Math.abs( selec[2][1])
        const nid =newId(sec[1],sec[0],'id');

        if (vabs==0)
        {
            changeClass(nid,'oo');
            selec[0]=false;
        }
        else if (vabs==1)
        {
            selecOk.push([selec[0],selec[1],selec[2],0]);
            changeClass(nid,'oo');
            changeClass(newId(sec[3],sec[2],'id'),'oo');
            selec[0]=false;   
        }
        else if(vabs >1)
        {
            changeClass(nid,'oo');
            selec[0]=[obselect(selec,2),obselect(selec,3)];
                
        }
        selec[1]=false;
        selec[2]=false;
    }

function selec2()
    {
        
        if (selec[1])
        {distCase();
        }
    }

const modfselecClas =function(ind,xy,cl,ele)
    {
        selec[ind]=[vjs.x,vjs.y];
        ele.setAttribute('class',cl)
    }

function aa(ele=888,e="   b")
    {
        const js= ele.getAttribute('value');
        vjs =JSON.parse(js);
        if (!selec[0])
        {
            modfselecClas(0,vjs,'oos0',ele);
        }
        else
        {
             modfselecClas(1,vjs,'oos0',ele);
        }
        selec2();        
    }


inputs.forEach(
    ele=>
        {
        ele.addEventListener('click',(e)=>{aa(ele,e);})
        }
)
    



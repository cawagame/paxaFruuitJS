const jsonNid =function (ele)
    {
    jss=JSON.parse(ele);
    nId=newId(jss.x,jss.y,"id");
    return document.getElementById(nId)
    }
const svElem = function(leselec)
    {
        const vsave=selec[leselec-1];
        selec=[];
        selec.push(vsave);
        jsonNid(vsave).setAttribute('class','oos0')  ;
    }


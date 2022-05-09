const jsonNid =function (ele)
    {
    jss=JSON.parse(ele);
    nId=newId(jss.x,jss.y,"id");
    return document.getElementById(nId)
    }
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

function Clone(id)
    {
        var el          =document.getElementById(id);
        var elClone     =el.cloneNode(true);
        return elClone
    }
function CloneActiv(idMaster,id,cloneId)
    {
        var clone =Clone(id);
        clone.setAttribute("id",cloneId)
        document.getElementById(idMaster).appendChild(clone);
    }
function EnvValue(id,js,value)
    {
        var docId =document.getElementById(id)
        docId.setAttribute("value",js);
        docId.textContent=value;
    }


let valu;
let js={};
for (i=0;i<5;i++)
    {
        for (ib=0;ib<3;ib++)
            {
                CloneActiv("idtab","idoo",newId(i,ib,"id"));
                valu =random_item(items)
                js={};
                js["x"]=ib;
                js["y"]=i;
                js['value']=valu;
                js =JSON.stringify(js);
                EnvValue(newId(i,ib,"id"),js,valu);                
            }
    }
document.getElementById("idoo").remove();
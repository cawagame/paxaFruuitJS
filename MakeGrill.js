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
        const docId =document.getElementById(id)
        docId.setAttribute("value",js);
        docId.textContent=value;
    }


function makeQestion(y,x,qFind=0,mFind)
    {
        let valueKeys;
        CloneActiv("idtab","idoo",newId(x,y,"id"));
        valueKeys =random_item(Object.keys(baseDisco))  /*pour index*/
        if (!qFind)
        {valueKeys =baseDisco[valueKeys][mFind];}
        return valueKeys;
    }


function makeQuestionCarre(x,y,mFind)
    {
        let bsf;
        if (carre==0)
        {bsf=0;}
        else if (carre==1)
        {bsf =1;}
        carre +=1;
        if (carre>Object.keys(basePharse).length){carre=0;}
        return makeQestion(x,y,bsf,mFind);
        
    }

const ix=5;
const iy=5;
var carre=0;
let valeK;
let valeK_;
let js ={};
let jss;
for (i=0;i<ix;i++)
    {
        for (ib=0;ib<iy;ib++)
            {
                
                valeK=makeQuestionCarre(i,ib,'capitale');
                valeK_=valeK;
                if (carre)
                {
                   if (basePharse['capitale'].indexOf('#key')>0)
                   {
                       valeK_=basePharse['capitale'].replace('#key',valeK)
                   }
                }
                js['v'] =valeK;
                jss =JSON.stringify(js);
                EnvValue(newId(ib,i,"id"),jss,valeK_); 
                console.log(valeK,carre);
            }
    }
document.getElementById("idoo").remove();
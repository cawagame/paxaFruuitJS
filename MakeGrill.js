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


function makeQestion(y,x,mFind)
    {
        let valueKeys;
        let valueKeys_;
        CloneActiv("idtab","idoo",newId(x,y,"id"));
        valueKeys =random_item(Object.keys(baseDisco))  /*pour index*/
        valueKeys_ =baseDisco[valueKeys][mFind];
        return [valueKeys,valueKeys_];
    }


function makeQuestionCarre(x,y,mFind)
    {
        carre +=1;
        if (carre>Object.keys(basePharse).length){carre=0;}
        return makeQestion(x,y,mFind);
        
    }

const ix=5;
const iy=8;
var carre=0;
let valeK0;

let valeKQ;
let valeKDisp;
let valeKQkey;
let js ={};
let jss;



for (i=0;i<ix;i++)
    {
        for (ib=0;ib<iy;ib++)
        {
            js={}
            valeKQ='capitale';
            valeKQkey=valeKQ;
                
            valeK0=makeQuestionCarre(i,ib,valeKQ);
            valeKDisp=valeK0[1];
            if (!carre && basePharse[valeKQ].indexOf('#key')>0)
            {
                valeKDisp=basePharse[valeKQ].replace('#key',valeK0[0])
                valeKQkey="key";
                valeK0[1]=valeK0[0];
            }
            jss=jsonStr(i,ib,valeKQkey,valeK0[1]);
            EnvValue(newId(ib,i,"id"),jss,valeKDisp); 
            
        }
    }
document.getElementById("idoo").remove();
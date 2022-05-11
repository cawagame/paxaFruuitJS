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
        clone.setAttribute('class','oo')  ;
        document.getElementById(idMaster).appendChild(clone);
    }
function EnvValue(id,js,value)
    {
        const docId =document.getElementById(id)
        docId.setAttribute("value",js);
        docId.textContent=value;
    }


function makeQestion(y,x,mFind,douClone)
    {
        let valueKeys;
        let valueKeys_;
        CloneActiv("idtab",douClone,newId(x,y,"id"));
        valueKeys =random_item(Object.keys(baseDisco))  /*pour index*/
        valueKeys_ =baseDisco[valueKeys][mFind];
        return [valueKeys,valueKeys_];
    }
function makeQuestionCarre()
    {
        carre +=1;
        if (carre>Object.keys(basePharse).length){carre=0;}
    }

function usineMake()
    {
        let valeK0;
        let valeKQ;
        let valeKDisp;
        let valeKQkey;
        let jss;
        js            ={};
        valeKQ        ='capitale';
        valeKQkey=valeKQ;
    
        valeK0       =makeQestion(i,iicomp,valeKQ,"idoo")
        valeKDisp    =valeK0[1];
        makeQuestionCarre();
        if (!carre && basePharse[valeKQ].indexOf('#key')>0)
        {
            valeKQkey="key";
            valeK0[1]=valeK0[0];
            valeKDisp=basePharse[valeKQ].replace('#key',valeK0[0])
        }
        jss=jsonStr(i,iicomp,valeKQkey,valeK0[1]);
        EnvValue(newId(iicomp,i,"id"),jss,valeKDisp);
        iicomp+=1;
        if (iicomp>100)
        {
            i+=1;
            iicomp =0;
        }
            
    }

let i    =0;
const iy   =55;
let iicomp=0
var carre  =0;
let js ={};

for (ib=0;ib<iy;ib++)
{
    usineMake();
}
    
/*document.getElementById("idoo").remove();*/
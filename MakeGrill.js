

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
function CloneActiv(idMaster,id,cloneId,cloneCl)
    {
        var clone =Clone(id);
        clone.setAttribute("id",cloneId)
        clone.setAttribute('class',cloneCl)  ;
        document.getElementById(idMaster).appendChild(clone);
    }
function EnvValue(id,js,value,cl=false)
    {
        const docId =document.getElementById(id)
        docId.setAttribute("value",js);
        if (cl){docId.setAttribute('class',cl);}
        docId.textContent=value;
    }


function makeQestion(y,x,mFind,douClone)
    {
        let valueKeys;
        let valueKeys_;
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
        
        
        iicompLigne =iicompLig();
        eleOccup.push(["inv",false])
        CloneActiv("idtab",'idoo',newId(i,iicompLigne,"id"),'ooinvi');
        jss=jsonStr(i,iicompLigne,false,false);
        EnvValue(newId(i,iicompLigne,"id"),jss,"");
        iicomp+=1
        
    }

let i    =0;
const iy   =55;
let iicomp=0
let iicompLigne=0;
let carre  =0;
let js ={};
let codeLigne=false;
let codeLigneAdd=0;

for (ib=0;ib<iy;ib++)
{    
    if (codeLigneAdd>4)
    {
        if (codeLigne)
        {
            codeLigne=false;
            
        }
        else 
        {
            codeLigne=true;
            iicompLigne =iicomp+5;
        }
        codeLigneAdd=0;
    }
    usineMake();
    codeLigneAdd+=1;
    
    
}

/*document.getElementById("idoo").remove();*/
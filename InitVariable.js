
let inputs; /*les button*/

const baseDisco={};
baseDisco["France"]={"capitale":"Paris"};
baseDisco['Italie']={"capitale":"Rome"};
baseDisco['Belgique']={"capitale":"Bruxelles"};
baseDisco['Royaume-Uni']={"capitale":"Londres"};
baseDisco['Espagne']={"capitale":"Madrid"};
baseDisco['Autriche']={"capitale":"Vienne"};
baseDisco['Danemark']={"capitale":"Danemark"};
baseDisco['Irlande']={"capitale":"Dublin"};

const basePharse={'capitale':'Quelle est la capitale de la #key ?'};



let selec=[];
const selecOk=[];


const obselect =function(vselec,ind=-1000)
    {
      
        const xa =Number(vselec[0][0]); 
        const ya =Number(vselec[0][1]);
        const xb =Number(vselec[1][0]);
        const yb =Number(vselec[1][1]);
        const x=xa-xb;
        const y=ya-yb;
        let xyab =[xa,ya,xb,yb,x,y];
        if (ind!=-1000){
            xyab=xyab[ind];
        }
        return xyab;
    }

const newId =function (i,ib,ii) {return i+ii+ib;};

const changeClass =function (eleId,cl)
    {
        const sel0 =document.getElementById(eleId);
        sel0.setAttribute('class',cl);
    }

const jsonStr =function(i,ib,fc,fcv)
    {
        js["x"]=ib;
        js['y']=i;
        js['fc']=fc; /*valeKQkey*/
        js["fcv"] =fcv; /*valeK_*/
        jss =JSON.stringify(js);
        return jss
    }



const vCopy =function (v) {return v;}
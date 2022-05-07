const items=["a","b","c",'d'];
let selec={};
selec[0]=false;
selec[1]=false;
selec[2]=false;
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
const vCopy =function (v) {return v;}
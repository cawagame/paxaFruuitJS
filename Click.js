const inputs = document.querySelectorAll('button')



function selec2()
    {
        const leselec =selec.length;
        let jss;
        let eleId;
        if (leselec>1)

        {
            console.log(leselec,selec[leselec-1],selec[leselec-2]);
            if (selec[leselec-1]===selec[leselec-2])
            {
                selec.forEach(ele=>
                    {
                        jss=JSON.parse(ele);
                        eleId =document.getElementById(newId(jss.x,jss.y,"id"))
                        eleId.setAttribute('class','oo')
                        
                    })
                selec=[];
            }
        }
    }


function aa(ele=888,e="   b")
    {
        selec.push(ele.getAttribute('value'));
        ele.setAttribute('class','oos0')
        selec2();        
    }

let selCompteur=0;
inputs.forEach(
    ele=>
        {
        ele.addEventListener('click',(e)=>{aa(ele,e);})
        }
)
    



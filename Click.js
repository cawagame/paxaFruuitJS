const inputs = document.querySelectorAll('button')






function aa(ele=888,e="   b")
    {
        const elev =ele.getAttribute('value');
        selec.push(elev);
        ele.setAttribute('class','oos0')
        
        
        /*
        if (leselec>1)
        {selec2Virif(leselec);}       
        */
    }


inputs.forEach(
    ele=>
        {
        ele.addEventListener('click',(e)=>{aa(ele,e);})
        }
)
    



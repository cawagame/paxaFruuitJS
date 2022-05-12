let stop=1;
function aa(ele=888,e="   b")
    {
        selec.push(ele.getAttribute('value'));
        ele.setAttribute('class','oos0')
        console.log(selec);
    }
const ee =function ()
    {
inputs = document.querySelectorAll('button');

inputs.forEach(
    ele=>
        {
        ele.addEventListener('click',(e)=>{aa(ele,e);})
        }
)
    }

let a=ee();
console.log(a,"-------sss");


let data = "";
let buttons = document.querySelectorAll('button');
let btnArray = Array.from(buttons);
btnArray.forEach((button)=>
{
    let input = document.getElementById("display");
    button.addEventListener('click',(e)=>
    {
        try{
            let value = e.target.innerHTML;
        if(value=='=')
        {
            data = eval(data);
        }else if(value=='AC')
        {
            data = "";
        }
        else{
            data = data + value
        }
        input.value = data;
        }catch(error)
        {
            input.value = "Syntax Error"
        }
    })

})
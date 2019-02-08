
/*----- app's state (variables) -----*/ 
var count = 0;  

/*----- cached element references -----*/
var p = document.querySelector('p')
var input = document.querySelector('input')
p.textContent = 0
// var countDisplay = document.getElementById('display').value;
/*----- event listeners -----*/ 
document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', minus);

/*----- functions -----*/
function add(){  
    count += parseInt(input.value)
    p.textContent = count
}
function minus(){ 
    count -= parseInt(input.value); 
    p.textContent = count;
    
}
   
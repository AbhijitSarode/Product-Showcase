const addItem = document.getElementById('plus');

const removeItem = document.getElementById('minus');

function  addToCart(){
    let output = document.getElementById('text');
    let result = Number(output.innerText) + 1 
        output.innerText = result;
        
}

function removeFromCart(){
    let output = document.getElementById('text');
    let result = Number(output.innerText) - 1
        output.innerText = result;
    
        if (result < 0 ){
            output.innerText = 0
            alert("Item cannot be in negative value ")
            
        }
}


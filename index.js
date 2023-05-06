function  addSelection(){
    let output = document.getElementById('text');
    let result = Number(output.innerText) + 1 
        output.innerText = result;
        
}

function removeSelection(){
    let output = document.getElementById('text');
    let result = Number(output.innerText) - 1
        output.innerText = result;
    
        if (result < 0 ){
            output.innerText = 0
            alert("Item cannot be in negative value ")
            
        }
}

//function to openNodal
function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var btn = document.getElementById("myBtn");
    modal.style.display = "block";
    modalImg.src = image.src;

    // Hide the modal when the close button is clicked
    btn.onclick = function() {
        modal.style.display = "none";
      }

    // Hide the modal when clicking outside the modal content
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
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

var currentIndex = 0 

var carouselImages = document.querySelectorAll('.carousel img');

var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
 
function showImage(index) {
    // Hide all images
    carouselImages.forEach(function(img) {
      img.style.display = 'none';
    });
  
    // Show the image at the specified index
    carouselImages[index].style.display = 'block';
  }
  
  function changeImage(direction) {
    currentIndex += direction;
    
    // Wrap around to the first image if at the end
    if (currentIndex < 0) {
      currentIndex = carouselImages.length - 1;
    } else if (currentIndex >= carouselImages.length) {
      currentIndex = 0;
    }
  
    showImage(currentIndex);
  }
  
  // Event listeners for previous and next buttons
  prevButton.addEventListener('click', function() {
    changeImage(-1);
  });
  
  nextButton.addEventListener('click', function() {
    changeImage(1);
  });
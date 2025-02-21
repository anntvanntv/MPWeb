




//overflow hidden max width 800px

function addRem() {
    const check = document.getElementById("check");

        if (check.checked) {
            document.body.style.overflow = "hidden"; 
            
        }   else{
            document.body.style.overflow = "";
            }
    }

check.addEventListener("click", addRem)



  





 
  //fotos news slide

  let slideIndex = [1, 1, 1];
  let slideId = ["mySlides1", "mySlides2", "mySlides3"]
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);

  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no)
  }

  function showSlides(n, no) {
    let i;
    let xi = document.getElementsByClassName(slideId[no]);
    if (n > xi.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = xi.length}
    for (i = 0; i < xi.length; i++) {
        xi[i].style.display = "none";
        
    }
    xi[slideIndex[no]-1].style.display = "block";
    
    

  }


  //Lupa


  const image = document.getElementById("zoomImage")
  const lens = document.getElementById("lens")

  image.addEventListener("mousemove", zoom);
  image.addEventListener("mouseleave", () => lens.style.display = "none");

 
function zoom(event) {
  let rect = image.getBoundingClientRect();
  let lensSize = 100;
  let scale = 4;


let x = event.clientX - rect.left;
let y = event.clientY - rect.top;

  let lensX = x - lensSize / 2;
  let lensY = y - lensSize / 2;

  lens.style.left = `${lensX}px`;
  lens.style.top =`${lensY}px`;
  lens.style.display = "block";

  lens.style.backgroundImage = `url('${image.src}')`;
  lens.style.backgroundSize = `${image.width * scale}px ${image.height * scale}px`;
  lens.style.backgroundPosition = `-${x * scale - lensSize / 2}px -${y * scale - lensSize/2}px`;

  
}

 
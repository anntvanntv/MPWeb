




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



//function button text appears


/* var text = document.querySelectorAll(".thisistext")



$(document).ready(function() {
    text.forEach((element) => {
        let button = element.previousElementSibling;
        $(button).click(function() {
            $(element).slideToggle(1000);
        })
    })
}) */


  

        


  


 
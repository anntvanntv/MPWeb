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

/* function functionText() {
    const text = document.getElementById("textap");
    console.log("funciona"); 
    text.style.display = "block"; 

} */
 
 $(document).ready(function(){
    $("#btn").click(function(){
       $(".thisismiritext").toggle(1000); 
    });
  });
/* 
  $(document).ready(function(){
    $("button").click(function(){
        console.log("Button clicked!"); // Check if the button is clicked
    });
});
 */
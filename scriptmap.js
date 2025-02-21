
//ANTI SPAM


/* 
   let link = document.getElementById("contactocon")
 
   link.addEventListener("click", obfuscateEmail => {
    
    let email = link.href.replace("mailto:", "")
    console.log(email);
    let obfuscated = ""
  
        for (let j = 0; j < email.length; j++){
          obfuscated += `&#${email.charCodeAt(j)}`;
        }
        link.href =`mailto:${obfuscated}`
  });  */



/*   document.addEventListener("DOMContentLoaded", function () {

  let link = document.getElementById("contactocon")

  let email = link.href.replace("mailto:", "")
 
  let obfuscated = ""

      for (let j = 0; j < email.length; j++){
        obfuscated += `&#${email.charCodeAt(j)};`;
        
      }
      link.innerHTML = obfuscated;
      
    link.addEventListener("click", e => {
      e.preventDefault();
      link.href = `mailto:${email}`; 
      window.location.href = link.href;
      console.log(link.href);
    });
  }); */



 /*  document.addEventListener("DOMContentLoaded", function () {
    let link = document.getElementById("contactocon");
  
    // Extract the original email from the href
    let email = link.href.replace("mailto:", "");
  
    // Obfuscate the email using HTML entities
    let obfuscated = email
      .split("")
      .map(char => `&#${char.charCodeAt(0)};`)
      .join(""); // Ensures proper encoding
  
    // Set the obfuscated email inside the link
    link.innerHTML = obfuscated;
  
    // Restore the actual email when clicked
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default mailto behavior
      link.href = `mailto:${email}`; // Restore real email
      setTimeout(() => window.location.href = link.href, 50); // Allow client to open
    });
  }); */




  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a.mail").forEach(link => {
      let email = link.href.replace("mailto:", ""); // Get the email
  
      // Encode email using HTML entities
      let obfuscated = email
        .split("")
        .map(char => `&#${char.charCodeAt(0)};`)
        .join("");
  
      link.innerHTML = obfuscated; // Set obfuscated email as visible text
  
      // Restore real email when clicked
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default navigation
        link.href = `mailto:${email}`; // Restore the original email
        setTimeout(() => window.location.href = link.href, 50); // Allow email client to open
      });
    });
  });
  
  












  




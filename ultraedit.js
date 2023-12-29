console.log("testing");

let a = document.getElementById("scrl");

a.addEventListener("click" , ()=>{
    window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
});


let b = document.getElementById("submit");

b.addEventListener("click", ()=>
{
    alert("Email Address Submitted");
    document.getElementById("inn").reset();
});

let c = document.getElementById("subi");

c.addEventListener("click",()=>
{
    document.getElementById("sub").reset();
});




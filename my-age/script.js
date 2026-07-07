const D = new Date();
const inp = document.getElementById("date");
const btn = document.getElementById("submit");
btn.addEventListener("click",(e)=>{
    const DOB = new Date(inp.value);
    console.log(DOB);
    const age = ((((((D - DOB)/1000)/60)/60))/24)/365 ;
    if(age >= 0){
        const parent = document.getElementById("ageOutput");
        parent.innerHTML = `<p>Your age is ${age.toFixed(2)} years</p>`;
    }
    console.log(age);
});
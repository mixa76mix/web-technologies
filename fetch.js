let input = document.getElementById("numinput");
let answer = document.getElementById("ans");
let but = document.getElementById("ansbut");

but.addEventListener("click", function(event) 
{
    var formData = new FormData();
    formData.append("num", input.value);
    console.log(input.value);

    fetch("myphp72post.php", 
    {
        method: "POST",
        body: formData
    })
    .then (response => response.text())
    .then (text => answer.innerText = text)
    .catch(error => console.log(`Fetch error: ${error.message}`));
});


let trueanswer = document.getElementById("trueans");
let truebut = document.getElementById("trueansbut");

truebut.addEventListener("click", function(event) 
{
    fetch("myphp72get.php", 
    {
        method: "GET"
    })
    .then (response => response.text())
    .then (text => trueanswer.innerText = text)
    .catch(error => console.log(`Fetch error: ${error.message}`));
});

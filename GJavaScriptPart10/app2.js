let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    //let black = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    

    return color;

}



    //Explaination 
/* Ye function 3 random values banata hai:
red, green, blue (har ek 0 se 254 ke beech me hota hai)
Fir in values ko combine karke ek valid RGB color string banata hai jaise rgb(120, 45, 200)
Ye string ko return karta hai jise baad me use kiya jata hai.

Summary(Saar):
Button pe click karne par ek random RGB color generate hota hai.
Us color ko <h3> me text ke roop me dikhaya jata hai.
Aur usi color ko <div> ka background bana diya jata hai.*/




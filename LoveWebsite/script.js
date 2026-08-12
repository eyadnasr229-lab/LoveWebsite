const button = document.getElementById("loveBtn");
const message = document.getElementById("message");
button.addEventListener("click", function () {
message.textContent = "❤️ نورتي يا بندوستي ❤️";
    for(let i = 0; i < 20; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.classList.add("heart");

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(heart);

        setTimeout(function(){
            heart.remove();
        },2000);

    }

});
setInterval(function(){

    const heart = document.createElement("div");

    heart.innerHTML = "🌹";

    heart.classList.add("background-heart");

    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },6000);

},700);
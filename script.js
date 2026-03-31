const form = document.getElementById("inviteForm");
const music = document.getElementById("bgmusic");

/* play music when user interacts */

document.addEventListener("click", () => {

music.volume = 0;
music.play();

let fade = setInterval(()=>{

if(music.volume < 0.5){
music.volume += 0.05;
}else{
clearInterval(fade);
}

},200);

},{once:true});

/* password redirect */

form.addEventListener("submit", function(e){

e.preventDefault();

const password = document.getElementById("password").value.toLowerCase();

const pages = {

"nguyenhoangphu":"phu.html",
"vuthithanhthuy":"thuy.html"

};

if(pages[password]){

window.location.href = pages[password];

}else{

alert("Wrong password");

}

});
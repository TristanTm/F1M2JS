const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle');


let paintings = [
    "lesmateriaal voor les 03/painting0.jpg",
    "lesmateriaal voor les 03/painting1.jpg",
    "lesmateriaal voor les 03/painting2.jpg",
    "lesmateriaal voor les 03/painting3.jpg",
    "lesmateriaal voor les 03/painting4.jpg",
    "lesmateriaal voor les 03/painting5.jpg"

];

let titles = [
    "De schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhone",
    "Zonnenbloem",
    "Boederij in de provence"


];



function changeImage(index){
    myTitle.innerHTML = titles[index];
    myImage.src = paintings[index];
}


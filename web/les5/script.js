const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");


const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopZuid = document.getElementById('knopZuid');
const knopWest = document.getElementById('knopWest');


let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}


let current_index = 0; 


let lokaties = [
    {
        "titel":"plaats 0",
        "img":"img/0.jpg",
        "directions": {"zuid": 1 
        }
    },
    {
        "titel":"plaats 1",
        "img":"img/1.jpg",
        "directions": {
            "west": 2,
            "oost": 5,
            "zuid": 4,
            "noord": 0
    }
    },
    {
        "titel":"plaats 2",
        "img":"img/2.jpg",
        "directions": {
            "oost": 1,
            "zuid": 3}
    },
    {
        "titel":"plaats 3",
        "img":"img/3.jpg",
        "directions": {
            "noord": 2
        }
    },
    {
        "titel":"plaats 4",
        "img":"img/4.jpg",
        "directions": {
            "noord": 1
        }
    },
    {
        "titel":"plaats 5",
        "img":"img/5.jpg",
        "directions": {
            "west": 1,
            "oost": 6,
            "noord": 10
        }
    },
    {
        "titel":"plaats 6",
        "img":"img/6.jpg",
        "directions": {
            "west": 5,
            "oost": 7,
            "zuid": 11,
        }
    },
    {
        "titel":"plaats 7",
        "img":"img/7.jpg",
        "directions": {
            "west": 6,
            "zuid": 8,
            "noord": 9
        }
    },
    {
        "titel":"plaats 8",
        "img":"img/8.jpg",
        "directions": {
            "noord": 7
        }
    },
    {
        "titel":"plaats 9",
        "img":"img/9.jpg",
        "directions": {
            "west": 10,
            "zuid": 7,
        }
    },
    {
        "titel":"plaats 10",
        "img":"img/10.jpg",
        "directions": {
            "oost": 9,
            "zuid": 5,
        }
    },
    {
        "titel":"plaats 11",
        "img":"img/11.jpg",
        "directions": {
            "noord": 6
        }
    },
]
//myTitle.innerHTML = "dit is door het script toegevoegd"
//myImage.src = "img/1.jpg";

function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].img;
    current_index = index;

    updateDirections();
}

function updateDirections(){
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);

    console.log(possible);
    console.log(possible_keys);


    let button_keys = Object.keys(directionButtons);
    console.log(button_keys);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden"
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}





function getInput(){
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index =  lokaties[current_index].directions[richting];
    show(punt_index)
}



show(0);


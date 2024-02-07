// This is the bubble game created
// ================================

let bubbleContainer = document.querySelector("#bubble-container");
let bubbleStore = document.querySelector(".bubble-store");
let target = document.querySelector(".target");
let timer = document.querySelector(".timer");
let score = document.querySelector(".score");
let scoreVal = 0;
let bubbleUpdate;


// Create target
function targetFunc() {
    target.innerHTML = Math.floor(Math.random() * 10);
}
targetFunc();


// Create timer
function timerFunc() {
    let time = 59;
    let timeSet = setInterval(() => {
        if (time <= 0) {
            clearInterval(timeSet);
            bubbleStore.style.visibility = "hidden";
            gameOver();
            target.innerHTML = "-";
        }
        timer.innerHTML = time--;
    }, 1000);
}
timerFunc();


// Check Which bubble I clicked and score increase
bubbleContainer.addEventListener('click', function (click) {
    let bubbleNo = click.target.textContent;
    if (bubbleNo == target.textContent) {
        scoreVal++;
        score.innerHTML = scoreVal;
        targetFunc();
        bubbleGenerate();
    }
});


// Create bubbles and generate random number in bubble
function bubbleGenerate() {
    let bubble = "";
    for (let i = 0; i < 150; i++) {
        let rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
        bubbleStore.innerHTML = bubble;
    }
}
bubbleGenerate();


// Game Over function
function gameOver() {
    let gmOverContainer = document.createElement("div")
    gmOverContainer.classList.add("gmOver-container");
    bubbleContainer.appendChild(gmOverContainer);

    let gmOverH1 = document.createElement("h2");
    gmOverH1.innerText = "GAME OVER";
    gmOverContainer.appendChild(gmOverH1);

    let gmOverBtn = document.createElement("button");
    gmOverBtn.innerText = "Play Again";
    gmOverContainer.appendChild(gmOverBtn);

    gmOverBtn.addEventListener("click", function () {
        targetFunc();
        timerFunc();
        scoreVal = 0;
        score.innerHTML = 0;
        document.querySelector(".gmOver-container").style.display = "none";
        bubbleStore.style.visibility = "visible";
    });
}


// This is a TODO App
// ===================

let form = document.querySelector(".add");
let edit_form = document.querySelector(".edit-section");
let name = document.querySelector("#name");
let time = document.querySelector("#time");
let place = document.querySelector("#place");
let submit = document.querySelector(".submit");
let editSubmit = document.querySelector(".edit-submit");
let tbody = document.querySelector("tbody");
let taskNo = 1;
let tr;

function add() {
    form.style.visibility = "visible";
    document.querySelector("h1").style.opacity = 0;
}

function exit() {
    form.style.visibility = "hidden";
    document.querySelector("h1").style.opacity = 1;
}

function editExit() {
    edit_form.style.visibility = "hidden";
    document.querySelector("h1").style.opacity = 1;
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    if ((name.value.length >= 1) && (time.value.length >= 1) && (place.value.length >= 1)) {
        tr = document.createElement("tr");
        tbody.appendChild(tr);
        tr.classList.add("task");
        let td = document.createElement("td");
        tr.appendChild(td);
        let td2 = document.createElement("td");
        td2.classList.add("time");
        tr.appendChild(td2);
        let td1 = document.createElement("td");
        td1.classList.add("title");
        tr.appendChild(td1);
        let td3 = document.createElement("td");
        td3.classList.add("place");
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        tr.appendChild(td4);

        td.innerHTML = taskNo++;
        td1.innerHTML = name.value;
        td2.innerHTML = time.value;
        td3.innerHTML = place.value;

        td4.style.display = "flex";
        td4.style.gap = "6px";

        let edit = document.createElement("button");
        edit.innerHTML = "Edit"
        td4.appendChild(edit);
        edit.classList.add("edit")

        let remove = document.createElement("button");
        remove.innerHTML = "Remove"
        td4.appendChild(remove);
        remove.classList.add("remove");

        exit();
    }

    let edit_task = document.querySelectorAll(".edit");
    let task = document.querySelectorAll(".task");

    for (let i = 0; i < task.length; i++) {
        edit_task.forEach((i) => {
            i.onclick = () => {
                edit_form.style.visibility = "visible";
                let selectedTask = i.parentElement.parentElement.children;
                document.querySelector(".edit-time").value = selectedTask[1].textContent;
                document.querySelector(".edit-name").value = selectedTask[2].textContent;
                document.querySelector(".edit-desc").value = selectedTask[3].textContent;
                editSubmit.addEventListener("click", function (e) {
                    e.preventDefault();
                    selectedTask[1].textContent = document.querySelector(".edit-time").value;
                    selectedTask[2].textContent = document.querySelector(".edit-name").value;
                    selectedTask[3].textContent = document.querySelector(".edit-desc").value;
                    editExit();
                });
            }
        });
    }

    let remove = document.querySelectorAll(".remove");
    for (let i = 0; i < remove.length; i++) {
        remove[i].onclick = () => {
            let confirmRemove = confirm(`Are you sure you want to delete this task`);
            if (confirmRemove) {
                remove[i].parentElement.parentElement.remove();
            }
        }
    }
});


// Start the code of a calulator
// =============================

let numPad = document.querySelector(".numPad");
let numInput = document.querySelector("#numInput");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let devide = document.querySelector(".devide");
let miltipli = document.querySelector(".miltipli");
let persentage = document.querySelector(".persentage");


function backspace() {
    numInput.value = numInput.value.slice(0, -1);
}
function result() {
    let plusIndex = numInput.value.indexOf("+");
    let minusIndex = numInput.value.indexOf("-");
    let multiplyndex = numInput.value.indexOf("*");
    let devitionIndex = numInput.value.indexOf("/");
    let moulasIndex = numInput.value.indexOf("%");
    if (numInput.value.includes("+")) {
        numInput.value = Number(numInput.value.slice(0, plusIndex)) + Number(numInput.value.slice(++plusIndex, numInput.value.length));
    }

    if (numInput.value.includes("-")) {
        numInput.value = Number(numInput.value.slice(0, minusIndex)) - Number(numInput.value.slice(++minusIndex, numInput.value.length));
    }

    if (numInput.value.includes("*")) {
        numInput.value = Number(numInput.value.slice(0, multiplyndex)) * Number(numInput.value.slice(++multiplyndex, numInput.value.length));
    }

    if (numInput.value.includes("/")) {
        numInput.value = Number(numInput.value.slice(0, devitionIndex)) / Number(numInput.value.slice(++devitionIndex, numInput.value.length));
    }

    if (numInput.value.includes("%")) {
        numInput.value = Number(numInput.value.slice(0, moulasIndex)) / Number(numInput.value.slice(++moulasIndex, numInput.value.length));
    }
}


// Age calculator
// ================

function start() {
    let userDay = document.querySelector(".day").value;
    let userMonth = document.querySelector(".month").value;
    let userYear = document.querySelector(".year").value;

    let day = 0;
    let month = 0;
    let year = 0;

    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    while (userYear < currentYear) {
        year++;
        document.querySelector(".textYear").innerHTML = year + " Years Old";
        userYear++;
    }

    while (userMonth < currentMonth) {
        month++;
        userMonth++;
    }

    while (userDay < currentDate) {
        day++;
        userDay++;
    }
    // let calAllDay = (year * 365) + (month)
    document.querySelector(".alive").innerHTML = `You are alive now ${year} year ${month} months and ${day} days`;

    document.querySelector(".aliveMonth").innerHTML = `You are alive ${Math.floor((year * 365 / 30) + (month))} months`;
    document.querySelector(".aliveWeek").innerHTML = `You are alive ${Math.floor((year * 365) / 7)} weeks`;
    document.querySelector(".aliveDay").innerHTML = `You are alive ${Math.floor(year / 365)} days`;
}


// This is Tic Tac Toe game script
// =================================

let box = document.querySelectorAll(".box");
let clickCount = 0;
let pointX = 0;
let pointY = 0;

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function player() {
        clickCount++;
        if (clickCount === 1) {
            box[i].innerHTML = "X";
            box[i].classList.add("disable");
        }
        if (clickCount === 2) {
            box[i].innerHTML = "O";
            box[i].classList.add("disable");
        }
        if (clickCount === 3) {
            box[i].innerHTML = "X";
            box[i].classList.add("disable");
        }
        if (clickCount === 4) {
            box[i].innerHTML = "O";
            box[i].classList.add("disable");
        }
        if (clickCount === 5) {
            box[i].innerHTML = "X";
            box[i].classList.add("disable");
        }
        if (clickCount === 6) {
            box[i].innerHTML = "O";
            box[i].classList.add("disable");
        }
        if (clickCount === 7) {
            box[i].innerHTML = "X";
            box[i].classList.add("disable");
        }
        if (clickCount === 8) {
            box[i].innerHTML = "O";
            box[i].classList.add("disable");
        }
        if (clickCount === 9) {
            box[i].innerHTML = "X";
            box[i].classList.add("disable");
        }
        gameLogic();
    });
}

// This function is provide the logic of the game
function gameLogic() {
    const arr = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], 
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for(const dataWins of arr){
        const [a, b, c] = dataWins;
        if(arr[a] === arr[b] && arr[a] === arr[c]){
            return arr[a];
        }
    }
    return null;
}


function gameWin() {
    document.querySelector(".gameWin").classList.remove("congrats");
}

function tictactoeReset() {
    box.forEach((boxes) => {
        boxes.innerHTML = "";
        boxes.classList.remove("disable");
    });
}


// This is a fire game
// ======================

// Target all classes and ids
let game = document.querySelector("#game");
let heroCharContainer = document.querySelector(".heroChar-container");
let animeContainer = document.querySelector(".anime-container");
let triger = document.querySelector(".triger");
let bullet_container = document.querySelector(".bullet-container");
let pointer = document.querySelector(".point");
let heroPosition;
let animePosition;
let bulletPosition;
let bulletWidth;
let bullet;
let point = 0;
let anime;

document.querySelector(".age_click").style.display = "none";
// press arrow key to move the hero
window.addEventListener('keydown', function (keyCode) {
    heroPosition = heroCharContainer.getBoundingClientRect();
    let keycode = keyCode.keyCode;
    if (keycode == 37 && heroPosition.left > 0) {
        heroCharContainer.style.marginLeft = heroPosition.left - 20 + "px";
    }
    let heroWidth = document.querySelector(".hero").offsetWidth;
    if (keycode == 39 && heroPosition.left < (heroWidth - heroPosition.width)) {
        heroCharContainer.style.marginLeft = heroPosition.left + 20 + "px";
    }
});

// Hero move by mouse movements
let heroCharWidth = heroCharContainer.offsetWidth;
game.addEventListener("mousemove", function (details) {
    heroCharContainer.style.marginLeft = `${details.clientX - heroCharWidth / 2}px`;
});

// This function is generate the bullets
function bulletGenerate() {
    bullet = document.createElement("img");
    bullet.src = "bullet.png"
    bullet_container.appendChild(bullet);
    bullet.classList.add("bullet");
    bulletWidth = bullet.offsetWidth;
    animeDistroy();
}

// Press the space key on keyboard to fire the bullet
addEventListener('keypress', function (keyCode) {
    let key = keyCode.keyCode;
    if (key === 32 || key === 38) {
        bulletGenerate();
        bullet.style.left = `${heroPosition.left + (heroCharWidth / 2) - (bulletWidth / 2)}px`;
    }
});

// fire the bullets with mouse click
game.addEventListener("click", function (e) {
    bulletGenerate();
    bullet.style.left = `${e.clientX - bulletWidth / 2}px`;
});

// Generate the Anime
function animeGenerate() {
    let animeTimeer = setInterval(() => {
        anime = document.createElement("img");
        anime.src = "anime.png";
        animeContainer.appendChild(anime);
        anime.classList.add("anime");
        anime.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    }, 2000);
}
// animeGenerate();

// This function is remove the anime by shooting the bullet
function animeDistroy() {
    let animeDetector = document.querySelectorAll(".anime");
    for (let i = 0; i < animeDetector.length; i++) {
        let getAnime = animeDetector[i];

        if (getAnime != undefined) {
            animePosition = getAnime.getBoundingClientRect();
            bulletPosition = bullet.getBoundingClientRect();

            let bulletLeft = bulletPosition.left - heroCharWidth / 2;
            let bulletRight = bulletPosition.right - heroCharWidth / 2;

            if (bulletLeft >= animePosition.left && bulletRight <= animePosition.right && bulletPosition.bottom >= animePosition.bottom && bulletPosition.top >= animePosition.top) {
                getAnime.remove();
                pointer.innerHTML = ++point;
            }
        }
    }
}

// Game Over
function gameOver(){
    // let animePositionForOverTheGame = window.getComputedStyle(document.querySelector(".anime")).getPropertyValue("top")+"px";
    // if (animePosition.top <= 300) {
    //     console.log("Game over");
    // }
}
gameOver()


// Remove the bullet evry second
game.addEventListener("click", function () {
    let bulletRemover;
    if (bullet_container.childElementCount >= 5) {
        bulletRemover = setInterval(() => {
            bullet_container.firstElementChild.remove();
        }, 1000);
    }else{
        clearInterval(bulletRemover);
    }
});
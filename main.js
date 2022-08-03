// how to navigate:

// ***"MASTER SECTIONS"***
// **"sub-sections"**
// *functions*
// ^styling^

// this structure is universal across all of the files.


/***START MENU***/
/**choice box**/
const startPage = document.getElementById('start-menu-page');
const btn = document.getElementById('btn-overlay');
const shapeX = document.getElementById('choose-x');
const shapeO = document.getElementById('choose-o');

const toggleX = document.getElementById('toggle-x');
const toggleO = document.getElementById('toggle-o');

toggleX.addEventListener('click', ()=>{
    btn.style.right = '50%';
    shapeX.style.fill = 'var(--dark)';
    shapeX.style.transition = '0.5s';
    shapeO.style.fill = 'var(--silver)';
    shapeO.style.transition = '0.5s';
    
    // setup GAME BOARD for player1 -X player2 -O
    
});

toggleO.addEventListener('click', ()=>{
    btn.style.right = '0'
    shapeX.style.fill = 'var(--silver)';
    shapeO.style.fill = 'var(--dark)';

    // setup GAME BOARD for player1 -O player2 -X
});  

/**start menu buttons**/
const buttonCPU = document.getElementById("button-cpu");
// const buttonText = buttonOne.children;

buttonCPU.addEventListener('mousedown', () => {
    buttonCPU.style.boxShadow = '0 0 0 0 inset';
    buttonCPU.style.clipPath = 'inset(8px 0 0 0 round 15px)';
    buttonCPU.style.paddingTop = '14px';
});

buttonCPU.addEventListener('mouseup', () => {
    buttonCPU.style.boxShadow = '0px -8px 0px 0px rgba(204, 139, 19, 1) inset';
    buttonCPU.style.clipPath = 'inset(0 0 0 0 round 15px)';
    buttonCPU.style.paddingTop = '0px';
    
    // hides entire start menu page
    startPage.style.visibility = 'hidden';
    startPage.style.opacity = '0';
    startPage.style.transition = '0.6s';
    // paints game board
    startPage.style.display = 'flex';
});


/**GAME BOARD***/
const gamePage = document.getElementById('game-board-page');
let clearBoard;



























// temporary
let counter = 0;
function switchPage(){
    counter+= 1;
    if(counter % 2 == 0) {
        startPage.style.display = 'none';
        gamePage.style.display = 'flex';
    }else {
        gamePage.style.display = 'none';
        startPage.style.display = 'flex';
    }
};

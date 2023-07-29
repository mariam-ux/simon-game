let queueGenereated = [];
let queueClicked = [];

let start = false;
let level =  0;

$('body').on("keypress", () => {
    if(!start){
        pickSquare();
        start = true;
    }
})

$('.square').on('click', function(){
    let clickedIndex = $('.square').index($(this));
    console.log('clicked ' + clickedIndex);
    $('.square').eq(clickedIndex).css("border", "white 10px solid")
    setTimeout(() => {
        $('.square').eq(clickedIndex).css("border", "black 10px solid")
    }, 200);
    queueClicked.push(clickedIndex);
    checkResult(queueClicked.length-1);
    console.log("level " + level)
   
})

function pickSquare() {
    queueClicked = [];
    level++;
    $('h1').text('Level ' + level);
    
    let picked = Math.floor(Math.random() * 4);
    queueGenereated.push(picked);
    console.log('picke ' + picked);
    $('.square').eq(picked).css("border", "white 10px solid")
    setTimeout(() => {
        $('.square').eq(picked).css("border", "black 10px solid")
    }, 200);
}


function checkResult(level) {
    console.log(queueGenereated[level] + " vs " + queueClicked[level])
    if(queueGenereated[level] === queueClicked[level]){
        if(queueClicked.length === queueGenereated.length) {
            setTimeout(() => {
                pickSquare();
            }, 1000)
           
        } 
    } else {
        $('h1').text("Game Over");
        $('body').css("background-color", "red");
        setTimeout(() => {
            $('h1').text("Game Over, Press Any Key to Restart");
            $('body').css("background-color", "rgb(24, 24, 114)");
        },200)
        restart();
    }
    
}
        
        
function restart(){ 
    level = 0;
    queueGenereated = [];
    queueClicked = [];
    start = false;
}
   


   
        
       
    
   
 
   /* $('h1').text('Game Over, Press Any Key to Restart')
    $('.square').eq(picked).css("border", "red 10px solid")
    setTimeout(() => {
        $('.square').eq(picked).css("border", "black 10px solid")
    }, 200);
    pickSquare();*/

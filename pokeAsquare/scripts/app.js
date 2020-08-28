console.log('Welcome to Poke-A-Square...');

// == User Stories/game logic == //
// When the user clicks begin, the timer should start and the squares should populate with a random color

//how many squares?? what?
//what colors?
//what timer look like?
//where squares?
//what square look like?
//what is "begin"?
//why user here?  what expect?  what do THEY want?  motivation/backstory?

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

//this means a color square?
//color or square disappear?

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

//how is scored?
//how difficulty upped?

//how many rounds?  when game is over??
//when round over?


//25 squares
// x2 per round
//4 color (red/blue/green/purple)
//30-sec timer (/2 every other round)
//begin -- button in header
//blue adds point, others subtract point...
//color will dim (opacity) and can't click anymore
//start zero pts
//carry over rounds
//at end, display pts
//countdown timer ends rown
//3 rounds
//auto start next
//difficulty: less time, more squares
//


//jason's code
/* 
const createSquares = function (n) {
    const $squares = $('.squares');
    const colors = ['red', 'blue', 'green', 'purple'];
    for (let i = 0; i < n; i++) {
        let $square = $('<div class="square"></div>');
        const color = Math.floor(Math.random() * colors.length);
        $square.css('width', '25px')
            .css('height', '25px')
            .css('background-color', colors[color])
        $square.appendTo($squares);
    }
} */






//1st thing do?
//make a square...?
//create gameboard div?
//begin btn?
const squareCount = 30;

let round = 0;
const timeSet = 3;
$('#timer').text('timer: '+timeSet+"s");

$('button').on('click', function(){
    console.log('===GAME START===');
    setUpRound();
    //console.log(applyRandomColor());
})

//next step?
//make a square(s)
//ok make fxn that is called createSquare
//query dom ($) for parent element (.squares)
//create div class square (loop -- do X times)
//append to parent (.squares)

const createSquares = function(numSquares) {
    const holder = $('.squares');
    holder.empty();
    for(i=0; i<numSquares; i++){
        const newSquare = $('<div/>').addClass('square');
        newSquare.css('background-color', applyRandomColor());
        //console.log(newSquare);
        holder.append(newSquare);
    }
}

//step 3
const colors1 = ['blue', 'red', 'green', 'purple', 'orange', 'yellow']

const applyRandomColor = function() {
    x = Math.floor(colors1.length*Math.random());
    return colors1[x];
}

//step 4
//do a poke
//add a listener (guess to above class?)
//look at color

let score1 = 0;

const getPoked = function(event){
    console.log('clicked!');
    const color2 = $(event.target).css('background-color');
    //console.log(color2);
    if(color2==='rgb(0, 0, 255)'){
        score1++;
        //console.log(score1);
    }
    else if(color2==='rgb(128, 128, 128)'){
        console.log('sorry grey');
        return;
    }
    else{
        console.log('miss!');
        score1--;
        //console.log(score1);
    }
    $(event.target).css('background-color', 'grey');
    $(event.target).css('opacity', '0.5');
    $('h1').text("Scoreboard: "+score1);
}

$('.squares').on('click', '.square', getPoked);



//note: should name function outside
//so can remove etc it later

//note: dalton made a  clicked class
//i just made the color grey



//step 6
//TIMER STUFF


const setTimer = function(){
    let time1 = timeSet;
    const timer1 = setInterval(
        function(){
            if(time1 === 0){
                clearInterval(timer1);
                round++;
                time1 = timeSet;
                //setTimer();?? just keeps going...
                if(round<4){
                    setUpRound();
                }
                else{
                    console.log('game over');
                    $('.squares').empty();
                }
                
            }
            console.log(time1);
            time1--;
        },
        1000
    );
}


//step 7
//setup round function
//depending on round
//generate squares

const setUpRound = function() {
    $('#round').text('round: '+(round+1));
    $('.squares').empty();
    setTimer();
    if(round>3){
        console.log('game over');
        return;
    }
    else{
        createSquares(25*(2**round));
    }
}

//note
//never updated timer or round variable


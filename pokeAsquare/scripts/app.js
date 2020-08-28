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

//1st thing do?
//make a square...?
//create gameboard div?
//begin btn?

$('button').on('click', function(){
    console.log('===GAME START===');
    createSquares(10);
})

//next step?
//make a square(s)
//ok make fxn that is called createSquare
//query dom ($) for parent element (.squares)
//create div class square (loop -- do X times)
//append to parent (.squares)

const createSquares = function(numSquares) {
    const holder = $('.squares');
    for(i=0; i<numSquares; i++){
        const newSquare = $('<div/>').addClass('square');
        holder.append(newSquare);
    }
}


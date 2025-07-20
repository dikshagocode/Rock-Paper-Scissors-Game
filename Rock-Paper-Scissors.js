
let score = JSON.parse(localStorage.getItem("score")) || {
    wins:0,
    losses:0,
    ties:0
    };

    updateScoreElement();

    function compturn() {
        let compmove = ''
        const randnum = Math.random();

        if(randnum >=0  && randnum <1/3){
            compmove = 'Rock';
        } else if (randnum >=1/3  && randnum <2/3){
            compmove = 'Paper';
        } else if (randnum >=2/3  && randnum <1){
            compmove = 'Scissors';
        }

        return compmove
        }

        
    function myturn (playermove) {

        const compmove = compturn()
        let result = ''

        if (playermove === 'Scissors') {
            if (compmove === 'Rock') {
                result='You Lose!';
            } else if (compmove === 'Paper'){
                result = 'You Win!';
            } else if (compmove === 'Scissors'){
                result = 'Tie!';
            }
            
                
        } else if (playermove === 'Rock') {
            if (compmove === 'Rock'){
                result='Tie!';
            } else if (compmove === 'Paper'){
                result = 'You Lose!';
            } else if (compmove === 'Scissors'){
                result = 'You Win!';
            }
            
        } else if (playermove === 'Paper') {
            if (compmove === 'Rock'){
                result='You Win!';
            } else if (compmove === 'Paper'){
                result = 'Tie!';
            } else if (compmove === 'Scissors'){
                result = 'You Lose!';
            }
            
        }

        if (result === 'You Win!') {
            score.wins += 1;
        }else if (result === 'You Lose!') {
            score.losses += 1;
        }else if (result === 'Tie!') {
            score.ties += 1;
        }

        localStorage.setItem("score",JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You ${playermove} - ${compmove} Computer`;

    }

    function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`
    }
  console.log("APP JS is working");


  var myGame = new SimonGame ();


      $(document).ready(function () {

          myGame.startGame();

          });

  $(document).ready(function () {
    $('button').click(function () {
      var x = $(this).prop('id');
      var currentSequenceColor = myGame.sequence[myGame.userClickCount];

      if(currentSequenceColor === x) {
        //the sequence is correct so far
        // alert('CORRECT');
        myGame.userClickCount += 1;

        if(myGame.userClickCount >= myGame.sequence.length) {
          $('body').addClass('correct');

            setTimeout(function () {
              $('body').removeClass('correct');

              myGame.nextRound();
            }, 1000);

        }
      }
      else {
        $('body').addClass('game-ended');

        setTimeout(function () {
          $('body').removeClass('game-ended');

          myGame.gameOver();
      }, 3400);
    }
});
});

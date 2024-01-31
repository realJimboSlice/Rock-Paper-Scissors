const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Variables

    let players = document.querySelectorAll(".player");
    let player1 = document.querySelector("#player1");
    let player2 = document.querySelector("#player2");
    let randomNum = Math.floor(Math.random() * 3);
    let signs = ["rock", "paper", "scissors"];
    let text = document.querySelectorAll("#texts div");

    // Add shake class to both players

    players.forEach((player) => {
      player.classList.add("shake");
    });

    // Add animationend eventListener to both players

    players.forEach((player) => {
      player.addEventListener("animationend", function () {
        // Remove shake class after animation ends
        this.classList.remove("shake");
      });
    });

    // Add disabled class to non-pressed buttons

    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.add("disabled");
      }
    });

    // Remove all existing classes from player1 and player2

    player1.classList.remove("rock", "paper", "scissors");
    player2.classList.remove("rock", "paper", "scissors");

    // Add hidden class to all text
    text.forEach((text) => {
      text.classList.add("hidden");
    });

    // Connect button pressed to player1

    if (button.classList.contains("rock")) {
      player1.classList.add("rock");
      console.log("player1 chooses rock");
    } else if (button.classList.contains("scissors")) {
      player1.classList.add("scissors");
      console.log("player1 chooses scissors");
    } else if (button.classList.contains("paper")) {
      player1.classList.add("paper");
      console.log("player1 chooses paper");
    }

    // Connect player2 to random generator

    player2.classList.add(signs[randomNum]);
    console.log("player2 chooses", signs[randomNum]);

    // RESULTS

    // setTimeout functions display text after animation timer ends

    // Checks for a draw regardless of sign first

    if (player1.className === player2.className) {
      console.log("draw");
      setTimeout(function () {
        let drawText = document.getElementById("draw");
        drawText.classList.remove("hidden");
      }, 2000);
      // Checks rock
    } else if (player1.classList.contains("rock")) {
      if (player2.classList.contains("paper")) {
        console.log("player2 wins");
        setTimeout(function () {
          let loseText = document.getElementById("lose");
          loseText.classList.remove("hidden");
        }, 2000);
      } else if (player2.classList.contains("scissors")) {
        console.log("player1 wins");
        setTimeout(function () {
          let winText = document.getElementById("win");
          winText.classList.remove("hidden");
        }, 2000);
      }
      // Checks paper
    } else if (player1.classList.contains("paper")) {
      if (player2.classList.contains("rock")) {
        console.log("player1 wins");
        setTimeout(function () {
          let winText = document.getElementById("win");
          winText.classList.remove("hidden");
        }, 2000);
      } else if (player2.classList.contains("scissors")) {
        console.log("player2 wins");
        setTimeout(function () {
          let loseText = document.getElementById("lose");
          loseText.classList.remove("hidden");
        }, 2000);
      }
      // Checks scissors
    } else if (player1.classList.contains("scissors")) {
      if (player2.classList.contains("rock")) {
        console.log("player2 wins");
        setTimeout(function () {
          let loseText = document.getElementById("lose");
          loseText.classList.remove("hidden");
        }, 2000);
      } else if (player2.classList.contains("paper")) {
        console.log("player1 wins");
        setTimeout(function () {
          let winText = document.getElementById("win");
          winText.classList.remove("hidden");
        }, 2000);
      }
    }

    // Remove disabled class from all buttons after 2.5 seconds enabling the player to play again
    // Whassup playa
    setTimeout(function () {
      buttons.forEach((button) => {
        button.classList.remove("disabled");
        console.log("Game is reset");
      });
    }, 2500);
  });
});

# Rock-Paper-Scissor-Game

## Overview

This is an interactive Rock Paper Scissors game where you can play against the computer. The game keeps track of your wins, losses, and ties using local storage, ensuring your score persists even after refreshing the page.

## Features

- Interactive Gameplay:** Choose Rock, Paper, or Scissors to play against the computer.
- Persistent Score:** Your wins, losses, and ties are saved in local storage.
- Responsive Design:** Ensures a seamless experience on different devices.
- Real-time Feedback:** Displays the results of each game round with icons.

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Icons: Custom hand icons for Rock, Paper, and Scissors moves

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SharanyaKumaran/rock-paper-scissors.git
   cd rock-paper-scissors
   ```

2. **Open the `index.html` file in your browser:**
   ```bash
   open index.html
   ```

## How to Play

1. Click on one of the hand icons (Rock, Paper, or Scissors) to make your move.
2. The computer will randomly select its move.
3. The result of the game (win, lose, tie) will be displayed along with the moves made.
4. Your score will be updated and displayed below the result.
5. To reset your score, click the "Reset Score" button.

## Project Structure

```plaintext
rock-paper-scissors/
├── Hand icons/
│   ├── Paper Icon.png
│   ├── Rock icon.png
│   └── Scissor Icon.png
├── index.html
├── index.css
└── script.js
```

## Code Highlights

- **Game Logic:** The `playGame` function determines the winner and updates the score.
- **Score Management:** Uses local storage to keep track of wins, losses, and ties.
- **Computer Move:** The `pickComputerMove` function randomly selects the computer's move.

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is open-source and available under the MIT License.

## Author

Developed by [Sharanya Kumaran]([https://github.com/SharanyaKumaran](https://github.com/SharanyaKumaran/Rock-Paper-Scissor-Game)).

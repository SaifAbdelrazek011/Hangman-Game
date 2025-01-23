# Hangman Game  

### Description  
Hangman is a classic word-guessing game reimagined as a fun, interactive website. Players try to guess a hidden word by selecting letters, but beware—you only have 8 wrong guesses before the game ends!  

This game is built using **HTML**, **CSS**, **JavaScript**, and **JSON** and is fully responsive, making it accessible on both desktop and mobile devices.  

---

### Features  
- **Light/Dark Mode:**  
  Enjoy the game in your preferred theme! Switch seamlessly between light and dark modes for a comfortable experience in any lighting condition.  

- **Difficulty Selection:**  
  Choose your challenge level:  
  - **Easy:** Common and short words.  
  - **Medium:** Moderately challenging words.  
  - **Hard:** Long and uncommon words.  
  The difficulty level adjusts the type of words provided to make the game more engaging for all skill levels.  

- **8 Chances to Win:**  
  You can make up to 8 incorrect guesses before the hangman is fully drawn, so choose your letters wisely!  

- **Random Word Generator:**  
  Words are fetched dynamically from a JSON file, ensuring variety and replayability.  

- **User-Friendly Interface:**  
  - Displays correctly guessed letters and blanks for missing ones.  
  - Highlights wrong guesses and visually tracks remaining chances.  

- **Responsive Design:**  
  Optimized for desktop, tablet, and mobile screens, so you can play anywhere, anytime!  

---

### How to Play  
1. **Start the Game:** Visit the website and click "Start Game."  
2. **Choose Difficulty:** Select your preferred difficulty level.  
3. **Guess Letters:** Click or type letters to make a guess:  
   - Correct guesses reveal the letters in the word.  
   - Incorrect guesses reduce your chances (up to 8 wrong guesses).  
4. **Win or Lose:**  
   - Win by guessing all the letters before reaching 8 incorrect guesses.  
   - Lose if you run out of chances, and the word will be revealed.  

---

### Technologies Used  
- **HTML:** Structure of the web pages.  
- **CSS:** Styling, including light/dark mode and responsive design.  
- **JavaScript:** Core game logic, user interactions, and dynamic updates.  
- **JSON:** Word list storage for randomized word selection based on difficulty.  

---

### Installation  
1. Clone this repository:  
   ```bash  
   git clone https://github.com/SaifAbdelrazek011/hangman-website.git  
   ```  
2. Navigate to the project folder:  
   ```bash  
   cd hangman-website  
   ```  
3. Open `index.html` in your browser to start playing!  

---

### Future Enhancements  
- Add a timer for a time-based challenge mode.  
- Include animations for the hangman drawing to make it more interactive.  
- Allow players to add custom words to the word list.  
- Add a leaderboard to track high scores and game history.  

---

### Contribution  
Contributions are welcome! If you have ideas or find any bugs, feel free to open an issue or submit a pull request.  

---

### License  
This project is licensed under the [MIT License](LICENSE).  

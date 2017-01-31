application behaviors:

Behavior: User begins play and receives a question
  input: click start game
  output: display first question
Behavior User selects the three parts of their response and submits an answer for scoring, receives score and prompt for next answer
  Input: selects (Anger,Distracted,Agitated)
  Output: Score (suspicion4, yellow, green, yellow)
Behavior: User selects the correct answer and wins the game
  input: (correct set of three answers)
  Output: wins game
Behavior: When the user reaches 20 suspicion, the game ends
  input: incorrect answer reaching 20 suspicion4  
  output: game over

Project Mgmt:

Back end
Object constructors for game object and turn Object
scoring method
method for tracking and updating game state


Front End
15 input buttons and text output field
Output for 3 colors and total suspicion (from method for tracking and updating game state)
win/loss displays






Sample Questions

Your are watching a stage play.  The guests are enjoying the performance.  The appetizer consists of raw oysters.  The entree consists of boiled dog.

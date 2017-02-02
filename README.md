# _Blade Runner_

#### _A game based on Blade Runner's Voight-Kampff Test._


## Description

_A near-perfect android copy of a human being, built for slave labor.  You have escaped from captivity and are attempting to pass as a human.  There is only one thing that can give you away: your emotions.  Android systems can't perfectly copy human emotional responses.  Humans use an empathy response examinaiton, the Voight Kampff test, to identify replicants._

## Specifications


* #### Behavior: User begins play and receives a question.

    * _Input Example: click begin game._

    * _Example Output: display first question._


* #### Behavior: User selects the three parts of their response and submits an answer for scoring, receives score and prompt for next answer.

    * _Input Example: selects (Anger,Distracted,Agitated)._

    * _Example Output: Score (suspicion4, yellow, green, yellow)._


* #### Behavior: User selects the correct answer and wins the game.

    * _Input Example: (correct set of three answers)._

    * _Example Output: wins game._


* #### Behavior: When the user reaches 20 suspicion, the game ends.

    * _Input Example: incorrect answer reaching 20 suspicion4._

    * _Example Output: game over._

## Setup/Installation Requirements

* _Clone this repository and then open 'index.html' in the browser_

## Known Bugs

_No known bugs._

## Support and contact details

_Please direct questions to any of these people:
felixop8@gmail.com
seanpeterson11@gmail.com
brendangrubb@gmail.com
zach.j.swanson.com_

## Technologies Used

_Written in HTML, CSS and JavaScript with the help of Jquery and Bootstrap._



## Contributors

Thanks goes to these wonderful people:

| [<img src=img/felix.jpg width="100px;"/><br /><sub>Felix Oporto</sub>](https://github.com/felixop8) | [<img src="img/zach.jpg" width="100px;"/><br /><sub>Zach Awanson</sub>](https://github.com/zjswanson) | [<img src="img/sean.jpg" width="100px;"/><br /><sub>Sean Peterson</sub>](https://github.com/Sean-Peterson)| [<img src="img/brendan.jpg" width="100px;"/><br /><sub>Brendan Grubb</sub>](https://github.com/Brendangrubb) |
| :---: | :---: | :---: | :---: |


## License

_Copyright (c) 2017 **Felix Oporto, Zach Swanson, Sean Peterson, Brendan Grubb**_

_Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._







application behaviors:






Project Mgmt:

Back end

Front End




Wish List:

Game behavior:
  modify difficulty settings
  display colors in different ways
  display total suspicion in different ways
  play through multiple Questions
  associate content of questions with the hidden answer
  display previous turns

Styling:
  Use blade-runner-esque typeface
  change colors
  Style page to look like VK machine


Interactivity
  Have page features move or color based on game input
  animate display

General:
  list of multiple questions





Sample Questions

Your are watching a stage play.  The guests are enjoying the performance.  The appetizer consists of raw oysters.  The entree consists of boiled dog.


easy
  display all tips
Medium
  display all tips, but show colors in random order
Hard
  display just suspicion

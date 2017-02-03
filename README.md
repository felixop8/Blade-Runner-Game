# _Blade Runner_

#### _A game based on Blade Runner's Voight-Kampff Test._


## Description

_A near-perfect android copy of a human being, built for slave labor. You have escaped from captivity and are attempting to pass as a human. There is only one thing that can give you away: your emotions. Android systems can't perfectly copy human emotional responses. Humans use an empathy response examinaton, the Voight Kampff test, to identify replicants.

Each round of the test, you are given a question designed to provoke your emotions. You must exhibit the correct emotional response in three categories: Feeling, Tone, and Intensity. If your response is abnormal, the examiner will become suspicious. They will ask you follow up questions until they are satisfied with your answer. If you pass enough questions, you'll convince them you are human and you go free. If you fail too many, you'll be violently "retired"._

## Specifications


* #### Behavior: User begins play and receives a question.

    * _Input Example: click start game._

    * _Example Output: display first question._


* #### User selects the three parts of their response and submits an answer for scoring, receives score and prompt for next answer.

    * _Input Example: selects (Anger,Distracted,Agitated)._

    * _Example Output: Score (suspicion4, yellow, green, yellow)._


* #### User selects the correct answer and wins the game.

    * _Input Example: (correct set of three answers)._

    * _Example Output: wins game._


* #### When the user reaches 20 suspicion, the game ends.

    * _Input Example: incorrect answer reaching 20 suspicion4._

    * _Example Output: game over._

## Setup/Installation Requirements

* _Clone this repository and then open 'index.html' in the browser_

## Known Bugs

_No known bugs._

## Support and contact details

Please direct questions  to the authors:
  * felixop8@gmail.com
  * https://github.com/zjswanson
  * https://github.com/Sean-Peterson
  * https://github.com/Brendangrubb

## Technologies Used

_Written in HTML, CSS and JavaScript with the help of Jquery and Bootstrap._



## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src=img/felix.jpg width="100px;"/><br /><sub>Felix Oporto</sub>](https://github.com/felixop8) | [<img src="img/zach.jpg" width="100px;"/><br /><sub>Zach Awanson</sub>](https://github.com/zjswanson) | [<img src="img/sean.jpg" width="100px;"/><br /><sub>Sean Peterson</sub>](https://github.com/Sean-Peterson)| [<img src="img/brendan.jpg" width="100px;"/><br /><sub>Brendan Grubb</sub>](https://github.com/Brendangrubb) |
| :---: | :---: | :---: | :---: |


## License

_Copyright (c) 2017 **Felix Oporto**_

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

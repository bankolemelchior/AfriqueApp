import {country, flags} from './country.js';




// const [AFS, Benin, ...rest] = country;

// function forDest({Name, phoneCode, code, Currency, Area, capitalCity}) {
//     console.log('La capital de ' + Name + ' est ' + capitalCity);
// }
// forDest(AFS);


document.addEventListener('DOMContentLoaded', function() {
    const pays = document.getElementById('pays');
    const gameScore = document.querySelector('.score');
    
    const allAnswers = document.getElementById('allAnswers');
    const reloadBtn = document.getElementById('reload');
    
    let score = 0;
    let numberOfQuestion = 0;
    
    function loadQuiz() {
        let index1 = Math.round(Math.random()*53);
        let index2 = Math.round(Math.random()*53);
        let index3 = Math.round(Math.random()*53);
        let possibleAnswers = [];
        
        possibleAnswers.push(country[index1].capitalCity, country[index2].capitalCity, country[index3].capitalCity);
        let sortAnswers = possibleAnswers.sort();
        console.log(possibleAnswers);
        
        pays.textContent = country[index1].Name;
        gameScore.textContent = `Score: ${score}/${numberOfQuestion}`

        
        let last = document.querySelectorAll('#allAnswers>li');
        

            if(!last.length > 0) {

                sortAnswers.forEach(element => {
                    let li = document.createElement('li');
                    let radio = document.createElement('input');
                    radio.setAttribute('class', 'answers');
                    radio.setAttribute('type', 'radio');
                    radio.setAttribute('name', 'questAns');

                    let label = document.createElement('label');
                    label.textContent = element;

                    li.append(radio, label);
                    allAnswers.append(li);
                    
                });


                //To retrieve all radio input and loop throughout so as to add event on each input...
                const answers = document.querySelectorAll('.answers');

                answers.forEach(el => {
                    el.addEventListener('input', () => {
                        if(el.checked) {
                

                            //To make desabled the inputs radio so as to not check again
                            answers.forEach(input => {
                                input.setAttribute('disabled', 'disabled');
                            })

                            //To verifie the answer
                            if(el.nextSibling.textContent === country[index1].capitalCity) {
                                score++;
    
                                el.nextSibling.style.color = "green";
                                // score++;

                                //Create a span to tell this was the correct answer
                                let showAnswer = document.createElement('span');
                                showAnswer.setAttribute('class', 'showAnswer');
                                showAnswer.textContent =`Bien jouer, c'est la bonne reponse! `;
                                allAnswers.append(showAnswer);

                            }else {
                                el.nextSibling.style.color = "red";
                                //Create a span to display the correct answer after checking the radio input
                                let showAnswer = document.createElement('span');
                                showAnswer.setAttribute('class', 'showAnswer');
                                showAnswer.textContent =`Mauvaise reponse, la bonne reponse est ${country[index1].capitalCity}`;
                                allAnswers.append(showAnswer)
        
                            }

                            gameScore.textContent = `Score: ${score}/${numberOfQuestion}`
                            // console.log(score);

                        }
    
                    })
                })
    
    

            }else {
                //We first get all input radio which may exist and delete them
                const answers = document.querySelectorAll('.answers');
                answers.forEach(ele => {
                    ele.parentElement.remove();
                })

                //Secondly we recreate these input radio 
                sortAnswers.forEach(element => {
                    let li = document.createElement('li');
                    let radio = document.createElement('input');
                    radio.setAttribute('class', 'answers');
                    radio.setAttribute('type', 'radio');
                    radio.setAttribute('name', 'questAns');
                    let label = document.createElement('label');
        
                    label.textContent = element;
    
                    li.append(radio, label);
                    allAnswers.append(li);
                    
                });

                //We now get the new input and iterate them
                const newAnswers = document.querySelectorAll('.answers');

                //To get and delete the p tag when it exists
                let show = document.querySelector('.showAnswer');
                if(show) {
                    show.remove();
                }

                newAnswers.forEach(el => {
                    el.addEventListener('input', () => {
                        
                        if(el.checked) {

                            
                            //To make desabled the inputs radio so as to not check again
                            newAnswers.forEach(input => {
                                input.setAttribute('disabled', 'disabled');
                            })

                            //To verifie the answer
                            if(el.nextSibling.textContent === country[index1].capitalCity) {
                                score++;
    
                                el.nextSibling.style.color = "green";

                                //Create a span to tell this was the correct answer
                                let showAnswer = document.createElement('span');
                                showAnswer.setAttribute('class', 'showAnswer');
                                showAnswer.textContent =`Bien jouer, c'est la bonne reponse! `;
                                allAnswers.append(showAnswer);

                                
                            }else {
                                el.nextSibling.style.color = "red";

                                //Create a span to display the correct answer after checking the radio input
                                let showAnswer = document.createElement('span');
                                showAnswer.setAttribute('class', 'showAnswer');
                                showAnswer.textContent =`Mauvaise reponse, la bonne reponse est ${country[index1].capitalCity}`;
                                allAnswers.append(showAnswer)
        
                            }
                            gameScore.textContent = `Score: ${score}/${numberOfQuestion}`
                            
                        }
    
                    })
                })


            }

        }

        reloadBtn.addEventListener('click', () => {
            loadQuiz();
            numberOfQuestion++;
            console.log(numberOfQuestion);

            if(reloadBtn.textContent === 'Commencer') {
                reloadBtn.textContent = 'Continuer';
            }
        });

    
    })
 
    let forSearching = document.querySelector('.forSearching');
    let searchForm = document.querySelector('#searchForm');    
    let search = document.querySelector('.search');

    forSearching.addEventListener('input', (e) => {
        e.preventDefault();
        let str = e.target.value;
        
        let forData = fetch('data.json')
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            
                const getSuggestion = document.createElement('div');
                getSuggestion.setAttribute('class','getSuggestion');

                //To get in array all objet which match the if statement
                let arraySuggestion = data.filter(element => {
                if(str && (element.Name).substr(0, str.length) === str) {
                    return element;
                }

            });


                //To get and remove the existing elements with the class getSuggestion
                let getSuggestionExist = document.querySelector('.getSuggestion');
                if(getSuggestionExist) {
                    getSuggestionExist.remove();
                }
                //To iterate through the array which containe the suggesions and create html tags
                arraySuggestion.forEach(element => {
                
                    let sug = document.createElement('p');
                    sug.setAttribute('class','forSuggestion');
                    sug.innerHTML = element.Name;
                    getSuggestion.append(sug);
                    search.append(getSuggestion);

                });
                
                //To retrieve all p tag with the forSuggestion class
                let allSugg = document.querySelectorAll('.forSuggestion');
                //And iterate through 
                allSugg.forEach(elmt => {
                    elmt.addEventListener('click', () => {
                        data.forEach(element => {

                            if(elmt.textContent === element.Name) {
                                forSearching.value = element.Name
                                console.log(element);
                            }

                        });
                    })
                })

    
        })
        
    })








// namespace
const catOrDog = {};

// give values to answers
// catOrDog.questions = {
//     firstQuestion: {
//         firstAnswerValue: 3,
//         secondAnswerValue: 1,
//         thirdAnswerValue: -1,
//         fourthAnswerValue: -3,
//     },
//     secondQuestion: {
//         firstAnswerValue: 3,
//         secondAnswerValue: 1, 
//         thirdAnswerValue: -1, 
//         fourthAnswerValue: -3, 
//     },
//     thirdQuestion: {
//         firstAnswerValue: 3, 
//         secondAnswerValue: 1, 
//         thirdAnswerValue: -1,
//         fourthAnswerValue: -3,
//     }
// }

// console.log(catOrDog.questions);

// wrap this in doc ready

// get user input
$('form').on('submit', function(event) {
    event.preventDefault();
    // retrieve value from selected answers
    catOrDog.questionOneAnswer = $(`input[name=questionOneOptions]:checked`).val()
    console.log(catOrDog.questionOneAnswer);
    catOrDog.questionTwoAnswer = $('input[name=questionTwoOptions]:checked').val()
    console.log(catOrDog.questionTwoAnswer);
    catOrDog.questionThreeAnswer = $('input[name=questionThreeOptions]:checked').val()
    console.log(catOrDog.questionThreeAnswer);

// Create error control for a blank answer//////////////////////
// -------------------------------------------------------
    
    // transfrom string value into real number 
    catOrDog.oneValue = Number(catOrDog.questionOneAnswer);
    console.log(catOrDog.oneValue);
    catOrDog.twoValue = Number(catOrDog.questionTwoAnswer);
    console.log(catOrDog.twoValue);
    catOrDog.threeValue = Number(catOrDog.questionThreeAnswer);
    console.log(catOrDog.threeValue);

    // calculate users score
    catOrDog.finalResult = (catOrDog.oneValue + catOrDog.twoValue + catOrDog.threeValue);
    console.log(catOrDog.finalResult);
    
})
// displat user result based on result
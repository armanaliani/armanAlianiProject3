// namespace
const catOrDog = {};

// smoothscroll
$(function(event){
    $('a').smoothScroll();
    event.preventDefault();
})
// add smooth scroll to non 'a' buttons

// make hard refresh go to top of page


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

    // display user result based on result
    if (catOrDog.finalResult > 0) {
        // display cat result
        $('.result').html(`<p class="userAnswer">get a cat</p>`);
        window.location = "#answer";
    } else if (catOrDog.finalResult != catOrDog.oneValue + catOrDog.twoValue + catOrDog.threeValue) {
        $('.result').html(`<p class="resultError">Please fill out all the questions</p>`);
        window.location = "#answer";
    } else {
        // display dog result
        $('.result').html(`
        <p class="userAnswer">get a dog</p>
        `);
        window.location = "#answer";
        // <a href="#formStart">Take it again</a>
        // add above code to html on submit, configure to reset quiz when clicked
    }


})

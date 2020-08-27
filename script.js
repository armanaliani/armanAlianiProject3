// namespace
const catOrDog = {};

// smoothscroll
$(function(event){
    $('a').smoothScroll();
})

// get user input
catOrDog.runApp = () => {
$('form').on('submit', function(event) {
    event.preventDefault();
    // retrieve value from selected answers
    catOrDog.questionOneAnswer = $(`input[name=questionOneOptions]:checked`).val()
    catOrDog.questionTwoAnswer = $('input[name=questionTwoOptions]:checked').val()
    catOrDog.questionThreeAnswer = $('input[name=questionThreeOptions]:checked').val()
    catOrDog.questionFourAnswer = $('input[name=questionFourOptions]:checked').val()
    catOrDog.questionFiveAnswer = $('input[name=questionFiveOptions]:checked').val()

// -------------------------------------------------------
    
    // transfrom string value into real number 
    catOrDog.oneValue = Number(catOrDog.questionOneAnswer);
    catOrDog.twoValue = Number(catOrDog.questionTwoAnswer);
    catOrDog.threeValue = Number(catOrDog.questionThreeAnswer);
    catOrDog.fourValue = Number(catOrDog.questionFourAnswer);
    catOrDog.fiveValue = Number(catOrDog.questionFiveAnswer);

    // calculate users score
    catOrDog.finalResult = (catOrDog.oneValue + catOrDog.twoValue + catOrDog.threeValue + catOrDog.fourValue + catOrDog.fiveValue);

    // display user result based on result
    if (catOrDog.finalResult > 0) {
        // display cat result
        $('.result').html(`
        <div class="userAnswer">
            <img src="./assets/project3ImageCatResult.jpg" alt="a sleeping cat">
            <h2>get a cat</h2>
            <p>Cats are calm and independent creatures. They require minimal attention or training and can easily be entertained with the simplest objects. Cats are more suited to indoor spaces and don't need much space to make themselves comfortable.</p>
        </div>
        `);
        window.location = "#answer";
    } else if (catOrDog.finalResult != catOrDog.oneValue + catOrDog.twoValue + catOrDog.threeValue + catOrDog.fourValue + catOrDog.fiveValue) {
        $('.result').html(`<p class="resultError">Please fill out all the questions</p>`);
        window.location = "#answer";
    } else {
        // display dog result
        $('.result').html(`
        <div class="userAnswer">
            <img src="./assets/project3ImageDogResult.jpg" alt="a sleeping dog">
            <h2 class="userAnswer">get a dog</h2>
            <p>Dogs are loyal and adventure loving creatures. They’re quite dependant and require more attention and training than cats but will always want your love and attention. Dogs love the outdoors and staying active and therefore will need plenty of space to run around.</p>
        </div>
        `);
        window.location = "#answer";
    }


})

};

// doc. ready
$(function () {
    catOrDog.runApp();
})


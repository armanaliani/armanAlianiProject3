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
    // select all checked input and put them in an array
    catOrDog.test = document.querySelectorAll(`input:checked`);
    const answersArray = $.makeArray(catOrDog.test);

    // get the value of the checked inputs
    catOrDog.mapped = $.map(answersArray, function(question) {
        return (question.defaultValue);
    } )
    
    // change array string values to integers
    catOrDog.makeNumber = catOrDog.mapped.map(Number);

    // add array values for final result
    catOrDog.finalResult = catOrDog.makeNumber.reduce(function (a,b) {
        return a + b;
    });
// -------------------------------------------------
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
    } 
    else if (catOrDog.makeNumber.length != 5) {
        $('.result').html(`<p class="resultError">Please fill out all the questions</p>`);
        window.location = "#answer";
    } 
    else {
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
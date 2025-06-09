//author: Ryan Dunhamn

/*
const ryanBtn = document.querySelector("#pivot-ryan");
const ryanRating = document.querySelector("#rating-ryan");


const ryanRotate = () => {

    ryanRating.style.display("none");
}

ryanBtn.addEventListener("click", ryanRotate());

*/

//recent code below

let title = null;
let overallRating = 0;
let ratingK = 0;
let ratingN = 0;
let ratingR = 0

const titleField = document.querySelector("#new-title");
const ratingFieldK = document.querySelector("#new-ratingK");
const ratingFieldN = document.querySelector("#new-ratingN");
const ratingFieldR = document.querySelector("#new-ratingR");

const addReviewBtn = document.querySelector("#new-review-button");
const testBtn = document.querySelector("#test-button");
const saveDisBtn = document.querySelector("#save-display");
const loginBtn = document.querySelector("#log-in-button");
const homeBtn = document.querySelector("#home-button");

const newReviewDisplay = document.querySelector("#new-review");
const testDisplay = document.querySelector("#test-display");
const homeDisplay = document.querySelector("#home");
const loginDisplay = document.querySelector("#log-in");


//Objects

const smapleReview = {

    title: "Inception",
    rating: 9.4,
    kyleReview: {
        score: 9
    },
    nickReview: {
        score: 9.4
    },
    ryanReview: {
        score: 9.8,
        plot: 4,
        acting: 3,
        style: 2, 
        feeling: 1,
        quote: "Blowing the minds of youth everywhere."
    }
}


const movieReview = {

    constructor(title, rating){ //rating needs to be removed from the arg list

        this.title = title;
        this.rating = rating; //this line will need to be replace with an average formula grabing the values of the individual ratings.
    }
}





const displayNewReview = () => {

    newReviewDisplay.style.display = "block";
}

const testButton = () => {

    testDisplay.innerHTML = "<h2 class='movie-title'>Test</h2> <h3 class='overall'>9.6</h3><div class='box'><h3 class='overall'>9.3</h3><h4 class='reviewer'>-Kyle</h4></div> <div class='box'><h3 class='overall'>9.5</h3>          <h4 class='reviewer'>-Nick</h4>   </div>        <div class='box'>     <h3 class='overall'>10</h3>            <h4 class='reviewer'>-Ryan</h4>        </div>        <button class='Eidt'>Edit</button>";
}

const saveDisplay = () => {  //This can be done via saving all the form data as an object. Look into formData.

    //Step one save values into variables
    title = titleField.value;
    ratingK = ratingFieldK.value;
    ratingN = ratingFieldN.value;
    ratingR = ratingFieldR.value;
    overallRating = (parseFloat(ratingK) + parseFloat(ratingN) + parseFloat(ratingR)) / 3; //make sure the math is right for the average formula
    

    //step two insert new html on to page using variable values
    testDisplay.innerHTML = "<h2 class='movie-title'>" + title + "</h2><h3>Overall Rating: " + overallRating + "</h3></br><h4>Kyles Rating: " + ratingK + "</br><h4>Nicks Rating: " + ratingN + "</br><h4>Ryans Rating: " + ratingR;

    //step three reset variable to be used again

}

const login = () => {

    homeDisplay.style.display = "none";
    loginDisplay.style.display = "block";
}

const displayHome = () => {

    loginDisplay.style.display = "none";
    homeDisplay.style.display = "block";
}

addReviewBtn.addEventListener("click", displayNewReview);
testBtn.addEventListener("click", testButton);
saveDisBtn.addEventListener("click", saveDisplay);
loginBtn.addEventListener("click", login);
homeBtn.addEventListener("click", displayHome);

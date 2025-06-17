//author: Ryan Dunhamn

let movieList = [];
//these are temp passwords for function testing
//will need to add bool setting to recognize which account is active when editing reviews inorder to set them properly
const passwords = ["passK", "passN", "passR"];
const mvoieList = []; //temp data structure for the time being (likely to be a hash table)

const reviewBoard = document.querySelector("#review-board");

const passField = document.querySelector("#passInput"); 
const passVal =document.querySelector("#passValue");
const movieEntry = document.querySelector("#movie-entry");
const titleField = document.querySelector("#title-field");
const directorField = document.querySelector("#director-field");
const genreField = document.querySelector("#genre-field");
const scoreEntry = document.querySelector("#score-entry");

const addBtn = document.querySelector("#new-review-button");
const passBtn = document.querySelector("#password-submit");
//const titleSave = document.querySelector(".title-save"); //Find out if querySelector will grab elements who's display is none?  //Out of date
const saveMovie = document.querySelector("#save-movie");
const saveReview = document.querySelector("#save-review");

class movieReview{

    constructor(title, director, genre){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.ratingAv = 0;

        this.reviewK = {
            rating: 0,
            plotSc: 0,
            actingSc: 0,
            styleSc: 0,
            overallFeeling: 0,
            finalSc: 0
        };

        this.reviewN = {
            rating: 0,
            plotSc: 0,
            actingSc: 0,
            styleSc: 0,
            overallFeeling: 0,
            finalSc: 0
        };

        this.reviewR = {
            rating: 0,
            plotSc: 0,
            actingSc: 0,
            styleSc: 0,
            overallFeeling: 0,
            finalSc: 0
        };
    };
        //there should be one edit method for each review since we will not be accepting partial data 
        //however data entry field shoud be filled with any preexisting data to make it more user friendly 
    
    setReviewK( plotSc, actingSc, styleSc, overallFeeling){

        this.plotSc = plotSc;
        this.actingSc = actingSc;
        this.styleSc = styleSc;
        this.overallFeeling = overallFeeling;

        this.finalSc = plotSc + actingSc + styleSc + overallFeeling;

    };

    setReviewN( plotSc, actingSc, styleSc, overallFeeling){

        this.plotSc = plotSc;
        this.actingSc = actingSc;
        this.styleSc = styleSc;
        this.overallFeeling = overallFeeling;

        this.finalSc = plotSc + actingSc + styleSc + overallFeeling;
    };

    setReviewR( plotSc, actingSc, styleSc, overallFeeling){

        this.plotSc = plotSc;
        this.actingSc = actingSc;
        this.styleSc = styleSc;
        this.overallFeeling = overallFeeling;

        this.finalSc = plotSc + actingSc + styleSc + overallFeeling;
    };
    
}


const displayPassField = () => {

    passField.style.display = "block";
}
/*  out dated code
const newReview = () => {

    event.preventDefault(); //event is deprecated find a new solution. {Multitple locations in code.}

    let movie =  new movieReview(titleField.value);

    reviewBoard.innerHTML = reviewBoard.innerHTML + "<h2>" + movie.title + "</h2>";

    //fieldsO.style.display = "none";   //element no longer exists
    //fieldSR.style.display = "none";   //element no longer exists
}
    */

const passCheck = () => {

    event.preventDefault(); //event is deprecated find a new solution. {Multitple locations in code.}

    //step one: if password doesnt exist 
    if(!passwords.includes(passVal.value)){
        reviewBoard.innerHTML = "<h1>Error Error Error</h1>";
    }else{
        movieEntry.style.display = "block";
    }
    passVal.value = "";
    passField.style.display = "none"
    //step two: if password found display proper intake form

}

const movieCheck = () => {

    event.preventDefault(); //event is deprecated find a new solution. {Multitple locations in code.}

     

    //Step 1: Check if the movie already exists

    //Step 2: save entry 
        let movie = new movieReview(titleField.value, directorField.value, genreField.value);
        movieList.push(movie);

    //Step 3: display entry
    displayNewMovie(movie);
    
    //Step 4: clear old data

    titleField.value = "";
    directorField.value = "";
    genreField.value = "";

    //state change
    
    scoreEntry.style.display = "block";
    movieEntry.style.display = "none";
    
    //run test
    //reviewBoard.innerHTML = "<h1>Run Test</h1>" + reviewBoard.innerHTML;
}

const displayNewMovie = (movie) => {

    reviewBoard.innerHTML = reviewBoard.innerHTML + '<div class="movie-review"><h2>' + movie.title +'</h2><p>Director : ' +  movie.director + '  Genre : ' + movie.genre + '</p><p>' + movie.ratingAv + '</p><button class="edit">Edit</button></div>';
}

const editReview = (movie) => {

    //Step 1: determine what were editing (whos editing)

    //Step 2: read in info and store properly 

    //step 3: edit & display updated data

    //step 4: clear any fields that need it
}

/*
const reviewCheck = () => {

}

*/



addBtn.addEventListener("click", displayPassField);
passBtn.addEventListener("click", passCheck);
//titleSave.addEventListener("click", newReview);   //out of date 
saveMovie.addEventListener("click", movieCheck);
//saveReview.addEventListener("click", reviewCheck);



/* -------------------     Out Dated Code Commented Out Below       ---------------------  */




/*
const ryanBtn = document.querySelector("#pivot-ryan");
const ryanRating = document.querySelector("#rating-ryan");


const ryanRotate = () => {

    ryanRating.style.display("none");
}

ryanBtn.addEventListener("click", ryanRotate());

*/

//recent code below
/*
let title = null;
let overallRating = 0;
let ratingK = 0;
let ratingN = 0;
let ratingR = 0;

let passInput = null;


const titleField = document.querySelector("#new-title");
const ratingFieldK = document.querySelector("#new-ratingK");
const ratingFieldN = document.querySelector("#new-ratingN");
const ratingFieldR = document.querySelector("#new-ratingR");

const passField = document.querySelector("#pass-field");

const addReviewBtn = document.querySelector("#new-review-button");
const testBtn = document.querySelector("#test-button");
const saveDisBtn = document.querySelector("#save-display");
const loginBtn = document.querySelector("#log-in-button");
const homeBtn = document.querySelector("#home-button");
const adminBtn = document.querySelector("#admin-password-button");

const newReviewDisplay = document.querySelector("#new-review");
const testDisplay = document.querySelector("#test-display");
const homeDisplay = document.querySelector("#home");
const loginDisplay = document.querySelector("#log-in");
const adminSignIn = document.querySelector("#admin");
const errorMsg = document.querySelector("#error");


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

    adminSignIn.style.display = "block";  
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
adminBtn.addEventListener("click", passCheck);
passField.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        passCheck();
    }
}).preventDefault();//look into how to prevent default behavior for form buttons. 

*/

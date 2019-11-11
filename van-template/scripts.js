
//Constructor function for different van models
function VanModel(exteriorLength, interiorLength) {
    this.exteriorLength = exteriorLength;
    this.interiorLength = interiorLength;
}

var L1Model = new VanModel("524.5px", "260px");
var L2Model = new VanModel("591px", "326.5px");
var L3Model = new VanModel("694.5px", "430px");
var L4Model = new VanModel("734.5px", "470px");
 

//Event Listeners for van model selection
document.getElementById("L1").addEventListener("click", L1Dimensions);
document.getElementById("L2").addEventListener("click", L2Dimensions);
document.getElementById("L3").addEventListener("click", L3Dimensions);
document.getElementById("L4").addEventListener("click", L4Dimensions);


//Functions called when different van model selected
//L1
function L1Dimensions() {

    //Calling function which clears all selected button animations
    removeTransition();

    //Adding animation to currently selected button
    const button = document.querySelector('#L1');
    button.classList.add('modelSelected');

    //Changing van dimensions to match model selected by user
    document.getElementById("vanExterior").style.width = L1Model.exteriorLength;
    document.getElementById("vanInterior").style.width = L1Model.interiorLength; 
    document.getElementById("rightSideInsulation").style.width = L1Model.interiorLength;
    document.getElementById("leftSideInsulation").style.width = L1Model.interiorLength;
}

//L2
function L2Dimensions() {

    removeTransition();

    const button = document.querySelector('#L2');
    button.classList.add('modelSelected');

    document.getElementById("vanExterior").style.width = L2Model.exteriorLength;
    document.getElementById("vanInterior").style.width = L2Model.interiorLength;
    document.getElementById("rightSideInsulation").style.width = L2Model.interiorLength;
    document.getElementById("leftSideInsulation").style.width = L2Model.interiorLength;
}

//L3
function L3Dimensions() {

    removeTransition();

    const button = document.querySelector('#L3');
    button.classList.add('modelSelected');

    document.getElementById("vanExterior").style.width = L3Model.exteriorLength;
    document.getElementById("vanInterior").style.width = L3Model.interiorLength;
    document.getElementById("rightSideInsulation").style.width = L3Model.interiorLength;
    document.getElementById("leftSideInsulation").style.width = L3Model.interiorLength;
}

//L4
function L4Dimensions() {

    removeTransition();

    const button = document.querySelector('#L4');
    button.classList.add('modelSelected');

    document.getElementById("vanExterior").style.width = L4Model.exteriorLength;
    document.getElementById("vanInterior").style.width = L4Model.interiorLength;
    document.getElementById("rightSideInsulation").style.width = L4Model.interiorLength;
    document.getElementById("leftSideInsulation").style.width = L4Model.interiorLength;
}

//Clears all selected button animations: 
//Finds all classes of 'model' and creates an array of these elements.
//Runs forEach() over each element in the array and removes the class 'modelSelected'
function removeTransition () {
    const buttons = Array.from(document.querySelectorAll('.model'));    
    buttons.forEach((element) => {
        element.classList.remove('modelSelected');
    })
}

//Insulation Toggle
//Event Listener, calling 2 functions
document.getElementById("insulation").addEventListener("click", () => {
    addInsulation();
    addDotSelected();
});

function addInsulation () {
    const insulation = Array.from(document.querySelectorAll('.insulation'))
    insulation.forEach((element) => {
        element.classList.toggle('isSelected');
    })
}

function addDotSelected () {
    var dot = document.querySelector(".selectionDot");
    dot.classList.toggle("dotSelected");
}

//Mattress Selection - EU or UK?

var mattress = document.getElementById("euOrUk");

mattress.addEventListener("click", mattressLocationClicked)

function mattressLocationClicked () {
    mattress.addEventListener("change", changeSelectionOptions);
}

//This calls a different function depending on which option was selected (could probably do this shorter)
function changeSelectionOptions () {
    var locationSelected = document.getElementById("eu").selected || document.getElementById("eu").selected;
    if (locationSelected === true) {
        europeMattressSelection();
    } else if (locationSelected === false) {
        ukMattressSelection();
    } else {
        console.log("Error in location selection");
    }
}

//This function is called if the EU is selected - displaying on EU size options

function europeMattressSelection () {
    document.getElementById("ukMattressOptions").style.display = "none";
    document.getElementById("euMattressOptions").style.display = "block";
}

//This function is called if the UK is selected - displaying only UK size options

function ukMattressSelection () {
    document.getElementById("ukMattressOptions").style.display = "block";
    document.getElementById("euMattressOptions").style.display = "none";
}
////////////////////////
//Event Listener for Mattress Size selection
const euMattressSizes = document.getElementById("euMattressOptions");
const ukMattressSizes = document.getElementById("ukMattressOptions");


euMattressSizes.addEventListener("click", euMattressSizesClicked);
ukMattressSizes.addEventListener("click", ukMattressSizesClicked);

function euMattressSizesClicked () {
    euMattressSizes.addEventListener("change", euMattressSizeChosen);
}

function ukMattressSizesClicked () {
    ukMattressSizes.addEventListener("change", ukMattressSizeChosen);
}

//This calls a different function depending on which mattress size was chosen
function euMattressSizeChosen () {

    var selectEu = document.querySelector('#selectEuOptions');
    var euChoice = selectEu.value;

    switch (euChoice) {
        case "Single EU":
            euSingleMattress();
            break;

        case "Double EU":
            euDoubleMattress();
            break;  

        case "King EU":
            euKingMattress();
            break; 
            
        case "bet1":
            bet1Mattress();
            break;
    }
}

function ukMattressSizeChosen () {

    var selectUk = document.querySelector('#selectUkOptions');
    var ukChoice = selectUk.value;

    switch (ukChoice) {
        case "Single UK":
                ukSingleMattress();
                break;
    
            case "Small Double UK":
                ukSmallDoubleMattress();
                break;
    
            case "Double UK":
                ukDoubleMattress();
                break;
    
            case "King UK":
                ukKingMattress();
                break;  
    
            case "Super King UK":
                ukSuperKingMattress();
                break;   
    }
}

//Constructor function for different mattress sizes
function mattressConstructor(mattressWidth, mattressLength) {
    this.mattressWidth = mattressWidth;
    this.mattressLength = mattressLength;
}

var euSingle = new mattressConstructor("90px", "200px");
var euDouble = new mattressConstructor("140px", "200px");
var euKing = new mattressConstructor("160px", "200px");
var bet1 = new mattressConstructor("140px", "190px");

var ukSingle = new mattressConstructor("90px", "190px");
var ukSmallDouble = new mattressConstructor("120px", "190px");
var ukDouble = new mattressConstructor ("135px", "190px");
var ukKing = new mattressConstructor ("150px", "200px");



document.getElementById("vanExterior").style.width = L2Model.exteriorLength;

function euSingleMattress () {
    document.getElementById("bed").style.height = euSingle.mattressWidth;
    document.getElementById("bed").style.width = euSingle.mattressLength;
}

function euDoubleMattress () {
    document.getElementById("bed").style.height = euDouble.mattressWidth;
    document.getElementById("bed").style.width = euDouble.mattressLength;
}

function euKingMattress () {
    document.getElementById("bed").style.height = euKing.mattressWidth;
    document.getElementById("bed").style.width = euKing.mattressLength;
}

function bet1Mattress () {
    console.log("hi");
    document.getElementById("bed").style.height = bet1.mattressWidth;
    document.getElementById("bed").style.width = bet1.mattressLength;
}

function ukSingleMattress () {
    document.getElementById("bed").style.height = ukSingle.mattressWidth;
    document.getElementById("bed").style.width = ukSingle.mattressLength;
}

function ukSmallDoubleMattress () {
    document.getElementById("bed").style.height = ukSmallDouble.mattressWidth;
    document.getElementById("bed").style.width = ukSmallDouble.mattressLength;
}

function ukDoubleMattress () {
    document.getElementById("bed").style.height = ukDouble.mattressWidth;
    document.getElementById("bed").style.width = ukDouble.mattressLength;
}

function ukKingMattress () {
    document.getElementById("bed").style.height = ukKing.mattressWidth;
    document.getElementById("bed").style.width = ukKing.mattressLength;
}

function ukSuperKingMattress () {
    alert("UK Super Kings don't fit")
}

///////////////Mattress Orientation

//Event Listeners selection
document.getElementById("bedRight").addEventListener("click", bedRightOrientation);
document.getElementById("bedMiddle").addEventListener("click", bedMiddleOrientation);
document.getElementById("bedLeft").addEventListener("click", bedLeftOrientation);

//Functions called when different mattress selected
//Mattress on the right side of the van
function bedRightOrientation() {

    //Calling function which clears all selected button animations
    removeMattressTransition();

    //Adding animation to currently selected button
    const button = document.querySelector('#bedRight');
    button.classList.add('mattressOrientationSelected');

    //Changing van dimensions to match model selected by user
    document.getElementById("innerArea").style.alignItems = "flex-start";
}

//Mattress in the of the van
function bedMiddleOrientation() {

    //Calling function which clears all selected button animations
    removeMattressTransition();

    //Adding animation to currently selected button
    const button = document.querySelector('#bedMiddle');
    button.classList.add('mattressOrientationSelected');

    //Changing van dimensions to match model selected by user
    document.getElementById("innerArea").style.alignItems = "center";
}

//Mattress on the right side of the van
function bedLeftOrientation() {

    //Calling function which clears all selected button animations
    removeMattressTransition();

    //Adding animation to currently selected button
    const button = document.querySelector('#bedLeft');
    button.classList.add('mattressOrientationSelected');

    //Changing van dimensions to match model selected by user
    document.getElementById("innerArea").style.alignItems = "flex-end";
}


//Removes unseleted mattress selections
function removeMattressTransition () {
    const buttons = Array.from(document.querySelectorAll('.mattressOrientation'));    
    buttons.forEach((element) => {
        element.classList.remove('mattressOrientationSelected');
    })
}
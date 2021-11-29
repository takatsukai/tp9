
// ingredient show/hide
window.onload = function() {
  document.querySelector("#section1").onclick = function (){
    document.querySelector("#section1 ul").classList.toggle("showMe");
  }
  
  // equipment show/hide
   document.querySelector("#section2").onclick = function (){
     document.querySelector("#section2 ul").classList.toggle("showMe");
   }
   
   // directions show/hide
    document.querySelector("#section3").onclick = function (){
     document.querySelector("#section3 ol").classList.toggle("showMe");
   }
    
    // fonts
    document.querySelector("#mainpage h1").classList.add("title");
  
  //title color change
  document.querySelector("#mainpage h1").onclick = function(){
    this.classList.toggle("title");
  }
 
  document.querySelector("#footer").innerHTML += "<p>This was made for DTC 477.</p>";
    
  //summon files into main
  document.querySelector("#r1").onclick = function(){
    ChocolateChipCookies.displayRecipe();
  }
  document.querySelector("#r2").onclick = function() {
    BrookeBombshellBrownie.displayRecipe();
  }
  document.querySelector("#r3").onclick = function(){
    FrenchCrepe.displayRecipe();
  }
  
  
}// end of window onload



//new recipe object
function Recipe(recipeName,contributorName,imageURL){
  
  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  
  
  this.displayRecipe = function(){
    
    document.querySelector("#mainpage h1").innerHTML = this.recipe;
    document.querySelector("#Contributor").innerHTML = this.contributor;
    document.querySelector("#mainpage").style.backgroundImage = "url(" + this.img + ")";
    
  loadFileInto(this.recipe,"section1", "#section1 ul");
  loadFileInto(this.recipe,"section2", "#section2 ul");
  loadFileInto(this.recipe,"section3", "#section3 ol");  
  }
  
  
}

ChocolateChipCookies = new Recipe("Chocolate Chip Cookies","Aida Must","ImagesA/chocolate.jpg");
BrookeBombshellBrownie = new Recipe("Brooke's Bombshell Brownies","Roselynne Sambisa","https://assets.epicurious.com/photos/5fca6f8d9014cc9a8df3d074/2:1/w_3000,h_1500,c_limit/Malted_Forever_Brownies_VOG_final.jpg");
FrenchCrepe = new Recipe("French Crepe","Rachel Fox","https://i.ytimg.com/vi/5xICMff1pCw/maxresdefault.jpg");


// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(recipeName,listName, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  // 2. define the fromFile variable with the passed recipe name and list 
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;

  
	// 3. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 4. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors


			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 5. let's go -- initiate request and process the responses
	ajax.send();

}
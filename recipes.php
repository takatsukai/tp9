<?

/* loading recipe for TP9 using Ajax and Php */

$name = $_GET["recipeName"];
$list=$_GET["recipeList"];

if($name == "Chocolate Chip Cookies"){
  
  if($list == "section1"){
    include "ingredientsA.html";
    
  } elseif ($list == "section2"){
    include "equipmentA.html";
    
  } elseif ($list == "section3"){
    include "directionsA.html";
    
  } else {
    echo "1";
  }
   
  
  /* R's Recipe*/
  
} elseif ($name == "Brooke's Bombshell Brownies"){
    
     if($list == "section1"){
    include "ingredientsR.html";
    
  } elseif ($list == "section2"){
    include "equipmentR.html";
    
  } elseif ($list == "section3"){
    include "directionsR.html";
    
  } else {
    echo "1";
  }
    
 
  

  /* RF's Recipe */
} elseif($name == "French Crepes"){
    
     if($list == "section1"){
    include "ingredientsRF.html";
    
  } elseif ($list == "section2"){
    include "equipmentRF.html";
    
  } elseif ($list == "section3"){
    include "directionsRF.html";
    
  } else {
    echo "1";
  }
    
  
  
  
} else {
  
  echo "0";
  
}
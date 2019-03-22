// Resize main text 
function resizeFont(multiplier) {
  if (document.getElementById("mainText").style.fontSize == "") {
    document.getElementById("mainText").style.fontSize = "1.0em";
  }
  document.getElementById("mainText").style.fontSize = parseFloat(document.getElementById("mainText").style.fontSize) + (multiplier * 0.15) + "em";
}

// Image carousel 
function changeImage(n) {
  var firstImage = 1;
  var maxNumImages = 5;
  var previousImage = document.getElementById("image").src;
  var previousImageNum = parseInt(previousImage.substring(previousImage.length - 5, previousImage.length - 4));
  
  n = parseInt(n);

  if ((n == 1 && previousImageNum < maxNumImages) || (n == -1 && previousImageNum > firstImage)) {
    var newImageNum = previousImageNum + n;
  }  
  if (n == 1 && previousImageNum == maxNumImages) {
  	var newImageNum = firstImage;
  }
  if (n == -1 && previousImageNum == firstImage) {
  	var newImageNum = maxNumImages;
  }
  document.getElementById("image").src = "image" + newImageNum + ".jpg";
}

// Adds items to shopping list
function addToList() {
  //var container = document.getElementById("container");
  //var inputText = document.getElementById("listInput").value;
  //container.innerHTML += "<div>" + inputText + "</div>";
  //document.getElementById("listInput").value = "";

  let newListItem = document.createElement("li");
  newListItem.textContent = document.getElementById("listInput").value;
  document.getElementById("listValues").appendChild(newListItem);
  document.getElementById("listInput").value = "";
}

// Removes items from shopping list
function removeFromList() {
  let list = document.getElementById("listValues");
  list.removeChild(list.childNodes());
}
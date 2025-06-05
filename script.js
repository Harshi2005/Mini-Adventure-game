function showHint() {
  alert("The forest holds secrets 🌲, but the village may offer safety 🏘️. Choose wisely!");
}

function goToForest() {
  document.getElementById("sceneImage").src = "forest.jpg";
  document.getElementById("forestStory").style.display = "block";
  document.getElementById("villageStory").style.display = "none";
  alert("You walk into the forest. The trees whisper your name...");
}

function goToVillage() {
  document.getElementById("sceneImage").src = "village.jpg";
  document.getElementById("villageStory").style.display = "block";
  document.getElementById("forestStory").style.display = "none";
  alert("You stroll into the village. The townsfolk greet you with curiosity.");
}

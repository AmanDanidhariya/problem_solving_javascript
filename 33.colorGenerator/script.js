const btn = document.querySelector(".btn");

function generateHex() {
  const hexRange = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexRange.charAt(Math.floor(Math.random() * 16));
  }

  return hexColor;
}

console.log(generateHex())
btn.addEventListener("click", function(){
    document.body.style.backgroundColor=generateHex();
});

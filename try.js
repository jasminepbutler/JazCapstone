
let theDrums = ["bass", "snare", "tom", "bongo"];
let theCymbals = ["crash", "ride", "hihat"];

console.log(theCymbals[0])
console.log(theCymbals[1])
console.log(theCymbals[2])
console.log(theCymbals.length)

  function letsdrum() {
    for(let i=0; i<theCymbals.length; i++) {
        alert(i);
        a = `[i]`;
        theDrums.push(a);
    }
    console.log(theDrums);
  }

  pushArray.onclick = letsdrum;
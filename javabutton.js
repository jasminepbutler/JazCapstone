function JavaBa() {
    alert("Welcome to my website..");
}

JavaB.onclick = JavaBa;


function myFunclick1() {
    var x = document.getElementById("javaJaz1");
    if (x.innerHTML === "Jaz's capstone") {
      x.innerHTML = "..is awesome";
    } else {
      x.innerHTML = "Jaz's capstone";
    }
  }


let theDrums = ["bass", "snare", "tom", "bongo"];
let theCymbals = ["crash", "ride", "hihat"];

console.log(theCymbals[0])
console.log(theCymbals[1])
console.log(theCymbals[2])
console.log(theCymbals.length)

  function letsdrum() {
    for(let i=0; i<theCymbals.length; i++) {
        alert(i);
    }
    console.log(theDrums);
  }

  pushArray.onclick = letsdrum;
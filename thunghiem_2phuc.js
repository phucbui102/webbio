// let listbutton = document.querySelectorAll(".buttons button");
// let firstreturn = document.getElementById("first");
// let newreturn = document.getElementById("new");

// let fnunber = null;
// let nnumber = null;
// let calculator = "+";

// listbutton.forEach((nutbam) => {
//   nutbam.addEventListener("click", () => {
//     let value = nutbam.innerHTML;
//     switch (value) {
//       case "0":
//       case "1":
//       case "2":
//       case "3":
//       case "4":
//       case "5":
//       case "6":
//       case "7":
//       case "8":
//       case "9":
//         nnumber = nnumber !== null ? nnumber + value : value;
//         break;
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         if (nnumber) {
//           calculator = value;
//           fnunber = nnumber;
//           nnumber = null;
//         }
//         break;
//       case "=":
//         console.log(fnunber);
//         console.log(nnumber);
//         console.log(calculator);
//         tinhtoan();
//         break;
//       case "AC":
//         fnunber = null;
//         nnumber = null;
//     }
//     hienthi();
//     // console.log("helo");
//   });
// });

// function tinhtoan() {
//   switch (calculator) {
//     case "-":
//       nnumber = fnunber - nnumber;
//       break;
//     case "/":
//       nnumber = fnunber / nnumber;
//       break;
//     case "*":
//       nnumber = fnunber * nnumber;
//       break;
//     case "+":
//       nnumber = Number(fnunber) + Number(nnumber);
//       break;
//   }
//   fnunber = null;
// }
// function hienthi() {
//   firstreturn.innerText = fnunber !== null ? fnunber + "" + calculator : "";

//   newreturn.innerText = nnumber !== null ? nnumber : "";
// }

let listbuntons = document.querySelectorAll(".buttons button");
let retunrf = document.getElementById("first");
let returncal = document.getElementById("calculators");
let returnnew = document.getElementById("new");
let firstnumber = null;
let newnumber = null;
let calculator = null;

function hienthiso() {
  if (firstnumber) {
    retunrf.innerHTML = firstnumber;
    returncal.innerHTML = calculator;
  } else {
    retunrf.innerHTML = "";
    returncal.innerHTML = "";
  }
  if (newnumber) {
    returnnew.innerHTML = newnumber;
  } else returnnew.innerHTML = " ";
}

listbuntons.forEach((element) => {
  element.addEventListener("click", () => {
    let values = element.innerHTML;
    // console.log(values);
    switch (values) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (newnumber) {
          newnumber = newnumber + values;
        } else newnumber = values;
        break;
      case "+":
      case "*":
      case "-":
      case "/":
        if (newnumber) {
          calculator = values;
          firstnumber = newnumber;
          newnumber = "";
        }
        break;
      case "=":
        tinhtoan();
        // calculator = "";
        firstnumber = null;
        break;
      case "AC":
        firstnumber = null;
        newnumber = null;
        break;
    }

    console.log(firstnumber);
    hienthiso();
  });
});
function tinhtoan() {
  switch (calculator) {
    case "*":
      newnumber = firstnumber * newnumber;
      break;
    case "/":
      newnumber = firstnumber / newnumber;
      break;
    case "-":
      newnumber = firstnumber - newnumber;
      break;
    case "+":
      newnumber = Number(firstnumber) + Number(newnumber);
      break;
  }
}

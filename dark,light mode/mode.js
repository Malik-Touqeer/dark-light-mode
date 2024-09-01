let icon = document.getElementById("btn-2");
let para2 = document.getElementById("pargraph")

function Mode() {
    if (icon.innerHTML == "Dark Mode 🌙") {
      icon.innerHTML = "Light Mode 🌞"
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      // document.body.style.backgroundColor = "#35363A"
      // document.body.style.color = "#fff"
    //   para2.innerHTML = "Press the SUN to change the mode"
      document.body.style.transition = "1s ease-in-out"
    } 
    else {
        icon.innerHTML = "Dark Mode 🌙"
        // icon.innerHTML ="Mode"
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        // para2.innerHTML = "Press the MOON to change the mode"
        document.body.style.transition = "1s ease-in-out"
}
}

// const Read = document.querySelector('#btn-1');
// const pargraph = document.querySelector('#pargraph');

let Read = document.querySelector('#btn-1');
let pargraph = document.querySelector('#pargraph');

Read.addEventListener('click',(e)=>
{
  pargraph.classList.toggle('Show-Less');
  if(Read.innerHTML === 'Read-More'){
    Read.innerHTML = 'Show-Less';
  }
  else{
    Read.innerHTML = 'Read-More';
  }
})

// check 
// function condition(){
//   Read.addEventListener('click',(e)=>
// {
//   pargraph.classList.toggle('Show-Less');
//   if(Read.innerHTML === 'Read-More'){
//     Read.innerHTML = 'Show-Less';
//   }
//   else{
//     Read.innerHTML = 'Read-More';
//   }
// })
// }

// const readmore = document.querySelector('#btn-1');
// const pargraph = document.querySelector('.MoreText');

// readmore.addEventListener('click',(e)=>{
//   pargraph.classList.toggle('ShowLess');
// })
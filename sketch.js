let listArray = [];
let x = 10;
// sorry i couldnt think of a better solution for spacing them out
// well actually i probably could but minimum viable product yknow

function setup() {
  createCanvas(windowWidth, windowHeight);

  let i = 0;
  while (localStorage.getItem(i.toString()) !== null) {
    let list = new List();
    list.getFromLocalStorage(i.toString());
    listArray.push(list);
    i++;
  }

  if(listArray.length === 0){
    listArray.push(new List(prompt("What would you like you list to be named.")));
  }



  // let list0 = new List("Groceries");
  // list0.addTask(new Task("Apples", "Get 2 Honeycrisp apples"));
  // list0.addTask(new Task("Bananas", "3 or 4 green bananas"));
  // listArray.push(list0);  

  // let list1 = new List("Movies To Watch");
  // list1.addTask(new Task("Marty Supreme", "About table tennis?"));
  // list1.addTask(new Task("The Muppet Show", "Seth Rogan is in it"));
  // list1.addTask(new Task("F1", "Cars go vroom"));
  // listArray.push(list1);  


  //initList();
}


function draw() {
  background(220);
  x = 10;
  for (const each of listArray) {
    each.show(x, true);
    x += 410
  }
}

// function saveAllLists(){
//   for(let i = 0; i < listArray.length; i++){
//     listArray[i].pushToLocalStorage(i.toString());
//   }
// }



// function initList(){
//   background(220);
//   x = 10;
//   for (const each of listArray) {
//     each.show(x, true);
//     x += 410
//   }
// }

function refresh(){
  background(220);
  x = 10;
  if(listArray.length > 0){
    for (const each of listArray) {
      
      each.show(x ,false);
      x += 410
    }
  }

}


// If the window size changes, automatically resize the canvas to fill the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

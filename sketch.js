let listArray = [];
let x = 10;
// sorry i couldnt think of a better solution for spacing them out
// well actually i probably could but minimum viable product yknow

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  let list1 = new List("Shopping List");
  let list2 = new List("Game List");
  list1.addTask(new Task("Apples", "Get 2 Honeycrisp apples"));
  list1.addTask(new Task("Bananas", "3 or 4 green bananas"));
  listArray.push(list1);  
  listArray.push(list2);  

  x = 10;
  for (const each of listArray) {
    each.show(x);
    x += 410
  }

}


function draw() {
  
}

function refresh(){
  background(220);
  x = 10;
  for (const each of listArray) {
    each.show(x);
    x += 410
  }
}

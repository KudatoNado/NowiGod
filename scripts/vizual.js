let toys = [
    {
        name: "Большой шар с ресунком Цветок",
        count:2,
        year:1960,
        shape: "шар",
        color: "жёлтый",
        size: "большой",
        favorite: false,
        image: "./images/5296.png" 
    },
    {
        name: "Зелёный шар с цветочный узором",
        count:5,
        year:2000,
        shape: "шар",
        color: "зелёный",
        size: "большой",
        favorite: false,
        image: "./images/5297.png" 
    },
    {
        name: "Красный шар с напалением",
        count: 3,
        year: 1990,
        shape: "шар",
        color: "красный",
        size: "большой",
        favorite: false,
        image: "./images/5300.png" 
    },
    { 
        name: "Голубая игрушка с рисунком",
         color: "голубой", 
         count: 5, 
         year: 2023, 
         shape: "маленький", 
         favorite: true,
         image: "./images/5309.png" 
        },
];

let garlands = [
    { 

    }
];

toys.forEach(toy =>{
    console.log(
        toy.name + 
        " - " +
        toy.color +
        ", forma: " +
        toy.shape +
        ", kol:" +
        toy.count
    );
});

let updatedToys = toys.map( toy => {
    return{
    ...toy,
    count: toy.count + 1        
    };
});

console.log(updatedToys);

function User(name, age)
{
    this.name=name;
}
let person ={
name: "Анна",
greet()
{
    console.log("Ghbdtn");
}


}
let toystore={
    list:["redball","blueball","greenball"]
,
gettoy(index){
return this.list[index];
}
};

let tree={
type: "green",
toys:[1],
changetree(newtype)
{
    this.type=newtype;
},
addtoy(toy)
{
    this.toys.push(toy);
},
cleartoys()
{
    this.toys=[]
}
};

let treel={
    type:"snow",
    heoight: "big",
    toysCount:12
};
toys = toys.map((toy, index) => {
    return {
        ...toy,
        id: index + 1,
    };
});
console.log('updated toys:', toys);


const toysGrid= document.querySelector(".toys-grid");

toys.forEach((toy,index)=>{
    const toyBox =  document.createElement("div");

    const img = document.createElement("img");
    img.src= toy.image;
    img.classList.add("toy");
    img.draggable = true;
    img.dataset.index = index;

    const countBox = document.createElement("div");
    countBox.textContent=toy.count;
    countBox.style.color ="white";
    countBox.style.textAlign="center";
    countBox.style.fontSize ="14px";

    toyBox.appendChild(img);
    toyBox.appendChild(countBox);

    toysGrid.appendChild(toyBox);
    img.addEventListener("dragstart", e => {
        if(toy.count=== 0){
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData("tou", index);
    });
});

window.addEventListener("scroll", () => {
    console.log("Прокручиваем!");
});


let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },

    addToy(toyObj) {
      this.toys.push(toyObj);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
};

  const treeArea = document.querySelector(".tree-area");
  let placedCounter = 0;

  treeArea.addEventListener("dragover", e => e.preventDefault());
  
  treeArea.addEventListener("drop", e => {
    e.preventDefault();
  
    const rect = treeArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    if (e.dataTransfer.getData("toy") !== "") {
      const toyIndex = e.dataTransfer.getData("toy");
      const toy = toys[toyIndex];
  
      if (toy.count > 0) {
        toy.count--;
  
        const xPos = x - 40;
        const yPos = y - 40;
     
        const placedId = placedCounter;
  
        const img = document.createElement("img");
        img.src = toy.image;
        img.classList.add("toy-on-tree");
  
        img.style.left = xPos + "px";
        img.style.top = yPos + "px";
  
        // сохраняем id в DOM
        img.dataset.placedId = placedId;
  
        treeArea.appendChild(img);
  
        // сохраняем в объект текущей ёлки
        currentTree.addToy({
          id: toy.id,
          placedId: placedId,
          x: xPos,
          y: yPos,
          image: toy.image
        });
        console.log('currentTree.toys:', currentTree.toys);
        
  
        toysGrid.children[toyIndex].children[1].textContent = toy.count;
  
        img.addEventListener("click", () => {
          console.log("Клик по игрушке", img.dataset.placedId);
  
          img.remove();
  
          toy.count++;
          toysGrid.children[toyIndex].children[1].textContent = toy.count;
  
          currentTree.toys = currentTree.toys.filter(
            t => t.placedId != img.dataset.placedId // удалить игрушку
          );
        });
      }
    }
  
    if (e.dataTransfer.getData("garland") !== "") {
      const gIndex = e.dataTransfer.getData("garland");
      const garland = garlands[gIndex];
  
      currentTree.setGarland(garland.type);
  
      const img = document.createElement("img");
      img.src = garland.image;
      img.classList.add("garland-on-tree");
  
      img.style.left = (x - 140) + "px";
      img.style.top = (y - 20) + "px";
  
      img.style.animationDelay = (Math.random() * 1.6) + "s";
  
      treeArea.appendChild(img);
      
      //при клике на гирлянду удаляем ее из DOM
       img.addEventListener("click", () => {
        img.remove();
        // удаляем гирлянду из объекта текущей ёлки
        currentTree.setGarland("");
      });
    }
  });



//  const title =document.querySelector("h2");
//  const buttons =document.querySelectorAll(".btn");
//  const buttons =document.querySelectorAll(".aplle");
// img.scr = tree.png;
// element.classList.add("active");
// element.classList.remove("error");
// element.classList.toggle("open");
// lamp.classList.toggle("on");

// const toy =document.querySelector(".toy");
// console.log(toy.dataset.type);
// console.log(toy.dataset.size);

// document.querySelector("#main-title");
// element.classList.add("highlight");

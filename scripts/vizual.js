let toys = [
    {
        name: "Большой шар с ресунком Цветок",
        count:2,
        year:1960,
        shape: "шар",
        color: "жёлтый",
        size: "большой",
        favorite: false,
        image: "./images/toy_red.png" 
    },
    {
        name: "Зелёный шар с цветочный узором",
        count:5,
        year:2000,
        shape: "шар",
        color: "зелёный",
        size: "большой",
        favorite: false,
        image: "./images/toy_red.png" 
    },
    {
        name: "Красный шар с напалением",
        count: 3,
        year: 1990,
        shape: "шар",
        color: "красный",
        size: "большой",
        favorite: false,
        image: "./images/toy_red.png" 
    },
    { 
        name: "Голубая игрушка с рисунком",
         color: "red", 
         count: 5, 
         year: 2023, 
         shape: "ball", 
         favorite: true,
         image: "./images/5309.png" 
        },
    
    // {
    //     name: "",
    //     count:,
    //     year:,
    //     shape: "",
    //     color: "",
    //     size: "",
    //     favorite:,
    // },
];

// let tree =[
//     {

//     }
// ];

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



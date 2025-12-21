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
        {
          name: "Зелёный шар с блестками",
          color: "зелёный",
          count: 5,
          year: 2023,
          shape: "шар",
          size: "маленький",
          favorite: true,
          image: "./images/zelen_shar-removebg-preview.png"
        },

        { 
        name: "Бело-красноя игрушка",
         color: "белый-красный", 
         count: 5, 
         year: 2023, 
         shape: "маленький", 
         favorite: true,
         image: "./images/5295.png" 
        },
        { 
        name: "калакольчик",
         color: "белый", 
         count: 5, 
         year: 2023, 
         shape: "маленький", 
         favorite: true,
         image: "./images/5302.png" 
        },
        { 
        name: "игрушка-винограт",
         color: "крассный", 
         count: 5, 
         year: 2023, 
         shape: "маленький", 
         favorite: true,
         image: "./images/5301.png" 
        },
        { 
        name: "шишка",
         color: "белый", 
         count: 5, 
         year: 2023, 
         shape: "большой", 
         favorite: true,
         image: "./images/5304.png" 
        },
        { 
        name: "шар с ресунком",
         color: "голубой", 
         count: 5, 
         year: 2023, 
         shape: "маленький", 
         favorite: true,
         image: "./images/5307.png" 
        },
];

let garlands = [
    { 
        name: "разноцветная",
         color: "радуга", 
         count: 5, 
         year: 2023, 
         shape: "большое", 
         favorite: true,
         image: "./images/Garland_1.png" 
    },
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
garlands.forEach(garland =>{
    console.log(
        garland.name + 
        " - " +
        garland.color +
        ", forma: " +
        garland.shape +
        ", kol:" +
        garland.count
    );
});

let updatedToys = toys.map( toy => {
    return{
    ...toy,
    count: toy.count + 1        
    };
});
let updatedGarlands = garlands.map( garland => {
    return{
    ...garland,
    count: garland.count + 1        
    };
});

console.log(updatedToys);
console.log(updatedGarlands);

// function User(name, age)
// {
//     this.name=name;
// }
// let person ={
// name: "Анна",
// greet()
// {
//     console.log("Ghbdtn");
// }


// }
let toystore={
    list:["redball","blueball","greenball"]
,
gettoy(index){
return this.list[index];
}
};

let garlandstore={
    list:["garlanda-blue","garlanda-rgb","garlanda-red"]
,
getgarland(index){
return this.list[index];
}
};

let tree={
type: "green",
toys:[1],
garlands:[2],
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
},
addgarlands(garland)
{
    this.garlands.push(garland);
},
cleargarlands()
{
    this.garlands=[]
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
garlands = garlands.map((garland, index) => {
    return {
        ...garland,
        id: index + 1,
    };
});
console.log('updated toys:', toys);
console.log('updated garlands:', garlands);


const toysGrid= document.querySelector(".toys-grid");
const garlandsGrid= document.querySelector(".garlands-grid");

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
    if (toy.count === 0) {
        e.preventDefault();
        return;
    }
    e.dataTransfer.setData("toy", index);
    });
  });


garlands.forEach((garland, index) => {
    const garlandBox = document.createElement("div");

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland");
    img.draggable = true;
    img.dataset.index = index;

    const countBox = document.createElement("div");
    countBox.textContent = garland.count;
    countBox.style.color = "white";
    countBox.style.textAlign = "center";
    countBox.style.fontSize = "14px";

    garlandBox.appendChild(img);
    garlandBox.appendChild(countBox);

    img.addEventListener("dragstart", e => {
        if (garland.count === 0) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData("garland", index); 
    });
});




  window.addEventListener("scroll", () => {
    console.log("Прокручиваем!");
  });


  let currentTree = {
    type: "",
    garlands: [],
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },

    addToy(toyObj) {
      this.toys.push(toyObj);
    },
    addgarlands(garlandObj) {
        this.garlands.push(garlandObj);
      },
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garlands);
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
  
        
        const xPos = x - 20;
        const yPos = y - 20;
     
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

  const img = document.createElement("img");
  img.src = garland.image;
  img.classList.add("garland-on-tree");

  img.style.left = (x - 140) + "px";
  img.style.top = (y - 20) + "px";
  img.style.animationDelay = (Math.random() * 1.6) + "s";

  treeArea.appendChild(img);

  // сохраняем в объект текущей ёлки
  currentTree.addgarlands({
    id: garland.id,
    x: x - 140,
    y: y - 20,
    image: garland.image
  });

  img.addEventListener("click", () => {
    img.remove();
    currentTree.garlands = currentTree.garlands.filter(
      g => g.id !== garland.id
    );
  });
}


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
);



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
 let treeData ={
   type: currentTree.type,
   garland: currentTree.garland,
   toys: currentTree.toys
  };
  


  function getResultCurrentTreeData(){
    const resultCurrentTreeData ={
      type: currentTree.type,
      garland: currentTree.garlands.map(garland=>({
        id: garland.id,
        x: garland.x,
        y: garland.y,
        image: garland.image
      })),
      toys: currentTree.toys.map(toy => ({
        id: toy.id,
        x: toy.x,
        y: toy.y,
        image: toy.image
      }))
    };
    return resultCurrentTreeData;
  }

  const saveTreeBtn = document.getElementById("save-tree-btn");

  saveTreeBtn.addEventListener("click", () => {
    const resultCurrentTreeData = getResultCurrentTreeData();
    console.log(resultCurrentTreeData);

    const getResultCurrentTreeJSON = JSON.stringify(resultCurrentTreeData);
    console.log(getResultCurrentTreeJSON);

    localStorage.setItem("savedTree", resultCurrentTreeJSON);
  alert("Ёлка сохранена в браузере - localStorage");

  fetch("/save-tree", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: resultCurrentTreeJSON
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка при сохранении ёлки");
      }
      return response.json();
    })
    .then(data => {
      console.log("Ответ сервера:", data);
      console.log("Ёлка сохранена ");
    })
    .catch(error => {
      console.error("Ошибка:", error);
      console.error("Не удалось сохранить ёлку");
    });

  });


const enableBtn = document.getElementById("enable-effects");
const disableBtn = document.getElementById("disable-effects");

disableBtn.addEventListener("click", () => {
  document.body.classList.add("no-effects");
  disableBtn.style.display = "none";
  enableBtn.style.display = "flex";
});

enableBtn.addEventListener("click", () => {
  document.body.classList.remove("no-effects");
  enableBtn.style.display = "none";
  disableBtn.style.display = "flex";
});

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄️";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = (Math.random() * 10 + 10) + "px";
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

let snowInterval;
function startSnow() {
  snowInterval = setInterval(createSnowflake, 300);
}
function stopSnow() {
  clearInterval(snowInterval);
}

disableBtn.addEventListener("click", () => {
  stopSnow();
  disableBtn.style.display = "none";
  enableBtn.style.display = "flex";
});

enableBtn.addEventListener("click", () => {
  startSnow();
  enableBtn.style.display = "none";
  disableBtn.style.display = "flex";
});

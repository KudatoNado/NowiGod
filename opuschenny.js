let toys = [
    {
        name: "Большой шар с ресунком Цветок",
        count:2,
        year:1960,
        shape: "шар",
        color: "жёлтый",
        size: "большой",
        favorite: false,
    },
    {
        name: "Зелёный шар с цветочный узором",
        count:5,
        year:2000,
        shape: "шар",
        color: "зелёный",
        size: "большой",
        favorite: false,
    },
    {
        name: "Красный шар с напалением",
        count: 3,
        year: 1990,
        shape: "шар",
        color: "красный",
        size: "большой",
        favorite: false,
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
}



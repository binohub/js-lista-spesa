const listaDellaSpesa = [
    "latte",
    "crema al pistacchio",
    "tiramisù",
    "fragole",
    "carote",
    "cereali",
    "choco krave",
    "proteic milk",
    "uova",
    "microfono",
];
const connectLi = document.getElementById("shop-li");
let i = 0;
while (i < listaDellaSpesa.length) {
    const addLi = document.createElement("li");
    addLi.innerHTML = listaDellaSpesa[i];    
    connectLi.append(addLi);
    i++;
}
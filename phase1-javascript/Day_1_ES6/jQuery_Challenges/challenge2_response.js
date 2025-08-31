let items = ['Apple', 'Banana', 'Cherry'];
let fruitList = document.getElementById('list');
for(const fruit of items)
{
    let fruitElement = document.createElement('li');
    fruitElement.textContent = fruit;
    fruitList.appendChild(fruitElement);
}

/** Version 2.5**/
document.getElementById('list').innerHTML = (items.map((x)=> `<li>${x}</li>`)).join('');
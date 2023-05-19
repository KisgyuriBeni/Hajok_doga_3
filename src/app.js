const doc = {
    tbody:document.querySelector('#tbody')
}
const state = {
    host:"http://localhost:8000/" ,
    ships:[]
}
window.addEventListener('load', ()=>{
    init();
})

function init(){
    getShips();
}


function getShips(){
    let endoint = "ships"
    let url = state.host + endoint;
    fetch(url)
    .then(response => response.json())
    .then(result =>{
        state.ships = result;
        // console.log(result) --> tesztelés sikeres!
        render();    
    })
}
function render(){
    var rows = "";
    state.ships.forEach(ship =>{
        var row = `
        <tr>
            <td>${ship.name}</td>
            <td>${ship.lenght}</td>
            <td>${ship.price}</td>
            <td>${ship.person}</td>
            <td>${ship.trailer}</td>
        </tr>
        `;
        rows += row;
    })
    doc.tbody.innerHTML = rows;
}
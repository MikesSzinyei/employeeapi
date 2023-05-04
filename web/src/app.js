const doc = {
    tbody: document.querySelector('#tbody'),
    operatorButton:document.querySelector('#operatorButton'),
    
    
}

const state = {
    employees :[],
    host:'http://localhost:8000/api/'
}

window.addEventListener('load',() =>{
    init();
})

function init() {
    getEmployees();
    doc.operatorButton.addEventListener('click', ()=>{
        startOperation();
    });
    
}

function startOperation() {
console.log('mukodi');
};

function getEmployees () {
    let endpoint = 'employees'
    let url = state.host + endpoint;
    fetch(url)
    .then(result=>result.json())
    .then(res => {
        console.log(res);
        renderTable()
});
}
var rows = '';
function renderTable() {
    state.employees.forEach( (emp)=>{
        rows += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.city}</td>
                <td>${emp.salary}</td>
            </tr>
        `
    });
    doc.tbody.innerHTML = rows;
        
    };

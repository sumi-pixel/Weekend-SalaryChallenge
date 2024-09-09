console.log('core.js'); 
document.getElementById('employeeForm').addEventListener('submit', (event) =>{
event.preventDefault();
});

// creating and declaring employee info
let firstName = document.querySelector('#firstName').value; 
let lastName  = document.querySelector('#lastName').value; 
let idNumber  = document.querySelector('#idNumber').value; 
let jobTile   = document.querySelector('#jobTitle').value; 
let annualSalary = Number(document.getElementById('annualSalary').value); 
// create table 
let table = document.querySelector('#employeeTable tbody'); 
let newRow = document.createElement('tr'); 
let cells = [
    firstName,
    lastName,
    idNumber,
    jobTile,
    annualSalary.toFixed(2),
    '<button class= "deleteBtn">Delete</button>'
];

cells.foreach(cellContent => {
let cell = document.createElement('td'); 
cell.innerHTML = cellContent; 
newRow.appendChild(cell);
});

// delete row 
upgradeTotalMonthlyCost(annualSalary / 12); 
document.getElementById('employeeForm').reset(); 
newRow.querySelector('.deleteBtn').onclick = function () {
    newRow.remove(); 
};

// test if total monthly cost exists
function upgradeTotalMonthlyCost(newSalary) {
    let TotalMonthlyCostElement = document.getElementById('totalMonthlyCost');
    if (TotalMonthlyCost) {
      let totalMonthlyCost = parseFloat(totalMonthlyCostElement.textcontent) || 0; 
      totalMonthlyCost += newSalary;
      TotalMonthlyCostElement.textContent = `${totalMonthlyCost.toFixed(2)})`;
    }
}
// add class if condition is true if not remove 
const footer = document.getElementById('footer'); 
footer.classList.toggle('over-budget', totalMonthlyCost > 20000);



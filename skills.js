function calculateNumbers(var1, var2) {
  return var1 + var2;
}
document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const input3 = document.getElementById('input3').value;
  const input4 = document.getElementById('input4').value;

  const tableBody = document.querySelector('#dataTable tbody');
  const newRow = document.createElement('tr');

  const cell1 = document.createElement('td');
  cell1.textContent = input1;
  newRow.appendChild(cell1);

  const cell2 = document.createElement('td');
  cell2.textContent = input2;
  newRow.appendChild(cell2);

  const cell3 = document.createElement('td');
  cell3.textContent = input3;
  newRow.appendChild(cell3);

  const cell4 = document.createElement('td');
  cell4.textContent = input4;
  newRow.appendChild(cell4);

  tableBody.appendChild(newRow);

  // Clear the input fields
  document.getElementById('inputForm').reset();
});
document.getElementById('submitBtn').addEventListener('click', function() {
    const mathInput = document.getElementById('mathGrade');
    const englishInput = document.getElementById('englishGrade');
    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert('Please enter valid numbers for both Math and English grades.');
        return;
    }

    // Add new row with sequence number
    const tableBody = document.querySelector('#gradesTable tbody');
    const newRow = tableBody.insertRow();
    const rowIndex = tableBody.rows.length;

    const indexCell = newRow.insertCell(0);
    const mathCell = newRow.insertCell(1);
    const englishCell = newRow.insertCell(2);
    const averageCell = newRow.insertCell(3);

    indexCell.textContent = rowIndex; // Auto-increment row index
    mathCell.textContent = math;
    englishCell.textContent = english;
    const average = ((math + english) / 2).toFixed(2);
    averageCell.textContent = average;

    updateAverages();


    mathInput.value = '';
    englishInput.value = '';
});

function updateAverages() {
    const tableBody = document.querySelector('#gradesTable tbody');
    const rows = tableBody.querySelectorAll('tr');

    let totalMath = 0, totalEnglish = 0, totalOverall = 0;

    rows.forEach(row => {
        const math = parseFloat(row.cells[1].textContent);
        const english = parseFloat(row.cells[2].textContent);
        const average = parseFloat(row.cells[3].textContent);

        totalMath += math;
        totalEnglish += english;
        totalOverall += average;
    });

    const mathAverage = (totalMath / rows.length).toFixed(2);
    const englishAverage = (totalEnglish / rows.length).toFixed(2);
    const overallAverage = (totalOverall / rows.length).toFixed(2);

    document.getElementById('mathAverage').textContent = mathAverage;
    document.getElementById('englishAverage').textContent = englishAverage;
    document.getElementById('overallAverage').textContent = overallAverage;
}

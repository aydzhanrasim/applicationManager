function radioButtonsReadContact() {
    document.getElementsByName('contact')
        .forEach(radio => {
            if (radio.checked) {
                document.getElementsByName('contact').value = radio.value;
            }
        });

}

function radioButtonsReadLevel() {
    document.getElementsByName('level')
        .forEach(radio => {
            if (radio.checked) {
                document.getElementsByName('level').value = radio.value;
            }
        });
}

/*function checkboxRead() {
    let checkbox = document.getElementById('fromHome').value;
    if (checkbox.value === 'checked') {

    } else {
        checkbox.value == 'no';
        document.getElementById('fromHome').value = checkbox.value;
    }
    return checkbox;

}*/

let recordsOfSubmission = [];
const addSubmission = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let submission = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phoneNumber').value,
        contact: document.getElementsByName('contact').value,
        level: document.getElementsByName('level').value,
        date: document.getElementById('date').value,
        infoSkills: document.getElementById('infoSkills').value,
        infoPersonal: document.getElementById('infoPersonal').value,
        studyFromHome: document.getElementById('fromHome').value
    }


    recordsOfSubmission.push(submission);
    document.forms[0].reset(); // to clear the form for the next entries

    //saving to localStorage
    localStorage.setItem('ApplicationsList', JSON.stringify(recordsOfSubmission));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addSubmission);
    document.getElementById('submit').addEventListener('click', updateList);
});

function updateList() {

    let currentInput = recordsOfSubmission[recordsOfSubmission.length - 1];
    var table = document.getElementById("results").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = currentInput.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = currentInput.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = currentInput.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = currentInput.phone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = currentInput.contact;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = currentInput.level;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = currentInput.date;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = currentInput.infoSkills;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = currentInput.infoPersonal;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = currentInput.studyFromHome;

    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                  <a onClick="onDelete();">Delete</a>`;

}


function onDelete() {
    if (confirm('Are you sure to delete this application?')) {
        row = getElementsByTagName('td').parentElement.parentElement;
        document.getElementById("result").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onEdit() {


}
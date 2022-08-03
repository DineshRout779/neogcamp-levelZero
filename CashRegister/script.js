const billInput = document.querySelector("#bill");
const cashInput = document.querySelector("#cash");
const cashGroup = document.querySelector("#cash-group");
const checkBtn = document.querySelector("#check-btn");
const payBtn = document.querySelector("#pay-btn");
const table = document.querySelector("table");
const billErr = document.querySelector("#bill-err");
const cashErr = document.querySelector("#cash-err");
const output = document.querySelector("#output");

const notes = [
  { note: 500, number: null },
  { note: 200, number: null },
  { note: 100, number: null },
  { note: 50, number: null },
  { note: 20, number: null },
  { note: 10, number: null },
  { note: 5, number: null },
  { note: 1, number: null },
];

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    billInput.value === "" ||
    isNaN(billInput.value) ||
    billInput.value <= 0
  ) {
    billErr.innerHTML = "Enter valid non-zero amount number";
  } else {
    billErr.innerHTML = "";
    cashGroup.classList.add("open");
    cashInput.focus();
  }
});

payBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cashInput.value === "" || isNaN(cashInput.value)) {
    cashErr.innerHTML = "Enter valid non-zero amount number";
    table.style.visibility = "hidden";
    output.innerHTML = ``;
  } else {
    const retrunValue = cashInput.value - billInput.value;
    if (retrunValue > 0) {
      output.innerHTML = `Cash to be returned is ${retrunValue}`;
      cashErr.innerHTML = "";
      table.style.visibility = "visible";
      fillTable(notes);
      createTable(notes);
    } else if (retrunValue === 0) {
      output.innerHTML = `No cash to be returned`;
      table.style.visibility = "hidden";
    } else {
      table.style.visibility = "hidden";
      output.innerHTML = ``;
      cashErr.innerHTML = `cash value should be more than or equal to bill amount`;
    }
  }
});

const fillTable = (data) => {
  let diff = cashInput.value - billInput.value;
  for (let i = 0; i < data.length; i++) {
    data[i].number = Math.floor(diff / data[i].note);
    diff = diff - data[i].number * data[i].note;
    if (data[i].number === 0) {
      data[i].number = null;
    }
  }
};

const createTable = (data) => {
  //   console.log(data);
  const tableRow = `
        ${data
          .map(
            (d, i) => `
            <tr>
                <td>${d.note}</td>
                <td>${d.number !== null ? d.number : " "}</td>
            </tr>
            `
          )
          .join(" ")}
    `;
  //   console.log(tableRow);
  const tableHeader = `<tr>
      <th>Notes</th>
      <th>No. of Notes</th> 
    </tr>`;

  table.innerHTML = tableHeader + tableRow;
};

window.addEventListener("load", () => {
  billInput.focus();
});

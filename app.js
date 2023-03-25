const form = document.getElementById("form");
const table = document.getElementById("table");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let fullname = event.target.fullname.value;
  let Grade = event.target.grade.value;
  let num = event.target.Num.value;
  let bd = event.target.bd.value;
  let gen = event.target.gender.value;
  console.log(fullname);
  console.log(Grade);
  console.log(num);
  console.log(bd);
  console.log(gen);
  form.reset();
  render(fullname, Grade, num, bd, gen);
});

function render(fullname, Grade, num, bd, gen) {
  const tName = document.createElement("td");
  const tGrade = document.createElement("td");
  const tNumber = document.createElement("td");
  const tDate = document.createElement("td");
  const tGender = document.createElement("td");
  const row = document.createElement("tr");

  



  tName.textContent = fullname;
  tGrade.textContent = Grade;
  tNumber.textContent = num;
  tDate.textContent = bd;
  tGender.textContent = gen;

  table.appendChild(row);
  row.appendChild(tName);
  row.appendChild(tGrade);
  row.appendChild(tNumber);
  row.appendChild(tDate);
  row.appendChild(tGender);
}

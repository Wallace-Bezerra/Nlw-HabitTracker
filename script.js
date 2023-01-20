const form = document.querySelector("#form-habits");
const button = document.querySelector("button");
const nlwSetup = new NLWSetup(form);
// let data = {};
const handleAdd = () => {
  console.log("clicou!");
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5);
  const dayExist = nlwSetup.dayExists(today);

  if (!dayExist) {
    nlwSetup.addDay(today);
  } else {
    alert("Este dia já existe!");
  }
};
const handleSave = () => {
  localStorage.setItem("nlwHabits", JSON.stringify(nlwSetup.data));
};
button.addEventListener("click", handleAdd);
form.addEventListener("change", handleSave);
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09", "01-10"],
//   water: ["01-04", "01-05"],
//   gym: ["01-01", "01-03"],
//   sleep: ["01-01", "01-02", "01-05", "01-07"],
//   stroll: ["01-01", "01-03", "01-06"],
//   food: ["01-01", "01-03", "01-04"],
// };
// console.log(JSON.parse(localStorage.getItem("nlwHabits")));
nlwSetup.setData(JSON.parse(localStorage.getItem("nlwHabits")) || {});
nlwSetup.load();

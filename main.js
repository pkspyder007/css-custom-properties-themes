const darkToggle = document.getElementById("dark");
const lightToggle = document.getElementById("light");
const solarToggle = document.getElementById("solar");
const body = document.body;

const theme = localStorage.getItem("theme");
if(theme) {
    body.classList.add(theme)
}

const removeAllClasses = () => {
 if(body.classList.length > 0) {
    body.classList.remove(...body.classList.value.split(" "));
 }
};

darkToggle.onclick = () => {
  removeAllClasses();
  body.classList.add("dark");
  localStorage.setItem("theme", "dark")
};

lightToggle.onclick = () => {
    removeAllClasses();
    body.classList.add("light");
    localStorage.setItem("theme", "light")
};

solarToggle.onclick = () => {
    removeAllClasses();
    body.classList.add("solar");
    localStorage.setItem("theme", "solar")
};

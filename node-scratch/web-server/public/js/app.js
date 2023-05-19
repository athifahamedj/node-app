const formData = document.querySelector("form");
const texts = document.querySelector("input");
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  const finalVal = texts.value;

  fetch("https://puzzle.mead.io/puzzle" + finalVal).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
  //   console.log(finalVal);
});

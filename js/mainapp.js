function flexActive() {
  const element = document.querySelector(".hightwo");
  if (element) {
    element.classList.add("tohightwo");
  }
  const animation = document.querySelector(".mainbox");
  if (animation) {
    animation.classList.add("no-left-mask");
  }
  const buttonOne = document.querySelector(".buttonseft");
  if (buttonOne) {
    buttonOne.classList.add("tobuttonseft");
  }
  const h1One = document.querySelector(".h1one");
  if (h1One) {
    h1One.classList.add("toh1one");
  }

  const hightone = document.querySelector(".highone");
  if (hightone) {
    hightone.classList.add("tohighone");
  }
}

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("input", () => {
  // Check if the content of div1 overflows
  if (div1.scrollHeight > div1.clientHeight) {
    const fullText = div1.innerText;
    const overflowText = fullText.slice(div1.innerText.length);

    // Limit the content in div1 to fit its size
    div1.innerText = fullText.slice(
      0,
      div1.innerText.length - overflowText.length
    );
    div2.innerText = overflowText;

    // Move the caret to the end of div2
    div2.focus();
  }
});

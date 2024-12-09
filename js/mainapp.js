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

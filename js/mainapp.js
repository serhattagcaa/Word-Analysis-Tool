const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("input", () => {
  if (div1.scrollHeight > div1.clientHeight) {
    const fullText = div1.innerText;
    const overflowText = fullText.slice(div1.innerText.length);

    div1.innerText = fullText.slice(
      0,
      div1.innerText.length - overflowText.length
    );
    div2.innerText = overflowText;

    div2.focus();
  }
});

function oneIdfunc() {
  let singleText = div1.innerText + div2.innerText;

  let words = singleText.trim().split(/\s+/);

  const totalNumber = document.getElementById("totalNumberOfWords");
  totalNumber.innerText = words.length;
}

function twoIdfunc() {
  let singleText = div1.innerText + div2.innerText;

  let words = singleText.trim().split(/\s+/);

  let uniqueWords = new Set(words);

  const numberOfUniqueWords = document.getElementById("numberOfUniqueWords");
  numberOfUniqueWords.innerText = uniqueWords.size;
}

function threeIdfunc() {
  let singleText = div1.innerText + div2.innerText;

  let words = singleText.trim().split(/\s+/);

  let wordCount = {};

  words.forEach((word) => {
    word = word.toLowerCase();
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  let mostFrequentWord = "";
  let maxCount = 0;
  for (let word in wordCount) {
    if (wordCount[word] > maxCount) {
      mostFrequentWord = word;
      maxCount = wordCount[word];
    }
  }

  const mostFrequentlyUsedWord = document.getElementById(
    "mostFrequentlyUsedWord"
  );
  mostFrequentlyUsedWord.innerText = mostFrequentWord;
}

function fourIdfunc() {
  let singleText = div1.innerText + div2.innerText;

  let words = singleText.trim().split(/\s+/);

  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  const theLongestWord = document.getElementById("theLongestWord");
  theLongestWord.innerText = longestWord;
}

function flexActive() {
  const elementsToAddClass = [
    { selector: ".hightwo", className: "tohightwo" },
    { selector: ".mainbox", className: "no-left-mask" },
    { selector: ".buttonseft", className: "tobuttonseft" },
    { selector: ".h1one", className: "toh1one" },
    { selector: ".highone", className: "tohighone" },
  ];

  elementsToAddClass.forEach((item) => {
    const element = document.querySelector(item.selector);
    if (element) {
      element.classList.add(item.className);
    }
  });

  oneIdfunc();
  twoIdfunc();
  threeIdfunc();
  fourIdfunc();
}

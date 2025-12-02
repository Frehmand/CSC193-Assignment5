// Make text bigger
function makeBigger() {
  alert("Hello, world!");
  const textArea = document.getElementById("textArea");
  textArea.style.fontSize = "24pt";
}

// Change styles based on radio buttons
function changeStyle() {
  const textArea = document.getElementById("textArea");
  const fancy = document.getElementById("fancy");

  if (fancy.checked) {
    alert("FancyShmancy!");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    alert("BoringBetty...");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Uppercase + add "-Moo" to last word of each sentence
function moo() {
  const textArea = document.getElementById("textArea");
  let text = textArea.value.toUpperCase();

  // Split sentences by "."
  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let s = sentences[i].trim();
    if (s.length === 0) continue;

    let words = s.split(" ");
    let lastIndex = words.length - 1;
    words[lastIndex] = words[lastIndex] + "-Moo";
    sentences[i] = words.join(" ");
  }

  // Join back with periods
  textArea.value = sentences.join(". ").trim();
}

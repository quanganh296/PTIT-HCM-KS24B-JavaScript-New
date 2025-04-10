function countCharacters() {
    const textInput = document.getElementById("textInput").value;
    const charCount = textInput.length;
    document.getElementById("result").innerText = `${charCount} ký tự`;
  }
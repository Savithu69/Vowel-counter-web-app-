function countVowels() {
  const inputEl = document.getElementById('wordInput');
  const outputEl = document.getElementById('result');
  const text = inputEl.value.trim();

  const display = (msg, clr) => {
    outputEl.textContent = msg;
    outputEl.style.color = clr;
  };

  if (!text) {
    display('Please enter text.', 'red');
    return;
  }

  if (!/^[a-zA-Z\s.,!?'"-]+$/.test(text)) {
    display('Only letters, spaces, and punctuation allowed.', 'red');
    return;
  }

  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (const ch of text) {
    if (vowels.includes(ch)) count++;
  }

  display(`Number of vowels: ${count}`, '#111827');
  inputEl.value = '';
}

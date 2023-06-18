function clearAll() {
  document.getElementById('textArea').value = '';
}

function capitalize() {
  var textarea = document.getElementById('textArea');
  var lines = textarea.value.split('\n');
  
  for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim() !== '') {
          if (lines[i] === lines[i].toUpperCase()) {
              lines[i] = lines[i].toLowerCase();
          } else {
              lines[i] = lines[i].toUpperCase();
          }
      }
  }
  
  textarea.value = lines.join('\n');
}

function sort() {
  var textarea = document.getElementById('textArea');
  var lines = textarea.value.split('\n');
  lines = lines.filter(line => line.trim() !== '');
  lines.sort();
  textarea.value = lines.join('\n');
}

function reverse() {
  var textarea = document.getElementById('textArea');
  var lines = textarea.value.split('\n');
  
  for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim() !== '') {
          lines[i] = lines[i].split('').reverse().join('');
      }
  }
  
  textarea.value = lines.join('\n');
}

function stripBlank() {
  var textarea = document.getElementById('textArea');
  var lines = textarea.value.split('\n');
  lines = lines.map(line => line.trim()).filter(line => line !== '');
  textarea.value = lines.join('\n');
}

function addNumbers() {
  var textarea = document.getElementById('textArea');
  var lines = textarea.value.split('\n');
  
  for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim() !== '') {
          lines[i] = (i + 1) + '. ' + lines[i];
      }
  }
  
  textarea.value = lines.join('\n');
}

function shuffle() {
  var textarea = document.getElementById('textArea');
  var lines = textarea.value.split('\n');
  
  for (var i = lines.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = lines[i];
      lines[i] = lines[j];
      lines[j] = temp;
  }
  
  textarea.value = lines.join('\n');
}
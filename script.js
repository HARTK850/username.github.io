document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('fileInput').files[0];
  if (!fileInput) {
    alert('Please select a ZIP file.');
    return;
  }

  const formData = new FormData();
  formData.append('zipfile', fileInput);

  const output = document.getElementById('output');
  output.textContent = 'Uploading and compiling...';

  // שליחה ל-Replit
  const response = await fetch('https://your-repl.repl.co/compile', {
    method: 'POST',
    body: formData
  });

  const result = await response.text();
  output.textContent = result;
});

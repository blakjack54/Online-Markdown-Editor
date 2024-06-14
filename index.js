const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
  const markdownText = editor.innerText;
  const html = marked(markdownText);
  preview.innerHTML = html;
}

editor.addEventListener('input', updatePreview);

// Initial preview update
updatePreview();

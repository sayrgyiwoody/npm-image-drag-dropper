function initializeFileUploader() {
    const fileDropArea = document.getElementById('file-drop-area');
  
    fileDropArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropArea.classList.add('dragover');
    });
  
    fileDropArea.addEventListener('dragleave', () => {
      fileDropArea.classList.remove('dragover');
    });
  
    fileDropArea.addEventListener('drop', (e) => {
      e.preventDefault();
      fileDropArea.classList.remove('dragover');
      const files = e.dataTransfer.files;
      handleFiles(files);
    });
  
    const fileInput = document.getElementById('file-input');
  
    fileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      handleFiles(files);
    });

    fileDropArea.addEventListener('click', () => {
      fileInput.click(); // Trigger click event on file input
    });
  
    function handleFiles(files) {
      const img = document.getElementById("dropped-img");

      for (const file of files) {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function (e) {
           
            img.src = e.target.result;
            img.alt = file.name;
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please drop an image file.');
        }
      } 
    }
  }


export default initializeFileUploader;
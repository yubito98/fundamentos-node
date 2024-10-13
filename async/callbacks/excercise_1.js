function downloadFile(fileName, callback) {
    console.log(`Downloading File ${fileName}`)
    setTimeout(() =>{
        callback()
    }, 2000)
  }
  
  // This function should run after the file is downloaded
  function showDownloadMessage() {
    console.log("The file is ready to be used!");
  }
  
  // Call downloadFile with a file name and the callback
  downloadFile("myDocument.pdf", showDownloadMessage);
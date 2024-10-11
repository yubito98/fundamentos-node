function fetchData(url, callback) {
    console.log(`feching data from ${url}`)
    setTimeout(() =>{
        let data = {"url":url, "content":`Sample data from ${url}`}
        callback(data)
    }, 2000)
  }
  
  function displayData(data) {
    console.log("Data received:", data);
  }
  
  // Call fetchData with a URL and the callback function
  fetchData("https://example.com/api/data", displayData);
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search");
    const searchBox = document.getElementById("searchBox");
  
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      const searchTerm = searchBox.value.trim();
  
      // Check if the search term is not empty
      if (searchTerm !== "") {
        // Construct the search URL
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
  
        // Redirect to the search URL
        window.location.href = searchUrl;
      }
    });
  });
  
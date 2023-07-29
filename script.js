
// Download CV Action Start

  function downloadCV() {
    // Replace the original Google Drive URL with the modified one
    var downloadUrl =
      "https://drive.google.com/uc?export=download&id=1QRDED_Mjx7gBtwN7Kb8Dm037bllCGuhd";
    // Create an anchor element
    var anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = "CV.pdf"; // Set the desired file name for the download
    // Append the anchor to the document body
    document.body.appendChild(anchor);
    // Trigger the click event on the anchor element
    anchor.click();
    // Remove the anchor from the document after download
    document.body.removeChild(anchor);
  }

// Download CV Action End


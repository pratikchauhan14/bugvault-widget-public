// Make sure this event listener is properly set up
window.addEventListener('message', (event) => {
    if (event.data && event.data.source === "flagbugapp") {
        // Handle screenshot data
        if ( event.data.imageData) {
            screenshotImage.src = event.data.imageData;
            screenshotImage.style.display = 'block';
        }
    } 
}); 

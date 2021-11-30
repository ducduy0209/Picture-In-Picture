const videoElement = document.getElementById('video');
const button = document.getElementById('btn');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Await user choose a screen to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Convert source user share into src video
        videoElement.srcObject = mediaStream;
        // After download date complete, video automatic play
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        alert("You have not shared the screen, please reload the page to do it again. Thank you !")
    }
}

button.addEventListener('click', async() => {
    // Disabled button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
})

// On load
selectMediaStream();
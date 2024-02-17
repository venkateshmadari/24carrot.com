const videoContainer = document.querySelector('.video-container');
const videoElement = videoContainer.querySelector('.video-element');
const thumbnail = videoContainer.querySelector('.video-thumbnail');

thumbnail.addEventListener('click', () => {
  // Remove the muted attribute after click (optional)
  videoElement.muted = false;
  videoElement.play();
  thumbnail.style.display = 'none'; // Hide the thumbnail after playing
});

// JavaScript for sequential video playback
const videoPlayer = document.getElementById('videoPlayer');
const videos = [
    'assets/videos/Snapchat-1010309904.mp4',
    'assets/videos/Snapchat-1048175685.mp4',
    'assets/videos/Snapchat-1327959609.mp4',
    'assets/videos/Snapchat-1360954153.mp4',
    'assets/videos/Snapchat-1444197955.mp4',
    'assets/videos/Snapchat-1478864797.mp4',
    'assets/videos/Snapchat-1606284401.mp4',
    'assets/videos/Snapchat-2026490141.mp4',
    'assets/videos/VID-20240615-WA0005.mp4'
];
let currentVideo = 0;

videoPlayer.addEventListener('ended', function() {
    currentVideo++;
    if (currentVideo >= videos.length) {
        currentVideo = 0; // Loop back to the first video
    }
    videoPlayer.src = videos[currentVideo];
    videoPlayer.play();
});

// Set initial video source
videoPlayer.src = videos[currentVideo];

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

document.querySelectorAll('.gallery img').forEach(img => {
    img.onclick = () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    };
});

close.onclick = () => {
    lightbox.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
};

// Love Calculator functionality
const calculateLoveButton = document.getElementById('calculate-love');
const loveResult = document.getElementById('love-result');

calculateLoveButton.onclick = () => {
    loveResult.textContent = `My Riza, my mahal, my darling, my princess, I love you so much 1000%! Don't calculate the love between us baby the calculater will break po haha! ❤️`;
};

// Background Music Autoplay Handling
const backgroundMusic = document.getElementById('background-music-audio');

backgroundMusic.oncanplaythrough = () => {
    backgroundMusic.play().catch(() => {
        console.log("Autoplay prevented by browser. User interaction might be required.");
    });
};

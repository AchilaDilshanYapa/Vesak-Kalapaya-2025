document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const musicBtn = document.getElementById('music-toggle');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicBtn.style.opacity = '0.5';
        } else {
            music.play();
            musicBtn.style.opacity = '1';
        }
        isPlaying = !isPlaying;
    });

    // Add hover effect to lanterns
    const lanterns = document.querySelectorAll('.lantern');
    lanterns.forEach(lantern => {
        lantern.addEventListener('mouseover', () => {
            lantern.style.transform = 'scale(1.1)';
            lantern.style.transition = 'transform 0.3s';
        });

        lantern.addEventListener('mouseout', () => {
            lantern.style.transform = 'scale(1)';
        });
    });
});
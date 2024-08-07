// script.js

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'images/image1.jpg', description: 'Sizce Metehan Baba Güvencesiyle Bu Arkadaş MÜSLÜMAN mı ?' },
        { src: 'images/image2.jpg', description: 'The Miracın Bacısı Şuanda 7.5KM İLERİNDE! Sizce Bu Arkadaş Müslümanmıdır ?' },
        { src: 'images/image3.jpg', description: 'Kerem Apo İShal olmuş ve Tuvalette Uyuya Kalmış! Sizce Bu Arkadaş Müslümanmıdır ?' }
    ];
    let currentImageIndex = 0;

    const currentImage = document.getElementById('current-image');
    const imageDescription = document.getElementById('image-description');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const messageDiv = document.getElementById('message');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');
    const startMusicButton = document.getElementById('start-music-button');
    const backgroundMusic = document.getElementById('background-music');

    function showMessage(message) {
        messageDiv.textContent = message;
    }

    function updateImage() {
        if (currentImageIndex < images.length) {
            currentImage.src = images[currentImageIndex].src;
            imageDescription.textContent = images[currentImageIndex].description;
            yesButton.disabled = false;
            noButton.disabled = false;
            messageDiv.textContent = '';
            nextButton.classList.add('hidden');
            restartButton.classList.add('hidden');
        } else {
            showMessage('Test bitti!');
            nextButton.classList.add('hidden');
            restartButton.classList.remove('hidden');
        }
    }

    yesButton.addEventListener('click', () => {
        yesButton.disabled = true;
        noButton.disabled = true;
        showMessage('Bir sonraki görsele geç!');
        nextButton.classList.remove('hidden');
    });

    noButton.addEventListener('click', () => {
        yesButton.disabled = true;
        noButton.disabled = true;
        showMessage('Bir sonraki görsele geç!');
        nextButton.classList.remove('hidden');
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex++;
        updateImage();
    });

    restartButton.addEventListener('click', () => {
        currentImageIndex = 0;
        updateImage();
    });

    startMusicButton.addEventListener('click', () => {
        backgroundMusic.play().then(() => {
            console.log('Müzik çalıyor.');
            startMusicButton.classList.add('hidden');
        }).catch((error) => {
            console.error('Müzik çalma hatası:', error);
        });
    });

    updateImage();
});

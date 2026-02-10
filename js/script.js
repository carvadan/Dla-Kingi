const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const title = document.getElementById('title');
const img = document.getElementById('mainImage');

let noCount = 0;

const noTexts = [
  'Pojebało cię? 😑',
  'Kliknęłaś tutaj? 🤨',
  'Lepiej pomyśl 😡',
  'Będę na ciebie obrażony 💔',
  'Jak chcesz 😒',
  'Pierdol cię! 😤',
  'Kurwa 😠',
  'Serio? 😒',
  'Wkurwiasz mnie! 🤬',
];

// 👉 ТУТ МОЖНО МЕШАТЬ ФОТО И GIF
const images = [
  'https://media.giphy.com/media/fdiOoSR8omN5RO36Yo/giphy.gif',
  'assets/photo 1.jpeg',
  'https://media.giphy.com/media/hECJDGJs4hQjjWLqRV/giphy.gif',
  'assets/photo 8.jpeg',
  'https://media.giphy.com/media/FVzAy631qCZmzeasiQ/giphy.gif',
  'assets/photo 7.jpeg',
  'https://media.giphy.com/media/GAXXHdS0zXawVLOJLY/giphy.gif',
  'assets/photo 4.jpeg',
  'https://media.giphy.com/media/haCYYKWRVeilcEL65X/giphy.gif',
  'assets/photo 5.jpeg',
  'https://media.giphy.com/media/xinkUUmE1ww5mbOd8E/giphy.gif',
  'assets/photo 6.jpeg',
];

let initialized = false;

// No button
noBtn.addEventListener('click', () => {
    const padding = 20;

    if (!initialized) {
        const rect = noBtn.getBoundingClientRect();
        noBtn.style.position = 'fixed';
        noBtn.style.left = rect.left + 'px';
        noBtn.style.top = rect.top + 'px';
        initialized = true;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';

    noCount++;
    noBtn.textContent = noTexts[noCount % noTexts.length];
    img.src = images[noCount % images.length];

    yesBtn.style.transform = `scale(${1 + noCount * 0.25})`;
});

// Yes button
yesBtn.addEventListener('click', () => {
    title.textContent = 'KURWAAA!  KOCHAM CIĘ 💖🥰';

    noBtn.remove();
    yesBtn.style.transform = 'scale(1)';

    // массив фото + гифок
    const finalImages = [
        'assets/photo 3.jpeg',
        'https://media.giphy.com/media/85NbGstFaElEO1Wusd/giphy.gif',
        'assets/photo 2.jpeg'
    ];

    // очищаем старую картинку
    img.remove();

    // контейнер
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.gap = '15px';
    container.style.marginBottom = '20px';

    finalImages.forEach(src => {
        const im = document.createElement('img');
        im.src = src;
        im.style.width = '110px';
        im.style.height = '110px';
        im.style.objectFit = 'cover';
        im.style.borderRadius = '20px';
        container.appendChild(im);
    });

    document.querySelector('.images').appendChild(container);

    for (let i = 0; i < 30; i++) createHeart();
});


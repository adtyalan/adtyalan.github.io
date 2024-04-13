const tombolKetuk = document.getElementById('tombolKetuk');
const aside = document.getElementById('aboutMe');

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  const aboutMeTitle = document.getElementById('judulWeb');

  // Sembunyikan `aside` pada layar desktop
  if (screenWidth >= 1200) {
    aside.style.display = 'none';
    aboutMeTitle.innerText = '';
  }

  // Tampilkan `aside` pada layar mobile (max 768px)
  if (screenWidth <= 768) {
    aside.style.display = 'flex';
    aboutMeTitle.innerText = 'Get in touch with me!';
  }

  // Tampilkan `aside` pada layar tablet (768px - 1200px)
  if (screenWidth > 768 && screenWidth < 1200) {
    aside.style.display = 'flex'; // Sesuaikan tata letak sesuai kebutuhan
    aboutMeTitle.innerText = 'Get in touch with me!';
  }
}

function toggleAsideAndScroll() {
  //seharusnya none ? flex : none; supaya muncul atau sembunyi
  aside.style.display = aside.style.display === 'none' ? 'flex' : 'flex';

  // Scroll ke elemen `aside` dengan animasi halus
  if (aside.style.display === 'flex') {
    window.scrollTo({
      behavior: 'smooth',
      top: aside.offsetTop,
    });
  }
}

//fungsi dibawah belum bekerja sesuai
function scrollToAside() {

  // Scroll ke elemen `aside` dengan animasi halus
  window.scrollTo({
    behavior: 'smooth',
    top: aside.offsetTop,
  });
}

// Atur event listener pada tombol
if (window.innerWidth <= 1200 && window.innerWidth >= 768) {
  tombolKetuk.addEventListener('click', scrollToAside);
} else {
  tombolKetuk.addEventListener('click', toggleAsideAndScroll);
}

// Jalankan fungsi saat halaman dimuat dan saat mengubah ukuran layar
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

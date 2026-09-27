const header = document.querySelector('[data-header]');
const toast = document.querySelector('[data-toast]');
const storyDialog = document.querySelector('[data-story-dialog]');

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2800);
};

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40), { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal, .route-art').forEach((element) => revealObserver.observe(element));

const shareData = {
  title: 'ปั่นกันใหญ่ — ทุกกิโลเมตร มีเรื่องของเรา',
  text: 'มาดูแอปที่เก็บทุกความทรงจำจากทริปจักรยานของพ่อกับลูกไว้ให้ทั้งครอบครัว 🚴',
  url: window.location.href
};

document.querySelectorAll('.js-share').forEach((button) => button.addEventListener('click', async () => {
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(window.location.href);
      showToast('คัดลอกลิงก์แล้ว ส่งให้คนที่บ้านได้เลย');
    }
  } catch (error) {
    if (error.name !== 'AbortError') showToast('ยังแชร์ไม่ได้ ลองอีกครั้งนะ');
  }
}));

document.querySelector('.js-copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast('คัดลอกลิงก์แล้ว ส่งให้คนที่บ้านได้เลย');
  } catch { showToast('คัดลอกไม่ได้ กรุณาคัดลอกจากแถบที่อยู่'); }
});

document.querySelector('.js-line').addEventListener('click', () => {
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}`;
  window.open(lineUrl, '_blank', 'noopener,noreferrer');
});

document.querySelector('.js-watch').addEventListener('click', () => storyDialog.showModal());
document.querySelector('.dialog-close').addEventListener('click', () => storyDialog.close());
document.querySelector('.dialog-action').addEventListener('click', () => storyDialog.close());
storyDialog.addEventListener('click', (event) => { if (event.target === storyDialog) storyDialog.close(); });

document.querySelector('[data-notify-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get('email');
  localStorage.setItem('pun-kun-yai-notify-email', email);
  event.currentTarget.reset();
  showToast('รับทราบแล้ว—ไว้เจอกันวันเปิดตัวนะ ✦');
});

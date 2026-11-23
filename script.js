const header = document.querySelector('[data-header]');
const toast = document.querySelector('[data-toast]');
const storyDialog = document.querySelector('[data-story-dialog]');

const isEnglish = (document.documentElement.lang || '').toLowerCase().startsWith('en');
const copy = isEnglish
  ? {
      shareTitle: 'PunKunYai — every kilometre has a story',
      shareText: 'An app that keeps the memories from bike rides with our kids, for the whole family to enjoy 🚴',
      copied: 'Link copied. Send it to the family!',
      shareFailed: "Couldn't share just now. Please try again.",
      copyFailed: "Couldn't copy. Please copy the link from the address bar."
    }
  : {
      shareTitle: 'ปั่นกันใหญ่ — ทุกกิโลเมตร มีเรื่องของเรา',
      shareText: 'มาดูแอปที่เก็บทุกความทรงจำจากทริปจักรยานของพ่อกับลูกไว้ให้ทั้งครอบครัว 🚴',
      copied: 'คัดลอกลิงก์แล้ว ส่งให้คนที่บ้านได้เลย',
      shareFailed: 'ยังแชร์ไม่ได้ ลองอีกครั้งนะ',
      copyFailed: 'คัดลอกไม่ได้ กรุณาคัดลอกจากแถบที่อยู่'
    };

// Share the clean canonical URL (no #fragment / query) when the page declares one.
const pageUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;

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

const shareData = { title: copy.shareTitle, text: copy.shareText, url: pageUrl };

document.querySelectorAll('.js-share').forEach((button) => button.addEventListener('click', async () => {
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(pageUrl);
      showToast(copy.copied);
    }
  } catch (error) {
    if (error.name !== 'AbortError') showToast(copy.shareFailed);
  }
}));

document.querySelector('.js-copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pageUrl);
    showToast(copy.copied);
  } catch { showToast(copy.copyFailed); }
});

document.querySelector('.js-line').addEventListener('click', () => {
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(pageUrl)}`;
  window.open(lineUrl, '_blank', 'noopener,noreferrer');
});

document.querySelector('.js-watch').addEventListener('click', () => storyDialog.showModal());
document.querySelector('.dialog-close').addEventListener('click', () => storyDialog.close());
document.querySelector('.dialog-action').addEventListener('click', () => storyDialog.close());
storyDialog.addEventListener('click', (event) => { if (event.target === storyDialog) storyDialog.close(); });

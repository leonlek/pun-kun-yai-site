// Header border on scroll, reveal-on-scroll, and the "send to family" share buttons.
(function () {
  document.documentElement.classList.add("js");
  var en = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var copy = en
    ? { title: "PunKunYai — every little ride, remembered",
        text: "An iPhone app that turns our kids' bike rides into memories for the whole family 🚴",
        copied: "Link copied — send it to the family!", failed: "Couldn't share just now. Please try again." }
    : { title: "ปั่นกันใหญ่ — ทุกทริปของลูก เก็บไว้ครบทุกโมเมนต์",
        text: "แอปที่เก็บทุกทริปจักรยานของลูกไว้เป็นความทรงจำให้ทั้งบ้าน 🚴",
        copied: "คัดลอกลิงก์แล้ว ส่งให้คนที่บ้านได้เลย", failed: "ยังแชร์ไม่ได้ ลองอีกครั้งนะ" };
  var canonical = document.querySelector('link[rel="canonical"]');
  var url = canonical ? canonical.href : location.href.split("#")[0];

  var header = document.querySelector("[data-header]");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  var toast = document.querySelector("[data-toast]");
  var timer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove("show"); }, 2600);
  }

  document.querySelectorAll("[data-share]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (navigator.share) {
        navigator.share({ title: copy.title, text: copy.text, url: url }).catch(function (e) {
          if (e && e.name !== "AbortError") showToast(copy.failed);
        });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () { showToast(copy.copied); }, function () { showToast(copy.failed); });
      }
    });
  });

  document.querySelectorAll("[data-line]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.open("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(url), "_blank", "noopener,noreferrer");
    });
  });
})();

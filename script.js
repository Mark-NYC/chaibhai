(() => {
  const chbAcuityModal = document.querySelector("#acuity-booking");
  const chbAcuityOpeners = document.querySelectorAll("[data-acuity-open]");
  const chbAcuityClosers = document.querySelectorAll("[data-acuity-close]");

  function openChbAcuityModal(event) {
    if (event) event.preventDefault();
    if (!chbAcuityModal) return;
    chbAcuityModal.classList.add("is-open");
    chbAcuityModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("chb-modal-open");
    document.documentElement.classList.add("chb-modal-open");
  }

  function closeChbAcuityModal() {
    if (!chbAcuityModal) return;
    chbAcuityModal.classList.remove("is-open");
    chbAcuityModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("chb-modal-open");
    document.documentElement.classList.remove("chb-modal-open");
  }

  chbAcuityOpeners.forEach((button) => button.addEventListener("click", openChbAcuityModal));
  chbAcuityClosers.forEach((button) => button.addEventListener("click", closeChbAcuityModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeChbAcuityModal();
  });

  const chbMosaicSlider = document.querySelector("#chbMosaicSlider");
  const chbMosaicDots = document.querySelectorAll(".chb-mosaic-dots button");

  if (chbMosaicSlider && chbMosaicDots.length) {
    chbMosaicDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const slideIndex = Number(dot.dataset.slide);
        const slideWidth = chbMosaicSlider.clientWidth;

        chbMosaicSlider.scrollTo({
          left: slideIndex * slideWidth,
          behavior: "smooth"
        });
      });
    });

    chbMosaicSlider.addEventListener("scroll", () => {
      const slideWidth = chbMosaicSlider.clientWidth;
      const activeIndex = Math.round(chbMosaicSlider.scrollLeft / slideWidth);

      chbMosaicDots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
      });
    }, { passive: true });
  }

  const chbMobileBookingBar = document.querySelector(".chb-mobile-booking-bar");
  const chbMobileBookingTrigger = document.querySelector("#queens");

  function updateChbMobileBookingBar() {
    if (!chbMobileBookingBar || !chbMobileBookingTrigger) return;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const triggerTop = chbMobileBookingTrigger.getBoundingClientRect().top;
    const shouldShow = isMobile && triggerTop <= 24;

    chbMobileBookingBar.classList.toggle("is-visible", shouldShow);
  }

  updateChbMobileBookingBar();
  window.addEventListener("scroll", updateChbMobileBookingBar, { passive: true });
  window.addEventListener("resize", updateChbMobileBookingBar);
})();

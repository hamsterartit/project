document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('[data-next-btn]');
  const prevBtn = document.querySelector('[data-prev-btn]');
  const stepOne = document.querySelector('[data-form-step-1]');
  const stepTwo = document.querySelector('[data-form-step-2]');

  nextBtn.addEventListener('click', () => {
    stepTwo.removeAttribute('hidden');
    stepOne.setAttribute('hidden', '');
  });

  prevBtn.addEventListener('click', () => {
    stepOne.removeAttribute('hidden');
    stepTwo.setAttribute('hidden', '');
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const newAddressBtn = document.querySelector('.newAddressBtn');
    const newAddressForm = document.querySelector('.newAddressForm');
    const completedBtn = document.querySelector('.compeleted'); // note: spelled 'compeleted' in HTML
    const returnBtn = document.querySelector('.returnBtn');
  
    if (!newAddressBtn || !newAddressForm) return;
  
    const showForm = () => {
      newAddressForm.classList.remove('hidden');
      newAddressForm.classList.add('block');
      newAddressBtn.classList.add('hidden');
    };
  
    const hideForm = () => {
      newAddressForm.classList.add('hidden');
      newAddressForm.classList.remove('block');
      newAddressBtn.classList.remove('hidden');
    };
  
    newAddressBtn.addEventListener('click', (e) => {
      e.preventDefault(); // anchor wrapper
      showForm();
    });
  
    completedBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      hideForm();
    });
  
    returnBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      hideForm();
    });
  });
document.addEventListener('DOMContentLoaded', () => {
  // Get all radio buttons with name="state"
  const tabButtons = document.querySelectorAll('input[name="state"]');
  
  // Get all content sections
  const reviewSection = document.querySelector('.reviewSection');
  const specificationSection = document.querySelector('.specificationSection');
  const commentSection = document.querySelector('.commentSection');
  const catalogSection = document.querySelector('.catalogSection');
  const bestPriceSection = document.querySelector('.bestPriceSection');
  const accessoriesSection = document.querySelector('.accessoriesSection');
  
  // Function to hide all sections
  const hideAllSections = () => {
    const sections = [reviewSection, specificationSection, commentSection, bestPriceSection];
    sections.forEach(section => {
      if (section) {
        section.classList.add('hidden');
        section.classList.remove('block');
      }
    });
  };
  
  // Function to show a specific section
  const showSection = (section) => {
    if (section) {
      section.classList.remove('hidden');
      section.classList.add('block');
    }
  };
  
  // Add event listeners to all tab buttons
  tabButtons.forEach((button, index) => {
    button.addEventListener('change', () => {
      if (button.checked) {
        hideAllSections();
        
        // Show the corresponding section based on the button's class
        if (button.classList.contains('reviewBtn')) {
          showSection(reviewSection);
        } else if (button.classList.contains('specification')) {
          showSection(specificationSection);
        } else if (button.classList.contains('commentBtn')) {
          showSection(commentSection);
        } else if (button.classList.contains('bestPriceBtn')) {
          showSection(bestPriceSection);
        } else {
          // For buttons without specific classes, show based on index
          const sections = [reviewSection, specificationSection, commentSection, catalogSection, bestPriceSection, accessoriesSection];
          if (sections[index]) {
            showSection(sections[index]);
          }
        }
      }
    });
  });
  
  // Initialize: show the first section (review) by default
  hideAllSections();
  showSection(reviewSection);
});

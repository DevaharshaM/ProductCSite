document.addEventListener('DOMContentLoaded', () => {
  const onboardingForm = document.getElementById('onboardingForm');
  const aboutInput = document.getElementById('aboutInput');
  const interestsInput = document.getElementById('interestsInput');
  const resumeUpload = document.getElementById('resumeUpload');
  const submitBtn = document.getElementById('submitBtn');
  const fileNameDisplay = document.getElementById('fileName');

  // Evaluates macro form conditions across input fields
  function evaluateFormState() {
    const aboutValue = aboutInput.value.trim();
    const interestsValue = interestsInput.value.trim();

    // Check input status criteria
    const inputOneFilled = aboutValue.length > 0 || (resumeUpload.files && resumeUpload.files.length > 0);
    const inputTwoFilled = interestsValue.length > 0;

    // MODIFIED: Button unlocks strictly when BOTH input slots contain text metrics
    if (inputOneFilled && inputTwoFilled) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'true');
    }
  }

  // Process chosen file vectors and display strict textual conditions
  function handleFileChange() {
    if (resumeUpload.files && resumeUpload.files.length > 0) {
      const file = resumeUpload.files[0];
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      
      // Catches wrong formats instantly since native system mask won't hide files anymore
      if (fileExtension !== 'pdf' && fileExtension !== 'docx') {
        alert("The file format is only pdf or docx.");
        resumeUpload.value = ''; // Safely clear current configuration buffers
        fileNameDisplay.style.display = "none";
        evaluateFormState(); // Refresh submit state properties
        return;
      }

      // MODIFIED: Displays static "Attached" phrase instead of tracking name metadata strings
      fileNameDisplay.textContent = "Attached";
      fileNameDisplay.style.display = "block";
    } else {
      fileNameDisplay.style.display = "none";
    }

    evaluateFormState();
  }

  // Submits and captures internal layout state triggers
  function handleFormSubmit(e) {
    e.preventDefault();
    
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `In Progress... <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="spin-icon"><path d="M2 7a5 5 0 0 1 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;

    setTimeout(() => {
      alert("In Progress");
    }, 50);
  }

  // Bind decoupled event listeners
  if (aboutInput) {
    aboutInput.addEventListener('input', evaluateFormState);
  }

  if (interestsInput) {
    interestsInput.addEventListener('input', evaluateFormState);
  }

  if (resumeUpload) {
    resumeUpload.addEventListener('change', handleFileChange);
  }

  if (onboardingForm) {
    onboardingForm.addEventListener('submit', handleFormSubmit);
  }
});

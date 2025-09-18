const statusRadios = document.querySelectorAll('input[name="status"]');
const completedStatus = document.querySelector(".completedStatus");
const processStatus = document.querySelector(".processStatus");
const canceledStatus = document.querySelector(".canceledStatus");

const [completedRadio, processingRadio, canceledRadio] = statusRadios;

const updateView = () => {
  const isCompleted = completedRadio?.checked;
  const isProcessing = processingRadio?.checked;
  const isCanceled = canceledRadio?.checked;

  completedStatus.classList.toggle("hidden", !isCompleted);
  completedStatus.classList.toggle("block", !!isCompleted);

  processStatus.classList.toggle("hidden", !isProcessing);
  processStatus.classList.toggle("block", !!isProcessing);

  canceledStatus.classList.toggle("hidden", !isCanceled);
  canceledStatus.classList.toggle("block", !!isCanceled);
};

statusRadios.forEach((radio) => {
  radio.addEventListener("change", updateView);
});

updateView();

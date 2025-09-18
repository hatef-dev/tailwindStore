document.addEventListener("DOMContentLoaded", () => {
  const editSection = document.querySelector(".editSection");
  const profile = document.querySelector(".profile");
  const editForm = document.querySelector(".editForm");
  const editBtn = document.querySelector(".editBtn");
  const closeEditBtn = document.querySelector(".closeEditBtn");
  const editComplete = document.querySelector(".EditComplete"); // note the capital E

  const showEdit = () => {
    profile?.classList.add("hidden");
    editForm?.classList.remove("hidden");
    editBtn?.classList.add("hidden");
    closeEditBtn?.classList.remove("hidden");
    editSection?.classList.remove("pointer-events-none");
  };

  const hideEdit = () => {
    editSection?.classList.remove("pointer-events-none");
    profile?.classList.remove("hidden");
    editForm?.classList.add("hidden");
    editBtn?.classList.remove("hidden");
    closeEditBtn?.classList.add("hidden");
  };

  editBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    showEdit();
  });

  closeEditBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    hideEdit();
  });

  editComplete?.addEventListener("click", (e) => {
    e.preventDefault();
    hideEdit();
  });
});

const forms = document.querySelectorAll(".delete-form");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Delete Chat?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                form.submit();
            }
        });
    });
});
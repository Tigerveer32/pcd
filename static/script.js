document.addEventListener("DOMContentLoaded", function () {
    var imageInput = document.getElementById("image");
    var previewImage = document.getElementById("previewImage");
    var uploadButton = document.getElementById("uploadButton");

    imageInput.addEventListener("change", function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                previewImage.setAttribute("src", e.target.result);
                previewImage.style.display = "block";
                uploadButton.style.display = "block";
            };

            reader.readAsDataURL(this.files[0]);
        } else {
            previewImage.style.display = "none";
            uploadButton.style.display = "none";
        }
    });
});

function downloadImage(filename) {
    window.location.href = "{{ url_for('download_image') }}?filename=" + filename;
}

function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
    const logoUrl = "https://farhateservices.github.io/fesa/logo-head-black.png";

    function createImage(src, alt) {
        const image = new Image();
        image.src = src;
        image.alt = alt;
        return image;
    }

    function showContent() {
        const contentDiv = document.createElement("div");
        contentDiv.style.display = "block";
        contentDiv.appendChild(createImage(logoUrl, "Logo"));

        document.body.innerHTML = "";
        document.body.appendChild(contentDiv);
    }

    function showLoader() {
        const loaderDiv = document.createElement("div");
        loaderDiv.style.textAlign = "center";
        loaderDiv.appendChild(createImage(logoUrl, "Logo"));
        loaderDiv.innerHTML += `
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            <br>Please wait...
            <i class="fa-solid fa-hourglass-half fa-spin"></i>
            
        `;

        document.body.innerHTML = "";
        document.body.appendChild(loaderDiv);
    }

    function showError() {
        const errorDiv = document.createElement("div");
        errorDiv.style.textAlign = "center";
        errorDiv.innerHTML += `
            <i class="fa-solid fa-circle-exclamation fa-shake"></i>
            <br>Website could not be loaded.
            <br>Contact owner at <a href="mailto:farhateservices.in@gmail.com">farhateservices.in@gmail.com</a>
        `;

        document.body.innerHTML = "";
        document.body.appendChild(errorDiv);
    }

    showLoader(); // Initial loading state

    // Simulate loading completion after a delay
    setTimeout(function () {
        // Replace this with actual loading completion code
        showContent(); // Show content when fully loaded
    }, 3000); // Change the delay time as needed
});

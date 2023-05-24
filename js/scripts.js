document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {

        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// DOMContentLoaded  end

// JavaScript code to hide the preloader after page load
window.addEventListener('load', () => {
    AOS.init();

    const hiddenField = document.getElementById('page');
    const hiddenValue = hiddenField.value;
    const buttons = document.querySelectorAll('.btnBuyNow');

    const preloader = document.getElementById('preloader');
    setTimeout(() => {

        preloader.classList.add('hide-preloader');

            setTimeout(() => {
                if(hiddenValue == 'Home') {
                    let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
                        keyboard: false
                    });
                    myModal.show();
                }
            }, 1000);

    }, 1000);

    // Custom JavaScript code to show dropdown on hover and keep it open
    const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
    const dropdownMenu = document.querySelectorAll('.dropdown-menu');

    dropdownToggle.forEach((toggle, index) => {
        toggle.addEventListener('mouseover', () => {
            dropdownMenu[index].classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
        });

        dropdownMenu[index].addEventListener('mouseover', () => {
            dropdownMenu[index].classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
        });

        toggle.addEventListener('mouseout', () => {
            dropdownMenu[index].classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        });

        dropdownMenu[index].addEventListener('mouseout', () => {
            dropdownMenu[index].classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    if(hiddenValue == 'Home') {
        // Get a reference to all elements with the class name 'myButton'

        // Loop through the buttons and add a click event listener to each
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                let myModal = new bootstrap.Modal(document.getElementById('myModalHome'), {
                    keyboard: false
                });
                myModal.show();
            });
        });

        // Attach a click event listener to each button
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Get the nearest h1 element
                const h1Element = button.previousElementSibling;
                // Get the value of the nearest h1 element
                const h1Value = h1Element.textContent;

                const parentElement = button.parentElement;
                // Find the nearest h3 element within the parent element
                const h3Element = parentElement.querySelector('h3');
                // Get the value of the nearest h3 element
                const h3Value = h3Element.textContent;

                console.log('h3Value', h3Value);

                // Display the value
                console.log(h1Value);// Get the price element
                const priceElement = document.querySelector('.price');
                const modalTitle    = document.querySelector('.modal-title-product');

                // Update the price element with the value
                priceElement.textContent = h1Value;
                modalTitle.textContent = h3Value;


            });
        });
    }

    if(hiddenValue == 'Contact') {
        const name = document.getElementById('fullname');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        // Get a reference to the submit button
        const submitButton = document.querySelector('#submitButton');

        // Add a click event listener to the submit button
        submitButton.addEventListener('click', function () {
            if(name.value == '') {
                alert('Please enter name. Field is required!');
                return false;
            }

            if(email.value == '') {
                alert('Please enter email. Field is required!');
                return false;
            }

            if(phone.value == '') {
                alert('Please enter phone. Field is required!');
                return false;
            }

            if(message.value == '') {
                alert('Please enter message. Field is required!');
                return false;
            }

          window.location.href="submit.html";
        });
    }

    if(hiddenValue == 'Products') {
        // Get a reference to all elements with the class name 'myButton'

        // Loop through the buttons and add a click event listener to each
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
                    keyboard: false
                });
                myModal.show();
            });
        });

        // Attach a click event listener to each button
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Get the nearest h1 element
                const h1Element = button.previousElementSibling;
                // Get the value of the nearest h1 element
                const h1Value = h1Element.textContent;

                const parentElement = button.parentElement;
                // Find the nearest h3 element within the parent element
                const h3Element = parentElement.querySelector('h3');
                // Get the value of the nearest h3 element
                const h3Value = h3Element.textContent;

                // Display the value
                console.log(h1Value);// Get the price element
                const priceElement = document.querySelector('.price');
                const modalTitle    = document.querySelector('.modal-title');

                // Update the price element with the value
                priceElement.textContent = h1Value;
                modalTitle.textContent = h3Value;


            });
        });
    }

    if(hiddenValue == 'Search') {
        // Get the value from the URL query parameter ?search=
        const searchValue = new URLSearchParams(window.location.search).get('search_value');
        alert(searchValue);
        // Set the search value in the search input field
        google.search.cse.element.getElement('search-results').execute(searchValue);
    }

    // Get the search button with the class .btnSearch
    const searchButton = document.querySelector('.btnSearch');

    if (searchButton) {
        // Attach a click event listener to the search button
        searchButton.addEventListener('click', () => {
            window.location.href = 'search.html?search_value=' + document.getElementById('example-search-input').value;
        });
    }

});
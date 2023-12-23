function toggleFontSize() {
    var mainContent = document.querySelector('.main-content');
    var currentSize = window.getComputedStyle(mainContent, null).getPropertyValue('font-size');
    var newSize = (currentSize === '25px') ? '18px' : '25px'; 
    mainContent.style.fontSize = newSize;
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleFontSizeButton = document.getElementById('toggleFontSizeButton');
    toggleFontSizeButton.addEventListener('click', toggleFontSize);
});

function toggleMenuVisibility() {
    var nav = document.querySelector('#header');
    nav.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleMenuButton = document.getElementById('toggleMenuButton');
    toggleMenuButton.addEventListener('click', toggleMenuVisibility);
});

function toggleTableVisibility() {
    var table = document.querySelector('.table');

    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'flex';
    } else {
        table.style.display = 'none';
    }
}

document.getElementById('toggleTableButton').addEventListener('click', toggleTableVisibility);

function changeWebsiteColor() {
    var newColor = prompt('Enter a color (e.g., red, #00ff00):');
    document.body.style.backgroundColor = newColor;
}

document.getElementById('changeColorButton').addEventListener('click', changeWebsiteColor);


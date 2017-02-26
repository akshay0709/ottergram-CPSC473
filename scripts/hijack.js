var LINK_SELECTOR = '[href]';

function addClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function initializeHijack() {
    'use strict';
    var links = document.querySelectorAll(LINK_SELECTOR);
    var linksArray = [].slice.call(links);
    linksArray.forEach(addClickHandler);
}

initializeHijack();

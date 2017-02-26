var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var TINY_EFFECT_CLASS = 'is-tiny';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;
var KEY_1 = 49;
var KEY_2 = 50;
var KEY_3 = 51;
var KEY_4 = 52;
var KEY_5 = 53;
//var KEY_6 = 54;
//var KEY_7 = 55;
//var KEY_8 = 56;
//var KEY_9 = 57;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        //console.log(event.keyCode);
        var thumbnails = getThumbnailsArray();
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        } else if (event.keyCode === KEY_1) {
            showDetails();
            setDetailsFromThumb(thumbnails[0]);
        } else if (event.keyCode === KEY_2) {
            showDetails();
            setDetailsFromThumb(thumbnails[1]);
        } else if (event.keyCode === KEY_3) {
            showDetails();
            setDetailsFromThumb(thumbnails[2]);
        } else if (event.keyCode === KEY_4) {
            showDetails();
            setDetailsFromThumb(thumbnails[3]);
        } else if (event.keyCode === KEY_5) {
            showDetails();
            setDetailsFromThumb(thumbnails[4]);
        }
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();

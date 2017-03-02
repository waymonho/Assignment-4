function disableLink(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}
var linkArray = [].slice.call(document.querySelectorAll('a'));
linkArray.forEach(disableLink);

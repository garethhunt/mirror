(function () {
    function init () {
        window.navigator.mediaDevices.getUserMedia({
            video: true
        }).then(function (stream) {
            const video = document.getElementById('mirror');
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            }
        });
    }

    window.addEventListener('load', init);
})();
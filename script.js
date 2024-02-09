document.addEventListener('DOMContentLoaded', function () {
        const images = document.querySelectorAll("conseils img");
        let currentIndex = 0;

        function showImage(Index) {
            images.forEach((image, i) => {
                if (i === Index) {
                    image.className.add('active');
                }
                else {
                    image.className.remove('active');
                }
            });
        };
        
        function imageTransition() {
            setInterval (() => {
                currentIndex = (currentIndex + Index) % images.length;
                showImage(currentIndex);
            }, 5000);
        }
        
        showImage(currentIndex);
        imageTransition();
})

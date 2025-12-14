// Image Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementById('modalClose');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Select all zoomable images and convert to array
    const zoomableImages = Array.from(document.querySelectorAll('.zoomable'));
    let currentIndex = 0;

    // Function to show image at specific index
    const showImage = (index) => {
        if (index < 0) index = zoomableImages.length - 1; // Loop to last
        if (index >= zoomableImages.length) index = 0; // Loop to first
        
        currentIndex = index;
        const img = zoomableImages[currentIndex];
        
        modalImg.src = img.src;
    };

    // Open modal when an image is clicked
    zoomableImages.forEach((img, index) => {
        img.addEventListener('click', (e) => {
            // e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
            
            showImage(index); // Use the function to show the image
        });
    });

    // Navigation Buttons
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

    // Close modal function
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    };

    // Close logic
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        }
    });

});
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
    // Cheat Sheet Carousel Logic
    const track = document.querySelector('.cheatsheets_track');
    const prevButton = document.querySelector('.cheat_prev');
    const nextButton = document.querySelector('.cheat_next');
    
    // Only run if elements exist (in case page structure changes)
    if (track && prevButton && nextButton) {
        let currentIndex = 0;
        
        const getItemsToShow = () => {
             if (window.innerWidth <= 768) return 1;
             if (window.innerWidth <= 1024) return 2;
             return 3;
        };
        
        const updateCarousel = () => {
             const itemsToShow = getItemsToShow();
             const itemWidthPercentage = 100 / itemsToShow; 
             // Logic: We move by item width + gap?
             // Actually, since we used flex-basis with calculation, we can just translate by percentage.
             // But we used gap: 2vw.
             // Moving by 100 / itemsToShow % might be close enough IF the container accounts for it, 
             // but with gap it's tricky.
             // EASIER WAY: Get the width of the first item + gap.
             const item = track.children[0];
             // The width of one 'slide' is item width + column gap.
             const style = window.getComputedStyle(track);
             const gap = parseFloat(style.columnGap) || 0;
             const moveAmount = item.offsetWidth + gap;
             
             track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
             
             // Check boundaries
             const totalItems = track.children.length;
             // Disable buttons if at end? Or loop?
             // Let's loop for premium feel? Or just stop.
             // Stop is safer.
             if (currentIndex <= 0) {
                 prevButton.style.opacity = '0.5';
                 prevButton.style.pointerEvents = 'none';
             } else {
                 prevButton.style.opacity = '1';
                 prevButton.style.pointerEvents = 'auto';
             }
             
             if (currentIndex >= totalItems - itemsToShow) {
                  nextButton.style.opacity = '0.5';
                  nextButton.style.pointerEvents = 'none';
             } else {
                  nextButton.style.opacity = '1';
                  nextButton.style.pointerEvents = 'auto';
             }
        };

        nextButton.addEventListener('click', () => {
             const itemsToShow = getItemsToShow();
             const totalItems = track.children.length;
             if (currentIndex < totalItems - itemsToShow) {
                 currentIndex++;
                 updateCarousel();
             }
        });

        prevButton.addEventListener('click', () => {
             if (currentIndex > 0) {
                 currentIndex--;
                 updateCarousel();
             }
        });

        // Update on resize
        window.addEventListener('resize', () => {
             // Reset to 0 or try to maintain?
             // Resetting is safer to prevent misalignment
             currentIndex = 0;
             updateCarousel();
        });
        
        // Initial run
        updateCarousel();
    }
});
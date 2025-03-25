document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded successfully!");

    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    const authScreen = document.getElementById('auth-screen');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        authScreen.classList.remove('hidden');
    }, 3000);  // Splash screen duration

    // Authentication System
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Sign-in form submitted!");
            
            // Simulate authentication (Replace with actual login validation)
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            
            if (email && password) {  // Basic validation
                document.getElementById('auth-screen').classList.add('hidden');
                document.getElementById('map-screen').classList.remove('hidden');
            } else {
                alert("Please enter valid credentials.");
            }
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Sign-up form submitted!");

            // Simulate registration (Replace with actual backend logic)
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('map-screen').classList.remove('hidden');
        });
    }

    // Sidebar Controls
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');

    if (openSidebarBtn && closeSidebarBtn) {
        openSidebarBtn.addEventListener('click', () => sidebar.classList.add('open'));
        closeSidebarBtn.addEventListener('click', () => sidebar.classList.remove('open'));
    }

    // Map Grid Generation
    const gridContainer = document.getElementById('grid-container');
    if (gridContainer) {
        function generateGrid(rows, cols) {
            for (let i = 0; i < rows * cols; i++) {
                const gridCell = document.createElement('div');
                gridCell.classList.add('grid-cell');
                gridCell.dataset.index = i;
                gridContainer.appendChild(gridCell);
            }
        }
        generateGrid(8, 5);  // Creating 8x5 grid
    }

    // Explore Button Logic
    const exploreBtn = document.getElementById('btn-explore');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('map-screen').classList.add('hidden');
            document.getElementById('categories-screen').classList.remove('hidden');
        });
    }

    // Back Button Logic
    const backToMapBtn = document.getElementById('back-to-map');
    if (backToMapBtn) {
        backToMapBtn.addEventListener('click', () => {
            document.getElementById('categories-screen').classList.add('hidden');
            document.getElementById('map-screen').classList.remove('hidden');
        });
    }

    // Category Click to Show Places
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            document.getElementById('categories-screen').classList.add('hidden');
            document.getElementById('place-details-screen').classList.remove('hidden');
        });
    });

    // Back to Categories from Place Details
    const backToCategoriesBtn = document.getElementById('back-to-categories');
    if (backToCategoriesBtn) {
        backToCategoriesBtn.addEventListener('click', () => {
            document.getElementById('place-details-screen').classList.add('hidden');
            document.getElementById('categories-screen').classList.remove('hidden');
        });
    }

    // Check-in Logic
    const checkInBtn = document.getElementById('btn-visit');
    const checkInModal = document.getElementById('checkin-modal');
    const pointsModal = document.getElementById('points-modal');

    if (checkInBtn) {
        checkInBtn.addEventListener('click', () => {
            checkInModal.classList.remove('hidden');
            setTimeout(() => {
                checkInModal.classList.add('hidden');
                pointsModal.classList.remove('hidden');
            }, 3000);  // Fake location verification delay
        });
    }

    // Close Achievement Modal
    const closeAchievementBtn = document.getElementById('close-achievement');
    if (closeAchievementBtn) {
        closeAchievementBtn.addEventListener('click', () => pointsModal.classList.add('hidden'));
    }

    // Points and League Update System
    let points = 2450;
    const pointsDisplay = document.getElementById('user-points');
    const leagueDisplay = document.getElementById('user-league');

    function updatePoints(newPoints) {
        points += newPoints;
        pointsDisplay.textContent = points;

        if (points >= 5000) {
            leagueDisplay.textContent = 'Diamond';
        } else if (points >= 4000) {
            leagueDisplay.textContent = 'Platinum';
        } else if (points >= 3000) {
            leagueDisplay.textContent = 'Gold';
        } else if (points >= 2000) {
            leagueDisplay.textContent = 'Silver';
        } else {
            leagueDisplay.textContent = 'Bronze';
        }
    }

    // Award points when visiting a place
    document.querySelectorAll('.place-card').forEach(card => {
        card.addEventListener('click', () => {
            const pointsEarned = parseInt(card.querySelector('.place-points').textContent.replace('+', '').replace(' pts', ''));
            updatePoints(pointsEarned);
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            document.querySelectorAll('.place-card').forEach(card => {
                const placeName = card.querySelector('h5').textContent.toLowerCase();
                card.style.display = placeName.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // Achievement Badge Animation Trigger
    const achievementBadge = document.querySelector('.achievement-badge');
    if (achievementBadge) {
        achievementBadge.addEventListener('mouseenter', () => achievementBadge.classList.add('pulse'));
        achievementBadge.addEventListener('mouseleave', () => achievementBadge.classList.remove('pulse'));
    }

    // Logout Logic
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            document.getElementById('map-screen').classList.add('hidden');
            document.getElementById('auth-screen').classList.remove('hidden');
        });
    }
});

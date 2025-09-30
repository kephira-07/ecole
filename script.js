
        // Menu mobile
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });

        // Tabs pour les formations
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons et contenus
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Ajouter la classe active au bouton cliqué
                btn.classList.add('active');
                
                // Afficher le contenu correspondant
                const tabId = btn.getAttribute('data-tab') + '-content';
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Tabs pour la vie scolaire
        const lifeTabs = document.querySelectorAll('.life-tab');
        const lifeContents = document.querySelectorAll('.life-content');
        
        lifeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons et contenus
                lifeTabs.forEach(t => t.classList.remove('active'));
                lifeContents.forEach(c => c.classList.remove('active'));
                
                // Ajouter la classe active au bouton cliqué
                tab.classList.add('active');
                
                // Afficher le contenu correspondant
                const lifeId = tab.getAttribute('data-life') + '-content';
                document.getElementById(lifeId).classList.add('active');
            });
        });

        // Formulaires
        document.getElementById('preRegistrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre pré-inscription ! Nous vous contacterons dans les plus brefs délais.');
            this.reset();
        });

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Votre message a été envoyé avec succès. Nous vous répondrons rapidement.');
            this.reset();
        });

        // Animation au défilement
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'white';
                header.style.backdropFilter = 'none';
            }
        });

        // Navigation fluide
        document.querySelectorAll('nav a, .hero-buttons a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Fermer le menu mobile si ouvert
                    document.querySelector('nav ul').classList.remove('show');
                }
            });
        });
    
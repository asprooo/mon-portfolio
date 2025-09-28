# mon-portfolio
Site portfolio personnel - HTML/CSS/JS
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio - Développeur</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            color: white;
            padding: 60px 0;
            animation: fadeInUp 1s ease-out;
        }

        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 30px;
            margin: 20px 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            backdrop-filter: blur(10px);
            animation: fadeInUp 1s ease-out;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .skill-item {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            transform: translateY(0);
            transition: transform 0.3s ease;
        }

        .skill-item:hover {
            transform: translateY(-5px);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .project-card {
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            padding: 20px;
            transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .project-card:hover {
            border-color: #667eea;
            transform: scale(1.02);
        }

        .project-card h3 {
            color: #667eea;
            margin-bottom: 10px;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .contact-link {
            display: inline-block;
            padding: 12px 25px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            transition: transform 0.3s ease;
        }

        .contact-link:hover {
            transform: translateY(-3px);
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .stat-item {
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .contact-links {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>👨‍💻 Aspro</h1>
            <p>Développeur Full-Stack | Passionné de Tech | Builder</p>
        </header>

        <div class="card">
            <h2>🚀 À propos de moi</h2>
            <p>Développeur passionné avec 1 an d'expérience sur GitHub. Je crée des applications modernes et contribue à l'écosystème open source. Toujours en apprentissage et prêt à relever de nouveaux défis !</p>
            
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">1</div>
                    <div>Année sur GitHub</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">5+</div>
                    <div>Projets en cours</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">∞</div>
                    <div>Motivation</div>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>💻 Compétences</h2>
            <div class="skills-grid">
                <div class="skill-item">🌐 HTML/CSS</div>
                <div class="skill-item">⚡ JavaScript</div>
                <div class="skill-item">🐍 Python</div>
                <div class="skill-item">⚛️ React</div>
                <div class="skill-item">🎨 UI/UX Design</div>
                <div class="skill-item">🔧 Git/GitHub</div>
            </div>
        </div>

        <div class="card">
            <h2>🎯 Projets</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>📱 Portfolio Personnel</h3>
                    <p>Site web responsive présentant mes compétences et projets. Développé avec HTML, CSS et JavaScript vanilla.</p>
                </div>
                <div class="project-card">
                    <h3>🎮 Jeu JavaScript</h3>
                    <p>Jeu interactif développé en JavaScript pur. Gestion des événements, animations et système de score.</p>
                </div>
                <div class="project-card">
                    <h3>📊 Dashboard Analytics</h3>
                    <p>Interface de visualisation de données avec des graphiques interactifs et des métriques en temps réel.</p>
                </div>
                <div class="project-card">
                    <h3>🤖 Bot Automatisation</h3>
                    <p>Script Python d'automatisation de tâches répétitives avec interface en ligne de commande.</p>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>📬 Contact</h2>
            <div class="contact-links">
                <a href="https://github.com/asprooo" class="contact-link">GitHub</a>
            </div>
        </div>
    </div>

    <script>
        // Animation des cartes au scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.style.animationFillMode = 'both';
                }
            });
        });

        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });

        // Effet de typing sur le titre
        const title = document.querySelector('.header h1');
        const text = title.textContent;
        title.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 500);

        // Compteur animé pour les stats
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 30);
        };

        // Démarrer les animations après un délai
        setTimeout(() => {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers[1].textContent = '0';
            animateCounter(statNumbers[1], 5);
        }, 2000);
    </script>
</body>
</html>

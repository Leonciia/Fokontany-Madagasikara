<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="./index.css">
    <title>Madagasikara | Lisitry ny Faritra</title>
</head>
<body>
    <!-- Contenues de la page -->
    <div class="contenu">
        <!-- Logo -->
        <div class="logo-container">
            <img class="logo-drapeau" src="drapeau.jpg" alt="logo-drapeau-rond">
        </div>
        <div class="logo-container-2">
            <img class="logo-drapeau" src="drapeau.jpg" alt="logo-drapeau-rond">
        </div>
        <div class="titre">
            <span class="titre-span">LISITRY NY FARITRA REHETRA ETO MADAGASIKARA</span>
        </div>
        <div id="bar-recherche">
        <!-- Barre de recherche -->
            <div class="recherche-wrapper">
                <span class="icon">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" id="recherche-input" class="recherche-input" 
                placeholder="Eto raha hitady faritra...">
            </div>
            <!-- Paginations -->
            <div class="pagination">
                <select id="items-par-page">
                    <option value="" disabled>Safidio ny isany lisitra miseho</option>
                    <option value="all">Aseho avokoa ireo lisitra</option>
                    <option value="1012">1012 lisitra isakin'ny pejy</option>
                    <option value="2024">2024 lisitra isakin'ny pejy</option>
                    <option value="4048">4048 lisitra isakin'ny pejy</option>
                    <option value="6096">6096 lisitra isakin'ny pejy</option>
                    <option value="8092">8092 lisitra isakin'ny pejy</option>
                </select>
            </div>
        </div>
        
        <div id="liste-faritra">
           <!-- Données -->
           <div class="liste-faritra" id="tableau-1">
            <strong>N°</strong><strong>1</strong><br>
            <strong>Fokontany :</strong> Ampasina<br>
            <strong>Kaomina :</strong> Andina<br>
            <strong>Distrika :</strong> Ambositra<br>
            <strong>Region :</strong> Amoron'i Mania<br>
            <strong>Province :</strong> Fianarantsoa<br>
        </div>
        </div>
        <!-- Liens preview et next -->
        <div id="prev-next">
            <button id="prev-button">Aloha</button>
            <div id="page-links"></div>
            <button id="next-button">Aoriana</button>
        </div>
    </div>

    <script src="./index.js"></script>
</body>
</html>
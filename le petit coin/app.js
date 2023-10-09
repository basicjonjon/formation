$(document).ready(function () {
    const annonces = [
        {
            titre: "Vélo d'occasion",
            description: "Vélo de course en bon état",
            prix: 200,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Appareil photo",
            description: "Appareil photo numérique avec objectif",
            prix: 300,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Vélo d'occasion",
            description: "Vélo de course en bon état",
            prix: 200,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Appareil photo",
            description: "Appareil photo numérique avec objectif",
            prix: 300,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Vélo d'occasion",
            description: "Vélo de course en bon état",
            prix: 200,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Appareil photo",
            description: "Appareil photo numérique avec objectif",
            prix: 300,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Vélo d'occasion",
            description: "Vélo de course en bon état",
            prix: 200,
            image: "https://via.placeholder.com/200"
        },
        {
            titre: "Appareil photo",
            description: "Appareil photo numérique avec objectif",
            prix: 300,
            image: "https://via.placeholder.com/200"
        },
        // Ajoutez d'autres annonces ici
    ];

    // Fonction pour afficher les annonces
    function afficherAnnonces() {
        let html = '';

        annonces.forEach(annonce => {
            html += `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${annonce.image}" class="card-img-top" alt="${annonce.titre}">
                        <div class="card-body">
                            <h5 class="card-title">${annonce.titre}</h5>
                            <p class="card-text">${annonce.description}</p>
                            <p class="card-text"><strong>${annonce.prix} €</strong></p>
                            <a href="#" class="btn btn-primary">Voir l'annonce</a>
                        </div>
                    </div>
                </div>
            `;
        });

        $('#annonces').html(html);
    }

    // Appel de la fonction pour afficher les annonces
    afficherAnnonces();
});

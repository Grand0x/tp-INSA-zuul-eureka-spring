CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    alcohol_degree FLOAT,
    capacity INT,
    price_ht FLOAT,
    stock INT,
    image VARCHAR(255)
);

INSERT INTO products (id, name, description, alcohol_degree, capacity, price_ht, stock, image) VALUES
(1, 'Pastis 51', 'Un autre pastis emblématique de Marseille, connu pour son goût distinctif d''anis et une touche de réglisse.', 45.0, 750, 20.0, 100, 'img/pastis51.jpg'),
(2, 'Henri Bardouin Pastis', 'Un pastis artisanal qui se distingue par un mélange complexe d''herbes et d''épices, le rendant riche en arômes.', 42.0, 750, 25.0, 80, 'img/henri-bardouin.png'),
(3, 'Pastis Janot', 'Une variété de pastis de Provence qui offre un goût plus doux comparé aux versions plus commerciales.', 40.0, 750, 18.0, 120, 'img/pastis-janot.jpeg'),
(4, 'Pastis Bleu', 'Reconnaissable à sa couleur bleue unique, ce pastis ajoute une touche visuelle à l''apéritif traditionnel.', 40.0, 750, 19.0, 90, 'img/pastis-bleu.jpg'),
(5, 'Le Pastis d''Amélie', 'Fabriqué en petits lots, ce pastis artisanal est renommé pour ses notes florales et herbacées distinctes.', 42.0, 750, 23.0, 70, 'img/pastis-amelie.jpg'),
(6, 'Pastis des Homs', 'Prisé pour son profil aromatique complexe, il est produit dans une petite distillerie avec des méthodes traditionnelles.', 45.0, 750, 24.0, 50, 'img/pastis-homs.jpg'),
(7, 'Pernod Pastis', 'Un des premiers pastis à être commercialisé, Pernod est connu pour son profil de saveur équilibré et sa fidélité aux traditions.', 40.0, 750, 21.0, 110, 'img/pernod.jpg'),
(8, 'Pastis Duval', 'Ce pastis est un peu moins anisé que les autres, offrant une expérience gustative légèrement différente, avec des touches de fenouil.', 38.0, 750, 17.0, 130, 'img/pastis-duval.jpg'),
(9, 'Casanis Pastis', 'Un pastis traditionnel favorisé pour son mélange classique d''herbes et d''anis, offrant une profondeur de saveur.', 45.0, 750, 22.0, 60, 'img/casanis.jpg'),
(10, 'Ricard Pastis de Marseille', 'Le classique apéritif anisé originaire de Marseille, souvent servi avec de l''eau pour un rafraîchissement estival.', 45.0, 750, 22.0, 150, 'img/ricard.jpg');

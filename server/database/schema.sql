create table user (
    id int unsigned primary key auto_increment not null,
    email varchar(255) not null unique,
    password varchar(255) not null
);

create table item (
    id int unsigned primary key auto_increment not null,
    title varchar(255) not null,
    user_id int unsigned not null,
    foreign key (user_id) references user (id)
);

create table film (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255),
    year INT,
    genre VARCHAR(255),
    connection_detail VARCHAR(500),
    image_url VARCHAR(255)
);

INSERT INTO
    film (
        title,
        director,
        year,
        genre,
        connection_detail,
        image_url
    )
VALUES (
        'Les Visiteurs',
        'Jean-Marie Poiré',
        1993,
        'Comédie',
        "Godefroy de Montmirail et son écuyer Jacquouille la Fripouille sont invités à dîner chez les Bouchard, des descendants modernes de la lignée de Godefroy. Pendant le repas, Godefroy mange du poisson avec beaucoup de maladresse, ne connaissant pas les couverts modernes et les manières de table.",
        'https://cdn-s-www.leprogres.fr/images/CA270D48-D36F-4D80-BAFE-06DE7CE96093/NW_raw/une-des-premieres-scenes-du-film-la-destruction-de-la-camionnette-de-la-poste-dr-1459897843.jpg'
    );
-- _____________________________________________ CREATE TABLES ____________________________________________
DROP TABLE IF EXISTS `admin`;

CREATE TABLE
    `admin` (
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(150) NOT NULL,
        `password` VARCHAR(255) NOT NULL
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4;

DROP TABLE IF EXISTS `book`;

CREATE TABLE
    `book` (
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `author` VARCHAR(255) NOT NULL,
        `cover_image` VARCHAR(255) NOT NULL,
        `admin_id` INT DEFAULT NULL,
        CONSTRAINT fk_admin FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE
        SET
            NULL
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4;

    DROP TABLE IF EXISTS `fetched_book`;

CREATE TABLE
    `fetched_book` (
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `author` VARCHAR(255) NOT NULL,
        `date` DATETIME NOT NULL,
        `description` VARCHAR(5000) NOT NULL,
        `cover_image` VARCHAR(255) NOT NULL,
        `is_wished` TINYINT UNSIGNED DEFAULT 0,
        `admin_id` INT DEFAULT NULL,
        CONSTRAINT fk_admin FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE
        SET
            NULL
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4;

-- _____________________________________________ POPULATE TABLES _____________________________________________

-- Create games
INSERT INTO
    `book` (
        `title`,
        `author`,
        `cover_image`,
        `admin_id`
    )
VALUES (
        "Harry Potter à l'école des sorciers",
        'J.K Rowling',
        '../assets/images/hp1.jpg'
        1
    ), (
        "Harry Potter et la Chambre des Secrets",
        'J.K Rowling',
        "../assets/images/hp2.png",
        1
    ), (
        "Harry Potter et le Prisonnier d'Azkaban",
        'J.K Rowling',
        "../assets/images/hp3.jpg",
        1
    ), (
        "Harry Potter et la Coupe de Feu",
        'J.K Rowling',
        "../assets/images/hp4.jpg",
        1
    ), (
        "Harry Potter et l'Ordre du Phénix",
        'J.K Rowling',
        "../assets/images/hp5.jpg",
        1
    ), (
        "Harry Potter et le Prince de Sang-Mêlé",
        'J.K Rowling',
        "../assets/images/hp6.jpg",
        1
    ), (
        "Harry Potter et les Reliques de la Mort",
        'J.K Rowling',
        "../assets/images/hp7.jpg",
        1
    ), (
        "Harry Potter et l'Enfant Maudit",
        'J.K Rowling',
        "../assets/images/hp8.jpg",
        1
    ), (
        "L'appel du Coucou",
        'Robert Galbraith',
        "../assets/images/adcc.png",
        1
    ), (
        "Le Monde de Narnia",
        'C.S Lewis',
        "../assets/images/narnia.png",
        1
    ), (
        "Progresser à pas de géant",
        'Anthony Robbins',
        "../assets/images/papdg.jpg",
        1
    ), (
        'Comment je suis devenue rentière en 4 ans',
        'Elise Franck',
        '../assets/images/rentiere.jpg',
        1
    );
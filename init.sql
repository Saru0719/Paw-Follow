CREATE DATABASE IF NOT EXISTS paw_follow;
use paw_follow;

CREATE TABLE IF NOT EXISTS tbl_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    cellphone VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type_of_pet VARCHAR(255) NOT NULL,
    pet_name VARCHAR(255) NOT NULL,
    date_of_birth VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    size VARCHAR(255) NOT NULL,
    weight INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    idOwner INT NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_health (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_name VARCHAR(255),
    date_h DATE,
    descriptions TEXT,
    idOwner INT NOT NULL
);
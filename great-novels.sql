-- post migration-creation sql file
create database great_novels;
grant all on great_novels.* to 'great_novels_user'@'localhost';
use great_novels;

-- pre migration-creation sql file
create database great_novels;

create user 'great_novels_user'@'localhost' identified with mysql_native_password by 'bookworm';
grant all on great_novels.* to 'great_novels_user'@'localhost';

use great_novels;

create table authors (
id INT auto_increment,
nameFirst VARCHAR(255),
nameLast VARCHAR(255),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
primary key(id)
);

create table novels (
id INT auto_increment,
title VARCHAR(255),
authorId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
primary key(id),
foreign key(authorId) references authors(id)
);

create table genres (
id INT auto_increment,
genre VARCHAR(255),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
primary key(id)
);

create table novelsGenres (
id INT auto_increment,
novelId INT,
genreId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
deletedAt DATETIME,
primary key(id),
foreign key(novelId) references novels(id),
foreign key(genreId) references genres(id)
);

insert into authors (nameFirst, nameLast) values ('Agatha', 'Christie');
insert into authors (nameFirst, nameLast) values ('Alexandre', 'Dumas');
insert into authors (nameFirst, nameLast) values ('Alice', 'Walker');
insert into authors (nameFirst, nameLast) values ('Arthur Conan', 'Doyle');
insert into authors (nameFirst, nameLast) values ('Arthur', 'Miller');
insert into authors (nameFirst, nameLast) values ('Bram', 'Stoker');
insert into authors (nameFirst, nameLast) values ('Charles', 'Dickens');
insert into authors (nameFirst, nameLast) values ('Chinua', 'Achebe');
insert into authors (nameFirst, nameLast) values ('Fyodor', 'Dostoyevsky');
insert into authors (nameFirst, nameLast) values ('George', 'Orwell');
insert into authors (nameFirst, nameLast) values ('H.G.', 'Wells');
insert into authors (nameFirst, nameLast) values ('Leo', 'Tolstoy');
insert into authors (nameFirst, nameLast) values ('Oscar', 'Wilde');
insert into authors (nameFirst, nameLast) values ('Ray', 'Bradbury');
insert into authors (nameFirst, nameLast) values ('Robert Louis', 'Stevenson');

insert into novels (title, authorId) values ('Murder on the Orient Express', 1);
insert into novels (title, authorId) values ('The Three Musketeers', 2);
insert into novels (title, authorId) values ('The Color Purple', 3);
insert into novels (title, authorId) values ('The Hound of the Baskervilles', 4);
insert into novels (title, authorId) values ('The Crucible', 5);
insert into novels (title, authorId) values ('Dracula', 6);
insert into novels (title, authorId) values ('A Tale of Two Cities', 7);
insert into novels (title, authorId) values ('Things Fall Apart', 8);
insert into novels (title, authorId) values ('Crime and Punishment', 9);
insert into novels (title, authorId) values ('Animal Farm', 10);
insert into novels (title, authorId) values ('The Time Machine', 11);
insert into novels (title, authorId) values ('War and Peace', 12);
insert into novels (title, authorId) values ('The Picture of Dorian Gray', 13);
insert into novels (title, authorId) values ('Fahrenheit 451', 14);
insert into novels (title, authorId) values ('The Strange Case of Dr. Jekyll and Mr. Hyde', 15);

insert into genres (genre) values ('Adventure');
insert into genres (genre) values ('African Literature');
insert into genres (genre) values ('Crime');
insert into genres (genre) values ('Drama');
insert into genres (genre) values ('Dystopia');
insert into genres (genre) values ('Fantasy');
insert into genres (genre) values ('Fiction');
insert into genres (genre) values ('French Literature');
insert into genres (genre) values ('Gothic');
insert into genres (genre) values ('Historical Fiction');
insert into genres (genre) values ('Horror');
insert into genres (genre) values ('Mystery');
insert into genres (genre) values ('Plays');
insert into genres (genre) values ('Russian Literature');
insert into genres (genre) values ('Science Fiction');
insert into genres (genre) values ('Thriller');
insert into genres (genre) values ('Time Travel');
insert into genres (genre) values ('War');

insert into novelsGenres (novelId, genreId) values (1, 7);
insert into novelsGenres (novelId, genreId) values (1, 12);
insert into novelsGenres (novelId, genreId) values (2, 1);
insert into novelsGenres (novelId, genreId) values (2, 7);
insert into novelsGenres (novelId, genreId) values (2, 8);
insert into novelsGenres (novelId, genreId) values (2, 10);
insert into novelsGenres (novelId, genreId) values (3, 7);
insert into novelsGenres (novelId, genreId) values (3, 10);
insert into novelsGenres (novelId, genreId) values (4, 3);
insert into novelsGenres (novelId, genreId) values (4, 7);
insert into novelsGenres (novelId, genreId) values (4, 12);
insert into novelsGenres (novelId, genreId) values (4, 16);
insert into novelsGenres (novelId, genreId) values (5, 4);
insert into novelsGenres (novelId, genreId) values (5, 7);
insert into novelsGenres (novelId, genreId) values (5, 10);
insert into novelsGenres (novelId, genreId) values (5, 13);
insert into novelsGenres (novelId, genreId) values (6, 6);
insert into novelsGenres (novelId, genreId) values (6, 7);
insert into novelsGenres (novelId, genreId) values (6, 11);
insert into novelsGenres (novelId, genreId) values (7, 7);
insert into novelsGenres (novelId, genreId) values (7, 10);
insert into novelsGenres (novelId, genreId) values (8, 2);
insert into novelsGenres (novelId, genreId) values (8, 7);
insert into novelsGenres (novelId, genreId) values (8, 10);
insert into novelsGenres (novelId, genreId) values (9, 7);
insert into novelsGenres (novelId, genreId) values (9, 12);
insert into novelsGenres (novelId, genreId) values (9, 14);
insert into novelsGenres (novelId, genreId) values (10, 5);
insert into novelsGenres (novelId, genreId) values (10, 7);
insert into novelsGenres (novelId, genreId) values (10, 15);
insert into novelsGenres (novelId, genreId) values (11, 7);
insert into novelsGenres (novelId, genreId) values (11, 15);
insert into novelsGenres (novelId, genreId) values (11, 17);
insert into novelsGenres (novelId, genreId) values (12, 7);
insert into novelsGenres (novelId, genreId) values (12, 10);
insert into novelsGenres (novelId, genreId) values (12, 14);
insert into novelsGenres (novelId, genreId) values (12, 18);
insert into novelsGenres (novelId, genreId) values (13, 6);
insert into novelsGenres (novelId, genreId) values (13, 7);
insert into novelsGenres (novelId, genreId) values (13, 9);
insert into novelsGenres (novelId, genreId) values (13, 11);
insert into novelsGenres (novelId, genreId) values (14, 5);
insert into novelsGenres (novelId, genreId) values (14, 7);
insert into novelsGenres (novelId, genreId) values (14, 15);
insert into novelsGenres (novelId, genreId) values (15, 7);
insert into novelsGenres (novelId, genreId) values (15, 11);
insert into novelsGenres (novelId, genreId) values (15, 12);
insert into novelsGenres (novelId, genreId) values (15, 15);
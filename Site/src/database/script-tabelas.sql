-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database sanctum;

use sanctum;

create table Mago (
rm int primary key auto_increment,
nome varchar(45),
cargo varchar(30),
senha varchar(45),
mestre int,
rep int, 
check (rep <=10),
foreign key (mestre) references mago(rm)
) auto_increment = 2000; 

create table ReservaLivro (
idReserva int primary key auto_increment,
nomeLivro varchar(30),
tipoMagia varchar(30),
dataReserva char(10),
fkRm int,
foreign key (fkRm) references Mago(rm)
);

insert into mago values (null, 'Kaline', 'Mago Supremo', 'supremo123', null, 10);




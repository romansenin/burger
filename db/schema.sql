drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table(
  id int auto_increment,
  burger_name varchar(100) not null,
  devoured boolean default 0,
  primary key (id)
);
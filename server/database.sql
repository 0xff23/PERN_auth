-- Users
create table users(
  user_id serial primary key,
  email varchar(256) unique not null,
  password varchar(256) not null,
  created_at date default current_date
);
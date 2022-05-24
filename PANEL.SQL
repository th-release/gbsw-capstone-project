-- auto-generated definition
create table panel
(
  id          int(255) auto_increment
    primary key,
  name        varchar(128) not null,
  description text         null,
  redirect    varchar(255) not null,
  image       text         null,
  authority   tinyint(1)   not null,
  constraint panel_name_uindex
    unique (name),
  constraint panel_redirect_uindex
    unique (redirect)
);
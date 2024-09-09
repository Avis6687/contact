CREATE DATABASE contact;


CREATE Table clientInfo(
    id varchar(255) PRIMARY KEY,
    user_email varchar(255),
    first_name varchar(30),
    last_name varchar(30),
    phone_no INT,
    note varchar(300),
    is_verified boolean,
);
CREATE DATABASE b_amazondb;
USE b_amazondb;

CREATE TABLE bamazon (
	id INTEGER AUTO_INCREMENT NOT NULL,
	product VARCHAR (300) NOT NULL,
    price DECIMAL (10,2) not NULL,
    PRIMARY KEY (id)
    );
    
DESCRIBE inventory; 
INSERT INTO bamazon (product, price)
VALUES ("dress", 2.00), ("shirt", 3.00), ("hat",3.00), ("whitecommon", 200.00);

select * from bamazon;

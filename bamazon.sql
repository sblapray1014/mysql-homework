DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Samsung 50 Inch TV', 'Electronics', 1099.99, 10), ('MacBook Pro 15 Inch', 'Electronics', 2399.99, 5), 
('What Do You Meme?', 'Games', 49.99, 15), ('Cards Against Humanity', 'Games', 49.99, 12), 
('AirPods', 'Electronics', 159.99, 11), ('Origin: Dan Brown', 'Books', 19.99, 18);

SELECT * FROM products


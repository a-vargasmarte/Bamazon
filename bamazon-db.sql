DROP DATABASE IF EXISTS bamazon;

-- create database called bamazon -- 
CREATE DATABASE bamazon;

-- use the database bamazon -- 
USE bamazon;

-- create a table called `products` -- 
CREATE TABLE products (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(11) NOT NULL,
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY (item_id)
);

-- populate database with 10 fake items --
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("The NoPhone Air", "Electronics, Computer & Office", 6, 35);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("LOTOS® Blooming Lotus 3D Model Abstract Visual Optical Illusion 7 Color Change Touch Switch Nightlight LED Desk Lamp", "Electronics, Computer & Office", 17.98, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Acer Predator 21 X Gaming Laptop, Intel Core i7, GeForce GTX 1080 SLi, 21'' Curved 2000R Full HD, 64GB DDR4, 1TB PCIe SSD, 1TB HDD, with 21X Protective Travel Case, GX21-71-76ZF", "Electronics, Computer & Office", 9163.55, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Everything I Want To Do Is Illegal: War Stories from the Local Food Front
", "Books", 20.98, 32);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Black beauty Carry Me Mascot Beer Man Beer Festival Fancy Garden Gnome", "Sports & Outdoor", 45, 34);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Kaiun Ryoukai 2014", "Sports & Outdoor", 34999, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Battle Mug Combat Cup,Black CC001", "Home, Garden, Pets, and Tools", 145, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Prank Pack 'My First Fire' - Standard Size Prank Gift Box", "Home, Garden, Pets, and Tools", 30, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Prepd Pack Lunchbox with Modular Food Storage Containers and Chopsticks Set (Blue)", "Home, Garden, Pets, and Tools", 69, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Perfect Reflection Rgb LED Bathroom Infinity Mirror K214Rgb", "Home, Garden, Pets, and Tools", 319.99, 25);

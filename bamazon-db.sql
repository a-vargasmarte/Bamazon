DROP DATABASE IF EXISTS bamazon;

-- create database called bamazon -- 
CREATE DATABASE bamazon;

-- use the database bamazon -- 
USE bamazon;

-- create a table called `products` -- 
CREATE TABLE products
(
    item_id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
product_name VARCHAR
    (255) NOT NULL,
department_name VARCHAR
    (30) NOT NULL,
price DECIMAL
    (11) NOT NULL,
stock_quantity INTEGER
    (11) NOT NULL,
product_sales DECIMAL DEFAULT 0 
    NOT NULL,
PRIMARY KEY
    (item_id)
);

    -- populate database with 10 fake items --
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("The NoPhone Air", "Electronics, Computer & Office", 6, 35);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Optical Illusion Nightlight LED Desk Lamp", "Electronics, Computer & Office", 17.98, 25);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Acer Predator 21 X Gaming Laptop with Protective Travel Case", "Electronics, Computer & Office", 9163.55, 12);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Everything I Want To Do Is Illegal: War Stories from the Local Food Front", "Books", 20.98, 32);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Beer Festival Fancy Garden Gnome", "Sports & Outdoor", 45, 34);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Kaiun Ryoukai 2014", "Sports & Outdoor", 34999, 4);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Battle Mug Combat Cup", "Home, Garden, Pets, and Tools", 145, 50);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Prank Pack 'My First Fire", "Home, Garden, Pets, and Tools", 30, 15);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("Lunchbox with Modular Food Storage Containers and Chopsticks Set", "Home, Garden, Pets, and Tools", 69, 10);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES("LED Bathroom Infinity Mirror K214Rgb", "Home, Garden, Pets, and Tools", 319.99, 25);

    CREATE TABLE departments
    (
        department_id INTEGER
        AUTO_INCREMENT NOT NULL,
    department_name VARCHAR
        (50) NOT NULL,
    over_head_costs INTEGER NOT NULL,
    PRIMARY KEY
        (department_id)
);

        -- populate the departments table with relevant info --

        INSERT INTO departments
            (department_name, over_head_costs)
        VALUES
            ("Electronics, Computer & Office", 20000);

        INSERT INTO departments
            (department_name, over_head_costs)
        VALUES
            ("Books", 200);

        INSERT INTO departments
            (department_name, over_head_costs)
        VALUES
            ("Sports & Outdoor", 35000);

        INSERT INTO departments
            (department_name, over_head_costs)
        VALUES
            ("Home, Garden, Pets, and Tools", 50000);

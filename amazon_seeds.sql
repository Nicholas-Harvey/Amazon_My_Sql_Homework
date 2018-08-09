CREATE DATABASE amazonDB;
DROP TABLE products; 
USE amazonDB;

CREATE TABLE products(
id INT AUTO_INCREMENT NOT NULL,
item_name VARCHAR(100) NOT NULL,
item_price DECIMAL (5,2) NULL,
item_category VARCHAR(100) NOT NULL,
item_stock_count INT(100) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Ping Pong Table(s)", 90.23, "Sports/Activites", 61);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Van Halen Poster(s)", 25.99, "Art", 11);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Rubiks Cube(s)", 34.72, "Puzzles", 42);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Sunglasses", 75.41, "Apparel", 58);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Tent(s)", 80.07, "Camping/Hiking", 90);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("The Rifle that Lee Harvey Oswald Used to Shoot J.F.K.", 300.99, "Historical Artifacts", 1)
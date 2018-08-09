CREATE DATABASE bamazonDB;
USE bamazonDB;

DROP TABLE products; 

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

INSERT INTO products(item_name, item_price, item_category, item_stock_count)
VALUES("The recipe for alchemy (circa 1815)", 67.89, "Food", 47);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Rubik's Cube(s)", 34.72, "Puzzles", 42);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Missing 7 minutes of Tape from the Water Gate recodings", 962.27, "Audio Equipment", 1);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Sunglasses", 75.41, "Apparel", 58);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Original diagrams for the construction of the Great Pyramids of Giza", 300.99, "Building Plans", 1);

INSERT INTO products (item_name, item_price, item_category, item_stock_count)
VALUES("Tent(s)", 80.07, "Camping/Hiking", 90);

INSERT INTO products(item_name, item_price, item_category, item_stock_count)
VALUES("Map to D.B. Cooper's location", 671.71, "Cartography", 154);

INSERT INTO products(item_name, item_price, item_category, item_stock_count)
VALUES("The BEST grape juice that you've ever had (no promises)", 99.38, "Beverages", 96);

INSERT INTO products(item_name, item_price, item_category, item_stock_count)
VALUES("2015 Sports Almanac", 525.99, "Books", 6)


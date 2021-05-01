CREATE TABLE items (
 item_id SERIAL PRIMARY KEY,
 item_name VARCHAR,
 number_of_items INTEGER DEFAULT 0
);

INSERT INTO items(item_name, number_of_items) VALUES ('Ham Sandwich', 5);
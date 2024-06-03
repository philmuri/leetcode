-- Approach 1: LEFT JOIN
SELECT product_name, year, price
FROM Sales s
LEFT JOIN Product p ON s.product_id = p.product_id;

-- Approach 2: Subquery
SELECT
    (SELECT product_name FROM Product where product_id = s.product_id) as product_name,
    s.year,
    s.price
FROM 
    Sales s;
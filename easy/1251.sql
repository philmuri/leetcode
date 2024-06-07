-- Approach 1: CASE statement; more clarity in what null cases are being dealt with, but more clutter
SELECT 
    p.product_id,
    CASE
        WHEN SUM(u.units) IS NULL -- handle null cases when product_id has no units sold
        THEN 0
        ELSE ROUND(SUM(price * units) / SUM(units), 2) -- automatically handles null rows for periods with no units sold
    END AS average_price
FROM 
    Prices p
LEFT JOIN 
    UnitsSold u
    ON p.product_id = u.product_id
    AND u.purchase_date >= p.start_date
    AND u.purchase_date <= p.end_date
GROUP BY
    p.product_id

-- Approach 2 (better): IFNULL handles no units sold for product_id
SELECT 
    p.product_id,
    IFNULL(ROUND(SUM(price * units) / SUM(units), 2), 0) AS average_price
FROM 
    Prices p
LEFT JOIN 
    UnitsSold u
    ON p.product_id = u.product_id
    AND u.purchase_date >= p.start_date
    AND u.purchase_date <= p.end_date
GROUP BY
    p.product_id
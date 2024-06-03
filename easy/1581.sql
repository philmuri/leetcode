-- Approach 1: LEFT JOIN sorted by null
SELECT 
    v.customer_id, 
    COUNT(v.customer_id) AS count_no_trans
FROM 
    Visits v
LEFT JOIN 
    Transactions t 
    ON 
        v.visit_id = t.visit_id
WHERE 
    t.transaction_id IS NULL
GROUP BY 
    v.customer_id;


-- Approach 2: Negate EXISTS subquery with matching IDs condition
-- Faster but more cluttered than LEFT JOIN
SELECT 
    v.customer_id, 
    COUNT(v.customer_id) AS count_no_trans
FROM 
    Visits v
WHERE 
    -- subquery: gather rows where visit_id's match
    -- use EXISTS() to return True if rows exist for the match
    -- negate it to get False if visits_id's match for a row, and True otherwise
    NOT EXISTS(
        SELECT NULL -- return null column as placeholder for non-empty rows
        FROM Transactions t 
        WHERE v.visit_id = t.visit_id
    )
GROUP BY 
    v.customer_id;


-- Approach 3: NOT IN subquery
-- Faster but more cluttered than LEFT JOIN
SELECT 
    v.customer_id, 
    COUNT(v.customer_id) AS count_no_trans
FROM 
    Visits v
WHERE v.visit_id NOT IN (
    SELECT t.visit_id
    FROM Transactions t
)

GROUP BY 
    v.customer_id;
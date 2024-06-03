-- Approach 1: SELF JOIN to pivot activity_type column into separate 'start' and 'end' columns
SELECT
    aStart.machine_id,
    ROUND(AVG(aEnd.timestamp - aStart.timestamp), 3) AS processing_time
FROM 
    Activity aStart
JOIN 
    Activity aEnd
ON 
    aStart.machine_id=aEnd.machine_id 
    AND aStart.process_id=aEnd.process_id
    AND aStart.activity_type='start' 
    AND aEnd.activity_type='end' -- Can also do aStart.timestamp < aEnd.timestamp
GROUP BY
    aStart.machine_id


-- Approach 2: Using cases for averaging over 'end' and 'start' per machine_id, effectively pivoting once again
SELECT
    machine_id, 
    ROUND(AVG(CASE WHEN activity_type = 'end' THEN timestamp END) - 
    AVG(CASE WHEN activity_type = 'start' THEN timestamp END), 3) as processing_time
FROM
    Activity
GROUP BY
    machine_id
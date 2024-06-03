-- Approach 1: SELF JOIN tables to compare rows
SELECT
    wCurrent.id
FROM 
    Weather wCurrent
JOIN
    Weather wLag 
    ON DATEDIFF(wCurrent.recordDate, wLag.recordDate) = 1
WHERE
    wCurrent.temperature > wLag.temperature


-- Approach 2: Using LAG() with CTE to access previous row data
WITH PreviousWeatherData AS (
    SELECT
        id,
        recordDate,
        temperature,
        LAG(temperature, 1) OVER (ORDER BY recordDate) AS previousTemperature,
        LAG(recordDate, 1) OVER (ORDER BY recordDate) AS previousRecordDate
    FROM
        Weather
)
SELECT
    id
FROM
    PreviousWeatherData
WHERE
    temperature > previousTemperature
    AND DATEDIFF(recordDate, previousRecordDate) = 1


-- Approach 3: CROSS JOIN (access 2 tables in FROM / Cartesian product of table rows)
-- Since each date row in w1 is now paired with all other dates from w2, can compare directly with WHERE
-- However cross join is not very memory efficient compared to the other solutions
SELECT
    w1.id
FROM
    Weather w1, Weather w2
WHERE
    w1.temperature > w2.temperature
    AND DATEDIFF(w1.recordDate, w2.recordDate) = 1;
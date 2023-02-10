USE airline_db;

-- data
INSERT INTO pilots
-- columns should match the values below
(first_name, last_name, airline_name) 
VALUES 
("Susan", "Lee", "Spirit"),
("Anthony", "Bob", "United"),
("Angelica", "Smith", "Lufthansa Air");

-- SELECT * FROM pilots;

INSERT INTO flights
-- columns should match values
(flight_number, 
start_time,
end_time,
origin,
destination,
`status`,
pilot_id)
VALUES
-- AAL
-- CIA
-- HAV
-- NPE
-- EWR

('A100', 
'2022-11-24 18:00',
'2022-11-24 20:00',
'EWR',
'CIA',
'ONTIME',
1),
('A200', 
'2022-11-25 18:00',
'2022-11-27 20:00',
'EWR',
'AAL',
'ONTIME',
3),
('B2022', 
'2022-11-25 18:00',
'2022-11-27 20:00',
'EWR',
'HAV',
'ONTIME',
1),
('C233', 
'2022-11-20 18:00',
'2022-11-21 20:00',
'EWR',
'NPE',
'CANCELLED',
2);

SELECT * FROM flights;

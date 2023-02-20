INSERT INTO department(id, deparment_name, department_id) 
VALUES (1, "SALES", 12),
        (2, "LEGAL", 8),
        (3, "FINANCE", 23),
        (4, "ENGINEERING", 18),
        (5, "EXECUTIVE", 1);

INSERT INTO role(role_id, job_title, salary, department_id) 
VALUES (10, "OUTSIDE SALES", 75000, 12),
        (18, "TAX ATTORNEY", 185000, 8),
        (17, "SENIOR FINANCIAL ANALYST", 23),
        (9, "STRUCTURAL ENGINEER", 11800, 18),
        (1, "CHAIRMAN AND CEO", 540000, 1)

INSERT INTO employee(id, first_name, last_name, role_id, manager_id, reporting_manager) 
VALUES (1, "Mary", "Jones" 10, NULL, "Mike Smith"),
        (5, "Mike","Smith", 1, 1, "Himself"),
        (3, "Faith","Thompson", 5, id[5]),
        (4, "Mark", "Nickelwood", 9, NULL, id[5]);





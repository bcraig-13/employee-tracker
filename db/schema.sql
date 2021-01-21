INSERT INTO department (
	id,
    name
)
VALUES 
	(1, "Manager"),
    (2, "Engineering"),
    (3, "Administrative");
INSERT INTO role (
	id,
    title,
    salary,
    department_id
)
VALUES 
	(1, "Manager", 80000.00, 1),
    (2, "Project Lead", 70000.00, 2),
    (3, "Front End Engineer", 60000.00, 2),
    (4, "Back End Engineer", 62000.00, 2),
    (5, "Administrative Lead", 45000.00, 3),
    (6, "Administrative Assistant", 40000.00, 3);
    
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
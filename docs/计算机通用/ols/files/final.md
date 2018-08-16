# Final

## Database Overview

* **Database**: A Database consists of a collection of Tables and other database objects. 
* **Table**: A Table consists of rows and columns.
* **Table constraints**:
    * **Unique**: All of the values in these columns must not be exactly duplicated in another row of the table.
    * **Check**: The value in these column must meet the specified check criteria before they are accepted (data validation).
    * **Foreign Key**: See Referential Integrity.
    * **Primary Key**: A primary key is used to uniquely identify each row of the table.
* **Column**: A Column is defined with a specific data type and size (how the size is specified is database-dependent).
* **Column constraints**:
    * **Not Null**: Column is required.
    * **Unique**: A duplicate value is not allowed in this column.
    * **Check**: The value in this column must meet the specified check criteria before it is accepted (data validation).
    * **Foreign Key**: See Referential Integrity.
    * **Primary Key**: A primary key is used to uniquely identify each row of the table.
* **Database Integrity**: The Database Server ensures that no type, size, check, not null, unique, or primary key constraints are violated. 
* **Referential Integrity**: The Database Server ensures that every foreign key value is either Null or matches a value in its related primary key. 
* **Null**: Null means no value. 


## CREATE TABLE STATEMENTS 

Each column must have a defined **data type**:  
* VARCHAR2 - Variable length text
* CHAR - Fixed length text
* NVARCHAR2 - Variable length text with UNICODE characters
* NCHAR - Fixed length text with UNICODE characters
* NUMBER - Fixed precision number (specify number of digits and number of decimal places)
* BINARY_FLOAT - Floating point number
* BINARY_DOUBLE - Double-precision floating point number
* DATE - Date/Time value
* TIMESTAMP - Date/Time value with fractional seconds precision
* INTERVAL - Year to Month or Day to Second interval
* BLOB - Binary Large Object (use for zip files, images, excel spreadsheets, etc.)
* BFILE - Binary File reference
* CLOB - Character Large Object
* NCLOB - Character Large Object with UNICODE characters

**Constraints** are used to enforce business rules within the database:
* PRIMARY KEY
* FOREIGN KEY
* CHECK: data must be checked
* NOT NULL: An amount must be specified
* UNIQUE: must not be same

``` sql
DROP TABLE salgrade;
DROP TABLE emp;
DROP TABLE dept;

CREATE TABLE dept
(
	deptno NUMBER(3) 
		CONSTRAINT dept_deptno_nn NOT NULL 
		CONSTRAINT dept_deptno_pk PRIMARY KEY,
	dname VARCHAR2(14),
	loc VARCHAR2(13)
);

CREATE TABLE emp
(
	empno NUMBER(4) 
		CONSTRAINT emp_empno NOT NULL 
		CONSTRAINT emp_empno_pk PRIMARY KEY,
	ename VARCHAR2(10),
	job VARCHAR2(9),
	mgr NUMBER(4),
	hiredate DATE,
	sal NUMBER(7,2),
	comm NUMBER(7,2),
	deptno NUMBER(3) 
		CONSTRAINT emp_deptno_fk REFERENCES dept (deptno)
);

CREATE TABLE salgrade
(
	grade NUMBER(2) 
		CONSTRAINT salgrade_grade_nn NOT NULL 
		CONSTRAINT salgrade_grade_pk PRIMARY KEY,
	losal NUMBER(7,2),
	hisal NUMBER(7,2),
	CONSTRAINT salgrade_losal_hisal_cc CHECK (losal <= hisal)
);
```

## ALTER TABLE STATEMENTS

ALTER TABLE statement allows three types of alterations: additions, modifications, and deletions.

``` sql
ALTER TABLE table_name [ADD | MODIFY | DROP] (details);
```

Adding a column: 

``` sql
ALTER TABLE customers ADD
(
    sex CHAR(1)
        CONSTRAINT cust_sex_nn NOT NULL
); 
```

Adding a table constraint:

``` sql
ALTER TABLE customers ADD 
    CONSTRAINT cust_sex_cc CHECK (sex IN ('M', 'F'));
```

Alert a column's data type:

``` sql
ALTER TABLE customers MODIFY
    (last_name VARCHAR2(40));
```

Changing a column's default value :

``` sql
ALTER TABLE customers MODIFY
    (phone DEFAULT '<NONE>');
```

Deleting a table column:

``` sql
ALTER TABLE customers DROP COLUMN sex;
```

Deleting a constraint:

``` sql
ALTER TABLE customers DROP CONSTRAINT cust_last_name_nn;
```

Adding a **not null** column constraint:
if a NOT NULL constraint is being added, then the column value for all of the rows of that table must already be NOT NULL. If a NULL value exists in one of the columns values, the constraint cannot be added. 

``` sql
ALTER TABLE customers MODIFY (last_name CONSTRAINT cust_last_name_nn NOT NULL);
```

## Disabling Constraints

In order to do some manipulations of the data in the database, it is necessary to **temporarily** relax one or more constraints. Then, after the manipulations are complete, the constraint is restored. This can be achieved by disabling the constraint (rather than dropping it).

``` sql
/* disable */
ALTER TABLE table_name DISABLE CONSTRAINT constraint_name;
/* enable */
ALTER TABLE table_name ENABLE CONSTRAINT constraint_name;
```

## DROPing tables 

``` sql
DROP TABLE customers;
```

Table cannot be dropped if there are foreign keys that refer to it.
all of the foreign keys can also be dropped at the same time by adding the phrase `CASCADE CONSTRAINTS`

``` sql
DROP TABLE customers CASCADE CONSTRAINTS;
```

## Database Design

### Entities and Attributes

* **Entities** are people, places, objects, or concepts. will become a table in the database design. 
* An **attribute** of an entity will become a column of the table in the database design.
* An **instance** of an entity will become a row of the table in the database. 
* Each instance is separate and distinctly identifiable from all other instances of that type of entity. The unique identifier is called the **key**.

Design steps: 
1. determine what entities are required.
2. determine the required attributes of the entities.
3. Determine the functional dependencies of the attributes 
4. Determine entity relationships
5. Translate entities and attributes into Tables and Columns. 
6. Determine data types, field sizes, primary keys, foreign keys, and other constraints.
7. Normalize the design.

### Functional Dependencies

A functional dependency is a relationship of one attribute or field in a record to another. 
define a field or a set of fields as an anchor from which one can always find a single value for another field. 

To show the functional dependency (FD), we use the notation:

``` shell
# Employee Number defines Name
Employee Number → Name
```

### Attributes Types

* **Simple Attribute**: A simple attribute is one that cannot be broken down or subdivided. 
* **Composite Attribute**: A composite attribute is one that can be decomposed into separate but related attributes.
* **Multi-Valued Attribute**: A multi-valued attribute may take on more than one value for a given instance of an entity.
* **Derived Attribute**: Derived attributes are ones that can be calculated from other data in the database. 
* **Candidate Key**: If an attribute can be thought of as a unique identifier for an entity,

![Screen Shot 2018-08-15 at 7.20.58 PM](https://i.imgur.com/NruYCay.png)

### Entity-Relationship 

A relationship is a link or association between entities. Relationships are usually denoted by verb phrases. 

* **One-to-One (1:1)**:  an instance of an entity is related to one instance of another entity. 
* **Many-to-One (M:1)**: an instance of one entity is related to an instance of another entity. But an instance of the other entity is related to many instances of the first entity. 
* **One-to-Many (1:M)**: an instance of an entity is related to many instances of another entity. But an instance of the other entity is related to only one instance of the first entity. 
* **Many-to-Many (M:N)**: an instance of an entity is related to many instances of another entity and an instance of the other entity is related to many instances of the first entity. 

### Participation

Another aspect of the relationship indicates whether an entity must participate in the relationship or may participate in the relationship. 

* **Full** participation means that the entity must participate in the relationship  
* **partial** participation indicates that the entity may participate in the relationship. 

![Screen Shot 2018-08-15 at 7.29.31 PM](https://i.imgur.com/Xx8r4IK.png)

### Mapping

* **For each M:N relationship**, create a new table with the primary keys of each of the two owner entities that are being related in the M:N relationship. 
* **For each 1:1 relationship**, include the primary key of one entity as a foreign key of the other entity according to one of the rules below. 
* **For each 1:M relationship**: 懒得写

### Normalization
* **First Normal Form**: The first normal form (**1NF**) requires that data in tables be two-dimensional — that there be no repeating groups in the rows. 

* **Second Normal Form**: The second normal form (**2NF**) requires that data in tables depends on the whole key of the table. Partial dependencies are not allowed. 
* **Third Normal Form**: The third normal form (**3NF**) requires that the data in tables depends on the primary key of the table. Eliminate columns that don't depend on the key at all. 

## Data Manipulation Language (DML) Statements 

### INSERT

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (1280, 'Kevin', 'Dunn', 800);

/* DEFAULT */
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (1280, 'Kevin', 'Dunn', DEFAULT);

/* null */
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (1280, NULL, 'Dunn', 800);

/* date */
INSERT INTO card_accounts (card_number, first_name, middle_initial, last_name, valid_date, expiry_date) VALUES (55555555, 'Cathy', NULL, 'Puck', TO_DATE('11-NOV-2005', 'DD-MON-YYYY'), TO_DATE('10-NOV-2006', 'DD-MON-YYYY'));

/* interval */
INSERT INTO events (duration, next_event) VALUES (TO_DSINTERVAL('0 02:30:00'), TO_YMINTERVAL('1-6'));

/* Subqueries */
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (2540, (SELECT first_name FROM donations WHERE receipt_no = 1280), (SELECT last_name FROM donations WHERE receipt_no = 1280), 200);

/* INSERT SELECT */
INSERT INTO donations (receipt_no, first_name, last_name, amount) SELECT 2540, first_name, last_name, 200 FROM donations WHERE receipt_no = 1280;
```

### UPDATE

``` sql
UPDATE donations SET last_name = NULL, amount = 880 WHERE receipt_no = 1280;
UPDATE donations SET last_name = 'Dunn', amount = DEFAULT WHERE receipt_no = 1280;
```

### DELETE

``` sql
DELETE FROM donations WHERE receipt_no = 1280;
```

foreign key can be defined with the phrase ON DELETE CASCADE or ON DELETE SET NULL.

``` sql
receipt_no NUMBER(8)
   CONSTRAINT receipt_no_fk REFERENCES donations(receipt_no) ON DELETE CASCADE

receipt_no NUMBER(8)
   CONSTRAINT receipt_no_fk REFERENCES donations(receipt_no) ON DELETE SET NULL
```

## SEQUENCES 

A sequence is a database object that can be used to create unique **surrogate key values**.

``` sql
CREATE SEQUENCE receipt_no_sequence
   START WITH 1290
   INCREMENT BY 10;
```

* `NEXTVAL` used To retrieve the next value
* `CURRVAL`  to get the last generated sequence value 

This is useful when inserting foreign key values when the primary key value was generated with the sequence.

``` sql
CREATE SEQUENCE make_id_sequence
   START WITH 1;

INSERT INTO makes (make_id, make) VALUES (make_id_sequence.NEXTVAL, 'Infinity');
INSERT INTO models (make_id, model) VALUES (make_id_sequence.CURRVAL, 'G35 Sedan');

INSERT INTO makes (make_id, make) VALUES (make_id_sequence.NEXTVAL, 'Jaguar');
INSERT INTO models (make_id, model) VALUES (make_id_sequence.CURRVAL, '2005 XJR');

INSERT INTO makes (make_id, make) VALUES (make_id_sequence.NEXTVAL, 'Lexus');
INSERT INTO models (make_id, model) VALUES (make_id_sequence.CURRVAL, 'GS 300 AWD');
INSERT INTO models (make_id, model) VALUES (make_id_sequence.CURRVAL, 'LS 430');

INSERT INTO makes (make_id, make) VALUES (make_id_sequence.NEXTVAL, 'Mercedes Benz');
```

DELETE

``` sql
DROP SEQUENCE receipt_no_sequence;
```

## Transaction Processing 

A transaction is defined as **a logical unit of work**  —  a set of database changes to one or more tables that accomplish a defined task.

A transaction begins after:
* a **COMMIT** statement, 
* a **ROLLBACK** statement, 
* an initial database connection. 

A transaction ends when :
* A **COMMIT** statement is processed
* A **ROLLBACK** statement is processed
* The database connection is terminated

Example:
transfering `$200` from your savings account to your chequing account through an ATM. You insert your card, select transfer, specify from savings and to chequing, specify the amount as `$200` and press OK. 

To complete the transaction, the system must deduct `$200` from your savings account balance and add `$200` to your chequing account balance. The transaction is only complete when both steps have been performed — that is, both operations comprise a single logical unit of work.

### ROLLBACK

In the above example, the ATM software might issue an UPDATE statement to deduct an amount of `$200` from your savings account and then issue another UPDATE statement to add an amount of `$200` to your chequing account.

If before the second UPDATE statement was issued, the CANCEL button was pressed (on the ATM). To cancel the operation, the ATM must not only abandon the second UPDATE statement, but also undo the changes caused by the first UPDATE statement. 

The **ROLLBACK** statement will undo any other statements since the connection was established or since the last committed transaction

### COMMIT

In the above example, the ATM software might issue an UPDATE statement to deduct an amount of `$200` from your savings account and then issue another UPDATE statement to add an amount of `$200` to your chequing account. 

A **COMMIT** statement would finalize the transaction so that it cannot be undone.

``` sql
UPDATE account SET balance = balance - 200 WHERE account_no = 12345678;
UPDATE account SET balance = balance + 200 WHERE account_no = 98765432;
COMMIT;
```

### Savepoints

If a transaction (which is a logical unit of work) is actually made up of smaller sub-transactions each of which is also a logical unit of work, each sub-transaction can be noted by specifying a savepoint

Then, if part of the transaction must be undone, it could be undone to a specified savepoint

``` sql
SAVEPOINT savepoint_name;

ROLLBACK TO savepoint_name;
```

``` c
 try
{
    cmd.CommandText = "UPDATE account SET balance = balance + :amount WHERE account_no = :accountNo";
    cmd.Parameters[":accountNo"].Value = toAccountNo;
    cmd.ExecuteNonQuery();

    cmd.CommandText = "UPDATE account SET balance = balance - :amount WHERE account_no = :accountNo";
    cmd.Parameters[":accountNo"].Value = fromAccountNo;
    cmd.ExecuteNonQuery();

    trans.Commit(); // Commit changes
}
catch (Exception ex)
{
    trans.Rollback(); // Rollback any changes
    throw ex; // Re-throw the exception
}
finally
{
    conn.Close();
}
```

## SELECTing Data 

### Limiting Rows

The **ROWNUM** pseudo column can be used to limit the number of rows returned by the SELECT statement.

``` sql
SELECT empno, sal FROM emp
WHERE ROWNUM <= 5
ORDER BY sal DESC;
```

### CASE Expressions

**CASE expression WHEN value THEN…**

Display each employee's name and job (being politically correct in stating the job description).

``` sql
SELECT ename, 
CASE job 
WHEN 'SALESMAN' THEN 'SALESPERSON' 
ELSE job 
END 
AS job 
FROM emp;
```

Display the employee name, salary, and department number for all employees in department 10 whose salary is more than 3000, employees in department 20 whose salary is > 900, and employees in department 30 whose salary is greater than 2000.

``` sql
SELECT ename, sal, deptno FROM emp WHERE sal > 
CASE deptno 
WHEN 10 THEN 3000 
WHEN 20 THEN 900 
WHEN 30 THEN 2000 
END 
ORDER BY deptno ASC, sal DESC;
```

**CASE WHEN expression THEN…**

``` sql
SELECT ename, comm, 
CASE WHEN comm IS NULL THEN 'NO COMMISSION' WHEN comm = 0 THEN 'NOT EARNED' 
ELSE 'COMMISSION PAID' 
END 
AS COMM_STATUS FROM emp;
```

### Grouping

#### Distinct Rows

the DISTINCT keyword can be used to ensure that each row returned is unique.

``` sql
SELECT DISTINCT job FROM emp ORDER BY job;
```

#### Group By Clause

The GROUP BY clause tells the database server to group rows based on the distinct values that exist for the specified columns. 

Display the job for each job group

``` sql
SELECT job FROM emp GROUP BY job;
```
Display the average salary per job type

``` sql
SELECT AVG(sal) AS avg_sal FROM emp GROUP BY job;
```

Display the job and average salary per job type

``` sql
SELECT job, AVG(sal) AS avg_sal FROM emp GROUP BY job;
```

Display the number of employees per manager

``` sql
SELECT COUNT(*) AS num_emps FROM emp GROUP BY mgr;
```

#### Subgrouping

A group can be further broken down into sub-groups by specifying more than one group in the GROUP BY clause.


Display the manager and job for each job and each manager with employees with that job (i.e., per manager per job)

``` sql
SELECT mgr, job FROM emp GROUP BY job, mgr;
```

Display the manager, job, and min and max salary per manager per job

``` sql
SELECT mgr, job, MIN(sal) AS min_sal, MAX(sal) AS max_sal, AVG(sal) AS avg_sal FROM emp GROUP BY job, mgr;
```

Display the manager, job, and number of employees per manager per job

``` sql
SELECT mgr, job, COUNT(*) AS num_emps FROM emp GROUP BY job, mgr;
```

#### The HAVING Clause

The HAVING clause is like a WHERE clause that applies to the group or to a group function

While the WHERE clause applies its condition to every row to determine if that row should be included, the HAVING clause is applied to the group of rows to determine if that group should be included.

Display the job for each job group eliminating the MANAGER job group

``` sql
SELECT job FROM emp GROUP BY job HAVING job != 'MANAGER';
```

Display the job and average salary per job where the average salary per job is over 1200

``` sql
SELECT job, avg(sal) AS avg_sal FROM emp GROUP BY job HAVING AVG(sal) > 1200;
```

Display the job and average of salaries over 1200 per job

``` sql
SELECT job, avg(sal) AS avg_sal FROM emp WHERE sal > 1200 GROUP BY job;
```

### Joins

A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them.

* **INNER JOIN**: Returns records that have matching values in both tables
* **LEFT JOIN**: Return all records from the left table, and the matched records from the right table
* **RIGHT JOIN**: Return all records from the right table, and the matched records from the left table
* **FULL (OUTER) JOIN**: Return all records when there is a match in either left or right table

![img](https://i.imgur.com/JAWya3N.png)

#### inner join

Display the employee number, name, job, salary, and salary grade for each employee

``` sql
SELECT empno, ename, job, sal, grade 
FROM emp INNER JOIN salgrade 
ON sal BETWEEN losal and hisal 
ORDER BY sal DESC;
```

#### left join

select all customers, and any orders they might have

``` sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers LEFT JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

#### right join

Return all employees, and any orders they might have placed:

``` sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders RIGHT JOIN Employees 
ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID; 
```

### CURSOR Expressions

### Using SET operators 

#### UNION

`UNION` operator combines the two sets of rows (from two SELECT statements) into a single row set.

E.g: Display the employee number, name, salary and/or commission for each employee

``` sql
SELECT empno, ename, 'SAL' AS type, sal AS amount FROM emp
UNION
SELECT empno, ename, 'COMM', comm FROM emp WHERE comm > 0;
```

![Screen Shot 2018-08-06 at 11.50.58 PM](https://i.imgur.com/SH2MqSS.png)

``` sql
SELECT empno, ename, 'SAL' AS type, sal AS amount FROM emp
UNION
SELECT empno, ename, 'COMM', comm FROM emp WHERE comm > 0
ORDER BY 2, 3 DESC;
```

![Screen Shot 2018-08-06 at 11.53.48 PM](https://i.imgur.com/EQlNFyL.png)

#### UNION ALL

When two sets of rows are UNIONed together, the `UNION` operator eliminates duplicate rows. To keep the duplicate rows, use the `UNION ALL` operator instead of the `UNION` operator.

E.g: Display all of the different salary and commission amounts 
(This example has duplicate rows eliminated:)

``` sql
SELECT sal AS amount FROM emp
UNION
SELECT comm FROM emp WHERE comm > 0
ORDER BY amount
```

![Screen Shot 2018-08-06 at 11.56.10 PM](https://i.imgur.com/ni69CBy.png)

E.g: Display all of the salary and commission amounts
(This example keeps duplicate rows:)

``` sql
SELECT sal AS amount FROM emp
UNION ALL
SELECT comm FROM emp WHERE comm > 0
ORDER BY amount
```

![Screen Shot 2018-08-06 at 11.55.55 PM](https://i.imgur.com/rp9LWQS.png)

#### INTERSECT

The `INTERSECT` operator returns the rows that are common between two sets of rows.

E.g: Display the employee number of all of the employees who earn 3000 or less and are managers

``` sql
SELECT DISTINCT mgr FROM emp
INTERSECT
SELECT empno FROM emp WHERE sal <= 3000
ORDER BY mgr;
```

![Screen Shot 2018-08-06 at 11.58.48 PM](https://i.imgur.com/HRUk8bv.png)

#### MINUS

The `MINUS` operator returns the rows in the first set of rows that do not exist in the second set of rows. The MINUS operator is sometimes called the difference operator.

E.g: Display the employee number of all employees who are not managers

``` sql
SELECT empno FROM emp
MINUS
SELECT DISTINCT mgr FROM emp
ORDER BY 1;
```

### Subqueries 

A subquery allows the results of one SELECT statement to be used in another DML statement.

When used in a DML statement, a subquery must be enclosed in parentheses. The number of rows returned by a subquery must match the number of values that the function or operator expects. The `ORDER BY` clause cannot used within a subquery 

E.g: get the employee number, name, job, and salary of all employees that make more than the lowest paid salesman.

``` sql
SELECT empno, ename, job, sal FROM emp
WHERE sal > (SELECT MIN(sal) FROM emp WHERE job = 'SALESMAN');
```

#### Using Subqueries with IN, NOT IN

Using `IN` in a subquery allows a column or expression to be compared to a set of values returned from the subquery.

E.g:  Get employee numbers of all of the managers of the clerks and analysts.

``` sql
SELECT mgr FROM emp where job IN ('CLERK', 'ANALYST');
```

#### Nested Subqueries

A nested subquery is a subquery within a subquery. 

E.g: get the employee information for the managers with the most employees.

``` sql
SELECT empno, ename, job FROM emp WHERE empno IN
(
   SELECT mgr FROM emp GROUP BY mgr HAVING COUNT(*) =
   (
      SELECT MAX(COUNT(*)) FROM emp GROUP BY mgr
   )
);
```

#### Correlated Subqueries

Correlated subqueries reference information from the main query. Since a correlated subquery is dependent on row data from the main query, this subquery must be re-evaluated for each row of the main query.

E.g: lists the employee number, name, job, and department name of all employees who do not work in the same department as their managers (but do have managers!)

``` sql
SELECT empno, ename, job, dname 
FROM emp employees INNER JOIN dept 
ON employees.deptno = dept.deptno
WHERE mgr IS NOT NULL AND employees.deptno !=
(
   SELECT deptno FROM emp managers WHERE employees.mgr = managers.empno
);
```


#### Subquery Virtual Columns

A subquery can appear as a virtual column expression. This is a form of correlated subquery; that is, the subquery must execute for every row of the query. The subquery must return a single row and column.

E.g: list each employee along with the name of the employee's department.

``` sql
SELECT ename, (SELECT dname FROM dept WHERE dept.deptno = emp.deptno) AS dname FROM emp;
```

E.g:  list the name and the number of employees in each department.

``` sql
SELECT dname, (SELECT COUNT(*) FROM emp WHERE emp.deptno = dept.deptno) AS num_emps FROM dept;
```


#### Subquery Virtual Tables

A subquery can appear as a virtual table in the `FROM` clause of a `SELECT` statement. The virtual table can appear as part of a table join. The columns produced by the virtual table become valid columns to SELECT in the query.

E.g: list the employee name, salary, and salary grade for each employee that is salary grade 3 or higher.

``` sql
SELECT ename, sal, grade 
FROM 
(SELECT * FROM emp INNER JOIN salgrade 
ON sal BETWEEN losal AND hisal) empsalgrade 
WHERE grade >= 3;
```

E.g: list the name of all employees along with the number of employees in the department in which the employee resides ordered from the departments with the most employees to the department with the least employees, sub sorted alphabetically by employee name.

``` sql
SELECT ename, num_emps
FROM emp INNER JOIN 
(SELECT deptno, (SELECT COUNT(*) FROM emp emp2 
WHERE emp2.deptno = dept.deptno) AS num_emps FROM dept) empcount 
ON emp.deptno = empcount.deptno
ORDER BY num_emps DESC, ename ASC;
```

#### EXISTS

The EXISTS operator operates on a subquery and returns the boolean value TRUE

Construct a query that lists all employees who have at least one other employee in the same department with the same manager they have.

``` sql
SELECT empno, ename, job, mgr FROM emp
WHERE EXISTS
(
   SELECT * FROM emp empcompare
   WHERE emp.mgr = empcompare.mgr AND
   emp.deptno = empcompare.deptno AND
   emp.empno != empcompare.empno
);
```

## Views 

a view is a virtual table based on the result-set of an SQL statement.

### Create Views

The syntax for creating a view is : 

``` sql
CREATE [OR REPLACE] VIEW view_name [(column1, . . ., columnN)] AS select_statement. 
```

Use the `OR REPLACE` option to recreate a view.

E.g:  Construct a view that lists the name of all clerks along with their employee number and salary.

``` sql
CREATE VIEW clerks_analysts AS
SELECT empno, ename, sal, job FROM emp WHERE job IN ('CLERK', 'ANALYST');
```

E.g: Construct a view that lists all employees who have at least one other employee in the same department with the same manager they have AND who earn more than their managers.

``` sql
CREATE VIEW same_dept_big_money (empno, ename, job, mgr) AS
SELECT empno, ename, job, mgr FROM emp
WHERE EXISTS
(
   SELECT * FROM emp empcompare
   WHERE emp.mgr = empcompare.mgr AND
   emp.deptno = empcompare.deptno AND
   emp.empno != empcompare.empno
)
INTERSECT
SELECT e1.empno, e1.ename, e1.job, e1.mgr
FROM emp e1, emp e2
WHERE e2.empno = e1.mgr AND e1.sal > e2.sal;
```

### Using Views

#### Delete

``` sql
DROP VIEW view_name.
```

### Modifying Data behind a view

Creating a view differs from creating a table from a subquery in that a table is static and will not reflect changes in the tables on which it is based. A view will always reflect the current data.

### Modifying Data through a view

Data can be modified through a view under three conditions.
* The view is based on a single table (or more precisely, the modification only affects a single key-preserved table).
* The select statement does not have a `DISTINCT` clause, aggregates, or a `GROUP BY` clause.
* The columns to be updated are not virtual columns — that is, they are based on real columns, not expressions.


### Restriction when updating through a view

#### Creating a Read-Only View

A view that would otherwise be updatable can be made non-updatable by adding the clause `WITH READ ONLY` to its create statement.

``` sql
CREATE OR REPLACE VIEW clerks_analysts AS
SELECT empno, ename, sal, job FROM emp WHERE job IN ('CLERK', 'ANALYST')
WITH READ ONLY;
```

#### Using the WITH CHECK OPTION

A view that includes a filter condition can prevent any updates to a row that will result in the row being excluded from the view.

``` sql
CREATE VIEW clerks_analysts AS
SELECT empno, ename, sal, job FROM emp WHERE job IN ('CLERK', 'ANALYST')
WITH CHECK OPTION;
```

## Privileges 

Privileges allow a user to grant another user authority to access and/or create, modify, or delete database objects within the user's workspace.

There are two types of privileges:

* **System privileges** allow the user to grant to another user the ability to create or destroy database objects in the user's workspace. E.g. CREATE TABLE privilege, DROP TABLE privilege. System privileges also include database administrator privileges such as CREATE USER privilege. A user must be database administrator to grant a database administration privilege to another user.
* **Object privileges** allow the user to grant to another user the ability to access or modify a database object in the user's workspace. E.g. SELECT privilege, INSERT privilege, ALTER privilege. Object privileges must specify the object on which the privileges are being granted.


![Screen Shot 2018-08-07 at 4.14.32 AM](https://i.imgur.com/DBdRD4w.png)

### Granting Privileges

Done By DBA

``` sql
GRANT CREATE SESSION, CREATE TABLE TO username;
```

Grant System Privileges:

``` sql
GRANT CREATE TABLE TO username WITH ADMIN OPTION;
```

### Revoking Privileges

``` sql
REVOKE CREATE TABLE FROM username;
```

### Creating Roles

``` sql
CREATE ROLE role_name;
```

### Using Roles

Assign a role to a user

``` sql
GRANT role_name TO user_name
```

### Granting and Revoking Privliges on Database Objects

``` sql
GRANT privilege1, privilege2, …
ON object_name
TO user1, user 2, …;
```

``` sql
REVOKE privilege1, privilege2, …
ON object_name
FROM user1, user 2, …;
```

## PL/SQL 

[GO TO PL/SQL](./PL_SQL.md)

## Subversion Repository 
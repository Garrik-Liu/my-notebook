# PL/SQL

## PL/SQL Program Blocks 

PL/SQL stands for Procedural Language extension of SQL

A PL/SQL program can divided up into three possible sections:
1. Declaration Section
2. Body Section
3. Exception Section

Note that the Declaration and Exception sections are optional.

### Declaration Section

Use the Declaration section to declare program variables. Each program variable declaration is of the syntax:

``` sql
variable_name data_type;
```

Scalar Data Types include:
• VARCHAR2
• CHAR
• DATE
• INTERVAL YEAR TO MONTH
• INTERVAL DAY TO SECOND
• NUMBER
• BINARY_INTEGER, INTEGER, INT, SMALLINT
• DEC, DECIMAL, DOUBLE PRECISION, NUMERIC, REAL, BINARY_FLOAT, BINARY_DOUBLE
• BOOLEAN

Reference Types

**%TYPE** 
This type specifies a variable that references a single database field. 

Syntax: 

``` sql
variable_name tablename.fieldname%TYPE 
```

**%ROWTYPE** 
This type specifies a variable that references an entire data record. 

Syntax:

``` sql 
variable_name tablename%ROWTYPE 
```

### Body Section

The Body section contains the actual program statements for the PL/SQL program. It includes:


* Comments 
  * /* Multi-line */
  * -- Single line
* Arithmetic Operators: +,-,*,/,**
* String Concatenation Operator: ||
* String Functions 
  * LENGTH
  * LTRIM
  * RTRIM
  * UPPER
  * LOWER
  * INITCAP
  * INSTR (one-based index)
  * SUBSTR (one-based index)
* Assignment Statements (:=)
* Relational Operators: =, <>, !=, >, >=, <, <=
* Logical Operators: NOT, AND, OR
* Decision Statements (IF / THEN / ELSIF / ELSE, CASE)
* Loop Statements (LOOP, WHILE, FOR)
* DML Statements (SELECT, INSERT, UPDATE, DELETE)
* Explicit Cursor Statements (OPEN, FETCH, CLOSE)

#### Output

To output values to the console, use the functions

``` sql
DBMS_OUTPUT.PUT(...)
DBMS_OUTPUT.PUT_LINE(...)
DBMS_OUTPUT.NEW_LINE()
```

#### Assignment Statments

Use the `:=` operator to assign a value to a variable.

E.g.

``` sql
var := value;
```

#### CASE Statements
``` sql
CASE var
    WHEN value1 THEN
       statement1
    WHEN value2 THEN
       statement2
    ELSE
       statement3
END CASE;
```
``` sql
CASE
    WHEN boolean_expression1 THEN
       statement1
    WHEN boolean_expression2 THEN
       statement2
    ELSE
       statement3
END CASE;
```

#### Loop Types

LOOP ... EXIT 

``` sql
LOOP
    IF condition THEN
       EXIT;
    END IF;
END LOOP;
```
LOOP ... EXIT WHEN 

``` sql
LOOP
    EXIT WHEN condition;
END LOOP;
```

WHILE ... LOOP 

``` sql
WHILE condition LOOP
END LOOP;
```

#### Loop Continuation

To continue a loop instead of terminating it, replace `EXIT` or `EXIT WHEN` with `CONTINUE` or `CONTINUE WHEN`.

#### FOR LOOPs

In the case of FOR loops, the loop variable is locally declared within the loop statement. That means, it is not necessary to declare the variable in the DECLARE section of the PL/SQL block. Furthermore, a variable declared within the DECLARE section of the PL/SQL block will not be used by the FOR loop.

FOR LOOP 

``` sql
FOR var IN start .. end
LOOP
END LOOP;
```

REVERSE FOR LOOP 

``` sql
FOR var IN REVERSE end .. start
LOOP
END LOOP;
```

### Exception Section

Use the Exception section to handle run-time exceptions.

This section can be used to catch specific types of pre-defined exceptions or generically catch undefined exceptions.

Syntax:

``` sql
WHEN exception_type THEN
```

OR

``` sql
WHEN OTHERS THEN
```

User-defined exceptions can also be defined (in the Declaration section) and raised (in the Body section).

## First Example

For our first program, we will simply display the numbers from 1 to 10 on the output screen.

A PL/SQL code block executed inside a script is known as an anonymous PL/SQL block.

``` sql
SET SERVEROUTPUT ON SIZE 4000

/* Our First PL/SQL Program */
DECLARE
	countnum BINARY_INTEGER;
	limit BINARY_INTEGER := 10;
BEGIN
	IF limit < 1 THEN -- Check the limit value
		DBMS_OUTPUT.PUT_LINE('Invalid count limit.');
	ELSE
		FOR countvar IN 1..10 -- variable countvar is declared local for the FOR loop
		LOOP
			DBMS_OUTPUT.PUT(countvar || ':');
			CASE countvar
				WHEN 1 THEN
					DBMS_OUTPUT.PUT_LINE(' At the beginning.');
				WHEN 5 THEN
					DBMS_OUTPUT.PUT_LINE(' Half way there.');
				WHEN 10 THEN
					DBMS_OUTPUT.PUT_LINE(' Last one.');
				ELSE
					DBMS_OUTPUT.NEW_LINE();
			END CASE;
		END LOOP;
		DBMS_OUTPUT.NEW_LINE(); -- Print a new line character

		-- Repeat the same loop but using LOOP and EXIT WHEN; replace CASE with IF ... ELSIF ... ELSE
		countnum := 1;
		LOOP
			DBMS_OUTPUT.PUT(countnum || ':');
			IF countnum = 1 THEN
				DBMS_OUTPUT.PUT_LINE(' At the beginning.');
			ELSIF countnum = 5 THEN
				DBMS_OUTPUT.PUT_LINE(' Half way there.');
			ELSIF countnum = 10 THEN
				DBMS_OUTPUT.PUT_LINE(' Last one.');
			ELSE
				DBMS_OUTPUT.NEW_LINE();
			END IF;
			EXIT WHEN countnum = 10;
			countnum := countnum + 1;
		END LOOP;

	END IF;
END;
/
```

## Implicit Cursors

The output of a SELECT query can be assigned to an implicit cursor providing the query returns **exactly one row**

Example:

``` sql
SET SERVEROUTPUT ON SIZE 4000

/* Display the name for manager #7566 and the number of employees the manager manages */

DECLARE
	mgrsearch INTEGER := 7566;
	f_ename emp.ename%TYPE; -- define f_ename to have the same type as emp.ename
	a_count INTEGER;
BEGIN
	SELECT ename INTO f_ename FROM emp WHERE empno = mgrsearch;
	SELECT COUNT(*) INTO a_count FROM emp WHERE mgr = mgrsearch;
	DBMS_OUTPUT.PUT_LINE(f_ename || ' manages ' || a_count || ' employee(s).');
	
	-- Could also have used a subquery.  E.g.
	SELECT ename, (SELECT COUNT(*) FROM emp WHERE mgr = mgrsearch) INTO f_ename, a_count FROM emp WHERE empno = mgrsearch;
	DBMS_OUTPUT.PUT_LINE(f_ename || ' manages ' || a_count || ' employee(s).');
EXCEPTION
	WHEN NO_DATA_FOUND THEN
		DBMS_OUTPUT.PUT_LINE('There is no manager with employee number ' || mgrsearch || '.');
	WHEN OTHERS THEN
		DBMS_OUTPUT.PUT_LINE('An unexpected error has occurred.');
END;
/
```

If the SELECT statement used with an implicit cursor returns zero rows or more than one row, an error results.

This program displays the name of employee number 7566 as well as how many employees he manages.

Common exception types include:

* DUP_VAL_ON_INDEX — an attempt was made to store a duplicate column value on a column with a UNIQUE or PRIMARY KEY constraint
* NO_DATA_FOUND — a SELECT ... INTO statement did not return any rows.
* TOO_MANY_ROWS — a SELECT ... INTO statement returned more than one row.
* INVALID_NUMBER — the program has failed to convert a string into a number.
* ZERO_DIVIDE — a divide by zero has occurred.

## Creating a Stored Procedure

``` sql
SET SERVEROUTPUT ON SIZE 4000

CREATE OR REPLACE PROCEDURE MGR_EMP_COUNT
(
	pmgrsearch IN INTEGER,
	pename OUT VARCHAR2, -- define pename to have the same type as emp.ename
	pcount OUT INTEGER
)
IS
	-- No local variables to declare
BEGIN
	SELECT ename, (SELECT COUNT(*) FROM emp WHERE mgr = pmgrsearch) INTO pename, pcount FROM emp WHERE empno = pmgrsearch;
EXCEPTION
	WHEN NO_DATA_FOUND THEN
		pename := NULL;
		pcount := NULL;
END;
/

/* Display the name for manager #7566 and the number of employees the manager manages */

DECLARE
	mgrsearch INTEGER := 7566;
	f_ename emp.ename%TYPE; -- define f_ename to have the same type as emp.ename
	a_count INTEGER;
BEGIN
	MGR_EMP_COUNT(mgrsearch, f_ename, a_count);
	IF a_count IS NULL THEN
		DBMS_OUTPUT.PUT_LINE('There is no manager with employee number ' || mgrsearch || '.');
	ELSE
		DBMS_OUTPUT.PUT_LINE(f_ename || ' manages ' || a_count || ' employee(s).');
	END IF;
EXCEPTION
	WHEN OTHERS THEN
		DBMS_OUTPUT.PUT_LINE('An unexpected error has occurred.');
END;
/
```

A stored procedure can be created using the syntax

``` sql
CREATE PROCEDURE procedure_name (parameter_list) 
IS
procedure definition
```

Alternatively, to replace a procedure that already exists, use

``` sql
CREATE OR REPLACE PROCEDURE procedure_name (parameter_list) 
IS
procedure definition
```

Each parameter follows the format of a variable declaration in a PL/SQL declaration block but may include a direction. Syntax:

``` sql
variable direction type
```

Stored procedures allow three different parameter directions:

* Input parameters (the default type) — declared using `IN`
* Output parameters — declared using `OUT`
* Input/Output parameters — declared using `IN OUT`

If no parameter direction is specified, the default direction is `IN.`

An **input parameter** is passed to the stored procedure from the calling program.

An **output parameter** is returned to the calling program from the calling program.

An **input/output parameter** has an initial value that is passed into the procedure from the calling program. The procedure can update the value and then the updated value is returned to the calling program.

An input parameter can also be made optional by supplying a default value for the parameter. The default value can be NULL. 

E.g.

``` sql
parameter_name type DEFAULT default_value
```

It makes most sense to include all of the default parameters at the end of the parameter list.

The previous PL/SQL program counted the number of employees a specified manager has. This version repeats that same functionality, but using a stored procedure.

Note that a stored procedure can be called from outside of a PL/SQL block using the CALL statement. 

E.g.

``` sql
CALL procedure_name(parameter_list)
```

A stored procedure can also be called from within an anonymous PL/SQL block using standard function call notation. 

E.g.

``` sql
procedure_name(parameter_list);
```

### Deleting a stored procedure

A stored procedure can be deleted using

``` sql
DROP PROCEDURE procedure_name
```

## Creating a User-Defined Function (UDF)

A user-defined function can be created in much the same way as a stored procedure except using CREATE FUNCTION in place of CREATE PROCEDURE and including a return type before the IS clause. Again, the OR REPLACE clause can be included to replace the function if it already exists.

There are two primary differences between functions and stored procedures:

* A function always returns a value
* A function should not make changes to the database (i.e., no INSERT, UPDATE, or DELETE statements)

User-defined functions can be used just as any other Oracle function including within a SELECT statement.

A function has been created to assess whether an employees salary is average, above average, or below average. The function returns one of 'average', 'above average', or 'below average'. Then, the function is used within a SELECT statement to display the employee's name, salary, and whether the salary is average, above average, or below average.


### Deleting a user-defined function

A user-defined function can be deleted using

``` sql
DROP FUNCTION function_name
```


## CURSOR FOR Loop Statement

The cursor FOR LOOP statement implicitly declares its loop index as a record variable of the row type that a specified cursor returns, and then opens a cursor. With each iteration, the cursor FOR LOOP statement fetches a row from the result set into the record. When there are no more rows to fetch, the cursor FOR LOOP statement closes the cursor. The cursor also closes if a statement inside the loop transfers control outside the loop or raises an exception.

``` sql
FOR cursor IN (select statement)
LOOP
…
END LOOP;
```

## Explicit Cursors

Use explicit cursors to retrieve data from SELECT statements that might retrieve multiple rows, or that might return no rows at all.

Unlike implicit cursors, explicit cursors must be explicitly declared in the program's **Declaration Section**.

### Declaring An Explicit Cursor

To declare an explicit cursor, use the syntax:

``` sql
CURSOR cursor_name IS select_query;
```

### Opening An Explicit Cursor

Before being able to retrieve the row values from an explicit cursor, the cursor must be opened. Opening the explicit cursor causes the cursor's SELECT statement to execute. To open an explicit cursor, use the syntax:

``` sql
OPEN cursor_name;
```

### Fetching The Data Rows

Each row returned by the cursor's SELECT statement must be explicitly fetched to retrieve it. When the cursor is first opened, no rows have been retrieved. Use FETCH to retrieve the first and subsequent rows. The syntax is:

``` sql
FETCH cursor_name INTO variable_name(s)
```

There must be one variable for each column selected. When an attempt is made to fetch a row after the last row has been retrieved, no record is retrieved and an end condition is set. To test for this end condition, use the expression `cursor_name%NOTFOUND` (use `cursor_name%FOUND` to determine if a row has been retrieved).

Typically, cursors are fetched using a loop to iterate through all of the rows returned. 

E.g.

``` sql
FETCH cursor_name INTO variable_name(s)
WHILE cursor_name%FOUND LOOP
   .
   .
   .
   FETCH cursor_name INTO variable_name(s)
END LOOP;
```

The individual variable names in the `FETCH` can be replace by a `ROWTYPE` variable (which contains all of the columns of a cursor row). An example of each is given.

The first example displays each employee's name and indicates whether their salary is average, above average, or below average. The second example list each manager and then a list of their employees with their salary and commission (if applicable) underneath.

This example includes the `TO_CHAR` method to display currency information as text. The `TO_CHAR` function can be used to format numbers and dates by specifying a format model.


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
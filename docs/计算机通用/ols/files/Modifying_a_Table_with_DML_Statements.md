# Modifying a Table with DML Statements 

## INSERT 

``` sql
INSERT INTO table_name [(column1_name[, column2_name]. . .[, columnN_name])] VALUES (column1_value[, column2_value]. . .[, columnN_value])
INSERT INTO table_name [(column1_name[, column2_name]. . .[, columnN_name])] select_statement
```

example:

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (1280, 'Kevin', 'Dunn', 800);
```

### INSERTing DEFAULT

DEFAULT can be inserted into a table in two ways:
1. DEFAULT is explicitly indicated as an insert value
2. A column with a default value is omitted in the INSERT statement.


``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (1280, 'Kevin', 'Dunn', DEFAULT);
INSERT INTO donations (receipt_no, first_name, last_name) VALUES (1280, 'Kevin', 'Dunn');
```

### INSERTing NULL

NULL can be inserted into a table in two ways:
1. NULL is explicitly indicated as an insert value
2. A column without a default value is omitted in the INSERT statement.

``` SQL
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (1280, NULL, 'Dunn', 800);
INSERT INTO donations (receipt_no, last_name, amount) VALUES (1280, 'Dunn', 800);
```

### INSERTing Date/Time Values

To insert a date/time value into a DATE or TIMESTAMP type column, the date text must be converted to a date type in order to be inserted.

Use:

``` SQL
TO_DATE('date_string', 'date_format_model')
```

``` SQL
INSERT INTO card_accounts (card_number, first_name, middle_initial, last_name, valid_date, expiry_date) VALUES (55555555, 'Cathy', NULL, 'Puck', TO_DATE('11-NOV-2005', 'DD-MON-YYYY'), TO_DATE('10-NOV-2006', 'DD-MON-YYYY'));
```

### INSERTing Interval Values

To insert interval values into a INTERVAL YEAR TO MONTH or INTERVAL DAY TO SECOND type column, the interval text must be converted to the appropriate interval type in order to be inserted.

Use:

``` SQL
TO_YMINTERVAL('years-months')
```

for the INTERVAL YEAR TO MONTH type 

``` SQL
TO_DSINTERVAL('days HH:MI:SS.99') 
```

for the INTERVAL DAYS TO SECOND type.

``` SQL
INSERT INTO events (duration, next_event) VALUES (TO_DSINTERVAL('0 02:30:00'), TO_YMINTERVAL('1-6'));
```

### INSERTing Values with Subqueries

To insert values into a table from a subquery, simply include the subquery in the VALUES list.

Example: Imagine the charity donor with receipt number 1280 has decided to donate another $200. A subquery can be used to retrieve the donor's name.

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (2540, (SELECT first_name FROM donations WHERE receipt_no = 1280), (SELECT last_name FROM donations WHERE receipt_no = 1280), 200);
``` 

### INSERTing Values with INSERT SELECT

To insert the resulting rows from a SELECT statement into a table, simply include the SELECT statement as values list.

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) SELECT 2540, first_name, last_name, 200 FROM donations WHERE receipt_no = 1280;
```

## UPDATE

Existing data in the table is modified using the UPDATE statement. The basic syntax of the UPDATE statement is :

``` sql
UPDATE table_name SET column1_name = expression1 [, column2_name = expression2], . . ., [, columnN_name = expressionN] [WHERE condition]
```

Note that the WHERE condition is required to indicate which rows will be affected. 
If WHERE is omitted, the ALL of the rows in the table will be affected. 
Typically the WHERE clause identifies a unique row by its primary key.

The values NULL and DEFAULT can be used to specify a NULL value or a column's default value.

``` sql
UPDATE donations SET last_name = NULL, amount = 880 WHERE receipt_no = 1280;
UPDATE donations SET last_name = 'Dunn', amount = DEFAULT WHERE receipt_no = 1280;
```

? In a mult-user environment where another user may have modified the data in question, the original data values are also expressed in the WHERE clause to ensure that no data is lost in the update. This is called a pessimistic update.

``` sql
UPDATE donations SET last_name = NULL, amount = 880 WHERE receipt_no = 1280 AND last_name = 'Dunn' AND amount = 800;
```

By contrast, an optimistic update will specify minimally the primary key value in the where clause assuming the data being updated has not changed since it was previously read.

``` sql
UPDATE donations SET last_name = NULL, amount = 880 WHERE receipt_no = 1280;
```

Again, subqueries can be used; to set a column to a value specified by a subquery, include the subquery after the `=`.

``` sql
UPDATE donations SET last_name = (SELECT last_name FROM donations WHERE receipt_no = 2540), amount = 880 WHERE receipt_no = 1280;
```

OR

``` sql
UPDATE donations SET (last_name, amount) = (SELECT last_name, 880 FROM donations WHERE receipt_no = 2540) WHERE receipt_no = 1280;
```

## DELETE 

Existing data in the table is deleted using the DELETE statement. The basic syntax of the DELETE statement is:

``` sql
DELETE FROM table_name [WHERE condition]
```

Again, note that the WHERE condition is required to indicate which rows will be deleted. If WHERE is omitted, then ALL of the rows are deleted. Typically the WHERE clause identifies a unique row by its primary key.

``` sql
DELETE FROM donations WHERE receipt_no = 1280;
```

Note that a row with a primary key cannot be deleted while a foreign key still refers to that primary key. 

If it is desireable that any related foreign keys are automatically removed as well or that foreign keys are set to NULL, the foreign key can be defined with the phrase `ON DELETE CASCADE` or `ON DELETE SET NULL`.

In CREATE TABLE or ALTER TABLE statement:

``` sql
receipt_no NUMBER(8)
    CONSTRAINT receipt_no_fk REFERENCES donations(receipt_no) ON DELETE CASCADE
```

or

``` sql
receipt_no NUMBER(8)
    CONSTRAINT receipt_no_fk REFERENCES donations(receipt_no) ON DELETE SET NULL
```

## Sequences

### Creating Sequences

A sequence is a database object that can be used to create unique surrogate key values. A sequence can be created using the CREATE SEQUENCE statement.

``` sql
CREATE SEQUENCE receipt_no_sequence
    START WITH 1290
    INCREMENT BY 10;
```

If START WITH is not specified, the default is 1. If INCREMENT BY is not specified, the default is 1.

### Using Sequences

To retrieve the next value in a sequence, reference the NEXTVAL pseudocolumn using the general syntax:

``` sql
sequence_name.NEXTVAL
```

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (receipt_no_sequence.NEXTVAL, 'Kevin', 'Dunn', 800);
```

Reference the CURRVAL pseudocolumn to get the last generated sequence value on the connection. This is useful when inserting foreign key values when the primary key value was generated with the sequence.

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

### Deleting Sequences

To delete a sequence object, use the DROP SEQUENCE statement.

``` sql
DROP SEQUENCE receipt_no_sequence;
```

## Transactions

A transaction is defined as a logical unit of work — a set of database changes to one or more tables that accomplish a defined task.

A transaction begins after a COMMIT statement, a ROLLBACK statement, or an initial database connection. A transaction ends when a COMMIT statement is processed, a ROLLBACK statement is processed, or the database connection is terminated

Example:

Imagine transfering $200 from your savings account to your chequing account through an ATM. You insert your card, select transfer, specify from savings and to chequing, specify the amount as $200 and press OK. To complete the transaction, the system must deduct $200 from your savings account balance and add $200 to your chequing account balance. The transaction is only complete when both steps have been performed — that is, both operations comprise a single logical unit of work.

### ROLLBACK Statement

ROLLBACK statement will undo all the statement since the connection was established or since the last committed transaction.

In the above example, the ATM software might issue an UPDATE statement to deduct an amount of $200 from your savings account and then issue another UPDATE statement to add an amount of $200 to your chequing account. Imagine after the first UPDATE statement was issued, but before the second UPDATE statement was issued, the CANCEL button was pressed (on the ATM). To cancel the operation, the ATM must not only abandon the second UPDATE statement, but also undo the changes caused by the first UPDATE statement. The ROLLBACK statement will undo the UPDATE statement (and any other statements since the connection was established or since the last committed transaction).

### Commit Statement

A COMMIT statement would finalize the transaction.

In the above example, the ATM software might issue an UPDATE statement to deduct an amount of $200 from your savings account and then issue another UPDATE statement to add an amount of $200 to your chequing account. A COMMIT statement would finalize the transaction so that it cannot be undone.

``` sql
UPDATE account SET balance = balance - 200 WHERE account_no = 12345678;
UPDATE account SET balance = balance + 200 WHERE account_no = 98765432;
COMMIT;
```

### Savepoints

If a transaction (which is a logical unit of work) is actually made up of smaller sub-transactions each of which is also a logical unit of work, each sub-transaction can be noted by specifying a savepoint

``` sql
SAVEPOINT savepoint_name;
```

Then, if part of the transaction must be undone, it could be undone to a specified savepoint

``` sql
ROLLBACK TO savepoint_name;
```
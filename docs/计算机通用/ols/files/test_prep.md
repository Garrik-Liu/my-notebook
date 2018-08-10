# Test Prep

## SQL Tutorial

[SQL Tutorial](https://www.w3schools.com/sql/default.asp)

## Using Single-Row Functions

[Oracle Functions List](https://www.w3schools.com/sql/sql_ref_oracle.asp)

## Using Aggregate / Group Functions

Grouping allows several rows in a table to be grouped together and for a single value to be computed based on the group of rows. 

* [MIN(), MAX()](https://www.w3schools.com/sql/sql_min_max.asp)
* [COUNT(), AVG(), SUM()](https://www.w3schools.com/sql/sql_count_avg_sum.asp)

``` sql
SELECT MIN(Price) AS SmallestPrice
FROM Products;
```

## Using FROM, WHERE, GROUP BY, HAVING, ORDER BY, Distinct

#### FROM

``` sql
SELECT * FROM table_name;
```

#### WHERE

`WHERE` clause is used to filter records.

``` sql
SELECT * FROM Customers WHERE Country='Mexico'; 
```

#### Group By

`GROUP BY` statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.

The `GROUP BY` clause tells the database server to group rows **based on the distinct values** that exist for the specified columns. 

Syntax:

``` sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s); 
```

E.g: Display the average salary per job type:

``` sql
SELECT AVG(sal) AS avg_sal FROM emp GROUP BY job;
```

E.g: Lists the number of customers in each country, sorted high to low:

``` sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

#### HAVING

`HAVING` clause was added to SQL because the `WHERE` keyword could not be used with aggregate functions.
`HAVING` clause can impose a further condition based on an aggregate or group condition.

Syntax:

``` sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```

E.g: Lists the number of customers in each country. Only include countries with more than 5 customers:

``` sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```

#### Order By

`ORDER BY` keyword is used to sort the result-set in ascending or descending order.

E.g: Selects all customers from the "Customers" table, sorted DESCENDING by the "Country" column:

``` sql
SELECT * FROM Customers
ORDER BY Country DESC; 
```

#### Distinct

`SELECT DISTINCT` statement is used to return only distinct (different) values.

E.g: Selects only the DISTINCT values from the "Country" column in the "Customers" table:

``` sql
SELECT DISTINCT Country FROM Customers;
```

E.g: Lists the number of different (distinct) customer countries:

``` sql
SELECT COUNT(DISTINCT Country) FROM Customers;
```

## Joins: Inner-Join, Outer Joins (Left Join and Right Join)

A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them.

* INNER JOIN: Returns records that have matching values in both tables
* LEFT JOIN: Return all records from the left table, and the matched records from the right table
* RIGHT JOIN: Return all records from the right table, and the matched records from the left table
* FULL (OUTER) JOIN: Return all records when there is a match in either left or right table

![Screen Shot 2018-08-06 at 11.11.45 PM](https://i.imgur.com/JAWya3N.png)

#### Inner Join

``` sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders INNER JOIN Customers 
ON Orders.CustomerID = Customers.CustomerID; 
```

E.g: Display the employee number, name, job, salary, and salary grade for each employee

``` sql
SELECT empno, ename, job, sal, grade 
FROM emp INNER JOIN salgrade 
ON sal BETWEEN losal and hisal 
ORDER BY sal DESC;
```

#### Left Join

E.g: select all customers, and any orders they might have:

``` sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers LEFT JOIN Orders 
ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

#### Right Join

E,g: Return all employees, and any orders they might have placed:

``` sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders RIGHT JOIN Employees 
ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID; 
```

## Joins: Non-equi Join, Multiple Table Joins, Self Joins

## Using SET operators (UNION, UNION ALL, INTERSECT, MINUS)

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

## Subqueries 

A subquery allows the results of one SELECT statement to be used in another DML statement.

When used in a DML statement, a subquery must be enclosed in parentheses. The number of rows returned by a subquery must match the number of values that the function or operator expects. The `ORDER BY` clause cannot used within a subquery 

E.g: get the employee number, name, job, and salary of all employees that make more than the lowest paid salesman.

``` sql
SELECT empno, ename, job, sal FROM emp
WHERE sal > (SELECT MIN(sal) FROM emp WHERE job = 'SALESMAN');
```

### Using Subqueries with IN, NOT IN

Using `IN` in a subquery allows a column or expression to be compared to a set of values returned from the subquery.

E.g:  Get employee numbers of all of the managers of the clerks and analysts.

``` sql
SELECT mgr FROM emp where job IN ('CLERK', 'ANALYST');
```

### Nested Subqueries

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

### Correlated Subqueries

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


### Subquery Virtual Columns

A subquery can appear as a virtual column expression. This is a form of correlated subquery; that is, the subquery must execute for every row of the query. The subquery must return a single row and column.

E.g: list each employee along with the name of the employee's department.

``` sql
SELECT ename, (SELECT dname FROM dept WHERE dept.deptno = emp.deptno) AS dname FROM emp;
```

E.g:  list the name and the number of employees in each department.

``` sql
SELECT dname, (SELECT COUNT(*) FROM emp WHERE emp.deptno = dept.deptno) AS num_emps FROM dept;
```


### Subquery Virtual Tables

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

### Using Subqueries with INSERT, UPDATE, and DELETE

[My Note](https://garrik-liu.github.io/front-end-notebook/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%80%9A%E7%94%A8/ols/files/Modifying_a_Table_with_DML_Statements.html#insert)

#### Insert

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) 
VALUES (1280, 'Kevin', 'Dunn', 800);
```

Insert Date:

``` sql
INSERT INTO card_accounts (card_number, first_name, middle_initial, last_name, valid_date, expiry_date) VALUES (55555555, 'Cathy', NULL, 'Puck', TO_DATE('11-NOV-2005', 'DD-MON-YYYY'), TO_DATE('10-NOV-2006', 'DD-MON-YYYY'));
```

Insert Internal:

``` sql
INSERT INTO events (duration, next_event) 
VALUES (TO_DSINTERVAL('0 02:30:00'), TO_YMINTERVAL('1-6'));
```

#### Update

``` sql
UPDATE donations SET last_name = NULL, amount = 880 WHERE receipt_no = 1280;

UPDATE donations SET last_name = 'Dunn', amount = DEFAULT WHERE receipt_no = 1280;

UPDATE donations SET last_name = NULL, amount = 880 
WHERE receipt_no = 1280 AND last_name = 'Dunn' AND amount = 800;
```

#### Delete

``` sql
DELETE FROM donations WHERE receipt_no = 1280;
```

Note that a row with a primary key cannot be deleted while a foreign key still refers to that primary key.

If it is desireable that any related foreign keys are automatically removed as well or that foreign keys are set to NULL, the foreign key can be defined with the phrase `ON DELETE CASCADE` or `ON DELETE SET NULL`.

``` sql
receipt_no NUMBER(8)
    CONSTRAINT receipt_no_fk REFERENCES donations(receipt_no) ON DELETE CASCADE

receipt_no NUMBER(8)
    CONSTRAINT receipt_no_fk REFERENCES donations(receipt_no) ON DELETE SET NULL
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

## ASP.NET 

### Using Data Access Objects

A **Employee** class is created to represent one employee. The constructor for the class takes parameters representing the employee's data. The **EmployeeDAO** class is used to get a List<Employee> object representing all of the employees. This object is suitable to use as a data source for our GridView.

``` c
EmployeeDAO employeeDAO = new EmployeeDAO(username, password);
List<Employee> employees;
employees = employeeDAO.LoadAll();
gvEmp.DataSource = employees;
gvEmp.DataBind();
```

### Using GridView, Drop Down List, DetailView components (including binding)

**GridView** can used to display database data.

To populate the GridView, create a data table and fill it with the results of a SELECT statement. Then set the data table as the DataSource for the GridView and bind it. 

``` c
OracleConnection conn = new OracleConnection(String.Format("Data Source=Neptune; User Id={0}; Password={1}", txtUsername.Text, txtPassword.Text));
OracleCommand cmd = new OracleCommand("SELECT empno, ename, job, sal, comm, deptno FROM emp", conn);
OracleDataAdapter da = new OracleDataAdapter(cmd);
DataTable dt = new DataTable();
da.Fill(dt);
gvEmp.DataSource = dt;
gvEmp.DataBind();
```

### Using GridView RowCommand events

The grid view's **RowCommand** event is invoked when the grid view's Edit button is clicked. The GridView can have more than one button. To distinguish which button is being pressed, check the event's CommandName property (from the **GridViewCommandEventArgs** object). The property value will match the CommandName property set for the button. 
E.g.
``` c
if ("EDIT" == e.CommandName)
```

When the user clicks the Edit button, the row corresponding to which edit button was clicked is sent to the event in the **GridViewCommandEventArgs** object's **CommandArgument** property. 


### Using the IsPostBack property in the PageLoad event

All events occur only when the form is sent back to the server (called **Posting Back** to the server). 

Once all of the event code has run, the response page is constructed and sent back to the browser. This cycle is called a **round trip**

.Initialization code is often added to the page's **Load** event. that the page's Load event occurs each time the page loads

If the initialization should only occur when the page first loads but not during user post back events, use the form's IsPostBack property to test for this.

``` c
protected void Page_Load(object sender, EventArgs e){    
    if (!IsPostBack) {
    ...
    }
}
```

### Using Validators and the IsValid property

You can add a **validator** to the web form from the Validation section of the toolbox

Tie the validator to a web control using its **ConstrolToValidate** property.

Note that when using validators with a .NET 4.5 web application project you may get the error message:s

> WebForms UnobtrusiveValidationMode requires a ScriptResourceMapping for 'jquery'. Please add a ScriptResourceMapping named jquery(case-sensitive).
> 
To resolve the problem, open your Web.config file and add the code

``` html 
<appSettings>    
    <add key="ValidationSettings:UnobtrusiveValidationMode" value="None" /> 
</appSettings> 
``` 

just before the `</configuration>` element.   


If event code should only run if the validation was successful, the use the form's **IsValid** property to test the validation results. The function returns True only if all form validations were successful.  

``` c

protected void btnSubmit_Click(object sender, EventArgs e) {    
    if (IsValid){      ...    }
}
```

### Using URL-encoded parameters

URL-encoded can used to pass data from previous page. To add a URL-encoded parameter, append `?name=value ` to the URL of the desired page 

``` c
int receiptNo;
// 解析 url query
if (int.TryParse(Request.Params["receiptno"], out receiptNo)
```

### Page Transfers (Server.Transfer)

`Server.Transfer(url)` is used to make an internal transfer to the desired page. The browser is unaware of the transfer and does not display the new URL in its address bar. This could be a bit confusing for the user in some instances but often is desirable.


``` c
Server.Transfer("~/Birthday.aspx");
```

### Page Redirection (Response.Redirect)

`Response.Redirect(url)` is used to send back a special redirection response to the browser. The browser will then send a new request for the new URL. This URL will then appear in the browser's address bar.

``` c
Response.Transfer("~/Birthday.aspx");
```

### Retrieving Data From Previous Page Controls

After navigating to a new page using either server transfer or cross-page posting,
the controls of the previous page can still be accessed using the page's **PreviousPage** object.
Simply check first that this object is not null. Then any control from the previous page can be found using the `PreviousPage.FindControl` method.

``` c
Calendar calBirthdate = (Calendar)PreviousPage.FindControl("calBirthdate");
TextBox txtName = (TextBox)PreviousPage.FindControl("txtName");
```

To retrieve public properties defined in the web form page, include the line

``` html
<%@ PreviousPageType VirtualPath="previous page name.aspx"%>
```

E.g:

``` html
<!-- PREVIOUS PAGE IS HOME -->
<%@ PreviousPageType VirtualPath="Home.aspx"%>
```

### Creating/Using master-detail pages

A master/detail page allows a record to be selected in one data control and then have detail data related to the selected record displayed in another data control.

For example, selecting a department in one data control and then seeing a list of employees in that department in the other data control.

The master/detail page uses two data sources: 
* one for the master records 
* one for the related detail records.

Add a Drop Down List to the web form. Select the data source created above for its data source. Specify the DataTextField as DNAME and the DataValueField as DEPTNO.

Important! The DropDownList's **AutoPostBack** property is set to `True` so that the selection is sent to the server immediately when the selection is made.

``` c
if (!IsPostBack) // Only populate the drop down if the request is not a postback request
{
    LoginInfo login = (LoginInfo)Session["login"];
    DepartmentDAO departmentDAO = new DepartmentDAO(login.UserName, login.Password);

    ddlDept.DataSource = departmentDAO.LoadAll();
    ddlDept.DataTextField = "Dname";
    ddlDept.DataValueField = "DeptNo";
    ddlDept.DataBind();
}
```

Also, the first entry in the list is an invalid entry prompting the user to select a department. The property `AppendDataBoundItems` is set to `True` to allow the data bound items to be added after this item. It is, therefore, important to not add more items every time the page loads. So the page load event includes a condition to only populate the list if the request is not a postback request (a postback request occurs when you respond to the page by clicking on a button, or selecting an item in a list, etc.

When the `SelectedIndexChanged` event occurs, the value is retrieved and used to look up data corresponding to the master data selection and display it.

``` C
protected void ddlDept_SelectedIndexChanged(object sender, EventArgs e)
{
    LoginInfo login = (LoginInfo)Session["login"];
    EmployeeDAO employeeDAO = new EmployeeDAO(login.UserName, login.Password);
    int deptNo = Convert.ToInt32(ddlDept.SelectedValue);
    List<Employee> employees = employeeDAO.FindByDepartmentNo(deptNo);
    gvEmp.DataSource = employees;
    gvEmp.DataBind();
    if (0 == employees.Count)
        lblNoEmployees.Visible = deptNo != 0;
    else
        lblNoEmployees.Visible = false;
}
```

Add a GridView control to the web form. Set its data source to the second (detail) data source.


### Using login authentication scheme (with BasePage)

We want to force the user to log in before being able to view any pages.  To do that we can use inheritance: a base Web Form page is created from which all other pages that need authentication can inherit.

That is, in all future pages, change the clause:

``` c#
public partial class Home : BasePage
```

assuming **BasePage** is the name of the WebForm used as the base page.

In the code of this base page, add

``` c
protected override void OnInit(EventArgs e)
 {
    base.OnInit(e);
    if (Context != null && Context.Session != null && null == Session["login"])
       Response.Redirect("~/Login.aspx");
 }
```

![Capture](https://i.imgur.com/8D04AUB.jpg)

The session item "login" will contain a `LoginInfo` object that is created by the **login page**.

To login, we will simply try to connect to the database using the given username and password. If the connection is successful, the user is authenticated. If the connection fails, we assume that either the username or password is invalid.

Login Page Code:

``` c
protected void btnLogin_Click(object sender, EventArgs e)
{
    if (IsValid)
    {
        try
        {
            LoginInfo loginInfo = DatabaseHelper.Login(txtUserName.Text, txtPassword.Text);
            Session.Add("login", loginInfo); // Save login information into session
            Response.Redirect("~/Home.aspx");
        }
        catch (Exception)
        {
            lblInvalid.Visible = true;
        }
    }
}
```

Home Page Code:

``` c
protected void Page_Load(object sender, EventArgs e)
{
    LoginInfo login = (LoginInfo)Session["login"];
    EmployeeDAO employeeDAO = new EmployeeDAO(login.UserName, login.Password);
    gvEmp.DataSource = employeeDAO.LoadAll();
    gvEmp.DataBind();
}

 protected void btnLogout_Click(object sender, EventArgs e)
{
    Session.Abandon();
    Response.Redirect("~/Home.aspx");
}
```


### Using Command Parameters 

``` c
...
OracleCommand cmd = new OracleCommand("SELECT first_name, last_name, amount FROM donations WHERE receipt_no = :receiptNo", conn);
...
cmd.Parameters.AddWithValue(":receiptNo", receiptNo);
```


### Executing INSERT, UPDATE, and DELETE statements from ASP.NET

直接去看代码吧.

### Sequences

#### Creating Sequences:

A sequence is a database object that can be used to create unique surrogate key values.  A sequence can be created using the `CREATE SEQUENCE` statement.

``` sql
CREATE SEQUENCE receipt_no_sequence
   START WITH 1290
   INCREMENT BY 10;
```

If START WITH is not specified, the default is 1. If INCREMENT BY is not specified, the default is 1.

#### Using Sequences

To retrieve the next value in a sequence, reference the `NEXTVAL` pseudocolumn

``` sql
INSERT INTO donations (receipt_no, first_name, last_name, amount) VALUES (receipt_no_sequence.NEXTVAL, 'Kevin', 'Dunn', 800);
```

the `CURRVAL` pseudocolumn to get the last generated sequence value on the connection. This is useful when inserting foreign key values when the primary key value was generated with the sequence. 
E.g.:
 
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

#### Deleting Sequences

To delete a sequence object, use the `DROP SEQUENCE` statement.

``` sql
DROP SEQUENCE receipt_no_sequence;
```
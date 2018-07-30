(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"pl-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pl-sql","aria-hidden":"true"}},[t._v("#")]),t._v(" PL/SQL")]),a("h2",{attrs:{id:"pl-sql-program-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pl-sql-program-blocks","aria-hidden":"true"}},[t._v("#")]),t._v(" PL/SQL Program Blocks")]),a("p",[t._v("PL/SQL stands for Procedural Language extension of SQL")]),a("p",[t._v("A PL/SQL program can divided up into three possible sections:")]),a("ol",[a("li",[t._v("Declaration Section")]),a("li",[t._v("Body Section")]),a("li",[t._v("Exception Section")])]),a("p",[t._v("Note that the Declaration and Exception sections are optional.")]),a("h3",{attrs:{id:"declaration-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaration-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Declaration Section")]),a("p",[t._v("Use the Declaration section to declare program variables. Each program variable declaration is of the syntax:")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("variable_name data_type"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Scalar Data Types include:\n• VARCHAR2\n• CHAR\n• DATE\n• INTERVAL YEAR TO MONTH\n• INTERVAL DAY TO SECOND\n• NUMBER\n• BINARY_INTEGER, INTEGER, INT, SMALLINT\n• DEC, DECIMAL, DOUBLE PRECISION, NUMERIC, REAL, BINARY_FLOAT, BINARY_DOUBLE\n• BOOLEAN")]),a("p",[t._v("Reference Types")]),a("p",[a("strong",[t._v("%TYPE")]),t._v("\nThis type specifies a variable that references a single database field.")]),a("p",[t._v("Syntax:")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("variable_name tablename"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fieldname"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),a("span",{attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" \n")])])]),a("p",[a("strong",[t._v("%ROWTYPE")]),t._v("\nThis type specifies a variable that references an entire data record.")]),a("p",[t._v("Syntax:")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("variable_name tablename"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v("ROWTYPE \n")])])]),a("h3",{attrs:{id:"body-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Body Section")]),a("p",[t._v("The Body section contains the actual program statements for the PL/SQL program. It includes:")]),a("ul",[a("li",[t._v("Comments\n"),a("ul",[a("li",[t._v("/* Multi-line */")]),a("li",[t._v("-- Single line")])])]),a("li",[t._v("Arithmetic Operators: +,-,*,/,**")]),a("li",[t._v("String Concatenation Operator: ||")]),a("li",[t._v("String Functions\n"),a("ul",[a("li",[t._v("LENGTH")]),a("li",[t._v("LTRIM")]),a("li",[t._v("RTRIM")]),a("li",[t._v("UPPER")]),a("li",[t._v("LOWER")]),a("li",[t._v("INITCAP")]),a("li",[t._v("INSTR (one-based index)")]),a("li",[t._v("SUBSTR (one-based index)")])])]),a("li",[t._v("Assignment Statements (:=)")]),a("li",[t._v("Relational Operators: =, <>, !=, >, >=, <, <=")]),a("li",[t._v("Logical Operators: NOT, AND, OR")]),a("li",[t._v("Decision Statements (IF / THEN / ELSIF / ELSE, CASE)")]),a("li",[t._v("Loop Statements (LOOP, WHILE, FOR)")]),a("li",[t._v("DML Statements (SELECT, INSERT, UPDATE, DELETE)")]),a("li",[t._v("Explicit Cursor Statements (OPEN, FETCH, CLOSE)")])]),a("h4",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[t._v("#")]),t._v(" Output")]),a("p",[t._v("To output values to the console, use the functions")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("DBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NEW_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"assignment-statments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assignment-statments","aria-hidden":"true"}},[t._v("#")]),t._v(" Assignment Statments")]),a("p",[t._v("Use the "),a("code",[t._v(":=")]),t._v(" operator to assign a value to a variable.")]),a("p",[t._v("E.g.")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("var :"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"case-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case-statements","aria-hidden":"true"}},[t._v("#")]),t._v(" CASE Statements")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" var\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" value1 "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n       statement1\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" value2 "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n       statement2\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("\n       statement3\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("CASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("CASE")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" boolean_expression1 "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n       statement1\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" boolean_expression2 "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n       statement2\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("\n       statement3\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("CASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"loop-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loop-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Loop Types")]),a("p",[t._v("LOOP ... EXIT")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" condition "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n       "),a("span",{attrs:{class:"token keyword"}},[t._v("EXIT")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("IF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("LOOP ... EXIT WHEN")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("EXIT")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" condition"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("WHILE ... LOOP")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("WHILE")]),t._v(" condition "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"loop-continuation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loop-continuation","aria-hidden":"true"}},[t._v("#")]),t._v(" Loop Continuation")]),a("p",[t._v("To continue a loop instead of terminating it, replace "),a("code",[t._v("EXIT")]),t._v(" or "),a("code",[t._v("EXIT WHEN")]),t._v(" with "),a("code",[t._v("CONTINUE")]),t._v(" or "),a("code",[t._v("CONTINUE WHEN")]),t._v(".")]),a("h4",{attrs:{id:"for-loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-loops","aria-hidden":"true"}},[t._v("#")]),t._v(" FOR LOOPs")]),a("p",[t._v("In the case of FOR loops, the loop variable is locally declared within the loop statement. That means, it is not necessary to declare the variable in the DECLARE section of the PL/SQL block. Furthermore, a variable declared within the DECLARE section of the PL/SQL block will not be used by the FOR loop.")]),a("p",[t._v("FOR LOOP")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" var "),a("span",{attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("start")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("REVERSE FOR LOOP")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" var "),a("span",{attrs:{class:"token operator"}},[t._v("IN")]),t._v(" REVERSE "),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("start")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"exception-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Exception Section")]),a("p",[t._v("Use the Exception section to handle run-time exceptions.")]),a("p",[t._v("This section can be used to catch specific types of pre-defined exceptions or generically catch undefined exceptions.")]),a("p",[t._v("Syntax:")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" exception_type "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n")])])]),a("p",[t._v("OR")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" OTHERS "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n")])])]),a("p",[t._v("User-defined exceptions can also be defined (in the Declaration section) and raised (in the Body section).")]),a("h2",{attrs:{id:"first-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-example","aria-hidden":"true"}},[t._v("#")]),t._v(" First Example")]),a("p",[t._v("For our first program, we will simply display the numbers from 1 to 10 on the output screen.")]),a("p",[t._v("A PL/SQL code block executed inside a script is known as an anonymous PL/SQL block.")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" SERVEROUTPUT "),a("span",{attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" SIZE "),a("span",{attrs:{class:"token number"}},[t._v("4000")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* Our First PL/SQL Program */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v("\n\tcountnum BINARY_INTEGER"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" BINARY_INTEGER :"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("-- Check the limit value")]),t._v("\n\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Invalid count limit.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" countvar "),a("span",{attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1.")]),a("span",{attrs:{class:"token number"}},[t._v(".10")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("-- variable countvar is declared local for the FOR loop")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countvar "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("':'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("CASE")]),t._v(" countvar\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' At the beginning.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' Half way there.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' Last one.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("\n\t\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NEW_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("CASE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NEW_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("-- Print a new line character")]),t._v("\n\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("-- Repeat the same loop but using LOOP and EXIT WHEN; replace CASE with IF ... ELSIF ... ELSE")]),t._v("\n\t\tcountnum :"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),t._v("\n\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countnum "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("':'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" countnum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' At the beginning.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tELSIF countnum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' Half way there.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tELSIF countnum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("' Last one.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ELSE")]),t._v("\n\t\t\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NEW_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("IF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("EXIT")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" countnum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tcountnum :"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" countnum "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("LOOP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("IF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),a("h2",{attrs:{id:"implicit-cursors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-cursors","aria-hidden":"true"}},[t._v("#")]),t._v(" Implicit Cursors")]),a("p",[t._v("The output of a SELECT query can be assigned to an implicit cursor providing the query returns "),a("strong",[t._v("exactly one row")])]),a("p",[t._v("Example:")]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" SERVEROUTPUT "),a("span",{attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" SIZE "),a("span",{attrs:{class:"token number"}},[t._v("4000")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* Display the name for manager #7566 and the number of employees the manager manages */")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DECLARE")]),t._v("\n\tmgrsearch "),a("span",{attrs:{class:"token keyword"}},[t._v("INTEGER")]),t._v(" :"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7566")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tf_ename emp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),a("span",{attrs:{class:"token keyword"}},[t._v("TYPE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("-- define f_ename to have the same type as emp.ename")]),t._v("\n\ta_count "),a("span",{attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("BEGIN")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ename "),a("span",{attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" f_ename "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" emp "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" empno "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mgrsearch"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" a_count "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" emp "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" mgr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mgrsearch"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f_ename "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' manages '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" a_count "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' employee(s).'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("-- Could also have used a subquery.  E.g.")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ename"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" emp "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" mgr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mgrsearch"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" f_ename"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a_count "),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" emp "),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" empno "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mgrsearch"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f_ename "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' manages '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" a_count "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' employee(s).'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEXCEPTION\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" NO_DATA_FOUND "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'There is no manager with employee number '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" mgrsearch "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("WHEN")]),t._v(" OTHERS "),a("span",{attrs:{class:"token keyword"}},[t._v("THEN")]),t._v("\n\t\tDBMS_OUTPUT"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PUT_LINE"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'An unexpected error has occurred.'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("END")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),a("p",[t._v("If the SELECT statement used with an implicit cursor returns zero rows or more than one row, an error results.")]),a("p",[t._v("This program displays the name of employee number 7566 as well as how many employees he manages.")]),a("p",[t._v("Common exception types include:")]),a("ul",[a("li",[t._v("DUP_VAL_ON_INDEX — an attempt was made to store a duplicate column value on a column with a UNIQUE or PRIMARY KEY constraint")]),a("li",[t._v("NO_DATA_FOUND — a SELECT ... INTO statement did not return any rows.")]),a("li",[t._v("TOO_MANY_ROWS — a SELECT ... INTO statement returned more than one row.")]),a("li",[t._v("INVALID_NUMBER — the program has failed to convert a string into a number.")]),a("li",[t._v("ZERO_DIVIDE — a divide by zero has occurred.")])])])}],!1,null,null,null);s.default=e.exports}}]);
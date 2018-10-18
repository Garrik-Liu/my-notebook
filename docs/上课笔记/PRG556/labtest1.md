# LAB TEST

## Creating and using Servlets 

The **URL Pattern** indicates the web address that will direct the request to our Servlet.

🌰

``` java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/xhtml+xml");
		response.setCharacterEncoding("UTF-8"); // set the character encoding BEFORE getting the PrintWriter object
		PrintWriter out = response.getWriter();
		out.println("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>");
		out.println("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">");
		out.println("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
		out.println("<head>");
		out.println("<title>Greeting Application</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<p>Hello <em>cruel</em> world!</p>");
		out.println("</body>");
		out.println("</html>");
	}
```

『 `out` 』 is the PrintWriter object, is ways to produce the servlet output in Java

* **`out.println`**: Ouptuts a String or primitive type to the PrintWriter's output stream **followed by a new-line character**.
* **`out.print`**: Outputs a String or primitive type to the PrintWriter's output stream **without appending a new-line** character.
* **`out.printf`**: Sends formatted output to the PrintWriter's output stream. This printf method works similar to the C printf function.

## Creating and using Filters 

For each filter whose url-pattern matches the requested url, that filter's `doFilter` method is called.
to continue on to the index.jspx page, the filter code simply calls `chain.doFilter()`. Note that the action attribute on the form specifies `action="index.jspx"`.

🌰 

``` java
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException
	{
		HttpServletRequest request = (HttpServletRequest)req;
		
		if ("POST".equals(request.getMethod())) // request.getMethod requires an HttpServletRequest object
		{
			String name = request.getParameter("name");
			String gender = request.getParameter("gender");
			String province = request.getParameter("province");
			String love = request.getParameter("love");
			if (name != null && name.trim().length() > 0)
				request.setAttribute("name", name.trim());
			request.setAttribute("gender", gender);
			request.setAttribute("province", province);
			request.setAttribute("love", love != null);
		}
		chain.doFilter(req, resp);
	}
```

### Filter Initialization Parameters

Initialization parameters for the filter can be supplied by way of the `@WebFilter` annotation. 

To access these parameters, use the filter's javax.servlet.FilterConfig object (passed in the filter's `init()` method). Then, use the object's `getInitParameter(parameter name)` method to get the specific parameter value. 

The value returned is a **String**. If the parameter is not found, the value returned is `null`.

``` java
@WebFilter(
		urlPatterns = { "/random.jspx" }, 
		initParams = { 
				@WebInitParam(name = "min-terms", value = "3", description = "Minimum number of terms"), 
				@WebInitParam(name = "max-terms", value = "10", description = "Maximum number of terms")
		})
```

``` java
public void init(FilterConfig fConfig) throws ServletException
	{
		try
		{
			int minTerms = Integer.parseInt(fConfig.getInitParameter("min-terms"));
			//setMinTerms(minTerms); // Save min terms to class field
		}
		catch (Exception e)
		{
			// Do nothing, leave default value
		}
		try
		{
			int maxTerms = Integer.parseInt(fConfig.getInitParameter("max-terms"));
			//setMaxTerms(maxTerms); // Save max terms to class field
		}
		catch (Exception e)
		{
			// Do nothing, leave default value
		}
	}
```

### Servlet vs Filter

With a Servlet, the URL mapping indicates the URL that will capture the request.   For example, have a servlet that specifies its url pattern as /hello. Then when the browser requests `<context-root>/hello`, the request is directed to the Servlet. The servlet may then forward the request to a response page to display results (e.g. hello.jspx).

With a Filter, the URL mapping indicates the URL that will cause the request to be passed through the filter.  Similar to the Servlet example above, we might have a Filter that specifies its url pattern as `/hello.jspx`. Then when the browser requests `<context-root>/hello.jspx`, the request is first passed to the Filter. The Filter can generate a response and then (by calling chain.doFilter()), forward the request on to the intended destination, hello.jspx.

## Comparing Objects

The `equals()` method allows an object to compare on the basis of content rather than references.

``` java
string1.equals(string2)
```

## Response Redirection

The HTTP provides a mechanism (response code 302) for the server to notify the client that the requested resource has moved to a new URL

``` java
response.sendRedirect("myfilterpage.jspx?value=10");
```

🌰

``` java
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException
	{
		HttpServletResponse response = (HttpServletResponse)resp;
		response.sendRedirect(String.format("fibonacci.jspx?fibTerms=%d", getRandomTerms()));
	}
```

There are some other useful headers that can be sent to the client. One such header is the auto-refresh header.

It is sometimes helpful to have a web page that refreshes itself after a specified period of time. 

``` java
response.setHeader("Refresh", "time; URL=url" );
```

## Request Delegation 

Request delegation is accomplished through the `javax.servlet.RequestDispatcher` object. The request dispatcher object can be obtained from either the `javax.servlet.http.HttpServletRequest` object by calling the `getRequestDispatcher(String path)` (where path represents a resource in the web application) or from the `javax.servlet.ServletContext` object by calling the `getNamedDispatcher(String name)` (where name is the name of a servlet as defined in the @WebServlet annotation).

[link](https://my.senecacollege.ca/webapps/blackboard/content/listContent.jsp?course_id=_577446_1&content_id=_8193159_1)

## Random Numbers

To generate random numbers, use a `java.util.Random` object. E.g.:

``` java
Random rndVar;
int num;
double dNum;
rndVar = new Random();
num = rndVar.nextInt(); 'A Random int value
num = rndVar.nextInt(10); 'A Random positive Integer between 0 and 9 inclusive
dNum = rndVar.nextDouble(); 'A Random double >= 0.0 and < 1.0 
```

## Creating and using application-scoped attributes (Servlet)

The servlet context (through the `javax.servlet.ServletContext` object which is available through the `ServletRequest` object's `getServletContext()` method

provides the servlets and filters with access to resources, virtual directory translation, and an application scope to which objects can be bound (use the `setAttribute` and `getAttribute` methods).

All requests within the application share the same application scope. This creates a potential **thread safety issue**. Use synchronized statements or synchronized methods to avoid threading issues. E.g.

``` java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		ServletContext servletContext = request.getServletContext();
		synchronized(this)
		{ // synchronization is required since application scope (ServletContext) is shared among all requests
			int visitorCount;
			Integer numVisits = (Integer)servletContext.getAttribute("numVisits");
			if (numVisits != null)
				visitorCount = numVisits; // Integer is auto unboxed to int
			else
				visitorCount = 0;
			visitorCount++;
			servletContext.setAttribute("numVisits", visitorCount); // int is autoboxed to Integer
			chain.doFilter(request, response);
		}
	}
```

Application-wide initialization parameters are also available to the filter through the `getServletContext()` object's `getInitParameter()` method. Put application-wide initialization parameters in the `<context-param>` tag of the `web.xml` file.

## Creating and using request-scoped attributes

``` java
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException
	{
		HttpServletRequest request = (HttpServletRequest)req;
		
		if ("POST".equals(request.getMethod())) // request.getMethod requires an HttpServletRequest object
		{
			String name = request.getParameter("name");
			String gender = request.getParameter("gender");
			String province = request.getParameter("province");
			String love = request.getParameter("love");
			if (name != null && name.trim().length() > 0)
				request.setAttribute("name", name.trim());
			request.setAttribute("gender", gender);
			request.setAttribute("province", province);
			request.setAttribute("love", love != null);
		}
		chain.doFilter(req, resp);
	}
```

## Creating and using Event Listeners

Event listeners allow a web application to be notified when container-managed life cycle events occur.  For example, an application may need to be notified when a new request is started or when an attribute is created. 

To create a listener class, the class must implement the appropriate listener interface. Then, the listener class must be identified as a listener using a `@WebListener` annotation.  Notice that the type of listener does not need to be specified. This information is determined by the interface that the class implements.

## Passing data from filter to jspx document using attributes 

``` java
public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException
	{
		HttpServletRequest request = (HttpServletRequest)req;
		
		if ("POST".equals(request.getMethod())) // request.getMethod requires an HttpServletRequest object
		{
			String name = request.getParameter("name");
			String gender = request.getParameter("gender");
			String province = request.getParameter("province");
			String love = request.getParameter("love");
			if (name != null && name.trim().length() > 0)
				request.setAttribute("name", name.trim());
			request.setAttribute("gender", gender);
			request.setAttribute("province", province);
			request.setAttribute("love", love != null);
		}
		chain.doFilter(req, resp);
	}
```

``` jsp
<c:if test="${gender ne null and province ne null}">You are a ${gender} living in ${province}
    <c:choose>
        <c:when test="${love}"> and you love Seneca College.</c:when>
        <c:otherwise>.</c:otherwise>
	</c:choose>
</c:if>
```

## Persisting input values

We can initialize the form inputs to return the input data as default selections in the form thus persisting the input data.

``` jsp
<input type="text" name="firstName" value="${defaultFirstName}" />
```

## Using JSP EL expressions 

## JSTL 

### set

The `set` tag exports a value to the variable specified in the `var` attribute. The value can be specified in the `value` attribute or in the tag's body.

``` jsp
<c:set var="nextage" value="${age + 1}" />
```

### forTokens

The `forTokens` tag parses a String into tokens based on given delimiters (定界符) (specified by the `delims` attribute) and then iterates over those token. Specify the tokenized String using the `items` attribute and the current item is available through a variable named by the `var` attribute.

The `forTokens` tag also supports the following attributes:
* `begin`: an int value that sets starting index value for the iteration. If not specified, the default value is `0`. 
* `end`: an int value that sets the ending index value for the iteration. If not specified, the default value is the element number corresponding to the last element of `items`
* `step`: an int value that sets the increment value for the iteration. If not specified, the default value is `1`. 
* `varStatus`: used to contain the loop status.  ontains properties `first` to indicate if it is the first iteration through the loop, `last` to indicate if it is the last iteration through the loop, `index` for the current index value, and `count` for a count of the number of times through the loop. 

``` jsp
<p>
   <c:forTokens var="name" items="${names}" delims="/" varStatus="status">
      ${name}<c:if test="${not status.last}">, </c:if>
   </c:forTokens>
</p>
```

🌰

``` jsp
<form action="index.jspx" method="post">
		<fieldset id="gender">
			<legend>Gender</legend>
			<c:forTokens var="genderitem" items="Male/male,Female/female" delims=",">
				<c:set var="genderlabel" value="${fn:split(genderitem, '/')[0]}" /><!-- E.g., splits Male/male on '/' into two element String array.  Element 0 is Male -->
				<c:set var="gendervalue" value="${fn:split(genderitem, '/')[1]}" /><!-- Element 1 is male -->
				<!--  Radio buttons with the same name form a group -->
				<label for="${gendervalue}">${genderlabel}</label>
				<c:choose>
					<c:when test="${gender eq null and gendervalue eq 'male' or gender eq gendervalue}"><input id="${gendervalue}" name="gender" type="radio" checked="checked" value="${gendervalue}" /></c:when>
					<c:otherwise><input id="${gendervalue}" name="gender" type="radio" value="${gendervalue}" /></c:otherwise>
				</c:choose>
			</c:forTokens>
		</fieldset>
		<div id="other">
			<div><label for="name">Name: </label></div>
			<input type="text" name="name" value="${fn:escapeXml(name)}" /><br />
			<div><label for="province">Province: </label></div>
			<select id="province" name="province" size="1">
				<c:forTokens var="provinceitem" items="BC/British Columbia,AB/Alberta,SK/Saskatchewan,MB/Manitoba,ON/Ontario,QC/Quebec,NS/Nova Scotia,PE/Prince Edward Island,NB/New Brunswick,NL/Newfoundland and Labrador" delims=",">
					<c:set var="provincevalue" value="${fn:split(provinceitem, '/')[0]}" /><!-- E.g., splits BC/British Columbia on '/' into two element String array.  Element 0 is BC -->
					<c:set var="provincetext" value="${fn:split(provinceitem, '/')[1]}" /><!-- Element 1 is British Columbia -->
					<c:choose>
						<c:when test="${province eq null and provincevalue eq 'ON' or province eq provincevalue}"><option value="${provincevalue}" selected="selected">${provincetext}</option></c:when>
						<c:otherwise><option value="${provincevalue}">${provincetext}</option></c:otherwise>
					</c:choose>
				</c:forTokens>
			</select><br />
			<c:choose>
				<c:when test="${love eq null or love}"><input id="love" type="checkbox" name="love" value="love" checked="checked" /></c:when>
				<c:otherwise><input id="love" type="checkbox" name="love" value="love" /></c:otherwise>
			</c:choose>
			<label for="love">I Love Seneca College</label>
		</div>
		<input name="ok" type="submit" value="Who Am I" />
	</form>
```

### forEach

``` jsp
<c:choose>
   <c:when test="${empty customernames}"><p>You have no customers.</p></c:when>
   <c:otherwise>
      <ul>
         <c:forEach var="name" items="${customernames}">
            <li>${name}</li>
         </c:forEach>
      </ul>
   </c:otherwise>
</c:choose>
```

### if

``` jsp
You have ${messagescount} message<c:if test="${messagescount ne 1}">s</c:if>
```

## Using web libraries

The WEB-INF/lib folder is a special folder. Any library files found in that folder are automatically accessible to the project code. You can use the class from the package as you would any other class.
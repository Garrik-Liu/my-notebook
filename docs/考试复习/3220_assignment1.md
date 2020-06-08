# Assignment 1

## 1 - List of questions

**Functional**:

- Do you want to have "User Account System" on your site? On account page, user can view their offer history, manage their shipping address, etc.
- Do you want to have "Personalized Recommender System" on your site? User can get recommendations based on their browsing history.
- Do you want to have "Product Management System" on your site? Store owner can manage the products that sold on the site.
- How do you want the users to cancel/return their order;
- Do you wish you could customize the display layout of the home page?
- Do you want to have "Business Intelligence System" on your site? This can help business owner to visualize the sales status.
- What payment methods do you want to support (visa/mastercard/paypal) ?
- How you will want to ship your product, and what tax rule we need to implement in the products?
- What domain name do you want to use for your site?

**Usability**:

- Do you want to have a help center page for the users?

**Performance**:

- How long do you want to limit the page display time;
- How many simultaneous users would you like to support?

**Implementation**:

- What will be your budget?

**Supportability**:

- What languages do you want the site to support (English/French) ?

## 2 - Inception Report

### Vision

#### Introduction

During this COVID-19 lock down, "Betty's Art Store", an art supply store has very low business walk-ins. This seriously damages the business owner's income.

The business owner plans to develop an online eCommerce presence for her business, and try to improve the sales of store.

#### Positioning

**Business Advantages**:

- The store owner, Miss. Beatrice has been in the business for over ten years. She is experienced in business.
- The store is located in downtown Windsor and has many clients including local artists and university/college art students. The store has a good customer base.
- The store sells just about any item a visual artist can imagine.
- Betty has a lot of stock and can handle special orders direct from her suppliers should a client needs any special items not found in her inventory.

**Business Opportunity**:

- As a physical store, the store has a good foundation.
- Because of COVID-19, many customers have no place to buy things, and demand has increased.

#### Product Overview

The website contains the following page:

- **Main Page**: All the products will be shown on this page. the users can click on a specific product to enter the product page.
- **Product Page**: This page shows all the details about this product (name, price, creator, etc.) The users can click on "ADD TO CART" button to add this product into cart;
- **Account Page**: The users can check their order history and change their password and contact info.
- **Cart Page**: All the product that the user want to buy are listed in this page. The user can click on "MAKE A PAYMENT" to pay the order.
- **Payment Page**: The user need to select a payment methods and enter their shipping information to place the order.
- **Management Page**: The store owner can manage all the product (add/edit/delete) on this page.
- **Help Center Page**: The user can find help documents in this page.

### Use Case Model

#### Store owner manage products

- Store Owner can use a "manage account" to login to management page.
- In this page, store owner can manage product.
  - Add a new product;
  - Delete a product;
  - Edit information and details of a product;
- All product will be showned in a list, ordered by name ( A-Z )
- There is a "Delete" button at the right side of every product row in the list;
- And a "Edit" button beside the delete button.
- When store owner click on "Delete" button:
  - a confirm window will pop up, and ask if the store owner want to delete this product.
  - Click "Yes", this product will be deleted from database;
  - Click "No", this confrim window will be closed, and nothing will happen.
- When store owner click on "Edit" button:
  - A edit window will pop up.
  - The store owner can edit all the details about this product in this window:
    - price;
    - creator;
    - name;
    - any other additional information;
  - When the store owner click "Save" on the bottom of edit window, all the change will be saved;
  - When the store owner click "Cancel" on the bottom of edit window, all the change will be canceled and nothing will happend.

#### The user login

- When the user click the "LOGIN" button on main page.
- A login form will pop up.
- User should enter their username and password, then click on submit button to login.
- The system validates the correctness of username and password:
  - If username and password are valid and matched, user will login successfully.
  - If username and password are invalid, an alert message will be shown up on login form.

#### User buys a product

- User is logged in:
  - When the user click on "ADD TO CART" button on a product page.
    - This product will be added into cart;
  - When the user click on "Pay this order" on the cart page.
    - The page will redirect to the payment page.
    - User can select a payment method from VISA, MasterCard, Paypal.
    - The user need to enter the shipping information.
    - If the payment is successful, an order will be placed and shown on order history on user account page.
- User is not logged in:
  - When the user click on "ADD TO CART" button on a product page.
  - A login form will pop up.

### Supplementary Specification

This supplementary specification section lists the requirements of the project.

#### Functionality

This section lists functional requirements that are common to more than one use case.

- **System Error Logging**:
  - If a payment error occurs, the payment transaction must be canceled.
  - If any system error ouccrs, this should be recored in the error log database, and send an email to report this to store owner.

#### Usability

This section lists all of those requirements about the usability of the system.

- **Design for Ease-of-Use**: the website should be designed for ease-of-use.
- **Online Help**: The eCommerce website provides a help center, each feature of this website have built-in help document. It contains step by step instructions on using the website.

#### Performance

This section defines the performance characteristics of the system.

- **Page load time**: the average amount of time it takes for a page to show up on your screen should be limited in 1000 ms;
- **Simultaneous Users**: the system can support up to 100 simultaneous users to browse the website at any one time.

#### Supportability

This section defines any requirements that will enhance the supportability or maintainability of the system.

- **Browser support**: this website should support Chrome, Firefox and Safari browser.

## 3 - Rapid Prototype

The prototype is designed by Sketch.

![2020-06-05-23-08-41](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-05-23-08-41.png)

![2020-06-05-23-08-56](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-05-23-08-56.png)

![2020-06-05-23-09-12](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-05-23-09-12.png)

## 4 - Decision for Development

I decide to proceed with the development. Because the requirements are clear, the hardware demand is low and easy to implement through Object-Oriented Language and Web Programing Language.

Technology Stack:

- **Web Server**: Java, Spring-Boot, Mybatis
- **Database**: MySQL
- **Front End**: Vue, Vuex, Vue-Router

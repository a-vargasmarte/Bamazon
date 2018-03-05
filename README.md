# Bamazon

## Intro

Bamazon is an Amazon-like storefront. Bamazon takes orders from customers and depletes stock from the store's inventory. It can also track product sales across store's departments and provide a summary of the highest-grossing departments in the store.

## Table of Contents

* [How it works](#how-it-works)
  * [Bamazon Views](#bamazon-views)
    * [Customer View](#customer-view)
        * [Choosing items to buy](#choosing-items-to-buy)
        * [Choosing quantity to buy](#choosing-quantity-to-buy)
    * [Manager View](#manager-view)
        * [Viewing products for sale](#viewing-products-for-sale)
        * [Adding items to inventory](#adding-items-to-inventory)
        * [Adding new products](#adding-new-products)
    * [Supervisor View](#supervisor-view)
        * [Viewing product sales by department categories](#viewing-product-sales-by-department-categories)
        * [Creating new departments](#creating-new-departments)

  ## How it works

  ### Bamazon views

  Bamazon has three views:

  * Customer View
  * Manager View
  * Supervisor View

  These are all separate node applications that communicate to a central SQL database with the help of the MySQL and Inquirer npm packages.

  #### Customer View

  
  #### Choosing items to buy
  Running this application on your terminal or Git Bash if you're a Mac or Windows user, respectively, will first prompt you to choose among all of the items for sale.

  ![running customer view](customer-1.gif)

  #### Choosing quantity to buy
  
  You will then be prompted for the quantity to buy for the chosen product. Once you choose how much you want to buy, this app checks if there is enough of the product in the inventory. If so, then you will get a total cost for the purchase, and the inventory is updated so as to reflect any previous transactions.

  ![running customer view 2](customer-2.gif)

  If the quantity entered is greater than the stock in the inventory, then you won't be able to place an order!

  ![running customer view 3](customer-3.gif)

  ### Manager View

  Running this node application will present you with a list of menu options:

  1. `View Products for Sale`
  2. `View Low Inventory`
  3. `Add to Inventory`
  4. `Add New Product`

  #### Viewing products for sale

  `View Products for Sale` lists every available item: the item IDs, names, item department, prices, stock quantities, and sales per product.

  ![running manager view 1](manager-1.gif)

  #### Viewing products with low inventory

  `View Low Inventory` lists all items with an inventory count lower than five.

  ![running manager view 2](manager-2.gif)

  #### Adding items to inventory

  `Add to Inventory` prompts the manager to choose a store item to "add more" to. It follows by giving managers an updated table for the product added to.

  ![running manager view 3](manager-3.gif)

  #### Adding new products

  `Add New Product` allows the manager to add a completely new product to the store.

  ![running manager view 4](manager-4.gif)

  ### Supervisor View

  Running this app will list the following menu options:

  1. `View Product Sales by Department`
  2. `Create New Department`

  ![running supervisor view 1](supervisor-1.gif)

  #### Viewing product sales by department categories
  
  `View Product Sales by Department` displays a summarized table in your termina/bash window with the department id, department name, overhead costs, product sales, and total profit for each of the department categories of the storefront.

  ![running supervisor view 2](supervisor-2.gif)
  
  #### Creating new departments
  
  `Create New Department` allows supervisors to add a new department of their liking. It then displays a new updated table of current department ids, names, and overhead costs.

  ![running supervisor view 3](supervisor-3.gif)

  [Top](#intro)





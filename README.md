# Bamazon

## Intro

Bamazon is an Amazon-like storefront. Bamazon takes orders from customers and depletes stock from the store's inventory. It can also track product sales across store's departments and provide a summary of the highest-grossing departments in the store.

## Table of Contents

* [How it works](#how-it-works)
  * [Bamazon Views](#bamazon-views)
    * [Customer View](#customer-view)
    * [Manager View](#manager-view)
    * [Supervisor View](#supervisor-view)

  ## How it works

  ### Bamazon views

  Bamazon has three views:

  * Customer View
  * Manager View
  * Supervisor View

  These are all separate node applications that communicate to a central SQL database with the help of the MySQL and Inquirer npm packages.

  #### Customer View

  Running this application on your terminal or Git Bash if you're a Mac or Windows user, respectively, will first prompt you to choose among all of the items for sale.

  ![running customer view](customer-1.gif)

  You will then be prompted for the quantity to buy for the chosen product.

  A second image will be displayed here

  Once you choose how much you want to buy, this app checks if there is enough of the product in the inventory. If so, then you will get a total cost for the purchase, and the inventory is updated so as to reflect any previous transactions.

  A third image will be displayed here

  If the quantity entered is greater than the stock in the inventory, then you won't be able to place an order!

  A fourth image is here

  ### Manager View

  Running this node application will present you with a list of menu options:

  1. `View Products for Sale`
  2. `View Low Inventory`
  3. `Add to Inventory`
  4. `Add New Product`

  Image of the options will be displayed here

  `View Products for Sale` lists every available item: the item IDs, names, item department, prices, stock quantities, and sales per product.

  Image here

  `View Low Inventory` lists all items with an inventory count lower than five.

  Image here

  `Add to Inventory` prompts the manager to choose a store item to "add more" to. It follows by giving managers an updated table for the product added to.

  Image here

  `Add New Product` allows the manager to add a completely new product to the store.

  Image here

  ### Supervisor View

  Running this app will list the following menu options:

  1. `View Product Sales by Department`
  2. `Create New Department`

  Image here

  `View Product Sales by Department` displays a summarized table in your termina/bash window with the department id, department name, overhead costs, product sales, and total profit for each of the department categories of the storefront.

  Image here

  `Create New Department` allows supervisors to add a new department of their liking. It then displays a new updated table of current department ids, names, and overhead costs.

  Image here

  

  



# Backend - Technical Assessment Test

## Introduction
This documentation will provide detail about technical assessment sources used in developing Technical Assessment Test. I choose case study about Shopping Cart.

## API design tools 
I use swagger in designing the API design. Moreover, i use default swagger editor, which is available on the following address http://editor.swagger.io.
Swagger yaml file used in developing the API is added to the repository. The file is ShoppingCartApiDesign.yaml. 

## Deployed on heroku
Application is generated from swagger yaml file. I choose to use Nodejs application for the server. 
Once it is ready, i deploy the application into heroku cloud. It is available on the following address https://quiet-taiga-3130.herokuapp.com. Swagger documentation for shopping card assessment can be access through https://quiet-taiga-3130.herokuapp.com/docs.

## Testing the code 
Default swagger ui provide enough user interface in order to test the code. It can be access through https://quiet-taiga-3130.herokuapp.com/docs. 
At run time, ShoppingCart app will store the data in server memory. There are no database, cookies, session, localstorage used in storing ShoppingCart data. 

## ShoppingCart endpoint 

### Create Shopping Cart 
This API is used to create ShoppingCart for any customer. Additional parameter which is mandatory is session_id. This is to support if user login from multiple browser (desktop, smartphone, and tablet). Upon return API will provide shoppingcart_id. This is a unique identifier for customer on this session only. Application will return http 201 and ShoppingCart object back to API consumer.

### List Shopping Cart 
We don't provide list functionality for ShoppingCart endpoint. This is to avoid other user peek other customer ShoppingCart. API consumer will need to store shoppingcart_id on their own. 

### Delete Shopping Cart 
This API is used to delete existing ShoppingCart from app. Mandatary parameter is shoppingcart_id. API consumer could get this information from Create ShoppingCart above. 

## ShoppingCardProduct endpoint 

### Adding product to ShoppingCart
This functionality is used to add a product into ShoppingCart. Required parameters are:
* Product Id
Unique identifier for a product.
* Quantity 
Number of product 
* Size 
Size of product (1,2,3,4,5, etc)
* Color 
Product color (white, blue, red, etc)

### List ShoppingCartProduct 
This API is used to get list of products that is currently available on specified ShoppingCart. Required parameter is shoppingcart_id. API consumer could get this information from Create Shopping Cart above. 

### Update ShoppingCartProduct 
This API is used to update existing product information on specified shopping cart. User could update any parameters like quantity, size, or color. Required parameters are:
* ShoppingCart Id 
Unique identifier for shopping cart. 
* Product Id 
Unique identifier for product.

Optional parameters are:
* Quantity 
Number of product 
* Size 
Size of product (1,2,3,4,5, etc)
* Color 
Product color (white, blue, red, etc)

### Delete a product from ShoppingCart 
This API is used to remove a product from ShoppingCart. Required parameters are:
* ShoppingCart Id 
Unique identifier for shopping cart. 
* Product Id 
Unique identifier for product.

## Summary 
I realize there are several drawbacks on this application. There are only several of them that i can think of this moment.
* Security 
No token based authentication to validate API consumer for each API call. This information can be provided on the header for each API calls.
* Discount process 
ShoppingCart can be add Discount processes such as Discount voucher code, Discount for payment using special card, etc.


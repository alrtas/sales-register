# Table of contents
* [Challenge](#challenge)
* [Solution](#solution)
* [How to run]()
* [The whys...?]()
* [LinkedIn Profile](https://www.linkedin.com/in/alrtas/)




# Challenge
## Case description 
Consider that a customer approached you with a need to better manage the sales occurring in his company/department. In the present day, this customer has to gather information from several excel spreadsheets, rank and consolidate it in one of his own every week, so he can pay bonuses according to sales rank. To begin tackling the problem, he suggests that the main priorities to him are: 

1. To have an easy and standardized way for sellers to register their sales (avoiding his tedious work every week) 
2. To have access to a Main Sales List where everyone using the app can see all the sales registered and ranked by the seller with the highest amount sold. 
3. The ability to edit or remove a specific sale that might eventually be added with wrong data. 

## Logic prototyping 
Considering that scenario, build a script, implementing the seller's ranking logic, where the user, from the terminal, inputs a Sale item and the output is printed as an updated list of all sales registered, sorted by sellers with the highest to lowest amount sold. 


Premises: 
- A Sale item must have at least the following attributes: (Seller Name, Customer Name, Date of Sale, Sale Item Name, Sale Value) 
- Five Sellers should be registered and no Sale Item can be registered with a different seller name other than the five available. 
- Script must run in the terminal only 
- Script should be delivered as a Git repository hosted in GitHub/GitLab/BitBucket with instructions on how to execute it. 


## Development Planning 
Considering the three main priorities previously described in Case description, prepare two or three slide (to be delivered in pdf or Google Presentation) pages answering the following: 
- What technologies you would use for the front-end, back-end and database and why did you choose them to build this prototype? 
- How much time would you estimate for building this prototype, considering you're the only developer working on it ?

# Solution

## Stack
### Front-end (?)
### Back-end:
For this part, we work with Node.JS, since the application can be accessed by APP, Web Page or other forms of access, I developed 2 REST endpoints to help and also decouple the various front-end possibilities.
**Endpoints** - [Download Postman collection](https://github.com/alrtas/sales-register-api/files/7401626/Sales-register.postman_collection.json.zip)
* Seller
  * [POST] Create a Seller 
  * [GET] View all sellers
  * [GET] View a Seller filtering by ID 
  * [GET] Retrieve a list of Sellers sorts by amount of value in sales
  * [PATCH] Update a Seller
  * [DELETE] Remove a Seller 
* Sales
  * [POST] Create a Sale
  * [GET] Retrieve all Sales
  * [GET] View a Sale filtering by ID
  * [PATCH] Update a Sale
  * [DELETE] Remove a Sale  
### DataBase: 
For the database we are using MySQL in a Docker. 
Why MysSQL, you may ask,.....

Following the structure below:

**Sales Schema** > **Seller Table**
| idSellers | name  | phone | office |
| :---:     | :---: | :---: |  :---: |
| 1 | Seller 1 | Phone 1 | Office 1 |
| 2 | Seller 2 | Phone 2 | Office 2 |
| 3 | Seller 3 | Phone 3 | Office 3 |
| 4 | Seller 4 | Phone 4 | Office 4 |
| 5 | Seller 5 | Phone 5 | Office 5 |


**Sales Schema** > **Sales Table**
| idSales | sellerName  | customerName | dateOfSale | saleItemName | saleValue |
|  :---:  |    :---:    |     :---:    |    :---:   |    :---:     |   :---:   |
| 1 | Seller 1 | Customer 1 | YYYY-MM-DDTHH:mm:ssZ | Item 1  | Value X|
| 2 | Seller 2 | Customer 1 | YYYY-MM-DDTHH:mm:ssZ | Item 2  | Value Y|
| 3 | Seller 1 | Customer 1 | YYYY-MM-DDTHH:mm:ssZ | Item 2  | Value Y|
| 4 | Seller 1 | Customer 5 | YYYY-MM-DDTHH:mm:ssZ | Item 17 | Value X|
| 5 | Seller 3 | Customer 4 | YYYY-MM-DDTHH:mm:ssZ | Item 3  | Value P|

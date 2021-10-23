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

To better explain a little bit of the solution building process, first, we start from the principle of an application made to run in the cloud, so because of that we will use Dockers to run the applications.

Defined that we will use dockers, first we build the docker responsible for uploading a database, using MySQL, by default the responsible DockerFile only Creates the `Sales` Schema and also the users and password, if necessary to access the database via workbench or other software it will be possible to check the username and password in the DockerFile file or later in the backend connection file. The `Sales` and `Sellers` tables as well as the creation of 5 sells will be done via the backend.

For the Backend, we will also have a Docker that will run a Nodejs/Express application, where it will connect to the Database Docker using the IP `172.17.0.1`, if the database does not have this IP, it does if necessary change the IP in the `path-to-project\backend\src\infrastructure\connection.js` file, as well as other connection details, once connected the backend will create the `Sales` and `Sellers` tables if necessary. they do not yet exist and then will create 5 sellers already pre-defined as the table below will show, also only if they do not exist. After all the database connection is OK, the Backend will provide **2 endpoints**, a CRUD for the Sales entity and also a CRUD for the Sellers entity. In the POST option (Creation) of a Sale there is a business rule that validates if the name of the seller passed on the body matches any seller name already in the Sellers base. And there is an additional 1 path within the Sellers endpoint that lists, in order from largest to smallest, the sellers with the greatest sum of sales.

To complete the challenge, in Frontend there is another application (Docker) running in Python that implements a simple CLI system, where it is possible to create a Sale and it is also possible to show a list of sellers with the highest sum of sales value


## Stack
### Front-end:

* CLI (**Python**)
  * Consumes [POST] Create a Sale *and* [GET] Retrieve a list of Sellers sorts by amount of value in sales
* WEB (**React.js**)

### Back-end:
**Endpoints** - [Download Postman collection](https://github.com/alrtas/sales-register-api/files/7401626/Sales-register.postman_collection.json.zip)
* Seller (**Node.js**)
  * [POST] Create a Seller 
  * [GET] View all sellers
  * [GET] View a Seller filtering by ID 
  * [GET] Retrieve a list of Sellers sorts by amount of value in sales
  * [PATCH] Update a Seller
  * [DELETE] Remove a Seller 
* Sales (**Node.js**)
  * [POST] Create a Sale
  * [GET] Retrieve all Sales
  * [GET] View a Sale filtering by ID
  * [PATCH] Update a Sale
  * [DELETE] Remove a Sale  
### DataBase: 
For the database we are using (**MySQL**) in a Docker. 
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
| 1 | Thiago Alberto | Customer 1 | YYYY-MM-DDTHH:mm:ssZ | Item 1  | Value X|
| 2 | Pedro Henrique | Customer 1 | YYYY-MM-DDTHH:mm:ssZ | Item 2  | Value Y|
| 3 | Valmir Paz     | Customer 1 | YYYY-MM-DDTHH:mm:ssZ | Item 2  | Value Y|
| 4 | Romario Costa  | Customer 5 | YYYY-MM-DDTHH:mm:ssZ | Item 17 | Value X|
| 5 | Renato Sousa   | Customer 4 | YYYY-MM-DDTHH:mm:ssZ | Item 3  | Value P|



# How to run

The Project was divided into four parts (Each respectively in its docker), The IP addresses are hard-coded inside the application, if it is necessary to change it according to the configuration of your machine, if it is running without customizations in the docker, you must instantiate the Docker responsible for the Database first and then the docker responsible for the backend so that they keep their respective IPs

|      IP     |  Port  |      Docker      | 
|    :----:   | :----: |      :----:      |
| 172.17.0.1  |  3306  |  shopee-database |
| 172.17.0.2  |  3000  |  shopee-backend  |
| 172.17.0.x  |  3012  |  shopee-cli      |
| 172.17.0.x  |  3300  |  shopee-web      |

To facilitate the process of running the containers, there is a MakeFile in each folder of the structure so below is an instruction on how to run all the containers.

|                  Path                   |            Command          |      Docker     |
|                  :---:                  |            :---:            |       :---:     |
| cd ./path-to-project/database/          | .\make setup  > .\make run  | shopee-database | 
| cd ./path-to-project/backend/           | .\make setup  > .\make run  | shopee-backend  | 
| cd ./path-to-project/frontend/cli/      | .\make setup  > .\make run  | shopee-cli      | 
| cd ./path-to-project/frontend/web/      | .\make setup  > .\make run  | shopee-web      | 

If you are on windows you may need to install [cgwin32](https://www.filehorse.com/download-cygwin-32/) e rodar o comando dentro da pasta que possui o makefile usando a semantica `.\make setup` which will create the docker and download the necessary dependencies e `.\make run` that will run the image created in your docker, of course for this you need to have the docker installed and running on your machine, here is a [link](https://www.docker.com/get-started) to help with the installation if necessary.
 
 Make sure the first two containers are in this order
 ![image](https://user-images.githubusercontent.com/32065208/138573517-24a31a44-12a4-4396-a2c6-4520a8d47208.png)

 
Once all dockers have been started correctly you will be able to use the developed services, such as accessing the database via WorkBench or another one of your preferences, consuming the APIs created in the Backend (using the postman file placed above) test what was prompted via command line that I'll show with images now
* ![image](https://user-images.githubusercontent.com/32065208/138573685-1bd9d1d4-3d94-4644-8b61-d43b1a39a868.png)
* ![image](https://user-images.githubusercontent.com/32065208/138573695-f58ef480-eabb-47e2-995c-9f31bfa88510.png)


Now we will register a new sale by the application made in Python, where at the end it will call the BackEnd API that creates a sale and inserts the respective one in the database, followed by the option that shows the list of sellers sorted by sum of value sold which is also searched via the Backend API that makes a custom query in the database:
* ![image](https://user-images.githubusercontent.com/32065208/138573734-ad8c1cec-802e-4fcb-9502-891221723ecb.png)

If you try to make a sale with a different vendor name than the one that is initialized or created via API, the CLI will decline the insertion with the following message

* ![image](https://user-images.githubusercontent.com/32065208/138573770-5afd067d-317b-4f5c-a32f-80465b0d964b.png)



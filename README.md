**The University of Melbourne**
# INFO30005 – Web Information Technologies

# Group Project Repository

## Table of contents
* [Team Members](#team-members)
* [General Info](#general-info)
* [Technologies](#technologies)
* [Backend](#backend)
* [Adding Images](#adding-images)

## Team Members

| Name | Task | State |
| :---         |     :---:      |          ---: |
| Student Name 1  | Back End     |  Done |
| Student Name 2    | Front End      |  Testing |
| Student Name 3    | README Format      |  Amazing! |

## General info
This is project ...
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

## Technologies
Project is created with:
* NodeJs 14.16.X

## Backend
The database consists of 4 collections (customers, vendors, orders, snacks).

### Customer Routes

View menu of snacks

`GET /customer/snacks` Retrieves all snacks from the snacks collection and returns data including name, description, cost and photo reference.
![image](https://user-images.githubusercontent.com/52279273/115097256-6a155780-9f6c-11eb-982e-8da8983ed6ef.png)


View details of a snack

`GET /customer/snacks/:snackId` Retrieves details of specific snack in snacks collection by id.
![image](https://user-images.githubusercontent.com/52279273/115097263-74cfec80-9f6c-11eb-8f5c-4b4768ea95d2.png)


Customer starts a new order by requesting a snack

`POST /customer/order/create` Adds a new order from data in request into the orders collection. Then adds a id reference to the order inside the vendor's order array. Order status at creation is assumed to be **outstanding** and doesn't need to be passed. Timestamps are generated automatically when inserted into the database.
![image](https://user-images.githubusercontent.com/52279273/115097335-c8423a80-9f6c-11eb-8369-0f203f520658.png)

### Vendor Routes

Setting van status (vendor sends location, marks van as ready-for-orders)

`POST /vendor/status/set` Updates an existing vendor's status, by id, to the status passed in the request (e.g. ready-for-order/closed). The text location and location point is also sent and updated. 
![image](https://user-images.githubusercontent.com/52279273/115097479-d775b800-9f6d-11eb-9928-41ae3cae1405.png)

Show list of all outstanding orders

`GET /vendor/:vendorId/orders/:status` Retrieves all orders from vendor's order list that have status passed in the request (e.g. outstanding/fulfilled/completed/cancelled) with some customer and snack details relevant to the vendor.
![image](https://user-images.githubusercontent.com/52279273/115097621-a5188a80-9f6e-11eb-8603-372e15e8eb42.png)

Mark an order as "fulfilled" (ready to be picked up by customer)

`POST /order/update` Updates an existing order status to the status passed in the request (e.g. fulfilled/outstanding/completed/cancelled). 
![image](https://user-images.githubusercontent.com/52279273/115097744-561f2500-9f6f-11eb-8e8b-ffc37a9e8870.png)



**Now Get ready to complete all the tasks:**

- [x] Read the Project handouts carefully
- [x] User Interface (UI)mockup
- [ ] App server mockup
- [ ] Front-end + back-end (one feature)
- [ ] Complete system + source code
- [ ] Report on your work(+ test1 feature)


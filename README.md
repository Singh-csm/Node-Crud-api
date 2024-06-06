# Product Node Crud API ( Management )

### This project is a Node.js application that provides APIs to perform CRUD operations for managing products. The data is stored in a JSON file instead of a database. The project follows the MVC architecture and is designed to be scalable and robust.

## Architecture/Flow:

```

nodejs-crud-api/
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
├── routes/
│   └── productRoutes.js
├── public/
│   └── images/
├── data/
│   └── products.json
├── .gitignore
├── app.js
├── package.json
└── README.md

```

## Features:

### Insert Products: 
- API to insert products with required fields (productId, productName, productDescription, productImages, isActive) and save product images in the public directory.

### Get Product Information: 
- API to get product information by productId.

### Get List of Active Products: 
- API to get a list of active products available in the collection (Max 10 per page).

### Update Product: 
- API to update the product by productId.

### Delete Product: 
- API to delete a product by productId.

## Technologies Used: 

- Node.js
- Express.js
- Multer (for handling file uploads)
- File System (for handling JSON file operations)

## Setup Instructions:

- Prerequisites
- Node.js installed on your machine.
- Git installed on your machine.

## API Endpoints:

1. Insert Product

---
URL: /api/products
Method: POST
Headers: Content-Type: multipart/form-data
Body:
productId (String)
productName (String)
productDescription (String)
isActive (Boolean)
productImages (File)
---

2. Get Product Information
---
URL: /api/products/:productId
Method: GET
---

3. Get List of Active Products
---
URL: /api/products
Method: GET
Query Parameters:
page (Number) - Page number for pagination (default: 1)
---

4. Update Product
---
URL: /api/products/:productId
Method: PUT
Headers: Content-Type: application/json
Body:
productName (String)
productDescription (String)
isActive (Boolean)
productImages (Array of Strings) - File paths
---

5. Delete Product
---
URL: /api/products/:productId
Method: DELETE
---

## Postman Collection:

Collection is attached with files, importing the files in postman or the preferred tool you use for testing

1. Open Postman.
2. Click on Import in the top-left corner.
3. Select the provided JSON file and import it.

## Contributing:

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

### Thank you! for the excellent opportunity!

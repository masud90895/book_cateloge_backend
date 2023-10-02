## Assignment No: 08

# Book Catalog Backend Server

# Live Link : https://assinment-8-flame.vercel.app

<hr>
### Server Description:

This backend server functions as the heart of a digital library or bookstore, providing efficient management for a diverse collection of books. It leverages Express.js, Prisma, and PostgreSQL to power its operations.

At its core, this server offers a wide range of API endpoints that empower users to perform various actions. Users can explore the entire catalog of books, view categories, place new orders, conduct searches, and administrators have the ability to manage user accounts, create new books, update existing ones, and even remove them.

One of its key strengths lies in its seamless integration with a relational database, where all book-related data is securely stored. Prisma serves as the ORM (Object-Relational Mapping) tool, simplifying interactions with the database. To safeguard sensitive data and ensure that only authorized users access specific functionalities, robust security measures such as authentication, authorization, and data validation are implemented.

In addition to security, the server prioritizes reliability and maintainability. It includes robust error handling mechanisms, comprehensive logging capabilities, and thorough documentation. These elements work together to enhance the server's overall dependability.

Ultimately, this server plays a pivotal role in facilitating the growth and scalability of the book catalog, making it an indispensable component for online book-related services.

### Technology Stack:

- Express.js as the web framework.
- TypeScript as the Programming Language.
- postgreSQL as the database
- Prisma as the Object Relational Mapping (ORM)

# Live Link : https://assinment-8-flame.vercel.app

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/:id (Single GET) Include an id that is saved in your database
- api/v1/users/:id (PATCH)
- api/v1/users/:id (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/:id (Single GET) Include an id that is saved in your database
- api/v1/categories/:id (PATCH)
- api/v1/categories/:id (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)

<br/>
<br/>

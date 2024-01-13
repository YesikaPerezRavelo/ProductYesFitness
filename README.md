**# ProductYesFitness an E-commerce**

**## Vite, React, Javascript & Firebase**

**### Portfolio**

**#### Website to sell products**

---

\***\*Ultimate fitness goals\*\***

**Intro**

Start Selling Online — Quick & Easy Setup - Everything You Need To Start a Healthy Life Style.
Grow spiritually, physical and emotionally.

ReactJs is used for front-end libraries for developing single page applications. Since it’s a library, we can install this library to Create React App for developing single page applications.

**#### Procedure of installation:**

On Windows
Inside "This PC" go to "Local Disk (C:)" and create a folder for your project.
On Visual Studio Code
Inside your terminal search your file cd sample "C:/ProductsYesFitness/react/ProductsYesFitness"

1. install Node.js
2. npm install
3. create-react-app
4. npm install react@latest react-dom@latest
5. npm install react-router-dom ( It allows you to display pages and allow users to navigate them)
6. npm install react-hook-form (React form library that helps you validate forms quickly)
7. npm install react-simple-typewriter (React font animation that helps you animate and change your fonts)
8. npm install sweetalert2 (Notifications)

**#### Steps taken to create this proyect:**

1. App components
2. Resolve a promise
3. Perform an asynchronous operation inside of .map()
4. Consuming APIs
5. Navigation Routing
6. Hooks inside a function as a child component
7. Events Handler
8. useContext hooks for a context object
9. Rendering
10. Firebase realtime Database
11. Data Fetching Component
12. Presentation Component
13. FirebaseConfig
14. Environment Variables

App

**#### Routes & rendering component**

<^>Home<^>

```
<Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />}/>
```

<^>List of Products<^>

```
<Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados"} />}/>
```

<^>Item Detail<^>

```
<Route path="/detail/:productId/" element={<ItemDetailContainer />}/>
```

<^>Shopping Cart View<^>

```
<Route path="/cart" element={<CartView />} />
```

<^>Checkout product or products<^>

```
<Route path="/checkout" element={<Checkout />} />
```

<^>Message<^>

```
<Route path="/contact" element={<Contact />} />
```

<^>Error if page is not found<^>

````
<Route path="*" element={<h1>404 Not Found</h1>} />```
````

---

| Name   | Last Name | Email              |
| ------ | --------- | ------------------ |
| Yesika | Perez     | yesikapr@gmail.com |

[LinkedIn](https://www.linkedin.com/in/yesikaperezravelo/)

[Vercel](https://product-yes-fitness.vercel.app/)

[Netlify](https://productsyesfitness.netlify.app/)

![imagenPerfil](https://firebasestorage.googleapis.com/v0/b/productyesfitness.appspot.com/o/fitnessProducts.png?alt=media&token=673220bd-90ca-46d0-bb5e-fc13a54f5ac7)

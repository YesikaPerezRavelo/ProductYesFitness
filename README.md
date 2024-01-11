# ProductYesFitness an E-commerce

## Vite, React, Javascript & Firebase

### Portfolio

#### Website to sell products

---

**Ultimate fitness goals**

_Roof draft_

Start Selling Online — Quick & Easy Setup - Everything You Need To Start a Healthy Life Style. 
Grow spiritually, physical and emotionally. 

```Sample React Component
const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  console.log(products);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        console.log(querySnapshot);

        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      });

  }, [categoryId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}
```
ReactJs is used for front-end libraries for developing single page applications. Since it’s a library, we can install this library to Create React App for developing single page applications.

Procedure of installation:
1. install Node.js
2. npm install
3. create-react-app
4. npm install react@latest react-dom@latest
5. npm install react-router-dom ( It allows you to display pages and allow users to navigate them)
6. npm install react-hook-form (React form library that helps you validate forms quickly)
7. npm install react-simple-typewriter (React font animation that helps you animate and change your fonts)

Steps taken to create this proyect:
1. App components
2. Resolve a promise 
3. Perform an asynchronous operation inside of .map()
3. Consuming APIs
4. Navigation Routing 
5. Hooks inside a function as a child component
6. Events Handler
7. useContext hooks for a context object
8. Rendering
9. Firebase realtime Database
10. Data Fetching Component
11. Presentation Component
12. FirebaseConfig 


| Name   | Last Name | Email              |
| ------ | --------- | ------------------ |
| Yesika | Perez     | yesikapr@gmail.com |

[LinkedIn](https://www.linkedin.com/in/yesikaperezravelo/)

![imagenPerfil](https://drive.google.com/uc?export=view&id=1q5jOI0gAZOBcO4X5Gzg59GdVWbTsK-lr)
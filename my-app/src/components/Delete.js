function Delete(productId, setProducts) {
    fetch(`https://fakestoreapi.com/products/${productId}`, { // Corrected placement
        method: "DELETE",
    })
        .then(res => res.json())
        .then(() => {
            setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
            console.log(`Product with ID ${productId} deleted successfully.`);
            alert(`Product with ID ${productId} deleted successfully.`);
        })
        .catch(error => console.error('Error deleting product:', error));
}

export default Delete;


// function Delete(productId, setProducts) {

//     fetch(`https://fakestoreapi.com/products/${productId}`),{
//         method: "DELETE",
//       }
//          .then(res => res.json())
//          .then(()=> {
             
//              setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
//              console.log(`Product with ID ${productId} deleted successfully.`);
//              alert(`Product with ID ${productId} deleted successfully.`)
//            })
//            .catch(error => console.error('Error deleting product:', error));
    
//         }
//        export default Delete;



//     fetch('https://fakestoreapi.com/products/${productId}`, {
//       method: "DELETE",
//     })
//       .then(res => res.json())
//       .then(() => {
//         // Remove the deleted product from the state
//         setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
//         console.log(`Product with ID ${productId} deleted successfully.`);
//         alert(`Product with ID ${productId} deleted successfully.`)
//       })
//       .catch(error => console.error('Error deleting product:', error));
//   }
  
 
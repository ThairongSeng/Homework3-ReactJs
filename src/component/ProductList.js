export const ProductList = () => {
    const products = [
        { 
            id : 1,
            title : "iWatch"
        },
        { 
            id : 2,
            title : "iPhone"
        },
    ]
    return (
        <section>
            <h1>Product List</h1>
            {
                products.length > 0 && <h2>Our Product {products[0].title}</h2>
            }
        </section>

    )
}
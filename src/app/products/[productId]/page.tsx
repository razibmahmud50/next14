export default function products ({params}:{
    params:{productId: String}
}) {
    return (
      <h1>Product Details {params.productId}</h1>
    )
  }
  
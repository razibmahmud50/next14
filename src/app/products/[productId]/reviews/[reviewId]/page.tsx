export default function reviews({params}:{
    params:{
        productId: String,
        reviewId: String
    }
}){
    return(
        <div>product{params.productId}reviews{params.reviewId}</div>
    )
}
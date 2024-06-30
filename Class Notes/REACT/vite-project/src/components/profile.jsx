const user = {
    name: "Bill Gates", 
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYTc5ImnPAvw4FAu2o7YLdaxfn1RZsz4Z0g&s"
}

const products = [
    {id: 1, title: "Mango"},
    {id: 2, title: "Apple"},
    {id: 3, title: "Grape"}
]

const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>
)

function Profile () {
    return (
        <>
            <h2>{user.name}</h2>
            <img src={user.imageURL} alt="Bill Gates" width={"200px"} />
            <ul>{listItems}</ul>
        </>
    )
}

export default Profile;
const fruits = ["Apple","Banana","Mango","Graps","Orange"];

function FruitList() {
    return (
        <ul>
            {
                fruits.map(fruit => (
                    <li key={fruit}>{fruit}</li>
                ))
            }
        </ul>
    );
}

export default FruitList;
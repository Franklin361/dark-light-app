

export const Card = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">Lorem ipsum dolor sit.</h4>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing eli...</p>
            <div className="card-container-buttons">
                <button>Buy</button>
                <button>Show</button>
            </div>
        </div>
    )
}

export const LayoutCards = () => {
    return (
        <div className="grid-cards">
            <Card />
            <Card />
            <Card />
        </div>
    )
}
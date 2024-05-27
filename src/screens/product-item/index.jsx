import './productItem.css';

export default function ProductItem({items}) {
    return <div className='product-item'>
        <div>
      <img src={items.image} alt={items.alt} />
        </div>
      <div>
        <div>
        <h2>{items.title}</h2>
        <p>{items.price}</p>
        </div>
        <button>Add to cart </button>

        <div>
            <p>Description</p>
            <img src="/arrowImg.png" alt="" />
        </div>
        <p>{items.description}</p>
        <h4>{items.subtitle}</h4>
        <ul>
            <li>{items.listitem1}</li>
            <li>{items.listitem2}</li>
        </ul>
      </div>
    </div>
}
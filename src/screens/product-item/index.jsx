"use client"
import useStore from '@/store/cartContext';
import './productItem.css';


export default function ProductItem({items}) {
  const cartnumb = useStore((state) => state.increasePopulation)

    return <div className='product-item'>
        <div className='product-img' >
      <img src={items.image} alt={items.alt} />
        </div>
      <div className='product-typo'>
        <div>
        <h2>{items.title}</h2>
        <p>{items.price}</p>
        </div>
        <button className='btn' onClick={cartnumb} >Add to cart </button>

        <div className='product-desc'>
            <h4>Description</h4>
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
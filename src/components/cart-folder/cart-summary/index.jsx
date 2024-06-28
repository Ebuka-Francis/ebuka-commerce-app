import './cartsum.css';

export default function CartSummary( ) {
    return <div className='cart-sum'>
        <h2>cart summary</h2>
        <div className='cart-sum-total'>
        <p>item total (0)</p>
        <p>NGN 1000</p>
        </div>
        <div className='cart-sum-total'>
        <p>sub total</p>
        <p>NGN 10000</p>
        </div>
        <div className='checkout-btn'>
            <button>Checkout of (NGN 10000)</button>
        </div>

    </div>
}
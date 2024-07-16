import './cartsum.css';

const formatNaira = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(value);
  };


export default function CartSummary( {itemSummary}) {

    const handleSummary = () => {
      if (itemSummary && itemSummary.length > 0)  {
        const sum = itemSummary.map((item) => item.qauntity * item.price ).reduce((prev, curr) => prev + curr)
        return sum;
      }
      };

//       const handleSummary = () => {
//   const sum = itemSummary
//     .map((item) => item.quantity * item.price)
//     .reduce((prev, curr) => prev + curr, 0);
//   return sum;
// };
    
    return <div className='cart-sum'>
        <h2>cart summary</h2>
        <div className='cart-sum-total'>
        <p>Item Total ({itemSummary.length})</p>
        <p>NGN 1000</p>
        </div>
        <div className='cart-sum-total'>
        <p>sub total</p>
        <p>{formatNaira(handleSummary())}</p>
        </div>
        <div className='checkout-btn'>
            <button>{formatNaira(handleSummary())}</button>
        </div>

    </div>
}



// import './cartsum.css';

// const formatNaira = (value) => {
//   return new Intl.NumberFormat('en-NG', {
//     style: 'currency',
//     currency: 'NGN',
//   }).format(value);
// };

// export default function CartSummary({ itemSummary }) {
//   // const handleSummary = () => {
//   //   if(itemSummary.length > 0) {
//   //     const sum = itemSummary
//   //       .map((item) => item.quantity * item.price)
//   //       .reduce((prev, curr) => prev + curr,0);
//   //     return sum;
//   //   }
//   // };
//   const handleSummary = () => {
//     if (itemSummary && itemSummary.length > 0) {
//       const sum = itemSummary
//         .map((item) => item.quantity * item.price)
//         .reduce((prev, curr) => prev + curr, 0);
//       return sum;
//     } else {
//       return 0; // Return 0 if itemSummary is empty or undefined
//     }
//   };

//   const total = formatNaira(handleSummary());
//   const totals = handleSummary();

//   return (
//     <div className='cart-sum'>
//       <h2>Cart Summary</h2>
//       <div className='cart-sum-total'>
//         <p>Item Total ({itemSummary.length})</p>
//         <p>{totals}</p>
//       </div>
//       <div className='cart-sum-total'>
//         <p>Sub Total</p>
//         <p>{totals}</p>
//       </div>
//       <div className='checkout-btn'>
//         <button>Checkout - {total}</button>
//       </div>
//     </div>
//   );
// }

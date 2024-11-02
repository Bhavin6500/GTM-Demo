// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//     const {value,items} = useSelector((c)=>c.cart)
//   return (
//     <div>
//     {value.map((a)=>(
//         <div className="card">
//   <img src={a.images} className="card-img-top" alt="Fissure in Sandstone"/>
//   <div className="card-body">
//     <h5 className="card-title">{a.title}</h5>
//     <p className="card-text">{a.price}</p>
//     <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
//   </div>
// </div>))}
    
      
//     </div>
//   );
// }

// export default Cart;






import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment,decrement,removeFromCart } from '../features/cartSlice';


const Cart = () => {
  const {value,items,totalQuantity,totalAmount} = useSelector((c)=>c.cart)
  const dispatch = useDispatch()
    return (
    <div>
    
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
        
        
        
        
        
        
        {value.map((a)=>(
            <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={a.images}
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask"style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{a.title}</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                  title="Remove item"  onClick={() => {dispatch(removeFromCart({ id: a.id }))}}>
                  <i className="fas fa-trash"></i>
                </button>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2"
                    onClick={()=>dispatch(decrement({id:a.id}))}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div data-mdb-input-init className="form-outline">
                    <input id="form1" min="0" name="quantity" value={a.quantity} type="number" className="form-control" />
                    <label className="form-label" for="form1">{a.quantity}</label>
                  </div>

                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2"
                    onClick={()=>dispatch(increment({id:a.id}))}>
                     
                    <i className="fas fa-plus"></i>
                  </button>
                  
                </div>
            <p className='text-danger'>{a.quantity >= a.stock && <p>Available stock : {a.stock} </p>}
        </p>
                <p className="text-start text-md-center">
                  <strong>${a.price*a.quantity}</strong>
                </p>
              </div>
</div> 









            <hr className="my-4" />
          </div>
 
        ))}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        <div className="card mb-4">
          <div className="card-body">
          <div className="row">
          <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/delivery.png"
          alt="Delivery" />
      </div>
            <p><strong>Expected shipping delivery within 24 hours</strong></p>
            <p className="mb-0"></p>
          </div>
        </div>
        </div>
  
  












  
  
        <div className="card mb-4 mb-lg-0">
  <div className="card-body">
    <p><strong>We accept</strong></p>
    <div className="row">
      <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/american-express.png"
          alt="American Express" />
      </div>
      <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/mastercard.png"
          alt="Mastercard" />
      </div>
      <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/paypal.png"
          alt="PayPal acceptance mark" />
      </div>
      <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/apay.png"
          alt="Apple Pay acceptance mark" />
      </div>
      <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/visa.png"
          alt="Visa acceptance mark" />
      </div>
      <div className="col">
        <img className="me-2 img-fluid" width="45px"
          src="/images/paymentlogo/gpay.png"
          alt="GPay acceptance mark" />
      </div>
    </div>
  </div>
</div>

  
  
  
  
  
  
  
  
  
  
  
  
  
  

      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity
                <span>{totalQuantity}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Delivery Charges
                <span>$10</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>${totalAmount+10}</strong></span>
              </li>
            </ul>
<Link to = '/bilingform'>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}

export default Cart;





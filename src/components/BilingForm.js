import React from 'react';
import { useSelector } from 'react-redux';

const BilingForm = () => {
    const {totalQuantity,totalAmount} = useSelector((items=>items.cart))
    console.log(totalAmount)
    console.log(totalQuantity)
  return (
    <div>
      <div className="row">
  <div className="col-md-8 mb-4">
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0">Biling details</h5>
      </div>
      <div className="card-body">
        




      <form>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline" style={{ marginBottom: '1rem' }}>
                      <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                      <label className="form-label" style={{ color: '#6c757d' }}>First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline" style={{ marginBottom: '1rem' }}>
                      <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                      <label className="form-label" style={{ color: '#6c757d' }}>Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4" style={{ marginBottom: '1rem' }}>
                  <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                  <label className="form-label" style={{ color: '#6c757d' }}>Unit/Apt</label>
                </div>

              
                <div className="form-outline mb-4" style={{ marginBottom: '1rem' }}>
                  <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                  <label className="form-label" style={{ color: '#6c757d' }}>Street 1</label>
                </div>

                <div className="form-outline mb-4" style={{ marginBottom: '1rem' }}>
                  <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                  <label className="form-label" style={{ color: '#6c757d' }}>Street 2 </label>
                </div>

                <div className="form-outline mb-4" style={{ marginBottom: '1rem' }}>
                  <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                  <label className="form-label" style={{ color: '#6c757d' }}>City</label>
                </div>


                <div className="row mb-4">
                  <div className="col-10">
                    <div className="form-outline" style={{ marginBottom: '1rem' }}>
                      <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                      <label className="form-label" style={{ color: '#6c757d' }}>Card Number</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline" style={{ marginBottom: '1rem' }}>
                      <input type="text" className="form-control" style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', padding: '0.5rem' }} />
                      <label className="form-label" style={{ color: '#6c757d' }}>CVV</label>
                    </div>
                  </div>
                </div>

              
              </form>





              <div className="card mb-4 mb-lg-0">
  <div className="card-body">
   
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
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-0">Summary</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>{totalQuantity}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping Charges
            <span>$10</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Amount 
            <span>${totalAmount}</span>
          </li>
          
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>${totalAmount+10}</strong></span>
          </li>
        </ul>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
          Make purchase
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default BilingForm;

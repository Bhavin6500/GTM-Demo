import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,allCartData}  from '../features/cartSlice';
import Cart from './Cart';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';




export default function Products() {




    const dispatch = useDispatch()
    const items = useSelector((state)=>(state.cart.items))
    console.log(items)
  return (<>
   
   <MDBContainer>
        <MDBRow className='mb-3 py-2'>
    {items.map((c)=>(
      
        <MDBCol md='4'>
        <MDBCard>

     

      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      
        <MDBCardImage src={c.images} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      
      <MDBCardBody>
       <MDBCardTitle>{c.title}</MDBCardTitle>
        
        <MDBCardText>
        {c.description}

        </MDBCardText>
        <MDBCardText>
        ${c.price}

        </MDBCardText>
        
        <MDBCardText>
        Avaiable Stocks:{c.stock}

        </MDBCardText>
        
        <MDBBtn onClick={() => dispatch(addToCart(c))}>Button</MDBBtn>
      </MDBCardBody>

    </MDBCard>
    </MDBCol>
      
      
    ))}
    </MDBRow>
      </MDBContainer>
      
    
    </>
  );
}


















// // import React from 'react';
// // import {
// //   MDBCard,
// //   MDBCardBody,
// //   MDBCardTitle,
// //   MDBCardText,
// //   MDBCardImage,
// //   MDBBtn,
// //   MDBRipple,
// //   MDBRow,
// //   MDBCol,
// //   MDBContainer
// // } from 'mdb-react-ui-kit';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { addToCart } from '../features/cartSlice';
// // import './images.css'; // Import the CSS file

// // export default function Products() {
// //   const dispatch = useDispatch();
// //   const items = useSelector((state) => state.cart.items);
// //   console.log(items);

// //   return (
// //     <>
// //       <MDBContainer>
// //         <MDBRow className='mb-3 py-2'>
// //           {items.map((c) => (
// //             <MDBCol md='4' key={c.id}>
// //               <MDBCard className='fixed-height-card'>
// //                 <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
// //                   <div className='image-container'>
// //                     <MDBCardImage src={c.images} alt='...' className='fixed-size-image' />
// //                   </div>
// //                   <a>
// //                     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
// //                   </a>
// //                 </MDBRipple>
// //                 <MDBCardBody className='card-body-content'>
// //                   <MDBCardTitle>{c.title}</MDBCardTitle>
// //                   <MDBCardText>{c.description}</MDBCardText>
// //                   <MDBCardText>${c.price}</MDBCardText>
// //                   <MDBCardText>Available Stocks: {c.stock}</MDBCardText>
// //                 </MDBCardBody>
// //                 <MDBBtn className='card-footer' onClick={() => dispatch(addToCart(c))}>Button</MDBBtn>
// //               </MDBCard>
// //             </MDBCol>
// //           ))}
// //         </MDBRow>
// //       </MDBContainer>
// //     </>
// //   );
// // }




























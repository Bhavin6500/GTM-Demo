import { createSlice } from '@reduxjs/toolkit'
import { fetchAllProduct } from '../components/ProductApi';
import productData from '../productData'

const initialState = {
  value: [],//cart item will go inside this 
  items:productData,//all available products
   //filteredItems: productData, // Filtered items based on category
  totalAmount:0,
  totalQuantity:0,
  selectedCategory: null, // Initially no category selected
  priceFilter: { min: 0, max: Infinity }, // Initial price filter
  sortOption: 'Most Popular', 

}

export const cartSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
//     allCartData:(state,action)=>{
//         state.value.push(action.payload)
//         state.totalQuantity = state.value.length


//          // Calculate total amount using forEach
//       let sum = 0;
//       state.value.forEach(item => {
//         sum += item.price;
//       });
//       state.totalAmount = sum;
//  },




setSelectedCategory: (state, action) => {
  state.selectedCategory = action.payload;
},

// Selector function to filter items based on the selected category
filterItems: (state) => {
  if (state.selectedCategory) {
    state.items = productData.filter(item => item.category === state.selectedCategory);
  } else {
    // If no category is selected, show all items
    state.items = productData;
  }
},






addToCart: (state, action) => {
  let find = state.value.findIndex(item => item.id === action.payload.id);
  if (find >= 0) {
      // If item exists, increment its quantity
      state.value[find].quantity += 1;
       console.log(state.value[find].quantity)     //it is working if you try to check
       console.log("stocks",state.value[find].stock)

  } else {
      // If item doesn't exist, add it to the cart with quantity 1
      state.value.push({ ...action.payload, quantity: 1 });
       console.log(state.value.quantity)    //it is not working 

  }

// Initialize an object to hold the total price per product
let totalPricePerProduct = {};

// Iterate through each item in the cart
state.value.forEach(item => {
  // Calculate the total price for the current product
  const totalProductPrice = item.price * item.quantity;

  // Update the total price per product for the current product ID
  totalPricePerProduct[item.id] = (totalPricePerProduct[item.id] || 0) + totalProductPrice;
});

// Update the state with the total price per product
state.totalPricePerProduct = totalPricePerProduct;

// Log the total price per product
console.log(state.totalPricePerProduct);

// {

// When you're using (totalPricePerProduct[item.id] || 0), you're utilizing a JavaScript feature called the logical OR (||) operator. This operator returns the value of its first operand if the first operand is truthy, otherwise it returns the value of the second operand.

// In your case, if totalPricePerProduct[item.id] is undefined or NaN, which would be the case if the product ID is encountered for the first time, it will be treated as falsy, and thus the OR operator will return the second operand, which is 0.

// This ensures that even if totalPricePerProduct[item.id] is not yet defined (i.e., if the product ID is encountered for the first time), it will default to 0. This prevents NaN from being propagated in the calculation and ensures that you're always adding a numeric value to totalProductPrice.

// If you omit the || 0, then when totalPricePerProduct[item.id] is undefined or NaN, JavaScript will attempt to perform arithmetic operations involving undefined or NaN, which results in NaN. Hence, you're observing NaN if you omit || 0.

// In summary, (totalPricePerProduct[item.id] || 0) is used to ensure that totalPricePerProduct[item.id] is treated as 0 if it is not yet defined or is NaN, thus preventing unintended NaN results in the calculation.
// }


  // Recalculate total amount
  let sum = 0;
  state.value.forEach(item => {
      sum += item.price * item.quantity;
  });
  state.totalAmount = sum;
  console.log(state.totalAmount)


// Recalculate total amount
  let totalQuantity = 0;
  state.value.forEach(item => {
      totalQuantity += item.quantity;
  });
  state.totalQuantity = totalQuantity;
  console.log(state.totalQuantity)

},







// it is no check the stocks
// increment: (state, action) => {
//       const { id} = action.payload;
//       const itemIndex = state.value.findIndex(item => item.id === id );
//       if (itemIndex !== -1) {
//         state.value[itemIndex].quantity += 1;
//         state.totalAmount += state.value[itemIndex].price;
//         state.totalQuantity += 1;
//       }
//     },


    // it also check the number of stocks:
    // increment: (state, action) => {
    //   const { id } = action.payload;
    //   const itemIndex = state.value.findIndex(item => item.id === id);
    //   if (itemIndex !== -1) {
    //     const itemInStock = productData.find(item => item.id === id); // Find the item in the productData to get its stock
    //     if (state.value[itemIndex].quantity < itemInStock.stock) {
    //       state.value[itemIndex].quantity += 1;
    //       state.totalAmount += state.value[itemIndex].price;
    //       state.totalQuantity += 1;
    //     }
    //   }},


    increment: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.value.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        const itemInStock = productData.find(item => item.id === id); // Find the item in the productData to get its stock
        if (itemInStock && state.value[itemIndex].quantity < itemInStock.stock) {
          state.value[itemIndex].quantity += 1;
          state.totalAmount += state.value[itemIndex].price;
          state.totalQuantity += 1;
        } else {
          // If the item is not found in stock or the quantity exceeds available stock, show alert or handle it accordingly
          alert("Sorry, this item is out of stock or you've reached the maximum quantity allowed.");
          // You might want to dispatch an action to handle this scenario further
        }
      }
    },


decrement: (state, action) => {
  const { id } = action.payload;
  const itemIndex = state.value.findIndex(item => item.id === id);
  if (itemIndex !== -1) { // Check if item exists in cart
    if (state.value[itemIndex].quantity > 1) { // Check if quantity is greater than 1
      state.value[itemIndex].quantity -= 1; // Decrement quantity
      state.totalAmount -= state.value[itemIndex].price; // Adjust total amount
      state.totalQuantity -= 1; // Decrease total quantity
    }
  }
},


removeFromCart: (state, action) => {
  const { id } = action.payload;
  const itemIndex = state.value.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    // Remove the item from the cart and capture the removed item
    const [removedItem] = state.value.splice(itemIndex, 1);

    // Adjust total amount and total quantity using the captured removed item
    state.totalAmount -= removedItem.price * removedItem.quantity;
    state.totalQuantity -= removedItem.quantity;
  }
},






  },
})

// Action creators are generated for each case reducer function
export const {   allCartData,addToCart,increment,decrement,removeFromCart,setSelectedCategory,filterItems} = cartSlice.actions

export default cartSlice.reducer










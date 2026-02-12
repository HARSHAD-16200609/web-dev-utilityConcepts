import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  // This function handles the payment flow
  const handlePayment = async () => {
    setLoading(true);
    try {
      // 1. Create an Order on the Server
      const result = await axios.post('http://localhost:5000/order');
      const { amount, id: order_id, currency } = result.data;

      // 2. Configure options for the Razorpay Checkout
      const options = {
        key: 'rzp_test_SC8i1QmPmAcvsF', // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: 'Razorpay Test Corp',
        description: 'Test Transaction',
        image: 'https://vitejs.dev/logo-with-shadow.png', // Optional logo
        order_id: order_id,
        handler: async function (response) {
          // 3. Validate Payment on the Server
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const result = await axios.post(
              'http://localhost:5000/order/validate',
              data
            );
            alert(result.data.msg);
          } catch (error) {
            console.error(error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'Piyush Garg',
          email: 'piyush.garg@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      // 4. Open Razorpay Checkout
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error(error);
      alert('Something went wrong during order creation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Payment Gateway</h1>
        <p className="description">
          Test the Razorpay integration with a sample transaction.
        </p>
        <div className="product-info">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Product"
            className="product-image"
          />
          <div className="details">
            <h2>Premium Sneakers</h2>
            <p className="price">₹500.00</p>
          </div>
        </div>
        <button
          className="pay-button"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
}

export default App;

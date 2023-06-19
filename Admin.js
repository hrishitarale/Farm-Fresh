import React, {useEffect, useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './Admin.css';
import productsData from './ProductsData';

const firebaseConfig = {
    apiKey: "AIzaSyAd_wkaybNICoR22ra7n1QSBVBxKFMQRBk",
    authDomain: "main-project-b1451.firebaseapp.com",
    projectId: "main-project-b1451",
    storageBucket: "main-project-b1451.appspot.com",
    messagingSenderId: "618039256048",
    appId: "1:618039256048:web:d01450d3b4d777bb1c3335"    
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Admin = () => {
    const [customerData, setCustomerData] = useState([]);
    const [showCustomerData, setShowCustomerData] = useState(false); // State variable for conditional rendering
    const [productData, setProductData] = useState([]);
    const [showProductData, setShowProductData] = useState(false);

    const getCustomerData = async () => {
      try {
        const snapshot = await db.collection('users').get();
        const data = snapshot.docs.map((doc) => doc.data());
        setCustomerData(data);
        setShowCustomerData(!showCustomerData);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    const getProductdata = async () =>{
      try{
        const snapshot = await db.collection('Products').get();
        const data = snapshot.docs.map((doc) => doc.data());
        setProductData(data);
        setShowProductData(!showProductData);
      }catch (error){
        console.error('Error fetching product data:',error);
      }
    };
    const getCategory = (productId) => {
      if (productId >= 111 && productId <= 118) {
        return 'Vegetable';
      } else if (productId >= 200 && productId <= 205) {
        return 'Fruit';
      } else if (productId >= 300 && productId <= 307) {
        return 'Exotic Vegetable';
      } else if (productId >= 400 && productId <= 407) {
        return 'Exotic Fruit';
      } else {
        return 'Other';
      }
    };
  
    return (
      <div className="admin-container">
        <div className="admin-sidebar">
          <button className="admin-sidebar-button" onClick={getCustomerData}>
            {showCustomerData? 'Hide Customer Data' : 'Show Customer Data'}
          </button>
          <button className='admin-sidebar-button' onClick={getProductdata}>
            {showProductData ? 'Hide Product Data' : 'Show Product Data'}
          </button>
        </div>
        <div className="admin-content">
          <h1>Admin Page</h1>
          {showCustomerData ? (
            <div>
            <h2>Customer Data</h2>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          ) : (
            <p></p>
          )}
          {/* product data */}
          {showProductData && (
            <div>
              <h2>Product Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((Product) =>(
                    <tr key={productData.id}>
                      <td>{Product.id}</td>
                      <td>{Product.title}</td>
                      <td>{Product.price}</td>
                      <td>{getCategory(Product.id)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> 
          )}
        </div>
      </div>
    );
  };

export default Admin;
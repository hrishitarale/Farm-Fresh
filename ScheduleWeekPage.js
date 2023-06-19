import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import Footer from './Footer';
import Subtotal from './Subtotal';
import './ScheduleWeekPage.css';
function ScheduleWeekPage() {
  const [{ cart }] = useStateValue();
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <>
        <Header />
        <div className="scheduleWeekPage">
            <div className="scheduleWeekPage_products">
                <h2 className="scheduleWeekPage_title">Schedule Week</h2>
                {cart.map((item) => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                />
                ))}
            </div>
            <div className="scheduleWeekPage_deliveryDate">
                <label htmlFor="deliveryDate">Select Delivery Date:</label>
                <input
                type="date"
                id="deliveryDate"
                value={selectedDate}
                onChange={handleDateChange}
                />
                <Subtotal />
            </div>
        </div>
        <Footer />
    </>
  );
}

export default ScheduleWeekPage;

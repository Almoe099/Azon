import { useEffect, useState } from 'react';
import './date.css'

const DeliveryComponent = () => {
  const [deliveryRange, setDeliveryRange] = useState('');

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Calculate the delivery date (5-7 days from the current date)
    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 5);

    const endDeliveryDate = new Date(currentDate);
    endDeliveryDate.setDate(currentDate.getDate() + 7);

    // Format the delivery date as a string
    const deliveryDateStr = deliveryDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const endDeliveryDateStr = endDeliveryDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    // Set the delivery range state
    setDeliveryRange(`${deliveryDateStr} - ${endDeliveryDateStr}`);
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div>
      <div className="delivery"><span className="freeD">Free Delivery</span>{deliveryRange && <>{deliveryRange}</>}.</div>
    </div>
  );
};

export default DeliveryComponent;
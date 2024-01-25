import { useEffect, useState } from "react";
import "./date.css";

const DeliveryComponent = () => {
  const [deliveryRange, setDeliveryRange] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    const deliveryDate = new Date(currentDate);
    deliveryDate.setDate(currentDate.getDate() + 5);

    const endDeliveryDate = new Date(currentDate);
    endDeliveryDate.setDate(currentDate.getDate() + 7);

    const deliveryDateStr = deliveryDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    const endDeliveryDateStr = endDeliveryDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    setDeliveryRange(`${deliveryDateStr} - ${endDeliveryDateStr}`);
  }, []);

  return (
    <div>
      <div className="delivery">
        <span className="freeD">Free Delivery</span>
        {deliveryRange && <>{deliveryRange}</>}.
      </div>
    </div>
  );
};

export default DeliveryComponent;

import FigureX from "../image/FigureX.png";
import FigureCard from "../image/FigureCard.png";
import FigureWarning from "../image/FigureWarning.png";
import FigureDeliveryMan from "../image/FigureDeliveryMan.png";
import FigureNotepad from "../image/FigureNotepad.png";
import FigureCart from "../image/FigureCart.png";
import FigureFont from "../image/FigureFont.png";
import FigurePhoto from "../image/FigurePhoto.png";

const Card = () => {
  return (
    <div className="h-dvh p-20 text-[#525252] grid gap-10  grid-cols-[repeat(4,minmax(290px,1fr))] grid-rows-[repeat(2,minmax(360px,1fr))] mt-5 justify-items-center">
      <div className="card">
        <div className="image">
          <img src={FigureX} alt="" />
        </div>

        <div>
          <h3>When Order Canceled Recovery</h3>
          <div className="desk">
            <p>
              Buyers who cancel orders will get notifications which aims to
              inform (providing special discounts, coupons, etc.)
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigureCard} alt="" />
        </div>

        <div>
          <h3>Customer Notifications When There Are Orders</h3>
          <div className="desk">
            <p>
              Customers will get notifications automatically via WA instantly
              after they do checkout
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigureWarning} alt="" />
        </div>

        <div>
          <h3>Monitor Undelivered Notifications</h3>
          <div className="desk">
            <p>
              Website owners get an error log menu to detect the reason from
              message that failed to send
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigureDeliveryMan} alt="" />
        </div>

        <div>
          <h3>Purchase Tracking Number</h3>
          <div className="desk">
            <p>
              You can send delivery receipt information to WA customer via
              woocommerce admin or order notes
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigureNotepad} alt="" />
        </div>

        <div>
          <h3>H+ Reminder When It Hasn&apos;t Transferred Yet</h3>
          <div className="desk">
            <p>
              Woowa will send via WA to the customer who have already checked
              out but not yet transfer
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigureCart} alt="" />
        </div>

        <div>
          <h3>Order Notification When Completed</h3>
          <div className="desk">
            <p>
              Customers will get notifications automatically via WA instantly
              after their payment is confirmed
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigureFont} alt="" />
        </div>

        <div>
          <h3>Customization & Personalization Message</h3>
          <div className="desk">
            <p>
              Message templates can be customized according to your shop&apos;s
              signature style
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img src={FigurePhoto} alt="" />
        </div>

        <div>
          <h3>Attach Pictures On Notification</h3>
          <div className="desk">
            <p>
              Attach images/files to notifications, it can be coupon code, pdf,
              image products, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

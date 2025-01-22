import Person1 from "../image/Person1.png";
import Person2 from "../image/Person2.png";

const Testimonial = () => {
  return (
    <div className=" testi flex p-20 w-full justify-center gap-10">
      <div className="card-testi border-2 border-[#E0E0E0] w-[620px] h-[424px] rounded-[32px] p-10">
        <div className="profile flex gap-5 items-center mb-5">
          <div className="profile-img h-[64px] w-[64px] rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src={Person1} alt="" />
          </div>
          <div className="person-name">
            <h5>Jesse Janitra Jahja</h5>
            <p>Co-founder TujuhKonversi.com</p>
          </div>
        </div>

        <div className="testi-text">
          <p>
            Woowa really helped us in terms of following up customer payments.
            Very often after a customer makes a purchase, they don&apos;t pay
            immediately and even end up forgetting. Now with Woowa, they always
            get bills automatically via WA and if they haven&apos;t paid yet,
            Woowa can continue to send chain messages. This is great because
            WA&apos;s open rate is up to 95%, far higher than email open rates!
            With Woowa, percentage of paying customers has increased to more
            than 50%!.
          </p>
        </div>
      </div>

      <div className="card-testi border-2 border-[#E0E0E0] w-[620px] h-[424px] rounded-[32px] p-10">
        <div className="profile flex gap-5 items-center mb-5">
          <div className="profile-img h-[64px] w-[64px] rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src={Person2} alt="" />
          </div>
          <div className="person-name">
            <h5>Rudhi Maya</h5>
            <p>Adsdisplay.id</p>
          </div>
        </div>

        <div className="testi-text">
          <p>
            Very helpful, especially in sending notifications invoice because it
            goes directly to our buyer&apos;s WA... it&apos;s cool anyway..👍
            just choose the pending invoice date berapa, the choice is complete
            until today. after the number of invoices appears, just make a
            template followup then send..joss...it&apos;s increasing
            yesterday&apos;s sales ad display.in 3 hours translucent 20 sales,
            crazy... only 1 the key...Tools Woowa helps improve my product sales
            up to hundreds of sales in 7 days huhuuu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

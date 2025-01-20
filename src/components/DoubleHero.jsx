import MyAnswer from "../image/MyAnswer.png";
import EmailCampaign from "../image/EmailCampaign.png";

const DoubleHero = () => {
  return (
    <div className="h-dvh flex flex-col justify-center">
      <div className="top px-20  flex gap-3 w-full justify-around items-center ">
        <div className="image-hero">
          <img src={MyAnswer} alt="" />
        </div>
        <div className="double-hero-desk">
          <h4>
            Text messaging is an important tool to support social media
            platforms in sending electronic messages via telephone networks, so
            the use of the text message feature in an application is needed.
          </h4>
        </div>
      </div>
      <div className="bottom flex flex-row-reverse gap-3 justify-around items-center px-20 w-full">
        <div className="image-hero">
          <img src={EmailCampaign} alt="" />
        </div>
        <div className="double-hero-desk">
          <h4>
            Chat apps get more clicks than email and Facebook ads, indicating
            higher user preference. This confirms the important role of chat
            applications in active and engaging communication.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DoubleHero;

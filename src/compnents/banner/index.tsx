import react from "react";
import style from "./Banner.module.scss";
import Slider from "react-slick";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
const SETTINGS = {
  slidesToShow: 1,
  dots : true 
};

const Slide: React.FC<{ image: string; id: string }> = ({ image, id }) => {
  return (
    <div
      className={style.slide}
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    ></div>
  );
};
const Banner: React.FC = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className={style.banner}>
              <Slider {...SETTINGS}>
                {"12345".split("").map((item) => {
                  return (
                    <Slide
                      key={item}
                      id={item}
                      image={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.besthdwallpaper.com%2Fmusic%2Fle-sserafim-all-members-kpop-girls-group-dt_en-US-100024.html&psig=AOvVaw3dhXb_V_LIuDi8OlZo0Jvs&ust=1679924045431000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDjr_fa-f0CFQAAAAAdAAAAABAE`}
                    />
                  );
                })}
              </Slider>
              <div className={style.contents}>
                <div className={style.inner}>
                <h1 className={style.caption}>
                  <div>Your future</div>
                  <div>begins <span className="pink">here!</span></div>
                </h1>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;

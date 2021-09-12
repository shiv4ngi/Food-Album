import foodPic1 from "../assets/food.jpg";
import foodPic2 from "../assets/desert.jpeg";
import foodPic3 from "../assets/crossaint.jpg";
import foodPic4 from "../assets/pastry.jpg";
import foodPic5 from "../assets/pie.jpg";
import foodPic6 from "../assets/burger.jpg";
import Card from "./Card";

const Album = () => {
  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Card image={foodPic1} />
          <Card image={foodPic2} />
          <Card image={foodPic3} />
          <Card image={foodPic4} />
          <Card image={foodPic5} />
          <Card image={foodPic6} />
        </div>
      </div>
    </div>
  );
};

export default Album;

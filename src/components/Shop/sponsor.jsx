import styles from "../../designs/sponsor.module.css"
import image1 from "../../Images/Vector (1).svg";
import image2 from "../../Images/Vector (2).svg";
import image3 from "../../Images/fa-brands-3.svg";
import image4 from "../../Images/fa-brands-4.svg";
import image5 from "../../Images/fa-brands-5.svg";
import image6 from "../../Images/Vector 2.svg";

const images = [image1, image2, image3, image4, image5, image6];

const SponsorSection = () => {
  return (
    <div className={styles["sponsor-mainContainer"]}>
      <div className={styles["sponsor-container"]}>
        <div className={styles.icons}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Sponsor ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;

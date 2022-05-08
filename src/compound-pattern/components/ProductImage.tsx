import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImg = ({ img = "" }) => {

     
    let imgToShow : string;   
      if(img){
          imgToShow = img
      }else if (img) {
          imgToShow = img
      } else {
          imgToShow = noImage
      }
    return (
      <img className={styles.productImg} src={imgToShow} alt="Product"/>
    );
  };
  
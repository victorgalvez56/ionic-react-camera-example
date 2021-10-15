import {
  IonContent,
  IonImg,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "../css/home.css";
import "../css/root.css";
import homeImg from "../images/img-home.jpg";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg className="container-img" src={homeImg} />
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

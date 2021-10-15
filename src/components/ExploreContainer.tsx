import "./ExploreContainer.css";
import { arrowForward } from "ionicons/icons";
import {
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButton
} from "@ionic/react";
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <h1 className="text-primary h1-home">Bienvenido a EVACUA MISTI</h1>
      <p className="text-primary p-home">
        El Instituto Geofísico del Perú (IGP) creó una app que te ayuda a
        encontrar tu lugar de evacuación ante una erupción volcánica del Misti
      </p>
      <h2 className="text-primary h2-home">Coloca tu DNI</h2>
      <div className="text-primary padding-home">
        <input className="input-home" />
        <button className="button-home">
        <IonIcon icon={arrowForward} />
        </button>
      </div>
    </div>
  );
};

export default ExploreContainer;

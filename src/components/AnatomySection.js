import anatomicalImage from "../assets/anatomical-illustration.png";

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src={anatomicalImage} alt="Anatomical Illustration" />
      <div className="indicator healthy-heart">Healthy Heart</div>
      <div className="indicator healthy-log">Healthy Log</div>
    </div>
  );
}

export default AnatomySection;
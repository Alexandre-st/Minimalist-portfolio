import { Link } from "react-router-dom";

const TalkComponent = () => {
  return ( 
    <section className="talk">
      <h3 className="middle-title">Interested in doing a project together?</h3>
      <div className="border"></div>
      <Link className="button button-contact" to="/contact">CONTACT ME</Link>
    </section>
  );
}
 
export default TalkComponent;
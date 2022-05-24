
import GithubImg from '../assets/icons/github.svg';
import TwitterImg from '../assets/icons/twitter.svg';
import LinkedinImg from '../assets/icons/linkedin.svg';


const Contact = () => {
  return ( 
    <main className="container">
      <section className="infos">
        <div className="border"></div>
        <div className="infos-container">
          <h1 className="middle-title">Get in Touch</h1>
          <div className="infos-content">
            <p className="small-text">
              I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
            </p>
            <div className="infos-content-social">
              <img src={GithubImg} alt="Github Link" />
              <img src={TwitterImg} alt="Twitter Link" />
              <img src={LinkedinImg} alt="Linkedin Link" />
            </div>
          </div>  
        </div>
        <div className="border"></div>
      </section>

      <section className="contact">
        <div className="contact-container">
          <h2 className="middle-title">Contact Me</h2>
          <form className="contact-form">
            <div className="contact-form-input">
              <label className="contact-form-label" htmlFor="name">Name</label>
              <input type="text" placeholder="Jane Appleseed" />
            </div>
            <div className="contact-form-input">
              <label className="contact-form-label" htmlFor="email">Email Adress</label>
              <input type="text" placeholder="email@example.com" />
            </div>
            <div className="contact-form-area">
              <label className="contact-form-label" htmlFor="message">Message</label>
              <textarea type="text" placeholder="How can I help?" rows={3} />
            </div>
            <button className="button button-form" type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </main>
  );
}
 
export default Contact;
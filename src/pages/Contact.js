import "../styles/Contact.css";
export default function Contact() {
  return (
    <main className="info-page">
      <section className="info-card">
        <h1>Contact Us</h1>
        <p>
          Have feedback about this project or ideas for new recipes? Fill in
          the form below.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
          </div>

          <div>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>

          <div>
            <label>
              Message
              <textarea placeholder="Write your message here..." />
            </label>
          </div>

          <button type="submit" className="recipe-button">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}

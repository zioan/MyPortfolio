import React from "react";

export default function Contact() {
  return (
    <div>
      <form
        className="contact-form shadow"
        name="contact"
        action="/contact"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          required
          type="text"
          name="name"
          placeholder="Your name"
          defaultValue=""
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          defaultValue=""
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          id="1"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Send the message</button>
      </form>
    </div>
  );
}

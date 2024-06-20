import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"

        />
      </label>
      <br/>

      <label>
        <input 
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="^(?:(?:\+|00)353|0)?(?:83|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)\d{7}$"
          placeholder="Phone Number"
        />
      </label>
      <br/>

      <label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
        />
      </label>
      <br/>

      <input type="submit" value="Add Contact" />
    </form>
  );
};


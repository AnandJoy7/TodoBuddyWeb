import React from "react";

function Subscribe() {
  return (
    <div>
      <form class="port">
        <span class="title">Subscribe to our Todobuddy.</span>
        <p class="description">
          Stay on top of your goals, prioritize effectively, and conquer your
          to-do list with ease!
        </p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;

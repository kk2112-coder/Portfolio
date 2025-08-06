import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6NI8tEOp_2us_qn8miKC-v4b9Qxre5Bw",
  authDomain: "my-portfolio-3317a.firebaseapp.com",
  projectId: "my-portfolio-3317a",
  storageBucket: "my-portfolio-3317a.appspot.com",
  messagingSenderId: "746292600491",
  appId: "1:746292600491:web:aa9f940b9435f579fde1ee"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;

  try {
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      subject: form.subject.value,
      budget: form.budget.value,
      message: form.message.value,
      newsletter: form.newsletter.checked,
      timestamp: new Date().toISOString()
    };

    await addDoc(collection(db, "messages"), formData);

    formMessage.textContent = "Message sent successfully!";
    form.reset();
  } catch (error) {
    console.error("Firestore Error:", error.message);
    formMessage.textContent = "Failed to send message.";
  }

  submitBtn.disabled = false;
});

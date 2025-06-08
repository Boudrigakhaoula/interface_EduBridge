// App.jsx
import Header from "./components/Header";
import SocialIcons from "./components/SocialIcons";
import LinkButton from "./components/LinkButton";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-start py-4">
      <div className="app-container text-center">
        <Header />
        <SocialIcons />
   <div className="mt-4 d-grid gap-3">
  <LinkButton icon="✉️" label="Email" link="mailto:edubridge.websiblings@gmail.com" />
  <LinkButton icon="📘" label="Facebook" link="https://www.facebook.com/profile.php?id=61576629756875" />
  <LinkButton icon="📸" label="Instagram" link="https://www.instagram.com/edub.ridgewebsiblings/" />
  <LinkButton icon="🔗" label="LinkedIn" link="https://www.linkedin.com/feed/?trk=onboarding-landing" />
  <LinkButton icon="▶️" label="Watch Demo on YouTube" link="https://youtu.be/IwlgPZIGV8A?si=0t9yacatdyKOVH-0" />
</div>


  
        <Footer />
      </div>
    </div>
  );
}

export default App;

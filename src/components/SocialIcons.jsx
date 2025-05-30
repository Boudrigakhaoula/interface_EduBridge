import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="d-flex justify-content-center gap-3 fs-4 mt-3">
      <a href="mailto:edubridge.websiblings@gmail.com" target="_blank" rel="noopener noreferrer" className="text-dark">
        <FaEnvelope />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61576629756875" target="_blank" rel="noopener noreferrer" className="text-dark">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/edub.ridgewebsiblings/" target="_blank" rel="noopener noreferrer" className="text-dark">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" target="_blank" rel="noopener noreferrer" className="text-dark">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default SocialIcons;

import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Gold Resin Customization</h1>
      <p>Create your personalized resin jewelry with shapes, letters, and flowers!</p>
      <Link to="/customize">
        <button className="customize-button">Customize Now</button>
      </Link>
    </div>
  );
}

export default Home;

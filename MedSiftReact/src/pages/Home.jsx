import medSiftLogo from '/MedSiftLogo.png';
import { Countdown } from '../components';


function Home({navigate}) { 

    return (
         <>
        <div className='main-content'> 
          <Countdown targetDate="2025-08-19T00:00:00" />
          
        <a href="https://github.com/mrDNA219/3140_Project" target="_blank">
          <img src={medSiftLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite+React+MongoDB</h1>
      <div className="card">
        <p>
            Welcome to MedSift! This app is designed to be a one-stop-shop for med students to find and aggregate relevant 
            materials quickly and efficiently, take and organise notes that directly reference said materials, and store
            everything for easy access anywhere in the world! We are currently under construction but are targeting an August 19th 2025 release date.
            We look forward to serving you very soon!
        </p>
      </div>
        </>
    )
}

export default Home;
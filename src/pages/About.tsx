import { useState } from 'react'
import SentimenAnalyser from '../components/SentimentAnalyser';
// import "./About.css";

export default function About() {

  return (
    <main id="app_container" className="app-container">
        <section id="up_center" className="section_all">
           <SentimenAnalyser></SentimenAnalyser> 
        </section>
    </main>
  );
}
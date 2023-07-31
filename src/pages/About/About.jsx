
import React, { useState, useEffect } from 'react';
import ImageBanner from '../../components/ImageBanner/ImageBanner.jsx';
import DescriptionPanel from '../../components/DescriptionPanel/DescriptionPanel.jsx';
import './About.css';

function About() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Charger la base de données JSON depuis le fichier
    fetch('rules.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from JSON:', data); // Vérifiez les données récupérées ici
        setRules(data.Rules);
      })
      .catch((error) => console.error('Erreur lors du chargement du JSON : ', error));
  }, []);

  return (
    <>
      <ImageBanner />
      <div className='about__container'>
        {rules.map((rule, index) => (
          <DescriptionPanel key={index} title={rule.title} content={rule.content} />
        ))}
      </div>
    </>
  );
}

export default About;

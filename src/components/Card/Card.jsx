import React from 'react';
import { useCatImage } from '../../hooks/useCatImage';
import { useCatFact } from '../../hooks/useCatFact';
import styles from './Card.module.css';
import { Button } from '../Button';

const Card = () => {
  // Utiliza desestructuración para obtener las propiedades necesarias de los hooks
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  // Manejador de clic para obtener un nuevo hecho sobre gatos
  const handleClick = () => {
    refreshFact();
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.cardTitle}>CAT APP</h1>
      <Button onClick={handleClick} />
      {fact && <h3 className={styles.fact}>{fact}</h3>}
      <div className={styles.stack}>
        <div className={styles.card}>
          <div className={styles.image}>
            {/* Muestra la imagen si está disponible */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt={`Cat image based on the first three words: ${fact}`}
                className={styles.catImage}
              />
            )}
          </div>
        </div>
        {/* Muestra el hecho sobre gatos si está disponible */}
      </div>
    </div>
  );
};

export default Card;

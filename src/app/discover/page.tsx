import React from 'react';
import Recommendation from '@/components/recommendation';
import styles from './styles/styles.module.scss';

const RecommendationPage: React.FC = () => {
  return (
    <div>
        <div className={styles.categoryTitle}>
          <div>
            <h2>Discover new titles</h2>
            <p> Most borrowed books and recommendations based off your previous reads</p>
          </div>
        </div>
      <Recommendation/>
    </div>
  )
}

export default RecommendationPage

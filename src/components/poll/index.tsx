import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useStyles } from './styles/styles';

const Poll: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const {styles} = useStyles();

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Selected option:', selectedOption);
    // Add your logic to submit the poll data
  };

  return (
    <div className={styles.pollContainer}>
      <h2>What is your favorite genre?</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio-option">
          <label>
            <input
              type="radio"
              value="fiction"
              checked={selectedOption === 'fiction'}
              onChange={handleOptionChange}
            />
            Fiction
          </label>
        </div>
        <div className={styles.radioOption}>
          <label>
            <input
              type="radio"
              value="non-fiction"
              checked={selectedOption === 'non-fiction'}
              onChange={handleOptionChange}
            />
            Non-Fiction
          </label>
        </div>
        <div className={styles.radioOption}>
          <label>
            <input
              type="radio"
              value="mystery"
              checked={selectedOption === 'mystery'}
              onChange={handleOptionChange}
            />
            Mystery
          </label>
        </div>
        <div className={styles.radioOption}>
          <label>
            <input
              type="radio"
              value="sci-fi"
              checked={selectedOption === 'sci-fi'}
              onChange={handleOptionChange}
            />
            Sci-Fi
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Poll;

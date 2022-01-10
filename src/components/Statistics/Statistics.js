import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li>
        <p className={s.item}>Good: {good}</p>
      </li>
      <li>
        <p className={s.item}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={s.item}> Bad: {bad}</p>
      </li>
      <li>
        <p className={s.item}>Total: {total}</p>
      </li>
      <li>
        <p className={s.item}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

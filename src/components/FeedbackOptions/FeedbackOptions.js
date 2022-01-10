import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const namesOfItems = Object.keys(options);
  return (
    <ul className={s.list}>
      {namesOfItems.map(item => {
        return (
          <li key={item}>
            <button type="button" onClick={() => onLeaveFeedback(item)} className={s.button}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

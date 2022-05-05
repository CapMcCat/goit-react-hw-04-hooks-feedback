import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //console.log('options в компоненте фидбек опшнс', options);
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          type="button"
          className={s.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

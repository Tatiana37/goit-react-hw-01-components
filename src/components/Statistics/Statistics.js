import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const createRandomColor = () => {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};
export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: createRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

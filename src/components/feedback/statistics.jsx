import React from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={clsx(css.statistics)}>
            <h2 className={clsx(css.statistics_title)}>Statistics</h2>
            {total === 0 && <p className={clsx(css.statistics_empty)}>No feedback given</p>}
            {total > 0 && 
                <ul className={clsx(css.statistics_list)}>
                    <li className={clsx(css.statistics_item)}>Good: {good}</li>
                    <li className={clsx(css.statistics_item)}>Neutral: {neutral}</li>
                    <li className={clsx(css.statistics_item)}>Bad: {bad}</li>
                    <li className={clsx(css.statistics_item)}>Total: {total}</li>
                    <li className={clsx(css.statistics_item)}>Positive feedback: {positivePercentage}</li>
                </ul>
            }
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
};

export default Statistics;
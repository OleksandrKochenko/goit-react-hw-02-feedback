import React from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './feedback.module.css';

const FeedbackOptions = ({options}) => {
    return (
        <div className={clsx(css.feedback_buttons)}>
            <button className={clsx(css.button)} type='button' onClick={options.goodClick}>Good</button>
            <button className={clsx(css.button)} type='button' onClick={options.neutralClick}>Neutral</button>
            <button className={clsx(css.button)} type='button' onClick={options.badClick}>Bad</button>
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.object,
};

export default FeedbackOptions;
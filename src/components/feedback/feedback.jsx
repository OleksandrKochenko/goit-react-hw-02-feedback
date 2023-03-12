import React, { Component } from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './feedback.module.css';
import FeedbackOptions from "./options";
import Statistics from './statistics';

class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    static propTypes = {
        title: PropTypes.string,
    };
    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
    countTotalFeedback = () => {
        return (this.state.good + this.state.neutral + this.state.bad)
    };
    countPositiveFeedbackPercentage = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return `${Math.round(this.state.good / total * 100)}%`
    };
    options = {
        goodClick: this.handleGood,
        neutralClick: this.handleNeutral,
        badClick: this.handleBad,
    };
    render() {
        const { title } = this.props;
        return (
            <div className={clsx(css.feedback_container)}>
                <h2 className={clsx(css.feedback_title)}>{title}</h2>
                <FeedbackOptions options={this.options} />
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </div>
        )
    }
};

export default Section;
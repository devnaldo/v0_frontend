import React from 'react';
import styles from './OutcomeBadge.module.scss';

export const OutcomeBadge = ({ label }) => (
    <span className={styles.outcomeBadge}>{label}</span>
);

export const WinnerBadge = () => (
    <span className={styles.winnerBadge}>Winner</span>
);

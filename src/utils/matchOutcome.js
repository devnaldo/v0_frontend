export const DECLARABLE_OUTCOMES = [
    { key: 'walkover', label: 'Walkover' }
];

const getTeamPlayers = (match, side) => {
    const players = match?.[`${side}_players`];
    if (players) return players;

    const teamPlayers = match?.[side]?.players;
    if (!Array.isArray(teamPlayers)) return null;

    return teamPlayers
        .map(player => `${player.first_name || ''} ${player.last_name || ''}`.trim())
        .filter(Boolean)
        .join(', ');
};

export const getOutcomeView = (match = {}) => {
    const matchStatus = match?.match_status || match || {};
    const outcomeType = matchStatus.outcome_type;
    const showTag = Boolean(outcomeType && outcomeType !== 'normal');
    const isScored = matchStatus.requires_score !== false;
    const isFinal = matchStatus.is_final === true;
    const winnerTeamId = match?.winner_team_id ?? matchStatus.winner_team_id;

    let winnerSide = null;
    if (isFinal && winnerTeamId != null) {
        if (winnerTeamId === match?.team1?.team_id) {
            winnerSide = 'team1';
        } else if (winnerTeamId === match?.team2?.team_id) {
            winnerSide = 'team2';
        }
    }

    return {
        showTag,
        label: matchStatus.outcome_label || '',
        isScored,
        winnerSide,
        winnerPlayers: winnerSide ? getTeamPlayers(match, winnerSide) : null
    };
};

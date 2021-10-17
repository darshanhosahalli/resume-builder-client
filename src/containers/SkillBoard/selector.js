import { createSelector } from 'reselect';

const skillSelector = state => state.skills.skills;

const selectedSkill = state => state.skills.selectedSkill;

const getSelectedSkill = (skills, selectedSkillIndex) => {
    const selectedSkill = skills[selectedSkillIndex];
    return selectedSkill;
}

export default createSelector(
    skillSelector,
    selectedSkill,
    getSelectedSkill
);
export const COLORS = {
  light_blue: '#afc7d0',
  medium_blue: '#95b4cc',
  dark_blue: '#799fcb',
  darkest_blue: '#507BAD',

  light_gray: '#dcdcdc',
  medium_gray: '#9aa2a3',
  dark_gray: '#626a6c',

  green: '#4e734a',
  pink: '#f6c3c3',
  white: '#fff',
  red: '#830f05',
};

export const EXERCISE_TYPES = [
  { label: 'Cardio', value: 'cardio' },
  { label: 'Olympic Weightlifting', value: 'olympic_weightlifting' },
  { label: 'Plyometrics', value: 'plyometrics' },
  { label: 'Powerlifting', value: 'powerlifting' },
  { label: 'Strength', value: 'strength' },
  { label: 'Stretching', value: 'stretching' },
  { label: 'Strongman', value: 'strongman' },
];

export const EXERCISE_MUSCLES = [
  { label: 'Abdominals', value: 'abdominals' },
  { label: 'Abductors', value: 'abductors' },
  { label: 'Adductors', value: 'adductors' },
  { label: 'Biceps', value: 'biceps' },
  { label: 'Calves', value: 'calves' },
  { label: 'Chest', value: 'chest' },
  { label: 'Forearms', value: 'forearms' },
  { label: 'Glutes', value: 'glutes' },
  { label: 'Hamstrings', value: 'hamstrings' },
  { label: 'Lats', value: 'lats' },
  { label: 'Lower back', value: 'lower_back' },
  { label: 'Middle back', value: 'middle_back' },
  { label: 'Neck', value: 'neck' },
  { label: 'Quadriceps', value: 'quadriceps' },
  { label: 'Traps', value: 'traps' },
  { label: 'Triceps', value: 'triceps' },
];

export const EXERCISE_DIFFICULTY = [
  { label: 'Beginner', value: 'begginer', color: COLORS.light_blue },
  {
    label: 'Intermediate',
    value: 'intermediate',
    color: COLORS.medium_blue,
  },
  { label: 'Expert', value: 'expert', color: COLORS.dark_blue },
];

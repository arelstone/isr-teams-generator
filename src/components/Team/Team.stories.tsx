import { Team } from './Team';

export default {
  component: Team,
  title: 'Components/Team/Team',
}

export const TeamMembers = () => <Team
  am={{
    category: 'AM',
    name: 'ISR_EeekDK',
    time: '05:24:634'
  }}
  pro={{
    category: 'PRO',
    name: 'HasHnSpeeD',
    time: '04:54:002'
  }}
/>;

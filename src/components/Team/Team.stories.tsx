import { Team } from './Team';

export default {
  component: Team,
  title: 'Components/Team/Team',
}

export const TeamMembers = () => <Team
  num={1}
  am={{
    "name": "dyreborg24",
    "times": [
      "01:38:559",
      "2:20:724"
    ],
    "total": "03:59:283",
    "category": "AM",
    "difference": "+00:00:999"
  }}
  pro={{
    "name": "mazda917",
    "times": [
      "01:37:278",
      "02:20:154"
    ],
    "total": "03:57:432",
    "category": "PRO",
    "difference": "+00:00:999"
  }}
/>;

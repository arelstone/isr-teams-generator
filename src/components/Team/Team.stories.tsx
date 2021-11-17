import { Team } from './Team';

export default {
  component: Team,
  title: 'Components/Team/Team',
}

export const TeamMembers = () => <Team
  num={1}
  am={{
    "name": "daddyfarrell",
    "times": [
      "01:39:012",
      "02:21:372"
    ],
    "total": "04:01:384",
    "category": "AM"
  }}
  pro={{
    "name": "CaGa-TaCoS",
    "times": [
      "1:37:050",
      "2:21:666"
    ],
    "total": "03:58:716",
    "category": "PRO"
  }}
/>;

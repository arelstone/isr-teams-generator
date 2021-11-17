import { Player } from './Player';

export default {
  component: Player,
  title: 'Components/Player/Player',
}

export const AMPlayer = () => <Player
  {...{
    name: "daddyfarrell",
    times: [
      "01:39:012",
      "02:21:372"
    ],
    total: "04:01:384",
    category: "AM"
  }}
/>;

export const PROPlayer = () => <Player
  {...{
    name: "CaGa-TaCoS",
    times: [
      "1:37:050",
      "2:21:666"
    ],
    total: "03:58:716",
    category: "PRO"
  }}
/>;


import { Player } from './Player';

export default {
  component: Player,
  title: 'Components/Player/Player',
}

export const AMPlayer = () => <Player
  category="AM"
  name="ISR_EeekDK"
  time="05:24:612"
/>;

export const PROPlayer = () => <Player
  category="PRO"
  name="ISR_bumperelite3"
  time="04:56:015"
/>;


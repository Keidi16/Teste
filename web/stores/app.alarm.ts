import { Howl } from "howler";
import alarm1 from "/alarms/alarm-1.wav";
import alarm2 from "/alarms/alarm-2.wav";
import alarm3 from "/alarms/alarm-3.mp3";
import alarm4 from "/alarms/alarm-4.mp3";

const sounds = [
  new Howl({
    src: [alarm1],
    loop: true,
    html5: true,
  }),
  new Howl({
    src: [alarm2],
    loop: true,
    html5: true,
  }),
  new Howl({
    src: [alarm3],
    loop: true,
    html5: true,
  }),
  new Howl({
    src: [alarm4],
    loop: true,
    html5: true,
  }),
];

export const useAppAlarm = defineStore("alert", () => {
  const ALARMS: IAlarm[] = [
    {
      id: 1,
      title: "Rampart Exploitation - Rex Ocean",
      name: "rex_ocean",
      sound: alarm1,
    },
    {
      id: 2,
      title: "Rampart Exploitation - Rex Twist",
      name: "rex_twist",
      sound: alarm2,
    },
    {
      id: 3,
      title: "Rampart Exploitation - Rex Pin Ping",
      name: "rex_pin_ping",
      sound: alarm2,
    },
    {
      id: 4,
      title: "Rampart Exploitation - Rex Evacuation",
      name: "rex_evacuation",
      sound: alarm2,
    },
  ];

  const PLAYER = ref<IPlayer>({
    trackID: 0,
    playing: false,
  });

  const setPlayer = (value: IPlayer) => {
    PLAYER.value = value;
  };

  const playSound = (value: IAlarm) => {
    const [alarm] = ALARMS.filter((alarm) => alarm.id === value.id);

    const isAnySoundPlaying = sounds.some((sound) => sound.playing());

    if (isAnySoundPlaying && PLAYER.value.trackID === alarm.id) {
      sounds.forEach((sound) => sound.stop());
      setPlayer({ trackID: 0, playing: false });
    } else {
      sounds.forEach((sound) => sound.stop());
      sounds[alarm.id - 1].play();
      setPlayer({ trackID: alarm.id, playing: true });
    }
  };

  return { ALARMS, PLAYER, playSound, setPlayer };
});

export interface IPlayer {
  trackID: number;
  playing: boolean;
}

interface IAlarm {
  id: number;
  title: string;
  name: string;
  sound: string;
}

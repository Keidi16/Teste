import { ref, watch, onMounted, onUnmounted } from "vue";

interface IState {
  whenOnline?: string;
  whenOffline?: string;
  startOnline?: boolean;
}

let defaultState: IState = {
  whenOnline: "online",
  whenOffline: "offline",
  startOnline: true,
};

export default function (state: IState = {}) {
  let { whenOnline, whenOffline, startOnline } = { ...defaultState, ...state };
  let value = ref(startOnline);

  const handleOnlineStatus = () => {
    value.value = navigator.onLine;
  };

  onMounted(() => {
    handleOnlineStatus();
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);
  });

  onUnmounted(() => {
    window.removeEventListener("online", handleOnlineStatus);
    window.removeEventListener("offline", handleOnlineStatus);
  });

  let isOnline = ref(value.value === true);
  let isOffline = ref(value.value === false);
  let status = isOnline.value ? whenOnline : whenOffline;

  watch(value, () => {
    isOnline.value = value.value === true;
    isOffline.value = value.value === false;
  });

  return { status, isOnline, isOffline };
}

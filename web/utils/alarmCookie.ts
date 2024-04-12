const DEFAULT_ALARM = "rex_ocean";

export default {
  setAlarm(alarm_name: string): void {
    useCookie("_alarm_defined").value = alarm_name;
  },

  getAlarm(): string | null | undefined {
    return computed(() => useCookie("_alarm_defined").value).value;
  },

  defineDefaultAlarm() {
    const alarm_defined = useCookie("_alarm_defined").value;

    if (!alarm_defined) {
      useCookie("_alarm_defined").value = DEFAULT_ALARM;
    }
  },
};

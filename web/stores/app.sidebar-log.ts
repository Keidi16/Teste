export const useAppSidebarLog = defineStore("sidebar-log", () => {
  const show = ref(false);

  const handleShow = (value: boolean) => {
    show.value = value;
  };

  return { show, handleShow };
});

type StepOptions = 1 | 2;
type PentestTypes = "white box" | "black box" | undefined;

interface IPentestOptions {
  step: StepOptions;
  selected: PentestTypes;
  external?: boolean;
}

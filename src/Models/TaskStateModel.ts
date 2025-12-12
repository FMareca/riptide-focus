import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formatedTime: string;
  activeTaskId: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
    cyclesUntilLongBreak: number;
  };
  theme: 'dark' | 'light';
};

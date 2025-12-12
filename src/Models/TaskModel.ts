export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startedDate: number; // timestamp
  completedDate: number | null; // quando o timer chega no final ou interrompida
  interruptedDate: number | null;
  type: 'work' | 'short-break' | 'long-break';
};

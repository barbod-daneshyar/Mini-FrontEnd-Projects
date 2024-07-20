export type Flag_t = "gray" | "blue" | "brown" | "red";
export type TasksList_t = Task_t[];
export type Task_t = {
  id: number;
  title: string;
  flag: Flag_t;
  selected:Boolean;
};


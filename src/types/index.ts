export type Node = {
  id: number;
  children?: Node[];
  label: string;
  checked: boolean;
};

export type Node = {
  id: string;
  children?: Node[];
  label: string;
  checked: boolean;
};

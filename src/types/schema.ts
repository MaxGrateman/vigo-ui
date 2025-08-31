export type NodeType =
  | "Page" | "Layout" | "Card" | "HBox"
  | "Label" | "Text" | "Button"
  | "DataGrid" | "DataColumn" | "DataActions" | "DataAction";

export type SchemaNode = {
  type: NodeType;
  id: string;
  props?: Record<string, any>;
  children?: SchemaNode[];
};

export type UITreeMessage = {
  type: "ui.tree";
  payload: {
    version: string;
    screenId: string;
    root: SchemaNode;
  };
};

export const isSchemaNode = (x: any): x is SchemaNode =>
  x && typeof x === "object" && typeof x.type === "string" && typeof x.id === "string";

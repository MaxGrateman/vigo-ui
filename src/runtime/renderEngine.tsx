import type { SchemaNode } from "../types/schema";
import { createElementFromNode } from "./componentFactory";



export const SchemaRenderer: React.FC<{ root: SchemaNode | null }> = ({ root }) => {
  if (!root) return null;
  return <>{createElementFromNode(root)}</>;
};
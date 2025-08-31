import { useEffect, useState } from "react";
import type { SchemaNode } from "./types/schema";
import { SchemaRenderer } from "./runtime/renderEngine";


export const SchemaHost: React.FC = () => {
  const [root, setRoot] = useState<SchemaNode | null>(null);

  useEffect(() => {
    const initial: UITreeMessage = { /* вставь пример из секции 0 */ } as any;
    setRoot(initial.payload.root);

  }, []);

  // Логируем действия
  useEffect(() => {
    const un = bus.subscribe("runtime.action.request", (e) => console.log("[action.request]", e.payload));
    return () => un();
  }, []);

  return <SchemaRenderer root={root} />;
};
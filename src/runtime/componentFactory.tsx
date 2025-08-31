import React from "react";
import type { SchemaNode } from "../types/schema";
import { getComponent } from "./componentRegistry";
import { bus } from "./actionBus";

// Нормализация элементарных типов (bool/num)
function coercePrimitive(v: any) {
  if (v === "true") return true;
  if (v === "false") return false;
  if (typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  return v;
}

function normalizeProps(raw?: Record<string, any>) {
  const out: Record<string, any> = {};
  if (!raw) return out;
  for (const k of Object.keys(raw)) out[k] = coercePrimitive(raw[k]);
  return out;
}

// Преобразуем props.on (строка) → onClick handler и т.п.
function bindEvents(node: SchemaNode, props: Record<string, any>) {
  const out = { ...props };
  // Конвенция: если есть props.on — это «имя действия» с бэка
  if (typeof props.on === "string") {
    const actionName = props.on;
    out.onClick = () => {
      bus.publish({ type: "runtime.action.request", payload: { name: actionName, sourceId: node.id } });
    };
    delete out.on;
  }
  // Также маппим data events
  for (const ev of ["onClick", "onChange", "onSubmit"]) {
    if (typeof props[ev] === "string") {
      const name = props[ev];
      out[ev] = (payload?: any) =>
        bus.publish({ type: "runtime.action.request", payload: { name, sourceId: node.id, payload } });
    }
  }
  return out;
}

export function createElementFromNode(node: SchemaNode): React.ReactNode {
  const Comp = getComponent(node.type);
  if (!Comp) {
    return React.createElement(
      "div",
      { className: "p-2 border border-dashed text-gray-500 text-sm", "data-widget-id": node.id },
      `Unknown component: ${node.type}`
    );
  }

  const props = bindEvents(node, normalizeProps(node.props));
  const children = (node.children || []).map((ch, i) => createElementFromNode(ch));

  return React.createElement(
    Comp as any,
    { ...props, "data-widget-id": node.id, key: node.id },
    ...children
  );
}

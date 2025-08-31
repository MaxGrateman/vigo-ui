

export type ComponentFC<P = any> = React.FC<P & { "data-widget-id"?: string }>;
const REGISTRY: Record<string, ComponentFC> = {};

export function registerComponent(name: string, comp: ComponentFC) {
  REGISTRY[name] = comp;
}
export function getComponent(name: string): ComponentFC | null {
  return REGISTRY[name] || null;
}

export function registerMany(entries: Record<string, ComponentFC>) {
  Object.entries(entries).forEach(([k, v]) => registerComponent(k, v));
}
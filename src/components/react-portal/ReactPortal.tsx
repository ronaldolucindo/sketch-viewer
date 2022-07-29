import { createPortal } from 'react-dom';

type ReactPortalProps = {
  children: React.ReactNode;
  wrapperId?: string;
};

function ReactPortal({ children, wrapperId = 'root' }: ReactPortalProps) {
  const wrapper = document.getElementById(wrapperId) as HTMLElement;
  return createPortal(children, wrapper);
}

export default ReactPortal;

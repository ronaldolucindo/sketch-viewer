import { createPortal } from 'react-dom';

type ReactPortalProps = {
  children: React.ReactNode;
  wrapperId?: string;
};

function ReactPortal({ children, wrapperId = 'root' }: ReactPortalProps) {
  let wrapper = document.getElementById(wrapperId) as HTMLElement;
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.setAttribute('id', wrapperId);
    document.body.appendChild(wrapper);
  }
  return createPortal(children, wrapper);
}

export default ReactPortal;

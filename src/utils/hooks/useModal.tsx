import React from 'react';
import { Modal } from '../../components/modules/Modal';

type TUseModal = ({ title: string, content: Function }) => [Function, JSX.Element];

export const useModal: TUseModal = ({ title, content }: { title: string; content: Function }) => {
  const [visibility, setVisibility] = React.useState(false);
  const toggle: Function = (value) => (value !== undefined ? setVisibility(value) : setVisibility((v) => !v));

  const Component = React.useMemo(
    () => (
      <Modal title={title} visibility={visibility} onClose={() => toggle(false)} controlled>
        {({ closeModal }) => content(closeModal)}
      </Modal>
    ),
    [title, content, visibility]
  );

  return [toggle, Component];
};

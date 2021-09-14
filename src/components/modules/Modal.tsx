import React from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, CardHeader } from '../primitives/Card';
import { ButtonOutline, IconButton } from '../primitives/Button';
import { CloseIcon } from '../icons/CloseIcon';
import { useClickOutside } from '../../utils/hooks/useClickOutside';

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: -2rem;
`;

interface IModal {
  title: string;
  buttonText?: string;
  visibility?: boolean;
  controlled?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<IModal> = ({ children, title, buttonText, visibility, onClose, controlled }) => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  const close = () => {
    setVisible(false);
    onClose?.();
  };

  useClickOutside(ref, close);

  React.useEffect(() => {
    if (visibility !== undefined) {
      setVisible(visibility);
    }
  }, [visibility]);

  return (
    <>
      {!controlled && <ButtonOutline onClick={() => setVisible((v) => !v)}>{buttonText}</ButtonOutline>}
      {visible && (
        <ModalWrapper>
          <Card ref={ref} width={[1, '450px', '500px', '500px']} height={['100vh', 'auto', 'auto', 'auto']}>
            <CardHeader my={4}>
              <h3 style={{ margin: 0 }}>{title}</h3>
              <CloseButton onClick={close}>
                <CloseIcon />
              </CloseButton>
            </CardHeader>
            <CardBody>{typeof children === 'function' ? children({ closeModal: close }) : children}</CardBody>
          </Card>
        </ModalWrapper>
      )}
    </>
  );
};

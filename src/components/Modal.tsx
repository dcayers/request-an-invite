import React from 'react';
import styled from '@emotion/styled';
import { Card, CardBody, CardHeader } from './Card';
import { OnClickOutside } from './OnClickOutside';
import { ButtonOutline, IconButton } from './Button';
import { CloseIcon } from './CloseIcon';

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: -2rem;
`;

export const Modal = ({ children, buttonText, title }) => {
  const [visible, setVisible] = React.useState(false);
  const close = () => {
    setVisible(false);
  };

  React.useEffect(() => {
    console.log('visibility changed to', visible);
  }, [visible]);

  return (
    <>
      <ButtonOutline onClick={() => setVisible((v) => !v)}>{buttonText}</ButtonOutline>
      {visible && (
        <ModalWrapper>
          <OnClickOutside handler={() => setVisible(false)}>
            {({ ref }) => (
              <Card ref={ref} width={[1, '450px', '500px', '500px']} height={['70vh', 'auto', 'auto', 'auto']}>
                <CardHeader my={4}>
                  <h3 style={{ margin: 0 }}>{title}</h3>
                  <CloseButton onClick={close}>
                    <CloseIcon />
                  </CloseButton>
                </CardHeader>
                <CardBody>{typeof children === 'function' ? children({ closeModal: close }) : children}</CardBody>
              </Card>
            )}
          </OnClickOutside>
        </ModalWrapper>
      )}
    </>
  );
};

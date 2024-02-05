import React from 'react';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

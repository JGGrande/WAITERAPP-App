import { Modal, TouchableOpacity, Platform } from 'react-native';

import { useState } from 'react';

import { ModalBody, Overlay, ModalHeader, ModalForm, Input } from './styles';
import { Text } from '../Text';
import { Close } from '../Icons/Close';
import { Button } from '../Button';

interface ModalTableProps {
  visible: boolean;
  onClose(): void;
  onSave(table: string): void;
}

export function TableModal({ visible, onClose, onSave }: ModalTableProps) {

  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    setTable('');
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <Input
              placeholder="Número da mesa"
              placeholderTextCOlor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
          </ModalForm>
          <Button
            onPress={handleSave}
            disabled={table.length == 0}
          >
            Salvar
          </Button>

        </ModalBody>
      </Overlay>
    </Modal>
  );
}

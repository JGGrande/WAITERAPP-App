import { Modal } from 'react-native';

import { Container, OkButton } from './style';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { StatusBar } from 'expo-status-bar';

interface OrderConfirmedModalProps {
  visivel: boolean;
  onOk(): void;
}

export function OrderConfirmedModal({ visivel, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visivel}
      animationType='fade'
    >

      <StatusBar style='light' />

      <Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12 }}>Pedido confirmado</Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 12 }}>O pedido entrou na fila de produção</Text>
        <OkButton onPress={onOk}>
          <Text color="#D73035" weight="600">OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}

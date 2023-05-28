import { FlatList } from 'react-native';

import { Text } from '../Text';

import { ProductContainer, ProductDetails, Image, Separator, AddToCardButton } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../productModal';

import { useState } from 'react';

import { Product } from '../../types/Product';

interface MenuProps {
  onAddToCart(product: Product): void
  products: Product[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);


  function handleOpenModal(product: Product): void {
    setModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <Image
              source={{
                uri: `http:///192.168.0.13:3001/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text
                color="#666"
                size={14}
                style={{ marginVertical: 8 }}

              >
                {product.description}
              </Text>
              <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCardButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCardButton>
          </ProductContainer>
        )}
      />
      <ProductModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </>
  );
}

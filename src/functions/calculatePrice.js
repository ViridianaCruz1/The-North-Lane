export function calculateProductTotal(
  product,
  quantity = 1,
  selectedTone = null
) {
  if (!product) return 0;

  // Lógica principal según tu código
  if (product.store === "Bath & Body Works" && selectedTone) {
    return {
      unitPrice: product.price + 59,
      label: `Total: $${(product.price + 59) * quantity} por ${quantity} ${
        quantity > 1 ? "combos" : "combo"
      }`,
    };
  }

  return {
    unitPrice: product.price,
    label: `Total: $${product.price * quantity} por ${quantity} ${
      quantity > 1 ? "productos" : "producto"
    }`,
  };
}

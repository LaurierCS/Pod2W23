const categoryToColor = (category: string): string => {
  let color: string = '#FFFFFF';
  switch (category) {
    case 'Food':
      color = '#FFC107';
    case 'Travel':
      color = '#FF5722';
    case 'Entertainment':
      color = '#9C27B0';
    case 'Shopping':
      color = '#2196F3';
    case 'Health':
      color = '#4CAF50';
    case 'Bills':
      color = '#F44336';
    case 'Other':
      color = '#9E9E9E';
  }
  return color;
};
export default categoryToColor;
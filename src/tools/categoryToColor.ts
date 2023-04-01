const categoryToColor = (category: any) => {
  switch (category) {
    case 'Food':
      return '#FFC107';
    case 'Travel':
      return '#FF5722';
    case 'Entertainment':
      return '#9C27B0';
    case 'Shopping':
      return '#2196F3';
    case 'Health':
      return '#4CAF50';
    case 'Bills':
      return '#F44336';
    case 'Other':
      return '#9E9E9E';
  }
};
export default categoryToColor;
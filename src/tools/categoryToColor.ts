const categoryToColor = (category: string): string => {
  let color: string = '#FFFFFF';

  if (category == 'Food') {
    color = '#FFC107';
  }

  else if (category == 'Travel'){
    color = '#FF5722';
  }

  else if (category == 'Entertainment') {
    color = '#9C27B0';
  }

  else if (category == 'Shopping') {
    color = '#2196F3';
  }

  else if (category == 'Health') {
    color = '#4CAF50';
  }

  else if (category == 'Bills') {
    color = '#F44336';
  }

  else if (category == 'Other') {
    color = '#9E9E9E';
  }
  
  return color;
};
export default categoryToColor;
export const getCssNameBySize = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return '--small';
    case 'md':
      return '--medium';
    case 'lg':
      return '--large';
  }
};

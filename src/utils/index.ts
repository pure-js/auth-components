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

export const cn = (...classNames: (string | undefined)[]) =>
  classNames.filter(Boolean).join(' ');

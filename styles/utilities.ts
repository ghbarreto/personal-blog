export const highlight = '#fd3a8c';
export const lightblue = '#00c2cb';
export const yellow = '#ffe881';
export const bgColor = '#202020';
export const blue = '#03989e';
export const success = 'rgb(144, 204, 87)';

// font sizes
export const headers = "31px";

export const helperBackground = (i: number) => {
  switch (i) {
    case 0:
      return highlight;
    case 1:
      return yellow;
    case 2:
      return lightblue;
  }
};

export const helperOthers = (i: number) => {
  switch (i) {
    case 0:
      return 'white';
    case 1:
      return highlight;
    case 2:
      return yellow;
  }
};

export const helperHover = (i: number) => {
  switch (i) {
    case 0:
      return 'rgb(253, 58, 140, 0.2)';
    case 1:
      return 'rgb(255, 232, 129, 0.2)';
    case 2:
      return 'rgb(0, 194, 203, 0.2)';
  }
};

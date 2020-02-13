export const findAndAddProp = (arr1, arr2) => {
  arr1.forEach(item => {
    arr2.forEach(secondArrItem => {
      if (item.accountType === secondArrItem.id) {
        item.type = secondArrItem.title;
      }
    });
  });
};

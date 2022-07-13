const CHECKED_STATUS = 'category/CHECKED_STATUS';

export function checkedStatus() {
  return { type: CHECKED_STATUS };
}

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;

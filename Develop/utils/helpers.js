module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  isSelected: (whereValue, selectValue) => {
    if (whereValue === selectValue) {
      return true;
    } else {
      return false;
    }
  }
};
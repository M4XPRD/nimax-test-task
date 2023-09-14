const shouldDisableButton = ({ f }, page) => {
  switch (page) {
    case 0: {
      return (
        f.errors.adultsAmount
        || f.errors.childrenBelow5
        || f.errors.nightsAmount
        || !f.values.adultsAmount
        || !f.values.nightsAmount
      );
    }
    case 1: {
      return (
        f.errors.surname
        || f.errors.name
        || f.errors.phoneNumber
        || f.errors.birthDate
        || !f.values.surname
        || !f.values.name
        || !f.values.phoneNumber
        || !f.values.birthDate
      );
    }
    default:
      return false;
  }
};

export default shouldDisableButton;

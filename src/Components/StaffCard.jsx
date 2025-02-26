export const StaffCard = ({ firstName, lastName, department, img }) => {
  return (
    <div className="card">
      <div className="card__avatar">
        <img src={img} alt="profile" className="card__img" />
      </div>
      <div className="card__title">{`${firstName} ${lastName}`}</div>
      <div className="card__subtitle">{department}</div>
      <div className="card__wrapper">
        <button className="card_button">
          <p className="text">Ver mas</p>
        </button>
      </div>
    </div>
  );
};

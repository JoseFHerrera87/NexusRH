export const StaffCard = ({ firstName, lastName, department, img }) => {
  return (
    <article className="border-1">
      <section>
        <img src="" alt="profile" />
      </section>

      <section>
        <h2>{`${firstName} ${lastName}`}</h2>
        <span>{department}</span>
      </section>

      <section>
        <a href="#">Ver Mas</a>
      </section>
    </article>
  );
};

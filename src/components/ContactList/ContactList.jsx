import Contact from "../Contact/Contact";
import css from "./ContactsList.module.css";

export default function ContactList({ tasks, onDelete }) {
  return (
    <>
      <ul className={css.list} >
        {tasks.map((task) => (
          <li key={task.id} className={css.item}>
            <Contact data={task} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

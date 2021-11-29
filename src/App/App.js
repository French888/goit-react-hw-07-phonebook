import s from "./App.module.css";
import ContactForm from "../Сomponents/ContactForm/ContactForm";
import ContactList from "../Сomponents/ContactList/ContactList";
import Filter from "../Сomponents/Filter/Filter";

function App() {
  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

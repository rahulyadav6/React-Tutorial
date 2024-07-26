import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "../notes";
function App() {

  function createNote(note){
    return(
      <Note 
        key={note.key}
        title = {note.title}
        content = {note.content}
      />
    );
  }
  return (
    <>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </>
  )
}

export default App

import Dexie from "dexie"

const db = new Dexie("answersDB")
db.version(2).stores({
  answers: "questionNumber, answer"
})

export default db

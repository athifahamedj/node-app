const fs = require("fs");

const getNotes = function () {
  // toString()
  const data = "Your notes...";
  return data;
};

const addNote = function (title, body) {
  console.log("brrrrrrrrrr");
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log("node added");
  } else {
    console.log("node already exists");
  }
};

const loadNotes = function () {
  try {
    const readFile = fs.readFileSync("./notes.json");
    const results = readFile.toString();

    console.log("node added");
    return JSON.parse(results);
  } catch (err) {
    // console.log(err);
    return err;
  }
};

const saveNotes = function (notes) {
  // console.log("save");
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  getNotes: getNotes,
};

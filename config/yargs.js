const description = {
  demand: true,
  alias: "-d",
  desc: "Marca como completado o pendiente la tarea"
};

const completado = {
  default: true,
  alias: "-c",
  desc: "Marca como completado o pendiente la tarea"
};

const argv = require("yargs")
  .command("crear", "Mostrar todas las tareas por hacer", { description })
  .command("actualizar", "Actualizar el estado completado de una tarea", {
    description,
    completado
  })
  .command("borrar", "Borrar una tarea", { description })
  .help().argv;

module.exports = {
  argv
};

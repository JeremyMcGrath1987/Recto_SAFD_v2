import moment from "moment";
moment.locale("en", {
  months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
    "_"
  ),
  monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
    "_"
  ),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")
});

export default {
  state: {
    name: "Frank Castle",
    identification: "X4388998899",
    telefono: "555-4587",
    notas: [],
    historial: [],
  },
  actions: {
    ADDNOTE: (context, note) => {
      if (note.medico && note.texto) {
        context.commit("addNote", note);
        return true;
      } else {
        return false;
      }
    },
    REMOVENOTE: (context, index) => {
        context.commit('removeNote', index);
    },
    ADDFINE: (context, fine) => {
      if (fine.arts.length > 0) {
        context.commit("addFine", fine);
      }
    }
  },
  mutations: {
    addNote: (state, note) => {
      note.fecha = moment();
      state.notas.unshift(note);
    },
    removeNote: (state, index) => {
      state.notas.splice(index, 1);
    },
    addFine: (state, fine) => {
      state.historial.unshift(fine);
    }
  },
};

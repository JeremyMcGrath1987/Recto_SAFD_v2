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
    data:{}
    
  },
  actions: {
    SETFILESAFD: (context, file) => {
      context.commit("setFileSAFD", file);
    },
    ADDNOTE: (context, note) => {
      if (note.user && note.texto) {
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
    setFileSAFD: (state, file) => {
      state.data = file;
    },
    addNote: (state, note) => {
      note.fecha = moment().format('D MMMM YYYY, h:mm:ss');
      state.data.notas.unshift(note);
      let noteId = {
        userId: state.data.id,
        note: note
      };
      // eslint-disable-next-line no-undef
      mp.trigger("setNoteSAFD", JSON.stringify(noteId));
    },
    removeNote: (state, index) => {
      state.data.notas.splice(index, 1);
      let indexId = {
        userId: state.data.id,
        index: index
      };
      // eslint-disable-next-line no-undef
      mp.trigger("removeNoteSAFD", JSON.stringify(indexId));
    },
    addFine: (state, fine) => {
      state.data.historial.unshift(fine);
      let fineId = {
        userId: state.data.id,
        fine: fine
      };
      // eslint-disable-next-line no-undef
      mp.trigger("addReportSAFD", JSON.stringify(fineId));
    }
  },
};

export default {
  namespaced: true,
  state: {
    data: [
      {
        titulo: "Herida de bala"
      },
      {
        titulo: "Traumatismo Craneoencefalico"
      },
      {
        titulo: "Hematomas lumbares"
      },
      {
        titulo: "Amputación de miembro"
      },
      {
        titulo: "esguince tobillo"
      },
      {
        titulo: "Rotura mano"
      }
    ]
  },
  actions: {
    SETPATHOLOGIESLIST: (context, pathologies) => {
      context.commit("setPathologiesList", pathologies);
    }
  },
  mutations: {
    setPathologiesList: (state, pathologies) => {
      state.data = pathologies;
    }


  }
};

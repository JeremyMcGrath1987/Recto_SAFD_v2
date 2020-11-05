export default {
    namespaced: true,
    state: {
      data: []
    },
    actions: {
      SETFILESSAFD: (context, filesLite) => {
        context.commit("setFilesSAFD", filesLite);
      }
    },
    mutations: {
      setFilesSAFD: (state, filesLite) => {

        if(filesLite.length<=0){
          state.data = {message: "No hay coincidencias en el sistema"}
        }else{
          state.data = filesLite;
        }
        
      }
    }
  };
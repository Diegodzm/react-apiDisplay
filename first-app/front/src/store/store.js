export const getState = ({ getActions, getStore, setStore }) => {
    return {
        store: {
     
        },
        actions: {

            handleOnchange: (event)=>{
                const store= getStore()
                setStore({
                    user:{
                        ...store.user,
                        [event.target.name]: event.target.value

                    }
                })
                console.log(event.target.name, event.target.value)
            },
         

        }
    }
}
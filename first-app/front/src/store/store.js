export const getState = ({ getActions, getStore, setStore }) => {
    return {
        store: {
            user: {
                username: "",
                firstname: "",
                lastname: "",
                password: "",
                email: "",
            },
     
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
            
            handleSubmitLogin: async (e) => {
                const store = getStore()
                await fetch("http://localhost:5000/user/login", {
                    method: "POST",
                    body: JSON.stringify(store.user),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((response) => {
                    if (response.status !== 200) {
                        throw new Error(response.json());
                    }
                    return response.json();
                })
                    .then((data) => {
                        localStorage.setItem("accessToken", data.access_token);
                        setStore({ validation: true, user_id: data.user_id, username: data.username })
                        console.log(store.user_id)

                    })
                    .catch((error) => console.log(error))

                return store.validation
            },
            handleSubmituser: async () => {
                const store = getStore()
                await fetch("http://localhost:5000/user/register", {
                    method: "POST",
                    body: JSON.stringify(store.user),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error))

                return true
            },

        }
    }
}
import { Server } from 'miragejs'


function Mock() {

    return new Server({
    routes() {
        this.urlPrefix = "https://www.ws.dev/";
        this.namespace = "api/account";

        this.get('/', () => {
            return {message: "Servidor Ok."};
        });

        this.post('/signin', () => {

        });

        this.post('/signup', () => {

        });
    }
});
}

export default Mock;
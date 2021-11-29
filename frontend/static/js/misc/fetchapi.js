export default class RequestHandler {
    constructor(url, type, payload) {
        this.url = url;
        this.type = type;
        this.payload = payload;
    }

    request() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(this.url, {
                    method: this.type,
                    body: (this.payload ? JSON.stringify(this.payload) : null),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                });
                const json = await response.json();
                return resolve(json);
            } catch (error) {
                return reject(error);
            }
        });
    }
};

export const TYPE_DELETE = 'DELETE';
export const TYPE_GET = 'GET';
export const TYPE_PUT = 'PUT';
export const TYPE_POST = 'POST';
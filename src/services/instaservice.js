export default class instaservice {
    constructor() {
        this._apiBase = 'https://my-json-server.typicode.com/ineg22/db/'
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch s{url}, recieved s{res.status}`)
        }

        return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResourse('posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResourse('posts/')
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}
import Home from './views/Home.js';
import Post from './views/Posts.js';
import ViewPost from './views/ViewPost.js';
import Settings from './views/Settings.js';
import Contact from './views/Contact.js';

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: Home },
        { path: '/posts', view: Post },
        { path: '/posts/:id', view: ViewPost },
        { path: '/settings', view: Settings },
        { path: '/contact', view: Contact }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
            isMatch: location.pathname === route.path   // old version
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname],
            isMatch: true   // old version
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    
    document.body.addEventListener('click', e => {
        /*if (e.target.matches('[data-link')) {
            e.preventDefault();

            navigateTo(e.target.href);
        }*/
        // prevent nav links within the SPA to reload the entire page
        const link = e.target.closest('a[data-link]');
        if (link != null) {
            e.preventDefault();

            navigateTo(link.getAttribute('href'));
        }

        /*const button = e.target.closest('button[type="submit"]');
        if (button != null) {
            e.preventDefault();

            console.log('Button clicked.');
        }*/
    });

    // invoke router
    router();
});
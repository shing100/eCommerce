self.addEventListener("install", (event) => {
    const offlinePage = new Request("/");
    event.waitUntil(
        fetch(offlinePage).then(response => {
            return caches.open("lim-store").then(cache => {
                return cache.put(offlinePage, response);
            });
        })
    );
});


self.addEventListener("fetch", (event) => {
    event.respondWith(
        //fetch(event.requset).catch(() => console.log("Offline"))
        fetch(event.request).catch(error => {
            return caches.open("lim-store").then(cache => cache.match("/"));
        })
    );
});


self.addEventListener("push", event => {
    const title = "Lim Store";
    const options = {
        body: event.data.text(),
        icon: "./static/192x192.png",
        image: "./static/192x192.png"
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
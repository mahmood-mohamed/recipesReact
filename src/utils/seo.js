export function setPageMeta(title, description) {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
    }
    meta.content = description;
};

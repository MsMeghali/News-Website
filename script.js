const outer = document.getElementById('outer');

fetch('./data.json')
    .then((d) => d.json())
    .then((data) => {
        data.articles.forEach(element => {
            const [inner, category, heading, link, standfirst, article, image, hr] = createElements('div', 'span', 'h1', 'a', 'p', 'div', 'img', 'hr')

            inner.classList.add('inner')
            heading.classList.add('heading')
            standfirst.classList.add('standfirst')
            article.classList.add('article')
            image.classList.add('image')

            image.setAttribute('height', element.thumbnail.height)
            image.setAttribute('width', element.thumbnail.width)
            image.setAttribute('alt', element.thumbnail.title)
            image.setAttribute('src', element.thumbnail.src)
            link.setAttribute('href', element.link)

            category.innerHTML = element.primarySectionRouteName
            heading.innerHTML = element.headline
            standfirst.innerHTML = element.standfirst

            addChild(link, heading)
            addChild(article, category, link, standfirst)
            addChild(inner, article, image)
            addChild(outer, inner, hr)
        });
    })
    .catch(err => {
        console.log(err);
    });

function createElements(...elements) {
    const list = []
    for (let e of elements) {
        list.push(document.createElement(e))
    }
    return list;
}

function addChild(parent, ...childs) {
    for (let element of childs) {
        parent.appendChild(element)
    }
}
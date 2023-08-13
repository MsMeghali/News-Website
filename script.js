let div = document.getElementById('outer');

fetch('./data.json')
    .then((d) => d.json())
    .then((data) => {
        data.articles.forEach(element => {
            let div1 = document.createElement('div')
            div1.setAttribute('class', 'div1')

            let category = document.createElement('span');
            category.setAttribute('class', 'category')

            let heading = document.createElement('h1');
            heading.setAttribute('class', 'heading')

            let link = document.createElement('a');
            link.setAttribute('href', element.link);
            link.appendChild(heading);

            let standfirst = document.createElement('p');
            standfirst.setAttribute('class', 'standfirst');

            let div2 = document.createElement('div');
            div2.setAttribute('class', 'div2');

            let image = document.createElement('img');
            image.setAttribute('class', 'image')
            image.setAttribute('height', element.thumbnail.height)
            image.setAttribute('width', element.thumbnail.width)
            image.setAttribute('alt', element.thumbnail.title)

            category.innerHTML = element.primarySectionRouteName;
            heading.innerHTML = element.headline;
            standfirst.innerHTML = element.standfirst;
            image.setAttribute('src', element.thumbnail.src);

            div2.appendChild(category);
            div2.appendChild(link);
            div2.appendChild(standfirst);
            div1.appendChild(div2);
            div1.appendChild(image);
            div.appendChild(div1);

            let hr = document.createElement('hr');
            div.appendChild(hr);
        });
    });

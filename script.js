
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        const list = document.querySelector('.posts-list');
        json.forEach((item, index) => {
            // create items
            const li = document.createElement('li');
            const span = document.createElement('span');
            const title = document.createElement('h4');
            const paragraph = document.createElement('p');
            const link = document.createElement('a');
            
            // create classes
            li.className = 'post-list-item';
            span.className = 'post-index';
            title.className = 'post-title';
            paragraph.className = 'post-text';
            link.className = 'post-link';

            // upadate
            span.innerHTML = index + 1;
            title.innerHTML = item.title;
            paragraph.innerHTML = item.body;
            link.innerText = 'Read more';

            // adding items into list

            li.append(span, title, paragraph, link);
            list.appendChild(li);
        });
    });
       
        
import CollapsibleContainer from "./collapse";

export default class App {
    constructor(root = document.body) {
        this.root = root;
        this.page = null;
        this.collapsibles = [];

        this.containers = [
            {
                city: 'Москва',
                content: 'столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области.',
                open: false
            },
            {
                city: 'Санкт-Петербург',
                content:
                'город федерального значения, административный центр Северо-Западного федерального округа России. Это один из важнейших экономических, научных, образовательных и культурных центров страны, а также крупный транспортный узел.',
                open: false
            },
            {
                city: 'Новосибирск',
                content:
                'третий по численности населения город России, крупнейший в азиатской части страны, административный центр Новосибирской области и Сибирского федерального округа.',
                open: false
            }]
    }

    init() {
        this.createPage();
        this.createCollapsibles();
    }

    createPage() {
        this.page = document.createElement('main');
        this.page.className = 'page';

        const title = document.createElement('h1');
        title.textContent = 'Анимированные блоки';

        this.page.append(title);

        this.containers.forEach((item) => {
            const wrapper = document.createElement('section')
            wrapper.className = 'collapsible';
            

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'collapsible__button';
            button.textContent = item.city;
            button.dataset.city = item.city;

            const content = document.createElement('div');
            content.className = 'collapsible__content';

            const inner = document.createElement('div');
            inner.className = 'collapsible__inner';
            inner.textContent = item.content;
            content.append(inner);
            wrapper.append(button, content);
            this.page.append(wrapper);

            const collapsible = new CollapsibleContainer({
                content,
                button,
                open: item.open
            })

            button.addEventListener('click', () => {
                collapsible.toggle();
            });

            this.collapsibles.push(collapsible);
        })

        this.root.append(this.page);
    }
}
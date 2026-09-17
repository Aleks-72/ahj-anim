export default class CollapsibleContainer {
   constructor({content, button, open = false} ) {
        this.content = content;
        this.button = button;
        this.opened = open;

        this.content.hidden = !open;
        this.button.setAttribute(
            'aria-expanded',
            String(open)
        );

        this.content.addEventListener(
            'animationend',
            (event) => {
                if (event.animationName === 'collapse-open') {
                    this.content.classList.remove('is-opening');
                }

                if (event.animationName === 'collapse-close') {
                    this.content.classList.remove('is-closing');
                    this.content.hidden = true;
                }

                this.content.style.removeProperty('height');
                this.content.style.removeProperty(
                '--collapsible-height'
                );
            }
        );
    }

    open() {
        this.content.hidden = false;

        this.content.style.setProperty(
            '--collapsible-height',
            `${this.content.scrollHeight}px`
        );

        this.content.classList.remove('is-closing');

        // Перезапуск CSS-анимации.
        void this.content.offsetWidth;

        this.content.classList.add('is-opening');

        this.opened = true;
        this.button.setAttribute('aria-expanded', 'true');
    } 

    close() {
        this.content.style.setProperty(
                '--collapsible-height',
                `${this.content.scrollHeight}px`
            );

        this.content.classList.remove('is-opening');

        // Перезапуск CSS-анимации.
        void this.content.offsetWidth;

        this.content.classList.add('is-closing');

        this.opened = false;
        this.button.setAttribute('aria-expanded', 'false');
    }

    toggle() {
        this.opened ? this.close() : this.open();
    }
}
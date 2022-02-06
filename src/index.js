import Modal from '../packages/as-modal/index';
import Toast from '../packages/as-toast/index';
import Carousel from '../packages/as-carousel/index';
import Checkbox from '../packages/as-checkbox/index';
import Switch from '../packages/as-switch/index';
import Radio from '../packages/as-radio/index';
import Drop from '../packages/as-drop/index';

const components = [
    Modal,
    Toast,
    Carousel,
    Checkbox,
    Switch,
    Radio,
    Drop
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

console.log("components: ", components, install)

export default {
    install,
    Modal,
    Toast,
    Carousel,
    Checkbox,
    Switch,
    Radio,
    Drop
}
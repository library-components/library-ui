
import Container from '~/packages/as-container/index';
import Header from '~/packages/as-header/index';
import Aside from '~/packages/as-aside/index';
import Main from '~/packages/as-main/index';
import Footer from '~/packages/as-footer/index';
import Row from '~/packages/as-row/index';
import Col from '~/packages/as-col/index';
import Modal from '~/packages/as-modal/index';
import Toast from '~/packages/as-toast/index';
import Carousel from '~/packages/as-carousel/index';
import Switch from '~/packages/as-switch/index';
import Drop from '~/packages/as-drop/index';
import Button from '~/packages/as-button/index';
import Checkbox from '~/packages/as-checkbox/index';
import CheckboxButton from '~/packages/as-checkbox-button/index';
import CheckboxGroup from '~/packages/as-checkbox-group/index';
import Radio from '~/packages/as-radio/index';
import RadioGroup from '~/packages/as-radio-group/index';

const components = [
  Modal,
  Toast,
  Carousel,
  Checkbox,
  Switch,
  Drop,
  Button,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  CheckboxButton,
  CheckboxGroup,
  Radio,
  RadioGroup
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
  Drop,
  Button,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  CheckboxButton,
  CheckboxGroup
}

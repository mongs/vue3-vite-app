import type { App } from 'vue';
import {
  Upload,
  Button,
  AutoComplete,
  Form,
  Input,
  Switch,
  Icon,
  message,
  Modal,
  notification,
  Badge,
  Tag,
  Table,
  Popconfirm,
  Slider,
  InputNumber,
  Skeleton,
  Cascader,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Col,
  Row,
  Pagination,
  Tabs,
  Empty,
  List,
  ConfigProvider,
  Menu,
  Avatar,
} from 'ant-design-vue';

export default function setupAntdv(app: App<Element>) {
  app.component(ConfigProvider.name, ConfigProvider);

  app.use(Button);
  app.use(Upload);
  app.use(Form);
  app.use(Input);
  app.use(Switch);
  app.use(Icon);
  app.use(Badge);
  app.use(Badge);
  app.use(Tag);
  app.use(Table);
  app.use(Slider);
  app.use(InputNumber);
  app.use(Skeleton);
  app.use(Cascader);
  app.use(Select);
  app.use(DatePicker);
  app.use(AutoComplete);
  app.use(Radio);
  app.use(Checkbox);
  app.use(Popconfirm);
  app.use(Col);
  app.use(Row);
  app.use(Modal);
  app.use(Pagination);
  app.use(Tabs);
  app.use(Empty);
  app.use(List);
  app.use(Menu);
  app.use(Avatar);


  app.config.globalProperties.$message = message;
  app.config.globalProperties.$notification = notification;
  app.config.globalProperties.$info = Modal.info;
  app.config.globalProperties.$success = Modal.success;
  app.config.globalProperties.$error = Modal.error;
  app.config.globalProperties.$warning = Modal.warning;
  app.config.globalProperties.$confirm = Modal.confirm;
  message.config({
    duration: 3,
    maxCount: 3,
  });
}

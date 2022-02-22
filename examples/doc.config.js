import { getLang } from './utils/lang';

const localLang = getLang();
const developmentGuideString = localLang === 'en-US' ? 'Development Guide' : '开发指南';
const componentsString = localLang === 'en-US' ? 'Components' : '组件';
const aboutString = localLang === 'en-US' ? 'About' : '介绍';
const layoutString = localLang === 'en-US' ? 'Layout' : '布局';
const baseComponentsString = localLang === 'en-US' ? 'Basic' : '基础';
const dataString = localLang === 'en-US' ? 'Data' : '数据';
const otherComponentString = localLang === 'en-US' ? 'Other' : '其它';

export default {
	headerConfig: {
		logo: {
			href: 'https://github.com/ui-libraryment/library-ui',
			image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
			title: 'Library'
		},
		lang: 'zh-CN',
		versions: ['1.0.0', '1.1.0'],
		githubLink: 'https://github.com/ui-libraryment/library-ui',
		simulators: []
	},
	navConfig: [
		{
			name: developmentGuideString,
			groups: [
				{
					list: [
						{
							path: 'asAbout',
							title: aboutString,
							component: () => {
								if (localLang === 'en-US') {
									return import('./markdown/about/en-US/index.md');
								} else {
									return import('./markdown/about/zh-CN/index.md');
								}
							}
						}
					]
				}
			]
		}, {
			name: componentsString,
			groups: [
				{
					groupName: layoutString,
					list: [
            {
              path: 'asContainer',
              title: localLang === 'en-US' ? 'Container' : 'Container 布局容器',
              component: () => {
                if (localLang === 'en-US') {
								  return import('./markdown/container/en-US/index.md');
							  } else {
								  return import('./markdown/container/zh-CN/index.md');
							  }
              }
            },
            {
							path: 'asLayout',
							title: localLang === 'en-US' ? 'Layout' : 'Layout 布局',
							component: () => {
							  if (localLang === 'en-US') {
								  return import('./markdown/layout/en-US/index.md');
							  } else {
								  return import('./markdown/layout/zh-CN/index.md');
							  }
							}
						}
					]
				},
        {
          groupName: baseComponentsString,
          list: [
            {
              path: 'asButton',
              title: localLang === 'en-US' ? 'Button' : 'Button 按钮',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/button/en-US/index.md');
                } else {
                  return import('./markdown/button/zh-CN/index.md');
                }
              }
            },
            {
              path: 'asSwitch',
              title: localLang === 'en-US' ? 'Switch' : 'Switch 开关',
              component: () => {
                if (localLang === 'en-US') {
                  return import('./markdown/switch/en-US/index.md');
                } else {
                  return import('./markdown/switch/zh-CN/index.md');
                }
              }
            }
          ]
        },
        {
          groupName: otherComponentString,
          list: [{
            path: 'asModal',
            title: localLang === 'en-US' ? 'Dialog' : 'Dialog 对话框',
            component: () => {
              if (localLang === 'en-US') {
              return import('./markdown/modal/en-US/index.md');
              } else {
              return import('./markdown/modal/zh-CN/index.md');
              }
            }
          }]
        }
			]
		}]
};

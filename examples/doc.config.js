import { getLang } from './utils/lang';

const localLang = getLang();
const developmentGuideString = localLang === 'en-US' ? 'Development Guide' : '开发指南';
const componentsString = localLang === 'en-US' ? 'Components' : '组件';
const aboutString = localLang === 'en-US' ? 'About' : '介绍';
const layoutString = localLang === 'en-US' ? 'Layout' : '布局';
const baseComponentsString = localLang === 'en-US' ? 'Base Components' : '基础组件';
const dataString = localLang === 'en-US' ? 'Data' : '数据';
const dataEntryString = localLang === 'en-US' ? 'Data Entry' : '数据录入';

export default {
	headerConfig: {
		logo: {
			href: 'https://tencat-ui.github.io',
			image: 'https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4',
			title: 'Tencat'
		},
		lang: 'zh-CN',
		versions: ['1.0.0', '1.1.0'],
		githubLink: 'https://github.com/tencat-ui/tencat-ui',
		simulators: []
	},
	navConfig: [
		{
			name: developmentGuideString,
			groups: [
				{
					list: [
						{
							path: '/asAbout',
							title: aboutString,
							component: () => {
								if (localLang === 'en-US') {
									return import('./markdown/asAbout/en-US/index.md');
								} else {
									return import('./markdown/asAbout/zh-CN/index.md');
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
					groupName: baseComponentsString,
					list: [
						{
							path: '/asCheckbox',
							title: 'Checkbox',
							component: () => {
							  if (localLang === 'en-US') {
								return import('./markdown/asCheckbox/en-US/index.md');
							  } else {
								return import('./markdown/asCheckbox/zh-CN/index.md');
							  }
							}
						},
						{
							path: '/asModal',
							title: 'Modal',
							component: () => {
							  if (localLang === 'en-US') {
								return import('./markdown/asModal/en-US/index.md');
							  } else {
								return import('./markdown/asModal/zh-CN/index.md');
							  }
							}
						}
					]
				}
			]
		}]
};

import { app, defineConfig, open } from 'skhd-key-sequence';

const config = defineConfig({
	raycast: {
		modifiers: ['hyper'],
		key: 'r',
		shortcuts: {
			p: open('raycast://extensions/raycast/raycast/confetti'),
		},
	},
	discord: {
		modifiers: ['hyper'],
		key: 'd',
		shortcuts: {
			s: open('raycast://extensions/lachero/discord-soundboard/open-soundboard'),
		},
	},
	finder: {
		modifiers: ['hyper'],
		key: 'f',
		shortcuts: {
			d: open('~/Downloads'),
			p: open('~/LocalDocuments/Projects'),
			l: open('~/LocalDocuments'),
		},
	},
	apps: {
		modifiers: ['hyper'],
		key: 'o',
		shortcuts: {
			w: app('WireGuard'),
			t: app('TablePlus'),
		},
	},
	system: {
		modifiers: ['hyper'],
		key: 's',
		shortcuts: {
			m: open('raycast://script-commands/toggle-system-microphone-mute'),
		},
	},
});

await config.save();

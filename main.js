const { InstanceBase, InstanceStatus, runEntrypoint } = require('@companion-module/base');
const UpgradeScripts = require('./src/upgrades');

const config = require('./src/config');

const actions = require('./src/actions');
const feedbacks = require('./src/feedbacks');
const variables = require('./src/variables');

const presets = require('./src/presets');

const utils = require('./src/utils');

class blackmagicRestInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Assign the methods from the listed files to this class
		Object.assign(this, {
			...config,
			...actions,
			...feedbacks,
			...variables,
			...presets,
			...utils,
		})

		this.timer = null;
		this.watch = 0;
		this.amount = 50; //milliseconds
	}

	async init(config) {
		this.configUpdated(config);
	}

	async destroy() {
		this.clearTimer();
	}

	async configUpdated(config) {
		this.config = config;
		
		this.updateActions();
		this.updateFeedbacks();
		this.updateVariableDefinitions();
		
		this.initPresets();

		this.updateStatus(InstanceStatus.Ok);
	}

	updateActions() {
		this.initActions()
	}

	updateFeedbacks() {
		this.initFeedbacks()
	}

	updateVariableDefinitions() {
		this.initVariables()
	}
}

runEntrypoint(blackmagicRestInstance, UpgradeScripts);
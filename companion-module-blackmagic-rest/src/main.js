const { InstanceBase, InstanceStatus, runEntrypoint } = require('@companion-module/base');
const UpgradeScripts = require('./utils/upgrades');
const utils = require('./utils/utils');
const variables = require('./utils/variables');

const config = require('./controllers/config');
const actions = require('./controllers/actions');
const feedbacks = require('./controllers/feedbacks');
const presets = require('./controllers/presets');

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		console.log("blackmagicRestInstance constructor")
		
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
		console.log("blackmagicRestInstance init");
		this.configUpdated(config);
	}

	async destroy() {
		console.log("blackmagicRestInstance destroy");
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

runEntrypoint(ModuleInstance, UpgradeScripts);
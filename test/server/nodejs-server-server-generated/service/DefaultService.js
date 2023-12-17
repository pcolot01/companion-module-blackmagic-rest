'use strict';


/**
 * Delete a preset from a camera if exists
 *
 * presetName String name of the preset file
 * returns String
 **/
exports.deletePresetsPresetName = function(presetName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Clear the current playback timeline.
 *
 * no response value expected for this operation
 **/
exports.deleteTimelines0 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the audio input's current availability for the selected channel. If unavailable, the source will be muted
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_25
 **/
exports.getAudioChannelChannelIndexAvailable = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "available" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the audio input (source and type) for the selected channel
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_18
 **/
exports.getAudioChannelChannelIndexInput = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "input" : "None"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the description of the current input of the selected channel
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_19
 **/
exports.getAudioChannelChannelIndexInputDescription = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gainRange" : {
    "Min" : 0.8008281904610115,
    "Max" : 6.027456183070403
  },
  "capabilities" : {
    "PhantomPower" : true,
    "Padding" : {
      "forced" : true,
      "available" : true,
      "value" : 1.4658129805029452
    },
    "LowCutFilter" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the audio input level for the selected channel
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_21
 **/
exports.getAudioChannelChannelIndexLevel = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "normalised" : 6.027456183070403,
  "gain" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the audio input low cut filter for the selected channel
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_24
 **/
exports.getAudioChannelChannelIndexLowCutFilter = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lowCutFilter" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the audio input padding for the selected channel
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_23
 **/
exports.getAudioChannelChannelIndexPadding = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "padding" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the audio input phantom power for the selected channel if possible
 *
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * returns inline_response_200_22
 **/
exports.getAudioChannelChannelIndexPhantomPower = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phantomPower" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of supported inputs and their availability to switch to for the selected channel
 *
 * channelIndex Integer The index of the channel that its supported inputs are being queried. (Channels index from 0)
 * returns inline_response_200_20
 **/
exports.getAudioChannelChannelIndexSupportedInputs = function(channelIndex) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supportedInputs" : [ {
    "schema" : {
      "input" : "None"
    },
    "available" : true
  }, {
    "schema" : {
      "input" : "None"
    },
    "available" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction color properties
 *
 * returns inline_response_200_31
 **/
exports.getColorCorrectionColor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "saturation" : 1.2054912366140806,
  "hue" : -0.8398343619077977
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction contrast
 *
 * returns inline_response_200_30
 **/
exports.getColorCorrectionContrast = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "adjust" : 1.2054912366140806,
  "pivot" : 0.08008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction gain
 *
 * returns inline_response_200_28
 **/
exports.getColorCorrectionGain = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "red" : 1.2813251047376184,
  "green" : 9.643929892912645,
  "blue" : 2.3453007688047123,
  "luma" : 9.539414266693091
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction gamma
 *
 * returns inline_response_200_27
 **/
exports.getColorCorrectionGamma = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "red" : -3.359337447631191,
  "green" : 0.8219649464563226,
  "blue" : -2.827349615597644,
  "luma" : 0.7697071333465457
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction lift
 *
 * returns inline_response_200_26
 **/
exports.getColorCorrectionLift = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "red" : -1.6796687238155954,
  "green" : 0.4109824732281613,
  "blue" : -1.413674807798822,
  "luma" : 0.38485356667327286
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction luma contribution
 *
 * returns inline_response_200_32
 **/
exports.getColorCorrectionLumaContribution = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lumaContribution" : 0.08008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get color correction offset
 *
 * returns inline_response_200_29
 **/
exports.getColorCorrectionOffset = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "red" : -6.718674895262382,
  "green" : 1.6439298929126451,
  "blue" : -5.654699231195288,
  "luma" : 1.5394142666930914
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of events that can be subscribed to using the websocket API.
 *
 * returns inline_response_200
 **/
exports.getEventList = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "events" : [ "events", "events" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get lens' focus
 *
 * returns inline_response_200_35
 **/
exports.getLensFocus = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "focus" : 0.08008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get lens' aperture
 *
 * returns inline_response_200_33
 **/
exports.getLensIris = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "continuousApertureAutoExposure" : true,
  "normalised" : 0.6027456183070403,
  "apertureStop" : 0.8008281904610115,
  "apertureNumber" : 1.4658129805029452
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get lens' zoom
 *
 * returns inline_response_200_34
 **/
exports.getLensZoom = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "normalised" : 0.6027456183070403,
  "focalLength" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the currently active media device.
 *
 * returns inline_response_200_2
 **/
exports.getMediaActive = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "workingsetIndex" : 0,
  "deviceName" : "sd1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get information about the selected device.
 *
 * deviceName String Device name of the media device, as returned by deviceName member of Workingset or ActiveMedia
 * returns inline_response_200_3
 **/
exports.getMediaDevicesDeviceName = function(deviceName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "state" : "None"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a format key, used to format the device with a put request.
 *
 * deviceName String Device name of the media device, as returned by deviceName member of Workingset or ActiveMedia
 * returns inline_response_200_4
 **/
exports.getMediaDevicesDeviceNameDoformat = function(deviceName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deviceName" : "deviceName",
  "key" : "key"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of filesystems available to format the device.
 *
 * returns List
 **/
exports.getMediaDevicesDoformatSupportedFilesystems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "ExFat", "HFS" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of media devices currently in the working set.
 *
 * returns inline_response_200_1
 **/
exports.getMediaWorkingset = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "size" : 0,
  "workingset" : [ {
    "volume" : "My disk",
    "remainingRecordTime" : 5124087,
    "clipCount" : 12,
    "index" : 0,
    "remainingSpace" : 7817071702016,
    "totalSpace" : 9817071702016,
    "deviceName" : "sd1",
    "activeDisk" : false
  }, {
    "volume" : "My disk",
    "remainingRecordTime" : 5124087,
    "clipCount" : 12,
    "index" : 0,
    "remainingSpace" : 7817071702016,
    "totalSpace" : 9817071702016,
    "deviceName" : "sd1",
    "activeDisk" : false
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of the presets on the camera
 *
 * returns inline_response_200_36
 **/
exports.getPresets = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "presets" : [ "presets", "presets" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of the presets on the camera
 *
 * returns inline_response_200_38
 **/
exports.getPresetsActive = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "preset" : "preset"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Download the preset file
 *
 * presetName String name of the preset file
 * returns byte[]
 **/
exports.getPresetsPresetName = function(presetName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get device system information.
 *
 * returns inline_response_200_5
 **/
exports.getSystem = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "codecFormat" : {
    "container" : "MOV",
    "codec" : "ProRes:HQ"
  },
  "videoFormat" : {
    "frameRate" : "29.97",
    "name" : "1920x1080p29.97",
    "width" : 1080,
    "interlaced" : false,
    "height" : 1920
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the currently selected codec.
 *
 * returns inline_response_200_7
 **/
exports.getSystemCodecFormat = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "container" : "MOV",
  "codec" : "ProRes:HQ"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current format.
 *
 * returns inline_response_200_11
 **/
exports.getSystemFormat = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "codec" : "BRaw:8_1",
  "frameRate" : "24",
  "recordResolution" : {
    "width" : 3840,
    "height" : 2160
  },
  "offSpeedFrameRate" : 60,
  "minOffSpeedFrameRate" : 5,
  "offSpeedEnabled" : false,
  "maxOffSpeedFrameRate" : 60
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of supported codecs.
 *
 * returns inline_response_200_6
 **/
exports.getSystemSupportedCodecFormats = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "codecs" : [ {
    "container" : "MOV",
    "codec" : "ProRes:HQ"
  }, {
    "container" : "MOV",
    "codec" : "ProRes:HQ"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get supported formats.
 *
 * returns inline_response_200_10
 **/
exports.getSystemSupportedFormats = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supportedFormats" : [ {
    "recordResolution" : {
      "width" : 3840,
      "height" : 2160
    },
    "frameRates" : [ "29.97", "29.97" ],
    "codecs" : [ "BRaw:Q0", "BRaw:Q0" ],
    "minOffSpeedFrameRate" : 5,
    "maxOffSpeedFrameRate" : 60
  }, {
    "recordResolution" : {
      "width" : 3840,
      "height" : 2160
    },
    "frameRates" : [ "29.97", "29.97" ],
    "codecs" : [ "BRaw:Q0", "BRaw:Q0" ],
    "minOffSpeedFrameRate" : 5,
    "maxOffSpeedFrameRate" : 60
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the list of supported video formats for the current system state.
 *
 * returns inline_response_200_9
 **/
exports.getSystemSupportedVideoFormats = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "formats" : [ {
    "frameRate" : "30",
    "width" : 1080,
    "interlaced" : false,
    "height" : 1920
  }, {
    "frameRate" : "30",
    "width" : 1080,
    "interlaced" : false,
    "height" : 1920
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the currently selected video format.
 *
 * returns inline_response_200_8
 **/
exports.getSystemVideoFormat = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "frameRate" : "29.97",
  "name" : "1920x1080p29.97",
  "width" : 1080,
  "interlaced" : false,
  "height" : 1920
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the current playback timeline.
 *
 * returns inline_response_200_12
 **/
exports.getTimelines0 = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "clips" : [ {
    "frameCount" : 90000,
    "clipUniqueId" : 1
  }, {
    "frameCount" : 90000,
    "clipUniqueId" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get device's basic transport status.
 *
 * returns inline_response_200_13
 **/
exports.getTransports0 = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mode" : "InputPreview"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Determine if transport is playing.
 *
 * returns Boolean
 **/
exports.getTransports0Play = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get playback state.
 *
 * returns inline_response_200_14
 **/
exports.getTransports0Playback = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "singleClip" : true,
  "loop" : true,
  "position" : 6,
  "type" : "Play",
  "speed" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get record state.
 *
 * returns inline_response_200_15
 **/
exports.getTransports0Record = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "recording" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Determine if transport is stopped.
 *
 * returns Boolean
 **/
exports.getTransports0Stop = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get device's timecode.
 *
 * returns inline_response_200_16
 **/
exports.getTransports0Timecode = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "timecode" : 0.8008281904610115,
  "clip" : 6.027456183070403
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get timecode source selected on device
 *
 * returns inline_response_200_17
 **/
exports.getTransports0TimecodeSource = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "timecode" : "Timecode"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current auto exposure mode
 *
 * returns inline_response_200_45
 **/
exports.getVideoAutoExposure = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mode" : {
    "mode" : "Off",
    "type" : ""
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current gain value in decibels
 *
 * returns inline_response_200_40
 **/
exports.getVideoGain = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gain" : -107
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current ISO
 *
 * returns inline_response_200_39
 **/
exports.getVideoIso = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "iso" : 171976544
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get ND filter stop
 *
 * returns inline_response_200_42
 **/
exports.getVideoNdFilter = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "stop" : 1.2012422856915173
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get ND filter display mode on the camera
 *
 * returns inline_response_200_43
 **/
exports.getVideoNdFilterDisplayMode = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "displayMode" : "Stop"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current shutter. Will return either shutter speed or shutter angle depending on shutter measurement in device settings
 *
 * returns inline_response_200_44
 **/
exports.getVideoShutter = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shutterAngle" : 21738,
  "continuousShutterAutoExposure" : true,
  "shutterSpeed" : 4004
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current white balance
 *
 * returns inline_response_200_41
 **/
exports.getVideoWhiteBalance = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "whiteBalance" : 3100
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send a preset file to the camera
 *
 * body Object  (optional)
 * returns inline_response_200_37
 **/
exports.postPresets = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "presetAdded" : "presetAdded"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a clip to the end of the timeline.
 *
 * body 0_add_body Clip information to add (optional)
 * no response value expected for this operation
 **/
exports.postTimelines0Add = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the audio input for the selected channel
 *
 * body ChannelIndex_input_body  (optional)
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * no response value expected for this operation
 **/
exports.putAudioChannelChannelIndexInput = function(body,channelIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the audio input level for the selected channel
 *
 * body ChannelIndex_level_body  (optional)
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * no response value expected for this operation
 **/
exports.putAudioChannelChannelIndexLevel = function(body,channelIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the audio input low cut filter for the selected channel
 *
 * body ChannelIndex_lowCutFilter_body  (optional)
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * no response value expected for this operation
 **/
exports.putAudioChannelChannelIndexLowCutFilter = function(body,channelIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the audio input padding for the selected channel
 *
 * body ChannelIndex_padding_body  (optional)
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * no response value expected for this operation
 **/
exports.putAudioChannelChannelIndexPadding = function(body,channelIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the audio phantom power for the selected channel
 *
 * body ChannelIndex_phantomPower_body  (optional)
 * channelIndex Integer The index of the channel that its input is being controlled. (Channels index from 0)
 * no response value expected for this operation
 **/
exports.putAudioChannelChannelIndexPhantomPower = function(body,channelIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction color properties
 *
 * body ColorCorrection_color_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionColor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction contrast
 *
 * body ColorCorrection_contrast_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionContrast = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction gain
 *
 * body ColorCorrection_gain_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionGain = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction gamma
 *
 * body ColorCorrection_gamma_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionGamma = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction lift
 *
 * body ColorCorrection_lift_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionLift = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction luma contribution
 *
 * body ColorCorrection_lumaContribution_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionLumaContribution = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set color correction offset
 *
 * body ColorCorrection_offset_body  (optional)
 * no response value expected for this operation
 **/
exports.putColorCorrectionOffset = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set lens' focus
 *
 * body Lens_focus_body  (optional)
 * no response value expected for this operation
 **/
exports.putLensFocus = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Perform auto focus
 *
 * no response value expected for this operation
 **/
exports.putLensFocusDoAutoFocus = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set lens' aperture
 *
 * body Lens_iris_body Only a single property need to be selected. If multiple provided, the order of priority is (apertureStop > normalised > apertureNumber) (optional)
 * no response value expected for this operation
 **/
exports.putLensIris = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "normalised" : body.normalised,
  "apertureStop" : body.apertureStop,
  "apertureNumber" : body.apertureNumber
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set lens' zoom
 *
 * body Lens_zoom_body Only a single property need to be selected. If multiple provided, the order of priority is (focalLength > normalised) (optional)
 * no response value expected for this operation
 **/
exports.putLensZoom = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the currently active media device.
 *
 * body Media_active_body Set the specified index to be active (optional)
 * no response value expected for this operation
 **/
exports.putMediaActive = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Perform a format of the media device.
 *
 * body DeviceName_doformat_body  (optional)
 * deviceName String Device name of the media device, as returned by deviceName member of Workingset or ActiveMedia
 * no response value expected for this operation
 **/
exports.putMediaDevicesDeviceNameDoformat = function(body,deviceName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the active preset on the camera
 *
 * body Presets_active_body  (optional)
 * returns String
 **/
exports.putPresetsActive = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a preset on the camera if it exists, if not create a preset and save current state with the presetName
 *
 * presetName String name of the preset file
 * returns String
 **/
exports.putPresetsPresetName = function(presetName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set the codec.
 *
 * body System_codecFormat_body Update the system codec (optional)
 * no response value expected for this operation
 **/
exports.putSystemCodecFormat = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the format.
 *
 * body System_format_body Update the system format (optional)
 * no response value expected for this operation
 **/
exports.putSystemFormat = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set the video format.
 *
 * body System_videoFormat_body Update the system video format (optional)
 * no response value expected for this operation
 **/
exports.putSystemVideoFormat = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set device's basic transport status.
 *
 * body Transports_0_body Set the transport mode (optional)
 * no response value expected for this operation
 **/
exports.putTransports0 = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Start playing on transport.
 *
 * no response value expected for this operation
 **/
exports.putTransports0Play = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set playback state.
 *
 * body 0_playback_body Update playback state (optional)
 * no response value expected for this operation
 **/
exports.putTransports0Playback = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set record state.
 *
 * body 0_record_body Update record state (optional)
 * no response value expected for this operation
 **/
exports.putTransports0Record = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Stop transport.
 *
 * no response value expected for this operation
 **/
exports.putTransports0Stop = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set auto exposure
 *
 * body Video_autoExposure_body Auto exposure mode to set (optional)
 * no response value expected for this operation
 **/
exports.putVideoAutoExposure = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set current gain value
 *
 * body Video_gain_body  (optional)
 * no response value expected for this operation
 **/
exports.putVideoGain = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set current ISO
 *
 * body Video_iso_body  (optional)
 * no response value expected for this operation
 **/
exports.putVideoIso = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set ND filter stop
 *
 * body Video_ndFilter_body  (optional)
 * no response value expected for this operation
 **/
exports.putVideoNdFilter = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set ND filter display mode on the camera
 *
 * body NdFilter_displayMode_body  (optional)
 * no response value expected for this operation
 **/
exports.putVideoNdFilterDisplayMode = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set current shutter
 *
 * body Video_shutter_body Only a single property needs to be selected. If more than one is provided, the order of priority is (shutterSpeed > shutterAngle) (optional)
 * no response value expected for this operation
 **/
exports.putVideoShutter = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set current white balance
 *
 * body Video_whiteBalance_body  (optional)
 * no response value expected for this operation
 **/
exports.putVideoWhiteBalance = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Set current white balance automatically
 *
 * no response value expected for this operation
 **/
exports.putVideoWhiteBalanceDoAuto = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


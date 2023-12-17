'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.deletePresetsPresetName = function deletePresetsPresetName (req, res, next, presetName) {
  Default.deletePresetsPresetName(presetName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTimelines0 = function deleteTimelines0 (req, res, next) {
  Default.deleteTimelines0()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexAvailable = function getAudioChannelChannelIndexAvailable (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexAvailable(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexInput = function getAudioChannelChannelIndexInput (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexInput(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexInputDescription = function getAudioChannelChannelIndexInputDescription (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexInputDescription(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexLevel = function getAudioChannelChannelIndexLevel (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexLevel(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexLowCutFilter = function getAudioChannelChannelIndexLowCutFilter (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexLowCutFilter(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexPadding = function getAudioChannelChannelIndexPadding (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexPadding(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexPhantomPower = function getAudioChannelChannelIndexPhantomPower (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexPhantomPower(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioChannelChannelIndexSupportedInputs = function getAudioChannelChannelIndexSupportedInputs (req, res, next, channelIndex) {
  Default.getAudioChannelChannelIndexSupportedInputs(channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionColor = function getColorCorrectionColor (req, res, next) {
  Default.getColorCorrectionColor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionContrast = function getColorCorrectionContrast (req, res, next) {
  Default.getColorCorrectionContrast()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionGain = function getColorCorrectionGain (req, res, next) {
  Default.getColorCorrectionGain()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionGamma = function getColorCorrectionGamma (req, res, next) {
  Default.getColorCorrectionGamma()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionLift = function getColorCorrectionLift (req, res, next) {
  Default.getColorCorrectionLift()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionLumaContribution = function getColorCorrectionLumaContribution (req, res, next) {
  Default.getColorCorrectionLumaContribution()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColorCorrectionOffset = function getColorCorrectionOffset (req, res, next) {
  Default.getColorCorrectionOffset()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventList = function getEventList (req, res, next) {
  Default.getEventList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLensFocus = function getLensFocus (req, res, next) {
  Default.getLensFocus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLensIris = function getLensIris (req, res, next) {
  Default.getLensIris()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLensZoom = function getLensZoom (req, res, next) {
  Default.getLensZoom()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMediaActive = function getMediaActive (req, res, next) {
  Default.getMediaActive()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMediaDevicesDeviceName = function getMediaDevicesDeviceName (req, res, next, deviceName) {
  Default.getMediaDevicesDeviceName(deviceName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMediaDevicesDeviceNameDoformat = function getMediaDevicesDeviceNameDoformat (req, res, next, deviceName) {
  Default.getMediaDevicesDeviceNameDoformat(deviceName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMediaDevicesDoformatSupportedFilesystems = function getMediaDevicesDoformatSupportedFilesystems (req, res, next) {
  Default.getMediaDevicesDoformatSupportedFilesystems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMediaWorkingset = function getMediaWorkingset (req, res, next) {
  Default.getMediaWorkingset()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPresets = function getPresets (req, res, next) {
  Default.getPresets()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPresetsActive = function getPresetsActive (req, res, next) {
  Default.getPresetsActive()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPresetsPresetName = function getPresetsPresetName (req, res, next, presetName) {
  Default.getPresetsPresetName(presetName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystem = function getSystem (req, res, next) {
  Default.getSystem()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemCodecFormat = function getSystemCodecFormat (req, res, next) {
  Default.getSystemCodecFormat()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemFormat = function getSystemFormat (req, res, next) {
  Default.getSystemFormat()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemSupportedCodecFormats = function getSystemSupportedCodecFormats (req, res, next) {
  Default.getSystemSupportedCodecFormats()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemSupportedFormats = function getSystemSupportedFormats (req, res, next) {
  Default.getSystemSupportedFormats()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemSupportedVideoFormats = function getSystemSupportedVideoFormats (req, res, next) {
  Default.getSystemSupportedVideoFormats()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSystemVideoFormat = function getSystemVideoFormat (req, res, next) {
  Default.getSystemVideoFormat()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTimelines0 = function getTimelines0 (req, res, next) {
  Default.getTimelines0()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0 = function getTransports0 (req, res, next) {
  Default.getTransports0()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0Play = function getTransports0Play (req, res, next) {
  Default.getTransports0Play()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0Playback = function getTransports0Playback (req, res, next) {
  Default.getTransports0Playback()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0Record = function getTransports0Record (req, res, next) {
  Default.getTransports0Record()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0Stop = function getTransports0Stop (req, res, next) {
  Default.getTransports0Stop()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0Timecode = function getTransports0Timecode (req, res, next) {
  Default.getTransports0Timecode()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransports0TimecodeSource = function getTransports0TimecodeSource (req, res, next) {
  Default.getTransports0TimecodeSource()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoAutoExposure = function getVideoAutoExposure (req, res, next) {
  Default.getVideoAutoExposure()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoGain = function getVideoGain (req, res, next) {
  Default.getVideoGain()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoIso = function getVideoIso (req, res, next) {
  Default.getVideoIso()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoNdFilter = function getVideoNdFilter (req, res, next) {
  Default.getVideoNdFilter()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoNdFilterDisplayMode = function getVideoNdFilterDisplayMode (req, res, next) {
  Default.getVideoNdFilterDisplayMode()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoShutter = function getVideoShutter (req, res, next) {
  Default.getVideoShutter()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVideoWhiteBalance = function getVideoWhiteBalance (req, res, next) {
  Default.getVideoWhiteBalance()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPresets = function postPresets (req, res, next, body) {
  Default.postPresets(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postTimelines0Add = function postTimelines0Add (req, res, next, body) {
  Default.postTimelines0Add(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putAudioChannelChannelIndexInput = function putAudioChannelChannelIndexInput (req, res, next, body, channelIndex) {
  Default.putAudioChannelChannelIndexInput(body, channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putAudioChannelChannelIndexLevel = function putAudioChannelChannelIndexLevel (req, res, next, body, channelIndex) {
  Default.putAudioChannelChannelIndexLevel(body, channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putAudioChannelChannelIndexLowCutFilter = function putAudioChannelChannelIndexLowCutFilter (req, res, next, body, channelIndex) {
  Default.putAudioChannelChannelIndexLowCutFilter(body, channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putAudioChannelChannelIndexPadding = function putAudioChannelChannelIndexPadding (req, res, next, body, channelIndex) {
  Default.putAudioChannelChannelIndexPadding(body, channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putAudioChannelChannelIndexPhantomPower = function putAudioChannelChannelIndexPhantomPower (req, res, next, body, channelIndex) {
  Default.putAudioChannelChannelIndexPhantomPower(body, channelIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionColor = function putColorCorrectionColor (req, res, next, body) {
  Default.putColorCorrectionColor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionContrast = function putColorCorrectionContrast (req, res, next, body) {
  Default.putColorCorrectionContrast(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionGain = function putColorCorrectionGain (req, res, next, body) {
  Default.putColorCorrectionGain(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionGamma = function putColorCorrectionGamma (req, res, next, body) {
  Default.putColorCorrectionGamma(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionLift = function putColorCorrectionLift (req, res, next, body) {
  Default.putColorCorrectionLift(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionLumaContribution = function putColorCorrectionLumaContribution (req, res, next, body) {
  Default.putColorCorrectionLumaContribution(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putColorCorrectionOffset = function putColorCorrectionOffset (req, res, next, body) {
  Default.putColorCorrectionOffset(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putLensFocus = function putLensFocus (req, res, next, body) {
  Default.putLensFocus(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putLensFocusDoAutoFocus = function putLensFocusDoAutoFocus (req, res, next) {
  Default.putLensFocusDoAutoFocus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putLensIris = function putLensIris (req, res, next, body) {
  Default.putLensIris(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putLensZoom = function putLensZoom (req, res, next, body) {
  Default.putLensZoom(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putMediaActive = function putMediaActive (req, res, next, body) {
  Default.putMediaActive(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putMediaDevicesDeviceNameDoformat = function putMediaDevicesDeviceNameDoformat (req, res, next, body, deviceName) {
  Default.putMediaDevicesDeviceNameDoformat(body, deviceName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putPresetsActive = function putPresetsActive (req, res, next, body) {
  Default.putPresetsActive(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putPresetsPresetName = function putPresetsPresetName (req, res, next, presetName) {
  Default.putPresetsPresetName(presetName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSystemCodecFormat = function putSystemCodecFormat (req, res, next, body) {
  Default.putSystemCodecFormat(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSystemFormat = function putSystemFormat (req, res, next, body) {
  Default.putSystemFormat(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSystemVideoFormat = function putSystemVideoFormat (req, res, next, body) {
  Default.putSystemVideoFormat(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTransports0 = function putTransports0 (req, res, next, body) {
  Default.putTransports0(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTransports0Play = function putTransports0Play (req, res, next) {
  Default.putTransports0Play()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTransports0Playback = function putTransports0Playback (req, res, next, body) {
  Default.putTransports0Playback(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTransports0Record = function putTransports0Record (req, res, next, body) {
  Default.putTransports0Record(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTransports0Stop = function putTransports0Stop (req, res, next) {
  Default.putTransports0Stop()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoAutoExposure = function putVideoAutoExposure (req, res, next, body) {
  Default.putVideoAutoExposure(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoGain = function putVideoGain (req, res, next, body) {
  Default.putVideoGain(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoIso = function putVideoIso (req, res, next, body) {
  Default.putVideoIso(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoNdFilter = function putVideoNdFilter (req, res, next, body) {
  Default.putVideoNdFilter(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoNdFilterDisplayMode = function putVideoNdFilterDisplayMode (req, res, next, body) {
  Default.putVideoNdFilterDisplayMode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoShutter = function putVideoShutter (req, res, next, body) {
  Default.putVideoShutter(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoWhiteBalance = function putVideoWhiteBalance (req, res, next, body) {
  Default.putVideoWhiteBalance(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putVideoWhiteBalanceDoAuto = function putVideoWhiteBalanceDoAuto (req, res, next) {
  Default.putVideoWhiteBalanceDoAuto()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

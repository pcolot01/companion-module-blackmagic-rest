import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        export interface ActiveMedia {
            /**
             * Working set index of the active media device
             * example:
             * 0
             */
            workingsetIndex?: number;
            /**
             * Internal device name of this media device
             * example:
             * sd1
             */
            deviceName?: string;
        }
        export interface ActivePreset {
            preset?: string;
        }
        export type AddClip = {
            /**
             * Unique ID used to identify this clip
             * example:
             * 1
             */
            clips?: number;
        } | {
            /**
             * example:
             * [
             *   1,
             *   2,
             *   3
             * ]
             */
            clips?: number[];
        };
        /**
         * Aperture number
         */
        export type ApertureNumber = number;
        /**
         * Aperture stop value
         */
        export type ApertureStop = number;
        /**
         * Auto exposure mode
         */
        export interface AutoExposureMode {
            mode?: "Off" | "Continuous" | "OneShot";
            type?: "" | "Iris" | "Shutter" | "Iris,Shutter" | "Shutter,Iris";
        }
        export interface Available {
            available?: boolean;
        }
        export interface CodecFormat {
            /**
             * Currently selected codec
             * example:
             * ProRes:HQ
             */
            codec?: string;
            /**
             * Multimedia container format
             * example:
             * MOV
             */
            container?: string;
        }
        export interface Color {
            hue?: number;
            saturation?: number;
        }
        export interface Contrast {
            pivot?: number;
            adjust?: number;
        }
        export interface Description {
            gainRange?: {
                /**
                 * The minimum gain value in dB
                 */
                Min?: number;
                /**
                 * The maximum gain value in dB
                 */
                Max?: number;
            };
            capabilities?: {
                /**
                 * Input supports setting of phantom power
                 */
                PhantomPower?: boolean;
                /**
                 * Input supports setting of low cut filter
                 */
                LowCutFilter?: boolean;
                Padding?: {
                    /**
                     * Input supports setting of padding
                     */
                    available?: boolean;
                    /**
                     * Padding is forced to be set for the input
                     */
                    forced?: boolean;
                    /**
                     * Value of the padding in dB
                     */
                    value?: number;
                };
            };
        }
        /**
         * example:
         * [
         *   "ExFat",
         *   "HFS"
         * ]
         */
        export type DoFormatSupportedFilesystems = string[];
        export interface EventsList {
            events?: string[];
        }
        /**
         * Focal length in mm
         */
        export type FocalLength = number;
        export interface Format {
            /**
             * Currently selected codec
             * example:
             * BRaw:8_1
             */
            codec?: string;
            /**
             * Frame rate
             * example:
             * 24
             */
            frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
            /**
             * example:
             * 60
             */
            maxOffSpeedFrameRate?: number;
            /**
             * example:
             * 5
             */
            minOffSpeedFrameRate?: number;
            /**
             * example:
             * false
             */
            offSpeedEnabled?: boolean;
            /**
             * example:
             * 60
             */
            offSpeedFrameRate?: number;
            recordResolution?: {
                /**
                 * Height of the resolution
                 * example:
                 * 2160
                 */
                height?: number;
                /**
                 * Width of the resolution
                 * example:
                 * 3840
                 */
                width?: number;
            };
            sensorResolution?: {
                /**
                 * Height of the resolution
                 * example:
                 * 2160
                 */
                height?: number;
                /**
                 * Width of the resolution
                 * example:
                 * 3840
                 */
                width?: number;
            };
        }
        /**
         * The key used to format this device, it must be fetched with the GET request and then provided back with a PUT request
         */
        export type FormatKey = string;
        /**
         * example:
         * 29.97
         */
        export type FrameRate = "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
        export interface Gain {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        export interface Gamma {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        export interface GetRecord {
            /**
             * Is transport in Input Record mode
             */
            recording?: boolean;
        }
        export interface GetVideoFormat {
            /**
             * Video format serialised as a string
             * example:
             * 1920x1080p29.97
             */
            name?: string;
            /**
             * Frame rate
             * example:
             * 29.97
             */
            frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
            /**
             * Height dimension of video format
             * example:
             * 1920
             */
            height?: number;
            /**
             * Width dimension of video format
             * example:
             * 1080
             */
            width?: number;
            /**
             * Is the display format interlaced?
             * example:
             * false
             */
            interlaced?: boolean;
        }
        export interface Input {
            input?: "None" | "Camera - Left" | "Camera - Right" | "Camera - Mono" | "XLR1 - Mic" | "XLR1 - Line" | "XLR2 - Mic" | "XLR2 - Line" | "3.5mm Left - Line" | "3.5mm Left - Mic" | "3.5mm Right - Line" | "3.5mm Right - Mic" | "3.5mm Mono - Line" | "3.5mm Mono - Mic";
        }
        /**
         * The input level of the selected channel. Only one property is required for setting. If both provided, gain will be prioritized and level would be ignored.
         */
        export interface Level {
            gain?: number;
            normalised?: number;
        }
        export interface Lift {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        export interface LowCutFilter {
            lowCutFilter?: boolean;
        }
        export interface LumaContribution {
            lumaContribution?: number;
        }
        export interface MediaDeviceInformation {
            /**
             * The current state of the media device.
             */
            state?: "None" | "Scanning" | "Mounted" | "Uninitialised" | "Formatting" | "RaidComponent";
        }
        export type NdFilterDisplayMode = "Stop" | "Number" | "Fraction";
        /**
         * Normalised value
         */
        export type Normalised = number;
        export interface Offset {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        export interface Padding {
            padding?: boolean;
        }
        export interface PhantomPower {
            phantomPower?: boolean;
        }
        export interface Playback {
            type?: "Play" | "Jog" | "Shuttle" | "Var";
            /**
             * When true playback loops from the end of the timeline to the beginning of the timeline
             */
            loop?: boolean;
            /**
             * When true playback loops from the end of the current clip to the beginning of the current clip
             */
            singleClip?: boolean;
            /**
             * Playback Speed, 1.0 for normal forward playback
             */
            speed?: number;
            /**
             * Playback position on the timeline in units of video frames
             */
            position?: number;
        }
        export interface PostPresetResponse {
            /**
             * Name of the preset uploaded
             */
            presetAdded?: string;
        }
        export interface PresetList {
            /**
             * List of the presets on the camera
             */
            presets?: string[];
        }
        export interface Record {
            /**
             * Is transport in Input Record mode
             */
            recording?: boolean;
            /**
             * Used to set the requested clipName to record to, when specifying "recording" attribute to True
             */
            clipName?: string;
        }
        export interface Resolution {
            /**
             * Height of the resolution
             * example:
             * 2160
             */
            height?: number;
            /**
             * Width of the resolution
             * example:
             * 3840
             */
            width?: number;
        }
        /**
         * Shutter angle
         */
        export type ShutterAngle = number;
        /**
         * Shutter speed value in fractions of a second (minimum is sensor frame rate)
         */
        export type ShutterSpeed = number;
        /**
         * True when transport mode is InputPreview or when in Output mode and speed is 0
         */
        export interface Stopped {
            stopped?: boolean;
        }
        export interface SupportedCodecFormats {
            codecs?: {
                /**
                 * Currently selected codec
                 * example:
                 * ProRes:HQ
                 */
                codec?: string;
                /**
                 * Multimedia container format
                 * example:
                 * MOV
                 */
                container?: string;
            }[];
        }
        export interface SupportedFormat {
            codecs?: string[];
            frameRates?: ("23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120")[];
            /**
             * example:
             * 60
             */
            maxOffSpeedFrameRate?: number;
            /**
             * example:
             * 5
             */
            minOffSpeedFrameRate?: number;
            recordResolution?: {
                /**
                 * Height of the resolution
                 * example:
                 * 2160
                 */
                height?: number;
                /**
                 * Width of the resolution
                 * example:
                 * 3840
                 */
                width?: number;
            };
            sensorResolution?: {
                /**
                 * Height of the resolution
                 * example:
                 * 2160
                 */
                height?: number;
                /**
                 * Width of the resolution
                 * example:
                 * 3840
                 */
                width?: number;
            };
        }
        export interface SupportedFormats {
            supportedFormats?: {
                codecs?: string[];
                frameRates?: ("23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120")[];
                /**
                 * example:
                 * 60
                 */
                maxOffSpeedFrameRate?: number;
                /**
                 * example:
                 * 5
                 */
                minOffSpeedFrameRate?: number;
                recordResolution?: {
                    /**
                     * Height of the resolution
                     * example:
                     * 2160
                     */
                    height?: number;
                    /**
                     * Width of the resolution
                     * example:
                     * 3840
                     */
                    width?: number;
                };
                sensorResolution?: {
                    /**
                     * Height of the resolution
                     * example:
                     * 2160
                     */
                    height?: number;
                    /**
                     * Width of the resolution
                     * example:
                     * 3840
                     */
                    width?: number;
                };
            }[];
        }
        export interface SupportedInputs {
            supportedInputs?: {
                schema?: {
                    input?: "None" | "Camera - Left" | "Camera - Right" | "Camera - Mono" | "XLR1 - Mic" | "XLR1 - Line" | "XLR2 - Mic" | "XLR2 - Line" | "3.5mm Left - Line" | "3.5mm Left - Mic" | "3.5mm Right - Line" | "3.5mm Right - Mic" | "3.5mm Mono - Line" | "3.5mm Mono - Mic";
                };
                /**
                 * Is the input available to be switched into from the current input for the selected channel
                 */
                available?: boolean;
            }[];
        }
        export interface SupportedVideoFormats {
            formats?: {
                /**
                 * Frame rate
                 * example:
                 * 30
                 */
                frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
                /**
                 * Height dimension of video format
                 * example:
                 * 1920
                 */
                height?: number;
                /**
                 * Width dimension of video format
                 * example:
                 * 1080
                 */
                width?: number;
                /**
                 * Is the display format interlaced?
                 * example:
                 * false
                 */
                interlaced?: boolean;
            }[];
        }
        /**
         * The properties will be populated only with the values that are supported/implemented by the device in use.
         */
        export interface SystemResponse {
            codecFormat?: {
                /**
                 * Currently selected codec
                 * example:
                 * ProRes:HQ
                 */
                codec?: string;
                /**
                 * Multimedia container format
                 * example:
                 * MOV
                 */
                container?: string;
            };
            videoFormat?: {
                /**
                 * Video format serialised as a string
                 * example:
                 * 1920x1080p29.97
                 */
                name?: string;
                /**
                 * Frame rate
                 * example:
                 * 29.97
                 */
                frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
                /**
                 * Height dimension of video format
                 * example:
                 * 1920
                 */
                height?: number;
                /**
                 * Width dimension of video format
                 * example:
                 * 1080
                 */
                width?: number;
                /**
                 * Is the display format interlaced?
                 * example:
                 * false
                 */
                interlaced?: boolean;
            };
        }
        export interface Timecode {
            /**
             * The time of day timecode in units of binary-coded decimal (BCD).
             */
            timecode?: number;
            /**
             * The position of the clip timecode in units of binary-coded decimal (BCD).
             */
            clip?: number;
        }
        export interface TimecodeSource {
            timecode?: "Timecode" | "Clip";
        }
        export interface Timeline {
            clips?: {
                /**
                 * Unique ID used to identify this clip
                 * example:
                 * 1
                 */
                clipUniqueId?: number;
                /**
                 * Number of frames in this clip on the timeline
                 * example:
                 * 90000
                 */
                frameCount?: number;
            }[];
        }
        export interface TransportResponse {
            /**
             * Transport mode.
             */
            mode?: "InputPreview" | "InputRecord" | "Output";
        }
        export interface VideoFormat {
            /**
             * Frame rate
             * example:
             * 30
             */
            frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
            /**
             * Height dimension of video format
             * example:
             * 1920
             */
            height?: number;
            /**
             * Width dimension of video format
             * example:
             * 1080
             */
            width?: number;
            /**
             * Is the display format interlaced?
             * example:
             * false
             */
            interlaced?: boolean;
        }
        export interface Workingset {
            /**
             * The fixed size of this device's working set
             */
            size?: number;
            workingset?: {
                /**
                 * Index of this media in the working set
                 * example:
                 * 0
                 */
                index?: number;
                /**
                 * Is this current item the active disk
                 * example:
                 * false
                 */
                activeDisk?: boolean;
                /**
                 * Volume name
                 * example:
                 * My disk
                 */
                volume?: string;
                /**
                 * Internal device name of this media device
                 * example:
                 * sd1
                 */
                deviceName?: string;
                /**
                 * Remaining record time on media device in seconds
                 * example:
                 * 5124087
                 */
                remainingRecordTime?: number;
                /**
                 * Total space on media device in bytes
                 * example:
                 * 9817071702016
                 */
                totalSpace?: number;
                /**
                 * Remaining space on media device in bytes
                 * example:
                 * 7817071702016
                 */
                remainingSpace?: number;
                /**
                 * Number of clips currently on the device
                 * example:
                 * 12
                 */
                clipCount?: number;
            }[];
        }
    }
}
declare namespace Paths {
    namespace DeletePresetsPresetName {
        namespace Parameters {
            export type PresetName = string;
        }
        export interface PathParameters {
            presetName: Parameters.PresetName;
        }
        namespace Responses {
            export type $200 = string;
        }
    }
    namespace DeleteTimelines0 {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexAvailable {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                available?: boolean;
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexInput {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                input?: "None" | "Camera - Left" | "Camera - Right" | "Camera - Mono" | "XLR1 - Mic" | "XLR1 - Line" | "XLR2 - Mic" | "XLR2 - Line" | "3.5mm Left - Line" | "3.5mm Left - Mic" | "3.5mm Right - Line" | "3.5mm Right - Mic" | "3.5mm Mono - Line" | "3.5mm Mono - Mic";
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexInputDescription {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                gainRange?: {
                    /**
                     * The minimum gain value in dB
                     */
                    Min?: number;
                    /**
                     * The maximum gain value in dB
                     */
                    Max?: number;
                };
                capabilities?: {
                    /**
                     * Input supports setting of phantom power
                     */
                    PhantomPower?: boolean;
                    /**
                     * Input supports setting of low cut filter
                     */
                    LowCutFilter?: boolean;
                    Padding?: {
                        /**
                         * Input supports setting of padding
                         */
                        available?: boolean;
                        /**
                         * Padding is forced to be set for the input
                         */
                        forced?: boolean;
                        /**
                         * Value of the padding in dB
                         */
                        value?: number;
                    };
                };
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexLevel {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            /**
             * The input level of the selected channel. Only one property is required for setting. If both provided, gain will be prioritized and level would be ignored.
             */
            export interface $200 {
                gain?: number;
                normalised?: number;
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexLowCutFilter {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                lowCutFilter?: boolean;
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexPadding {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                padding?: boolean;
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexPhantomPower {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                phantomPower?: boolean;
            }
            export interface $404 {
            }
        }
    }
    namespace GetAudioChannelChannelIndexSupportedInputs {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        namespace Responses {
            export interface $200 {
                supportedInputs?: {
                    schema?: {
                        input?: "None" | "Camera - Left" | "Camera - Right" | "Camera - Mono" | "XLR1 - Mic" | "XLR1 - Line" | "XLR2 - Mic" | "XLR2 - Line" | "3.5mm Left - Line" | "3.5mm Left - Mic" | "3.5mm Right - Line" | "3.5mm Right - Mic" | "3.5mm Mono - Line" | "3.5mm Mono - Mic";
                    };
                    /**
                     * Is the input available to be switched into from the current input for the selected channel
                     */
                    available?: boolean;
                }[];
            }
            export interface $404 {
            }
        }
    }
    namespace GetColorCorrectionColor {
        namespace Responses {
            export interface $200 {
                hue?: number;
                saturation?: number;
            }
        }
    }
    namespace GetColorCorrectionContrast {
        namespace Responses {
            export interface $200 {
                pivot?: number;
                adjust?: number;
            }
        }
    }
    namespace GetColorCorrectionGain {
        namespace Responses {
            export interface $200 {
                red?: number;
                green?: number;
                blue?: number;
                luma?: number;
            }
        }
    }
    namespace GetColorCorrectionGamma {
        namespace Responses {
            export interface $200 {
                red?: number;
                green?: number;
                blue?: number;
                luma?: number;
            }
        }
    }
    namespace GetColorCorrectionLift {
        namespace Responses {
            export interface $200 {
                red?: number;
                green?: number;
                blue?: number;
                luma?: number;
            }
        }
    }
    namespace GetColorCorrectionLumaContribution {
        namespace Responses {
            export interface $200 {
                lumaContribution?: number;
            }
        }
    }
    namespace GetColorCorrectionOffset {
        namespace Responses {
            export interface $200 {
                red?: number;
                green?: number;
                blue?: number;
                luma?: number;
            }
        }
    }
    namespace GetEventList {
        namespace Responses {
            export interface $200 {
                events?: string[];
            }
        }
    }
    namespace GetLensFocus {
        namespace Responses {
            export interface $200 {
                /**
                 * Normalised value
                 */
                focus?: number;
            }
        }
    }
    namespace GetLensIris {
        namespace Responses {
            export interface $200 {
                /**
                 * Is Aperture controlled by auto exposure
                 */
                continuousApertureAutoExposure?: boolean;
                /**
                 * Aperture stop value
                 */
                apertureStop?: number;
                /**
                 * Normalised value
                 */
                normalised?: number;
                /**
                 * Aperture number
                 */
                apertureNumber?: number;
            }
        }
    }
    namespace GetLensZoom {
        namespace Responses {
            export interface $200 {
                /**
                 * Focal length in mm
                 */
                focalLength?: number;
                /**
                 * Normalised value
                 */
                normalised?: number;
            }
        }
    }
    namespace GetMediaActive {
        namespace Responses {
            export interface $200 {
                /**
                 * Working set index of the active media device
                 * example:
                 * 0
                 */
                workingsetIndex?: number;
                /**
                 * Internal device name of this media device
                 * example:
                 * sd1
                 */
                deviceName?: string;
            }
        }
    }
    namespace GetMediaDevicesDeviceName {
        namespace Parameters {
            export type DeviceName = string;
        }
        export interface PathParameters {
            deviceName: Parameters.DeviceName;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * The current state of the media device.
                 */
                state?: "None" | "Scanning" | "Mounted" | "Uninitialised" | "Formatting" | "RaidComponent";
            }
        }
    }
    namespace GetMediaDevicesDeviceNameDoformat {
        namespace Parameters {
            export type DeviceName = string;
        }
        export interface PathParameters {
            deviceName: Parameters.DeviceName;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * Internal device name of this media device
                 */
                deviceName?: string;
                /**
                 * The key used to format this device, it must be fetched with the GET request and then provided back with a PUT request
                 */
                key?: string;
            }
        }
    }
    namespace GetMediaDevicesDoformatSupportedFilesystems {
        namespace Responses {
            /**
             * example:
             * [
             *   "ExFat",
             *   "HFS"
             * ]
             */
            export type $200 = string[];
        }
    }
    namespace GetMediaWorkingset {
        namespace Responses {
            export interface $200 {
                /**
                 * The fixed size of this device's working set
                 */
                size?: number;
                workingset?: {
                    /**
                     * Index of this media in the working set
                     * example:
                     * 0
                     */
                    index?: number;
                    /**
                     * Is this current item the active disk
                     * example:
                     * false
                     */
                    activeDisk?: boolean;
                    /**
                     * Volume name
                     * example:
                     * My disk
                     */
                    volume?: string;
                    /**
                     * Internal device name of this media device
                     * example:
                     * sd1
                     */
                    deviceName?: string;
                    /**
                     * Remaining record time on media device in seconds
                     * example:
                     * 5124087
                     */
                    remainingRecordTime?: number;
                    /**
                     * Total space on media device in bytes
                     * example:
                     * 9817071702016
                     */
                    totalSpace?: number;
                    /**
                     * Remaining space on media device in bytes
                     * example:
                     * 7817071702016
                     */
                    remainingSpace?: number;
                    /**
                     * Number of clips currently on the device
                     * example:
                     * 12
                     */
                    clipCount?: number;
                }[];
            }
        }
    }
    namespace GetPresets {
        namespace Responses {
            export interface $200 {
                /**
                 * List of the presets on the camera
                 */
                presets?: string[];
            }
        }
    }
    namespace GetPresetsActive {
        namespace Responses {
            export interface $200 {
                preset?: string;
            }
        }
    }
    namespace GetPresetsPresetName {
        namespace Parameters {
            export type PresetName = string;
        }
        export interface PathParameters {
            presetName: Parameters.PresetName;
        }
        namespace Responses {
            export type $200 = string; // binary
        }
    }
    namespace GetSystem {
        namespace Responses {
            /**
             * The properties will be populated only with the values that are supported/implemented by the device in use.
             */
            export interface $200 {
                codecFormat?: {
                    /**
                     * Currently selected codec
                     * example:
                     * ProRes:HQ
                     */
                    codec?: string;
                    /**
                     * Multimedia container format
                     * example:
                     * MOV
                     */
                    container?: string;
                };
                videoFormat?: {
                    /**
                     * Video format serialised as a string
                     * example:
                     * 1920x1080p29.97
                     */
                    name?: string;
                    /**
                     * Frame rate
                     * example:
                     * 29.97
                     */
                    frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
                    /**
                     * Height dimension of video format
                     * example:
                     * 1920
                     */
                    height?: number;
                    /**
                     * Width dimension of video format
                     * example:
                     * 1080
                     */
                    width?: number;
                    /**
                     * Is the display format interlaced?
                     * example:
                     * false
                     */
                    interlaced?: boolean;
                };
            }
            export interface $501 {
            }
        }
    }
    namespace GetSystemCodecFormat {
        namespace Responses {
            export interface $200 {
                /**
                 * Currently selected codec
                 * example:
                 * ProRes:HQ
                 */
                codec?: string;
                /**
                 * Multimedia container format
                 * example:
                 * MOV
                 */
                container?: string;
            }
            export interface $501 {
            }
        }
    }
    namespace GetSystemFormat {
        namespace Responses {
            export interface $200 {
                /**
                 * Currently selected codec
                 * example:
                 * BRaw:8_1
                 */
                codec?: string;
                /**
                 * Frame rate
                 * example:
                 * 24
                 */
                frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
                /**
                 * example:
                 * 60
                 */
                maxOffSpeedFrameRate?: number;
                /**
                 * example:
                 * 5
                 */
                minOffSpeedFrameRate?: number;
                /**
                 * example:
                 * false
                 */
                offSpeedEnabled?: boolean;
                /**
                 * example:
                 * 60
                 */
                offSpeedFrameRate?: number;
                recordResolution?: {
                    /**
                     * Height of the resolution
                     * example:
                     * 2160
                     */
                    height?: number;
                    /**
                     * Width of the resolution
                     * example:
                     * 3840
                     */
                    width?: number;
                };
                sensorResolution?: {
                    /**
                     * Height of the resolution
                     * example:
                     * 2160
                     */
                    height?: number;
                    /**
                     * Width of the resolution
                     * example:
                     * 3840
                     */
                    width?: number;
                };
            }
            export interface $501 {
            }
        }
    }
    namespace GetSystemSupportedCodecFormats {
        namespace Responses {
            export interface $200 {
                codecs?: {
                    /**
                     * Currently selected codec
                     * example:
                     * ProRes:HQ
                     */
                    codec?: string;
                    /**
                     * Multimedia container format
                     * example:
                     * MOV
                     */
                    container?: string;
                }[];
            }
            export interface $501 {
            }
        }
    }
    namespace GetSystemSupportedFormats {
        namespace Responses {
            export interface $200 {
                supportedFormats?: {
                    codecs?: string[];
                    frameRates?: ("23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120")[];
                    /**
                     * example:
                     * 60
                     */
                    maxOffSpeedFrameRate?: number;
                    /**
                     * example:
                     * 5
                     */
                    minOffSpeedFrameRate?: number;
                    recordResolution?: {
                        /**
                         * Height of the resolution
                         * example:
                         * 2160
                         */
                        height?: number;
                        /**
                         * Width of the resolution
                         * example:
                         * 3840
                         */
                        width?: number;
                    };
                    sensorResolution?: {
                        /**
                         * Height of the resolution
                         * example:
                         * 2160
                         */
                        height?: number;
                        /**
                         * Width of the resolution
                         * example:
                         * 3840
                         */
                        width?: number;
                    };
                }[];
            }
            export interface $501 {
            }
        }
    }
    namespace GetSystemSupportedVideoFormats {
        namespace Responses {
            export interface $200 {
                formats?: {
                    /**
                     * Frame rate
                     * example:
                     * 30
                     */
                    frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
                    /**
                     * Height dimension of video format
                     * example:
                     * 1920
                     */
                    height?: number;
                    /**
                     * Width dimension of video format
                     * example:
                     * 1080
                     */
                    width?: number;
                    /**
                     * Is the display format interlaced?
                     * example:
                     * false
                     */
                    interlaced?: boolean;
                }[];
            }
            export interface $501 {
            }
        }
    }
    namespace GetSystemVideoFormat {
        namespace Responses {
            export interface $200 {
                /**
                 * Video format serialised as a string
                 * example:
                 * 1920x1080p29.97
                 */
                name?: string;
                /**
                 * Frame rate
                 * example:
                 * 29.97
                 */
                frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
                /**
                 * Height dimension of video format
                 * example:
                 * 1920
                 */
                height?: number;
                /**
                 * Width dimension of video format
                 * example:
                 * 1080
                 */
                width?: number;
                /**
                 * Is the display format interlaced?
                 * example:
                 * false
                 */
                interlaced?: boolean;
            }
            export interface $501 {
            }
        }
    }
    namespace GetTimelines0 {
        namespace Responses {
            export interface $200 {
                clips?: {
                    /**
                     * Unique ID used to identify this clip
                     * example:
                     * 1
                     */
                    clipUniqueId?: number;
                    /**
                     * Number of frames in this clip on the timeline
                     * example:
                     * 90000
                     */
                    frameCount?: number;
                }[];
            }
        }
    }
    namespace GetTransports0 {
        namespace Responses {
            export interface $200 {
                /**
                 * Transport mode.
                 */
                mode?: "InputPreview" | "InputRecord" | "Output";
            }
        }
    }
    namespace GetTransports0Play {
        namespace Responses {
            /**
             * True when transport is in Output mode and speed is non-zero
             */
            export type $200 = boolean;
        }
    }
    namespace GetTransports0Playback {
        namespace Responses {
            export interface $200 {
                type?: "Play" | "Jog" | "Shuttle" | "Var";
                /**
                 * When true playback loops from the end of the timeline to the beginning of the timeline
                 */
                loop?: boolean;
                /**
                 * When true playback loops from the end of the current clip to the beginning of the current clip
                 */
                singleClip?: boolean;
                /**
                 * Playback Speed, 1.0 for normal forward playback
                 */
                speed?: number;
                /**
                 * Playback position on the timeline in units of video frames
                 */
                position?: number;
            }
        }
    }
    namespace GetTransports0Record {
        namespace Responses {
            export interface $200 {
                /**
                 * Is transport in Input Record mode
                 */
                recording?: boolean;
            }
        }
    }
    namespace GetTransports0Stop {
        namespace Responses {
            /**
             * True when transport mode is InputPreview or when in Output mode and speed is 0
             */
            export type $200 = boolean;
        }
    }
    namespace GetTransports0Timecode {
        namespace Responses {
            export interface $200 {
                /**
                 * The time of day timecode in units of binary-coded decimal (BCD).
                 */
                timecode?: number;
                /**
                 * The position of the clip timecode in units of binary-coded decimal (BCD).
                 */
                clip?: number;
            }
        }
    }
    namespace GetTransports0TimecodeSource {
        namespace Responses {
            export interface $200 {
                timecode?: "Timecode" | "Clip";
            }
        }
    }
    namespace GetVideoAutoExposure {
        namespace Responses {
            export interface $200 {
                /**
                 * Auto exposure mode
                 */
                mode?: {
                    mode?: "Off" | "Continuous" | "OneShot";
                    type?: "" | "Iris" | "Shutter" | "Iris,Shutter" | "Shutter,Iris";
                };
            }
        }
    }
    namespace GetVideoGain {
        namespace Responses {
            export interface $200 {
                /**
                 * Current gain value in decibels
                 */
                gain?: number;
            }
        }
    }
    namespace GetVideoIso {
        namespace Responses {
            export interface $200 {
                /**
                 * Current ISO value
                 */
                iso?: number;
            }
        }
    }
    namespace GetVideoNdFilter {
        namespace Responses {
            export interface $200 {
                /**
                 * Current filter power (fStop)
                 */
                stop?: number;
            }
        }
    }
    namespace GetVideoNdFilterDisplayMode {
        namespace Responses {
            export interface $200 {
                displayMode?: "Stop" | "Number" | "Fraction";
            }
        }
    }
    namespace GetVideoShutter {
        namespace Responses {
            export interface $200 {
                /**
                 * Is shutter controlled by auto exposure
                 */
                continuousShutterAutoExposure?: boolean;
                /**
                 * Shutter speed value in fractions of a second (minimum is sensor frame rate)
                 */
                shutterSpeed?: number;
                /**
                 * Shutter angle
                 */
                shutterAngle?: number;
            }
        }
    }
    namespace GetVideoWhiteBalance {
        namespace Responses {
            export interface $200 {
                /**
                 * Current white balance
                 */
                whiteBalance?: number;
            }
        }
    }
    namespace PostPresets {
        export type RequestBody = string; // binary
        namespace Responses {
            export interface $200 {
                /**
                 * Name of the preset uploaded
                 */
                presetAdded?: string;
            }
        }
    }
    namespace PostTimelines0Add {
        export type RequestBody = {
            /**
             * Unique ID used to identify this clip
             * example:
             * 1
             */
            clips?: number;
        } | {
            /**
             * example:
             * [
             *   1,
             *   2,
             *   3
             * ]
             */
            clips?: number[];
        };
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutAudioChannelChannelIndexInput {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        export interface RequestBody {
            input?: "None" | "Camera - Left" | "Camera - Right" | "Camera - Mono" | "XLR1 - Mic" | "XLR1 - Line" | "XLR2 - Mic" | "XLR2 - Line" | "3.5mm Left - Line" | "3.5mm Left - Mic" | "3.5mm Right - Line" | "3.5mm Right - Mic" | "3.5mm Mono - Line" | "3.5mm Mono - Mic";
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export interface $404 {
            }
        }
    }
    namespace PutAudioChannelChannelIndexLevel {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        /**
         * The input level of the selected channel. Only one property is required for setting. If both provided, gain will be prioritized and level would be ignored.
         */
        export interface RequestBody {
            gain?: number;
            normalised?: number;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export interface $404 {
            }
        }
    }
    namespace PutAudioChannelChannelIndexLowCutFilter {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        export interface RequestBody {
            lowCutFilter?: boolean;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export interface $404 {
            }
        }
    }
    namespace PutAudioChannelChannelIndexPadding {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        export interface RequestBody {
            padding?: boolean;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export interface $404 {
            }
        }
    }
    namespace PutAudioChannelChannelIndexPhantomPower {
        namespace Parameters {
            export type ChannelIndex = number;
        }
        export interface PathParameters {
            channelIndex: Parameters.ChannelIndex;
        }
        export interface RequestBody {
            phantomPower?: boolean;
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $400 {
            }
            export interface $404 {
            }
        }
    }
    namespace PutColorCorrectionColor {
        export interface RequestBody {
            hue?: number;
            saturation?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutColorCorrectionContrast {
        export interface RequestBody {
            pivot?: number;
            adjust?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutColorCorrectionGain {
        export interface RequestBody {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutColorCorrectionGamma {
        export interface RequestBody {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutColorCorrectionLift {
        export interface RequestBody {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutColorCorrectionLumaContribution {
        export interface RequestBody {
            lumaContribution?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutColorCorrectionOffset {
        export interface RequestBody {
            red?: number;
            green?: number;
            blue?: number;
            luma?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutLensFocus {
        export interface RequestBody {
            /**
             * Normalised value
             */
            focus?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutLensFocusDoAutoFocus {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutLensIris {
        export interface RequestBody {
            /**
             * Aperture stop value
             */
            apertureStop?: number;
            /**
             * Normalised value
             */
            normalised?: number;
            /**
             * Aperture number
             */
            apertureNumber?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutLensZoom {
        export interface RequestBody {
            /**
             * Focal length in mm
             */
            focalLength?: number;
            /**
             * Normalised value
             */
            normalised?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutMediaActive {
        export interface RequestBody {
            /**
             * Working set index of the media to become active
             */
            workingsetIndex?: number;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutMediaDevicesDeviceNameDoformat {
        namespace Parameters {
            export type DeviceName = string;
        }
        export interface PathParameters {
            deviceName: Parameters.DeviceName;
        }
        export interface RequestBody {
            /**
             * The key used to format this device, it must be fetched with the GET request and then provided back with a PUT request
             */
            key?: string;
            /**
             * Filesystem to format to (supportedFilesystems returns list of supported fileSystems)
             */
            filesystem?: string;
            /**
             * Volume name to set for the disk after format
             */
            volume?: string;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutPresetsActive {
        export interface RequestBody {
            preset?: string;
        }
        namespace Responses {
            export type $200 = string;
        }
    }
    namespace PutPresetsPresetName {
        namespace Parameters {
            export type PresetName = string;
        }
        export interface PathParameters {
            presetName: Parameters.PresetName;
        }
        namespace Responses {
            export type $200 = string;
        }
    }
    namespace PutSystemCodecFormat {
        export interface RequestBody {
            /**
             * Currently selected codec
             * example:
             * ProRes:HQ
             */
            codec?: string;
            /**
             * Multimedia container format
             * example:
             * MOV
             */
            container?: string;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $501 {
            }
        }
    }
    namespace PutSystemFormat {
        export interface RequestBody {
            /**
             * Currently selected codec
             * example:
             * BRaw:8_1
             */
            codec?: string;
            /**
             * Frame rate
             * example:
             * 24
             */
            frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
            /**
             * example:
             * 60
             */
            maxOffSpeedFrameRate?: number;
            /**
             * example:
             * 5
             */
            minOffSpeedFrameRate?: number;
            /**
             * example:
             * false
             */
            offSpeedEnabled?: boolean;
            /**
             * example:
             * 60
             */
            offSpeedFrameRate?: number;
            recordResolution?: {
                /**
                 * Height of the resolution
                 * example:
                 * 2160
                 */
                height?: number;
                /**
                 * Width of the resolution
                 * example:
                 * 3840
                 */
                width?: number;
            };
            sensorResolution?: {
                /**
                 * Height of the resolution
                 * example:
                 * 2160
                 */
                height?: number;
                /**
                 * Width of the resolution
                 * example:
                 * 3840
                 */
                width?: number;
            };
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $501 {
            }
        }
    }
    namespace PutSystemVideoFormat {
        export interface RequestBody {
            /**
             * Frame rate
             * example:
             * 30
             */
            frameRate?: "23.98" | "24.00" | "24" | "25.00" | "25" | "29.97" | "30.00" | "30" | "47.95" | "48.00" | "48" | "50.00" | "50" | "59.94" | "60.00" | "60" | "119.88" | "120.00" | "120";
            /**
             * Height dimension of video format
             * example:
             * 1920
             */
            height?: number;
            /**
             * Width dimension of video format
             * example:
             * 1080
             */
            width?: number;
            /**
             * Is the display format interlaced?
             * example:
             * false
             */
            interlaced?: boolean;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $501 {
            }
        }
    }
    namespace PutTransports0 {
        export interface RequestBody {
            /**
             * Transport mode.
             */
            mode?: "InputPreview" | "Output";
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutTransports0Play {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutTransports0Playback {
        export interface RequestBody {
            type?: "Play" | "Jog" | "Shuttle" | "Var";
            /**
             * When true playback loops from the end of the timeline to the beginning of the timeline
             */
            loop?: boolean;
            /**
             * When true playback loops from the end of the current clip to the beginning of the current clip
             */
            singleClip?: boolean;
            /**
             * Playback Speed, 1.0 for normal forward playback
             */
            speed?: number;
            /**
             * Playback position on the timeline in units of video frames
             */
            position?: number;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutTransports0Record {
        export interface RequestBody {
            /**
             * Is transport in Input Record mode
             */
            recording?: boolean;
            /**
             * Used to set the requested clipName to record to, when specifying "recording" attribute to True
             */
            clipName?: string;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutTransports0Stop {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutVideoAutoExposure {
        export interface RequestBody {
            /**
             * Auto exposure mode
             */
            mode?: {
                mode?: "Off" | "Continuous" | "OneShot";
                type?: "" | "Iris" | "Shutter" | "Iris,Shutter" | "Shutter,Iris";
            };
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoGain {
        export interface RequestBody {
            /**
             * Gain value in decibels to set
             */
            gain?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoIso {
        export interface RequestBody {
            /**
             * ISO value to set
             */
            iso?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoNdFilter {
        export interface RequestBody {
            /**
             * Filter power (fStop) to set
             */
            stop?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoNdFilterDisplayMode {
        export interface RequestBody {
            displayMode?: "Stop" | "Number" | "Fraction";
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoShutter {
        export interface RequestBody {
            /**
             * Shutter speed value in fractions of a second (minimum is sensor frame rate)
             */
            shutterSpeed?: number;
            /**
             * Shutter angle
             */
            shutterAngle?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoWhiteBalance {
        export interface RequestBody {
            /**
             * White balance to set
             */
            whiteBalance?: number;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace PutVideoWhiteBalanceDoAuto {
        namespace Responses {
            export interface $200 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * getEventList - Get the list of events that can be subscribed to using the websocket API.
   */
  'getEventList'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetEventList.Responses.$200>
  /**
   * getMediaWorkingset - Get the list of media devices currently in the working set.
   */
  'getMediaWorkingset'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMediaWorkingset.Responses.$200>
  /**
   * getMediaActive - Get the currently active media device.
   */
  'getMediaActive'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMediaActive.Responses.$200>
  /**
   * putMediaActive - Set the currently active media device.
   */
  'putMediaActive'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutMediaActive.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutMediaActive.Responses.$204>
  /**
   * getMediaDevicesDoformatSupportedFilesystems - Get the list of filesystems available to format the device.
   */
  'getMediaDevicesDoformatSupportedFilesystems'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMediaDevicesDoformatSupportedFilesystems.Responses.$200>
  /**
   * getMediaDevicesDeviceName - Get information about the selected device.
   */
  'getMediaDevicesDeviceName'(
    parameters?: Parameters<Paths.GetMediaDevicesDeviceName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMediaDevicesDeviceName.Responses.$200>
  /**
   * getMediaDevicesDeviceNameDoformat - Get a format key, used to format the device with a put request.
   */
  'getMediaDevicesDeviceNameDoformat'(
    parameters?: Parameters<Paths.GetMediaDevicesDeviceNameDoformat.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMediaDevicesDeviceNameDoformat.Responses.$200>
  /**
   * putMediaDevicesDeviceNameDoformat - Perform a format of the media device.
   */
  'putMediaDevicesDeviceNameDoformat'(
    parameters?: Parameters<Paths.PutMediaDevicesDeviceNameDoformat.PathParameters> | null,
    data?: Paths.PutMediaDevicesDeviceNameDoformat.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutMediaDevicesDeviceNameDoformat.Responses.$204>
  /**
   * getSystem - Get device system information.
   */
  'getSystem'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystem.Responses.$200>
  /**
   * getSystemSupportedCodecFormats - Get the list of supported codecs.
   */
  'getSystemSupportedCodecFormats'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemSupportedCodecFormats.Responses.$200>
  /**
   * getSystemCodecFormat - Get the currently selected codec.
   */
  'getSystemCodecFormat'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemCodecFormat.Responses.$200>
  /**
   * putSystemCodecFormat - Set the codec.
   */
  'putSystemCodecFormat'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutSystemCodecFormat.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutSystemCodecFormat.Responses.$204>
  /**
   * getSystemVideoFormat - Get the currently selected video format.
   */
  'getSystemVideoFormat'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemVideoFormat.Responses.$200>
  /**
   * putSystemVideoFormat - Set the video format.
   */
  'putSystemVideoFormat'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutSystemVideoFormat.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutSystemVideoFormat.Responses.$204>
  /**
   * getSystemSupportedVideoFormats - Get the list of supported video formats for the current system state.
   */
  'getSystemSupportedVideoFormats'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemSupportedVideoFormats.Responses.$200>
  /**
   * getSystemSupportedFormats - Get supported formats.
   */
  'getSystemSupportedFormats'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemSupportedFormats.Responses.$200>
  /**
   * getSystemFormat - Get current format.
   */
  'getSystemFormat'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSystemFormat.Responses.$200>
  /**
   * putSystemFormat - Set the format.
   */
  'putSystemFormat'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutSystemFormat.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutSystemFormat.Responses.$204>
  /**
   * getTimelines0 - Get the current playback timeline.
   */
  'getTimelines0'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTimelines0.Responses.$200>
  /**
   * deleteTimelines0 - Clear the current playback timeline.
   */
  'deleteTimelines0'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteTimelines0.Responses.$204>
  /**
   * postTimelines0Add - Add a clip to the end of the timeline.
   */
  'postTimelines0Add'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostTimelines0Add.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostTimelines0Add.Responses.$204>
  /**
   * getTransports0 - Get device's basic transport status.
   */
  'getTransports0'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0.Responses.$200>
  /**
   * putTransports0 - Set device's basic transport status.
   */
  'putTransports0'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutTransports0.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutTransports0.Responses.$204>
  /**
   * getTransports0Stop - Determine if transport is stopped.
   */
  'getTransports0Stop'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0Stop.Responses.$200>
  /**
   * putTransports0Stop - Stop transport.
   */
  'putTransports0Stop'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutTransports0Stop.Responses.$204>
  /**
   * getTransports0Play - Determine if transport is playing.
   */
  'getTransports0Play'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0Play.Responses.$200>
  /**
   * putTransports0Play - Start playing on transport.
   */
  'putTransports0Play'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutTransports0Play.Responses.$204>
  /**
   * getTransports0Playback - Get playback state.
   */
  'getTransports0Playback'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0Playback.Responses.$200>
  /**
   * putTransports0Playback - Set playback state.
   */
  'putTransports0Playback'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutTransports0Playback.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutTransports0Playback.Responses.$204>
  /**
   * getTransports0Record - Get record state.
   */
  'getTransports0Record'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0Record.Responses.$200>
  /**
   * putTransports0Record - Set record state.
   */
  'putTransports0Record'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutTransports0Record.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutTransports0Record.Responses.$204>
  /**
   * getTransports0Timecode - Get device's timecode.
   */
  'getTransports0Timecode'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0Timecode.Responses.$200>
  /**
   * getTransports0TimecodeSource - Get timecode source selected on device
   */
  'getTransports0TimecodeSource'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransports0TimecodeSource.Responses.$200>
  /**
   * getAudioChannelChannelIndexInput - Get the audio input (source and type) for the selected channel
   */
  'getAudioChannelChannelIndexInput'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexInput.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexInput.Responses.$200>
  /**
   * putAudioChannelChannelIndexInput - Set the audio input for the selected channel
   */
  'putAudioChannelChannelIndexInput'(
    parameters?: Parameters<Paths.PutAudioChannelChannelIndexInput.PathParameters> | null,
    data?: Paths.PutAudioChannelChannelIndexInput.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutAudioChannelChannelIndexInput.Responses.$200>
  /**
   * getAudioChannelChannelIndexInputDescription - Get the description of the current input of the selected channel
   */
  'getAudioChannelChannelIndexInputDescription'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexInputDescription.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexInputDescription.Responses.$200>
  /**
   * getAudioChannelChannelIndexSupportedInputs - Get the list of supported inputs and their availability to switch to for the selected channel
   */
  'getAudioChannelChannelIndexSupportedInputs'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexSupportedInputs.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexSupportedInputs.Responses.$200>
  /**
   * getAudioChannelChannelIndexLevel - Get the audio input level for the selected channel
   */
  'getAudioChannelChannelIndexLevel'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexLevel.Responses.$200>
  /**
   * putAudioChannelChannelIndexLevel - Set the audio input level for the selected channel
   */
  'putAudioChannelChannelIndexLevel'(
    parameters?: Parameters<Paths.PutAudioChannelChannelIndexLevel.PathParameters> | null,
    data?: Paths.PutAudioChannelChannelIndexLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutAudioChannelChannelIndexLevel.Responses.$200>
  /**
   * getAudioChannelChannelIndexPhantomPower - Get the audio input phantom power for the selected channel if possible
   */
  'getAudioChannelChannelIndexPhantomPower'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexPhantomPower.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexPhantomPower.Responses.$200>
  /**
   * putAudioChannelChannelIndexPhantomPower - Set the audio phantom power for the selected channel
   */
  'putAudioChannelChannelIndexPhantomPower'(
    parameters?: Parameters<Paths.PutAudioChannelChannelIndexPhantomPower.PathParameters> | null,
    data?: Paths.PutAudioChannelChannelIndexPhantomPower.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutAudioChannelChannelIndexPhantomPower.Responses.$200>
  /**
   * getAudioChannelChannelIndexPadding - Get the audio input padding for the selected channel
   */
  'getAudioChannelChannelIndexPadding'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexPadding.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexPadding.Responses.$200>
  /**
   * putAudioChannelChannelIndexPadding - Set the audio input padding for the selected channel
   */
  'putAudioChannelChannelIndexPadding'(
    parameters?: Parameters<Paths.PutAudioChannelChannelIndexPadding.PathParameters> | null,
    data?: Paths.PutAudioChannelChannelIndexPadding.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutAudioChannelChannelIndexPadding.Responses.$200>
  /**
   * getAudioChannelChannelIndexLowCutFilter - Get the audio input low cut filter for the selected channel
   */
  'getAudioChannelChannelIndexLowCutFilter'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexLowCutFilter.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexLowCutFilter.Responses.$200>
  /**
   * putAudioChannelChannelIndexLowCutFilter - Set the audio input low cut filter for the selected channel
   */
  'putAudioChannelChannelIndexLowCutFilter'(
    parameters?: Parameters<Paths.PutAudioChannelChannelIndexLowCutFilter.PathParameters> | null,
    data?: Paths.PutAudioChannelChannelIndexLowCutFilter.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutAudioChannelChannelIndexLowCutFilter.Responses.$200>
  /**
   * getAudioChannelChannelIndexAvailable - Get the audio input's current availability for the selected channel. If unavailable, the source will be muted
   */
  'getAudioChannelChannelIndexAvailable'(
    parameters?: Parameters<Paths.GetAudioChannelChannelIndexAvailable.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAudioChannelChannelIndexAvailable.Responses.$200>
  /**
   * getColorCorrectionLift - Get color correction lift
   */
  'getColorCorrectionLift'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionLift.Responses.$200>
  /**
   * putColorCorrectionLift - Set color correction lift
   */
  'putColorCorrectionLift'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionLift.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionLift.Responses.$200>
  /**
   * getColorCorrectionGamma - Get color correction gamma
   */
  'getColorCorrectionGamma'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionGamma.Responses.$200>
  /**
   * putColorCorrectionGamma - Set color correction gamma
   */
  'putColorCorrectionGamma'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionGamma.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionGamma.Responses.$200>
  /**
   * getColorCorrectionGain - Get color correction gain
   */
  'getColorCorrectionGain'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionGain.Responses.$200>
  /**
   * putColorCorrectionGain - Set color correction gain
   */
  'putColorCorrectionGain'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionGain.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionGain.Responses.$200>
  /**
   * getColorCorrectionOffset - Get color correction offset
   */
  'getColorCorrectionOffset'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionOffset.Responses.$200>
  /**
   * putColorCorrectionOffset - Set color correction offset
   */
  'putColorCorrectionOffset'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionOffset.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionOffset.Responses.$200>
  /**
   * getColorCorrectionContrast - Get color correction contrast
   */
  'getColorCorrectionContrast'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionContrast.Responses.$200>
  /**
   * putColorCorrectionContrast - Set color correction contrast
   */
  'putColorCorrectionContrast'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionContrast.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionContrast.Responses.$200>
  /**
   * getColorCorrectionColor - Get color correction color properties
   */
  'getColorCorrectionColor'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionColor.Responses.$200>
  /**
   * putColorCorrectionColor - Set color correction color properties
   */
  'putColorCorrectionColor'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionColor.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionColor.Responses.$200>
  /**
   * getColorCorrectionLumaContribution - Get color correction luma contribution
   */
  'getColorCorrectionLumaContribution'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetColorCorrectionLumaContribution.Responses.$200>
  /**
   * putColorCorrectionLumaContribution - Set color correction luma contribution
   */
  'putColorCorrectionLumaContribution'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutColorCorrectionLumaContribution.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutColorCorrectionLumaContribution.Responses.$200>
  /**
   * getLensIris - Get lens' aperture
   */
  'getLensIris'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLensIris.Responses.$200>
  /**
   * putLensIris - Set lens' aperture
   */
  'putLensIris'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutLensIris.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensIris.Responses.$200>
  /**
   * getLensZoom - Get lens' zoom
   */
  'getLensZoom'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLensZoom.Responses.$200>
  /**
   * putLensZoom - Set lens' zoom
   */
  'putLensZoom'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutLensZoom.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensZoom.Responses.$200>
  /**
   * getLensFocus - Get lens' focus
   */
  'getLensFocus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLensFocus.Responses.$200>
  /**
   * putLensFocus - Set lens' focus
   */
  'putLensFocus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutLensFocus.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensFocus.Responses.$200>
  /**
   * putLensFocusDoAutoFocus - Perform auto focus
   */
  'putLensFocusDoAutoFocus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensFocusDoAutoFocus.Responses.$200>
  /**
   * getPresets - Get the list of the presets on the camera
   */
  'getPresets'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPresets.Responses.$200>
  /**
   * postPresets - Send a preset file to the camera
   */
  'postPresets'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostPresets.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostPresets.Responses.$200>
  /**
   * getPresetsActive - Get the list of the presets on the camera
   */
  'getPresetsActive'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPresetsActive.Responses.$200>
  /**
   * putPresetsActive - Set the active preset on the camera
   */
  'putPresetsActive'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutPresetsActive.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutPresetsActive.Responses.$200>
  /**
   * getPresetsPresetName - Download the preset file
   */
  'getPresetsPresetName'(
    parameters?: Parameters<Paths.GetPresetsPresetName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPresetsPresetName.Responses.$200>
  /**
   * putPresetsPresetName - Update a preset on the camera if it exists, if not create a preset and save current state with the presetName
   */
  'putPresetsPresetName'(
    parameters?: Parameters<Paths.PutPresetsPresetName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutPresetsPresetName.Responses.$200>
  /**
   * deletePresetsPresetName - Delete a preset from a camera if exists
   */
  'deletePresetsPresetName'(
    parameters?: Parameters<Paths.DeletePresetsPresetName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeletePresetsPresetName.Responses.$200>
  /**
   * getVideoIso - Get current ISO
   */
  'getVideoIso'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoIso.Responses.$200>
  /**
   * putVideoIso - Set current ISO
   */
  'putVideoIso'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoIso.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoIso.Responses.$200>
  /**
   * getVideoGain - Get current gain value in decibels
   */
  'getVideoGain'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoGain.Responses.$200>
  /**
   * putVideoGain - Set current gain value
   */
  'putVideoGain'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoGain.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoGain.Responses.$200>
  /**
   * getVideoWhiteBalance - Get current white balance
   */
  'getVideoWhiteBalance'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoWhiteBalance.Responses.$200>
  /**
   * putVideoWhiteBalance - Set current white balance
   */
  'putVideoWhiteBalance'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoWhiteBalance.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoWhiteBalance.Responses.$200>
  /**
   * putVideoWhiteBalanceDoAuto - Set current white balance automatically
   */
  'putVideoWhiteBalanceDoAuto'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoWhiteBalanceDoAuto.Responses.$200>
  /**
   * getVideoNdFilter - Get ND filter stop
   */
  'getVideoNdFilter'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoNdFilter.Responses.$200>
  /**
   * putVideoNdFilter - Set ND filter stop
   */
  'putVideoNdFilter'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoNdFilter.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoNdFilter.Responses.$200>
  /**
   * getVideoNdFilterDisplayMode - Get ND filter display mode on the camera
   */
  'getVideoNdFilterDisplayMode'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoNdFilterDisplayMode.Responses.$200>
  /**
   * putVideoNdFilterDisplayMode - Set ND filter display mode on the camera
   */
  'putVideoNdFilterDisplayMode'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoNdFilterDisplayMode.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoNdFilterDisplayMode.Responses.$200>
  /**
   * getVideoShutter - Get current shutter. Will return either shutter speed or shutter angle depending on shutter measurement in device settings
   */
  'getVideoShutter'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoShutter.Responses.$200>
  /**
   * putVideoShutter - Set current shutter
   */
  'putVideoShutter'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoShutter.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoShutter.Responses.$200>
  /**
   * getVideoAutoExposure - Get current auto exposure mode
   */
  'getVideoAutoExposure'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetVideoAutoExposure.Responses.$200>
  /**
   * putVideoAutoExposure - Set auto exposure
   */
  'putVideoAutoExposure'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutVideoAutoExposure.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutVideoAutoExposure.Responses.$200>
}

export interface PathsDictionary {
  ['/event/list']: {
    /**
     * getEventList - Get the list of events that can be subscribed to using the websocket API.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetEventList.Responses.$200>
  }
  ['/media/workingset']: {
    /**
     * getMediaWorkingset - Get the list of media devices currently in the working set.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMediaWorkingset.Responses.$200>
  }
  ['/media/active']: {
    /**
     * getMediaActive - Get the currently active media device.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMediaActive.Responses.$200>
    /**
     * putMediaActive - Set the currently active media device.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutMediaActive.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutMediaActive.Responses.$204>
  }
  ['/media/devices/doformatSupportedFilesystems']: {
    /**
     * getMediaDevicesDoformatSupportedFilesystems - Get the list of filesystems available to format the device.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMediaDevicesDoformatSupportedFilesystems.Responses.$200>
  }
  ['/media/devices/{deviceName}']: {
    /**
     * getMediaDevicesDeviceName - Get information about the selected device.
     */
    'get'(
      parameters?: Parameters<Paths.GetMediaDevicesDeviceName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMediaDevicesDeviceName.Responses.$200>
  }
  ['/media/devices/{deviceName}/doformat']: {
    /**
     * getMediaDevicesDeviceNameDoformat - Get a format key, used to format the device with a put request.
     */
    'get'(
      parameters?: Parameters<Paths.GetMediaDevicesDeviceNameDoformat.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMediaDevicesDeviceNameDoformat.Responses.$200>
    /**
     * putMediaDevicesDeviceNameDoformat - Perform a format of the media device.
     */
    'put'(
      parameters?: Parameters<Paths.PutMediaDevicesDeviceNameDoformat.PathParameters> | null,
      data?: Paths.PutMediaDevicesDeviceNameDoformat.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutMediaDevicesDeviceNameDoformat.Responses.$204>
  }
  ['/system']: {
    /**
     * getSystem - Get device system information.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystem.Responses.$200>
  }
  ['/system/supportedCodecFormats']: {
    /**
     * getSystemSupportedCodecFormats - Get the list of supported codecs.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemSupportedCodecFormats.Responses.$200>
  }
  ['/system/codecFormat']: {
    /**
     * getSystemCodecFormat - Get the currently selected codec.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemCodecFormat.Responses.$200>
    /**
     * putSystemCodecFormat - Set the codec.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutSystemCodecFormat.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutSystemCodecFormat.Responses.$204>
  }
  ['/system/videoFormat']: {
    /**
     * getSystemVideoFormat - Get the currently selected video format.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemVideoFormat.Responses.$200>
    /**
     * putSystemVideoFormat - Set the video format.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutSystemVideoFormat.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutSystemVideoFormat.Responses.$204>
  }
  ['/system/supportedVideoFormats']: {
    /**
     * getSystemSupportedVideoFormats - Get the list of supported video formats for the current system state.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemSupportedVideoFormats.Responses.$200>
  }
  ['/system/supportedFormats']: {
    /**
     * getSystemSupportedFormats - Get supported formats.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemSupportedFormats.Responses.$200>
  }
  ['/system/format']: {
    /**
     * getSystemFormat - Get current format.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSystemFormat.Responses.$200>
    /**
     * putSystemFormat - Set the format.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutSystemFormat.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutSystemFormat.Responses.$204>
  }
  ['/timelines/0']: {
    /**
     * getTimelines0 - Get the current playback timeline.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTimelines0.Responses.$200>
    /**
     * deleteTimelines0 - Clear the current playback timeline.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteTimelines0.Responses.$204>
  }
  ['/timelines/0/add']: {
    /**
     * postTimelines0Add - Add a clip to the end of the timeline.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostTimelines0Add.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostTimelines0Add.Responses.$204>
  }
  ['/transports/0']: {
    /**
     * getTransports0 - Get device's basic transport status.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0.Responses.$200>
    /**
     * putTransports0 - Set device's basic transport status.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutTransports0.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutTransports0.Responses.$204>
  }
  ['/transports/0/stop']: {
    /**
     * getTransports0Stop - Determine if transport is stopped.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0Stop.Responses.$200>
    /**
     * putTransports0Stop - Stop transport.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutTransports0Stop.Responses.$204>
  }
  ['/transports/0/play']: {
    /**
     * getTransports0Play - Determine if transport is playing.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0Play.Responses.$200>
    /**
     * putTransports0Play - Start playing on transport.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutTransports0Play.Responses.$204>
  }
  ['/transports/0/playback']: {
    /**
     * getTransports0Playback - Get playback state.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0Playback.Responses.$200>
    /**
     * putTransports0Playback - Set playback state.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutTransports0Playback.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutTransports0Playback.Responses.$204>
  }
  ['/transports/0/record']: {
    /**
     * getTransports0Record - Get record state.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0Record.Responses.$200>
    /**
     * putTransports0Record - Set record state.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutTransports0Record.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutTransports0Record.Responses.$204>
  }
  ['/transports/0/timecode']: {
    /**
     * getTransports0Timecode - Get device's timecode.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0Timecode.Responses.$200>
  }
  ['/transports/0/timecode/source']: {
    /**
     * getTransports0TimecodeSource - Get timecode source selected on device
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransports0TimecodeSource.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/input']: {
    /**
     * getAudioChannelChannelIndexInput - Get the audio input (source and type) for the selected channel
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexInput.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexInput.Responses.$200>
    /**
     * putAudioChannelChannelIndexInput - Set the audio input for the selected channel
     */
    'put'(
      parameters?: Parameters<Paths.PutAudioChannelChannelIndexInput.PathParameters> | null,
      data?: Paths.PutAudioChannelChannelIndexInput.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutAudioChannelChannelIndexInput.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/input/description']: {
    /**
     * getAudioChannelChannelIndexInputDescription - Get the description of the current input of the selected channel
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexInputDescription.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexInputDescription.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/supportedInputs']: {
    /**
     * getAudioChannelChannelIndexSupportedInputs - Get the list of supported inputs and their availability to switch to for the selected channel
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexSupportedInputs.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexSupportedInputs.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/level']: {
    /**
     * getAudioChannelChannelIndexLevel - Get the audio input level for the selected channel
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexLevel.Responses.$200>
    /**
     * putAudioChannelChannelIndexLevel - Set the audio input level for the selected channel
     */
    'put'(
      parameters?: Parameters<Paths.PutAudioChannelChannelIndexLevel.PathParameters> | null,
      data?: Paths.PutAudioChannelChannelIndexLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutAudioChannelChannelIndexLevel.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/phantomPower']: {
    /**
     * getAudioChannelChannelIndexPhantomPower - Get the audio input phantom power for the selected channel if possible
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexPhantomPower.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexPhantomPower.Responses.$200>
    /**
     * putAudioChannelChannelIndexPhantomPower - Set the audio phantom power for the selected channel
     */
    'put'(
      parameters?: Parameters<Paths.PutAudioChannelChannelIndexPhantomPower.PathParameters> | null,
      data?: Paths.PutAudioChannelChannelIndexPhantomPower.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutAudioChannelChannelIndexPhantomPower.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/padding']: {
    /**
     * getAudioChannelChannelIndexPadding - Get the audio input padding for the selected channel
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexPadding.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexPadding.Responses.$200>
    /**
     * putAudioChannelChannelIndexPadding - Set the audio input padding for the selected channel
     */
    'put'(
      parameters?: Parameters<Paths.PutAudioChannelChannelIndexPadding.PathParameters> | null,
      data?: Paths.PutAudioChannelChannelIndexPadding.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutAudioChannelChannelIndexPadding.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/lowCutFilter']: {
    /**
     * getAudioChannelChannelIndexLowCutFilter - Get the audio input low cut filter for the selected channel
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexLowCutFilter.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexLowCutFilter.Responses.$200>
    /**
     * putAudioChannelChannelIndexLowCutFilter - Set the audio input low cut filter for the selected channel
     */
    'put'(
      parameters?: Parameters<Paths.PutAudioChannelChannelIndexLowCutFilter.PathParameters> | null,
      data?: Paths.PutAudioChannelChannelIndexLowCutFilter.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutAudioChannelChannelIndexLowCutFilter.Responses.$200>
  }
  ['/audio/channel/{channelIndex}/available']: {
    /**
     * getAudioChannelChannelIndexAvailable - Get the audio input's current availability for the selected channel. If unavailable, the source will be muted
     */
    'get'(
      parameters?: Parameters<Paths.GetAudioChannelChannelIndexAvailable.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAudioChannelChannelIndexAvailable.Responses.$200>
  }
  ['/colorCorrection/lift']: {
    /**
     * getColorCorrectionLift - Get color correction lift
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionLift.Responses.$200>
    /**
     * putColorCorrectionLift - Set color correction lift
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionLift.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionLift.Responses.$200>
  }
  ['/colorCorrection/gamma']: {
    /**
     * getColorCorrectionGamma - Get color correction gamma
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionGamma.Responses.$200>
    /**
     * putColorCorrectionGamma - Set color correction gamma
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionGamma.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionGamma.Responses.$200>
  }
  ['/colorCorrection/gain']: {
    /**
     * getColorCorrectionGain - Get color correction gain
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionGain.Responses.$200>
    /**
     * putColorCorrectionGain - Set color correction gain
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionGain.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionGain.Responses.$200>
  }
  ['/colorCorrection/offset']: {
    /**
     * getColorCorrectionOffset - Get color correction offset
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionOffset.Responses.$200>
    /**
     * putColorCorrectionOffset - Set color correction offset
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionOffset.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionOffset.Responses.$200>
  }
  ['/colorCorrection/contrast']: {
    /**
     * getColorCorrectionContrast - Get color correction contrast
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionContrast.Responses.$200>
    /**
     * putColorCorrectionContrast - Set color correction contrast
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionContrast.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionContrast.Responses.$200>
  }
  ['/colorCorrection/color']: {
    /**
     * getColorCorrectionColor - Get color correction color properties
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionColor.Responses.$200>
    /**
     * putColorCorrectionColor - Set color correction color properties
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionColor.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionColor.Responses.$200>
  }
  ['/colorCorrection/lumaContribution']: {
    /**
     * getColorCorrectionLumaContribution - Get color correction luma contribution
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetColorCorrectionLumaContribution.Responses.$200>
    /**
     * putColorCorrectionLumaContribution - Set color correction luma contribution
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutColorCorrectionLumaContribution.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutColorCorrectionLumaContribution.Responses.$200>
  }
  ['/lens/iris']: {
    /**
     * getLensIris - Get lens' aperture
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLensIris.Responses.$200>
    /**
     * putLensIris - Set lens' aperture
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutLensIris.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensIris.Responses.$200>
  }
  ['/lens/zoom']: {
    /**
     * getLensZoom - Get lens' zoom
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLensZoom.Responses.$200>
    /**
     * putLensZoom - Set lens' zoom
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutLensZoom.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensZoom.Responses.$200>
  }
  ['/lens/focus']: {
    /**
     * getLensFocus - Get lens' focus
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLensFocus.Responses.$200>
    /**
     * putLensFocus - Set lens' focus
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutLensFocus.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensFocus.Responses.$200>
  }
  ['/lens/focus/doAutoFocus']: {
    /**
     * putLensFocusDoAutoFocus - Perform auto focus
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensFocusDoAutoFocus.Responses.$200>
  }
  ['/presets']: {
    /**
     * getPresets - Get the list of the presets on the camera
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPresets.Responses.$200>
    /**
     * postPresets - Send a preset file to the camera
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostPresets.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostPresets.Responses.$200>
  }
  ['/presets/active']: {
    /**
     * getPresetsActive - Get the list of the presets on the camera
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPresetsActive.Responses.$200>
    /**
     * putPresetsActive - Set the active preset on the camera
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutPresetsActive.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutPresetsActive.Responses.$200>
  }
  ['/presets/{presetName}']: {
    /**
     * getPresetsPresetName - Download the preset file
     */
    'get'(
      parameters?: Parameters<Paths.GetPresetsPresetName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPresetsPresetName.Responses.$200>
    /**
     * putPresetsPresetName - Update a preset on the camera if it exists, if not create a preset and save current state with the presetName
     */
    'put'(
      parameters?: Parameters<Paths.PutPresetsPresetName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutPresetsPresetName.Responses.$200>
    /**
     * deletePresetsPresetName - Delete a preset from a camera if exists
     */
    'delete'(
      parameters?: Parameters<Paths.DeletePresetsPresetName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeletePresetsPresetName.Responses.$200>
  }
  ['/video/iso']: {
    /**
     * getVideoIso - Get current ISO
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoIso.Responses.$200>
    /**
     * putVideoIso - Set current ISO
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoIso.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoIso.Responses.$200>
  }
  ['/video/gain']: {
    /**
     * getVideoGain - Get current gain value in decibels
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoGain.Responses.$200>
    /**
     * putVideoGain - Set current gain value
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoGain.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoGain.Responses.$200>
  }
  ['/video/whiteBalance']: {
    /**
     * getVideoWhiteBalance - Get current white balance
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoWhiteBalance.Responses.$200>
    /**
     * putVideoWhiteBalance - Set current white balance
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoWhiteBalance.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoWhiteBalance.Responses.$200>
  }
  ['/video/whiteBalance/doAuto']: {
    /**
     * putVideoWhiteBalanceDoAuto - Set current white balance automatically
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoWhiteBalanceDoAuto.Responses.$200>
  }
  ['/video/ndFilter']: {
    /**
     * getVideoNdFilter - Get ND filter stop
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoNdFilter.Responses.$200>
    /**
     * putVideoNdFilter - Set ND filter stop
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoNdFilter.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoNdFilter.Responses.$200>
  }
  ['/video/ndFilter/displayMode']: {
    /**
     * getVideoNdFilterDisplayMode - Get ND filter display mode on the camera
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoNdFilterDisplayMode.Responses.$200>
    /**
     * putVideoNdFilterDisplayMode - Set ND filter display mode on the camera
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoNdFilterDisplayMode.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoNdFilterDisplayMode.Responses.$200>
  }
  ['/video/shutter']: {
    /**
     * getVideoShutter - Get current shutter. Will return either shutter speed or shutter angle depending on shutter measurement in device settings
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoShutter.Responses.$200>
    /**
     * putVideoShutter - Set current shutter
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoShutter.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoShutter.Responses.$200>
  }
  ['/video/autoExposure']: {
    /**
     * getVideoAutoExposure - Get current auto exposure mode
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetVideoAutoExposure.Responses.$200>
    /**
     * putVideoAutoExposure - Set auto exposure
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutVideoAutoExposure.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutVideoAutoExposure.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

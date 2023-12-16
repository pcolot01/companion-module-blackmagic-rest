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
    namespace AudioChannel$ChannelIndexAvailable {
        namespace Get {
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
    }
    namespace AudioChannel$ChannelIndexInput {
        namespace Get {
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
        namespace Put {
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
    }
    namespace AudioChannel$ChannelIndexInputDescription {
        namespace Get {
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
    }
    namespace AudioChannel$ChannelIndexLevel {
        namespace Get {
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
        namespace Put {
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
    }
    namespace AudioChannel$ChannelIndexLowCutFilter {
        namespace Get {
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
        namespace Put {
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
    }
    namespace AudioChannel$ChannelIndexPadding {
        namespace Get {
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
        namespace Put {
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
    }
    namespace AudioChannel$ChannelIndexPhantomPower {
        namespace Get {
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
        namespace Put {
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
    }
    namespace AudioChannel$ChannelIndexSupportedInputs {
        namespace Get {
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
    }
    namespace ColorCorrectionColor {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    hue?: number;
                    saturation?: number;
                }
            }
        }
        namespace Put {
            export interface RequestBody {
                hue?: number;
                saturation?: number;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ColorCorrectionContrast {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    pivot?: number;
                    adjust?: number;
                }
            }
        }
        namespace Put {
            export interface RequestBody {
                pivot?: number;
                adjust?: number;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ColorCorrectionGain {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    red?: number;
                    green?: number;
                    blue?: number;
                    luma?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace ColorCorrectionGamma {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    red?: number;
                    green?: number;
                    blue?: number;
                    luma?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace ColorCorrectionLift {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    red?: number;
                    green?: number;
                    blue?: number;
                    luma?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace ColorCorrectionLumaContribution {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    lumaContribution?: number;
                }
            }
        }
        namespace Put {
            export interface RequestBody {
                lumaContribution?: number;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ColorCorrectionOffset {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    red?: number;
                    green?: number;
                    blue?: number;
                    luma?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace EventList {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    events?: string[];
                }
            }
        }
    }
    namespace LensFocus {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Normalised value
                     */
                    focus?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace LensFocusDoAutoFocus {
        namespace Put {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace LensIris {
        namespace Get {
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
        namespace Put {
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
    }
    namespace LensZoom {
        namespace Get {
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
        namespace Put {
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
    }
    namespace MediaActive {
        namespace Get {
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
        namespace Put {
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
    }
    namespace MediaDevices$DeviceName {
        namespace Get {
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
    }
    namespace MediaDevices$DeviceNameDoformat {
        namespace Get {
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
        namespace Put {
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
    }
    namespace MediaDevicesDoformatSupportedFilesystems {
        namespace Get {
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
    }
    namespace MediaWorkingset {
        namespace Get {
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
    }
    namespace Presets {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * List of the presets on the camera
                     */
                    presets?: string[];
                }
            }
        }
        namespace Post {
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
    }
    namespace Presets$PresetName {
        namespace Delete {
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
        namespace Get {
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
        namespace Put {
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
    }
    namespace PresetsActive {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    preset?: string;
                }
            }
        }
        namespace Put {
            export interface RequestBody {
                preset?: string;
            }
            namespace Responses {
                export type $200 = string;
            }
        }
    }
    namespace System {
        namespace Get {
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
    }
    namespace SystemCodecFormat {
        namespace Get {
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
        namespace Put {
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
    }
    namespace SystemFormat {
        namespace Get {
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
        namespace Put {
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
    }
    namespace SystemSupportedCodecFormats {
        namespace Get {
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
    }
    namespace SystemSupportedFormats {
        namespace Get {
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
    }
    namespace SystemSupportedVideoFormats {
        namespace Get {
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
    }
    namespace SystemVideoFormat {
        namespace Get {
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
        namespace Put {
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
    }
    namespace Timelines0 {
        namespace Delete {
            namespace Responses {
                export interface $204 {
                }
            }
        }
        namespace Get {
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
    }
    namespace Timelines0Add {
        namespace Post {
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
    }
    namespace Transports0 {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Transport mode.
                     */
                    mode?: "InputPreview" | "InputRecord" | "Output";
                }
            }
        }
        namespace Put {
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
    }
    namespace Transports0Play {
        namespace Get {
            namespace Responses {
                /**
                 * True when transport is in Output mode and speed is non-zero
                 */
                export type $200 = boolean;
            }
        }
        namespace Put {
            namespace Responses {
                export interface $204 {
                }
            }
        }
    }
    namespace Transports0Playback {
        namespace Get {
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
        namespace Put {
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
    }
    namespace Transports0Record {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Is transport in Input Record mode
                     */
                    recording?: boolean;
                }
            }
        }
        namespace Put {
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
    }
    namespace Transports0Stop {
        namespace Get {
            namespace Responses {
                /**
                 * True when transport mode is InputPreview or when in Output mode and speed is 0
                 */
                export type $200 = boolean;
            }
        }
        namespace Put {
            namespace Responses {
                export interface $204 {
                }
            }
        }
    }
    namespace Transports0Timecode {
        namespace Get {
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
    }
    namespace Transports0TimecodeSource {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    timecode?: "Timecode" | "Clip";
                }
            }
        }
    }
    namespace VideoAutoExposure {
        namespace Get {
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
        namespace Put {
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
    }
    namespace VideoGain {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Current gain value in decibels
                     */
                    gain?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace VideoIso {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Current ISO value
                     */
                    iso?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace VideoNdFilter {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Current filter power (fStop)
                     */
                    stop?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace VideoNdFilterDisplayMode {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    displayMode?: "Stop" | "Number" | "Fraction";
                }
            }
        }
        namespace Put {
            export interface RequestBody {
                displayMode?: "Stop" | "Number" | "Fraction";
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace VideoShutter {
        namespace Get {
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
        namespace Put {
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
    }
    namespace VideoWhiteBalance {
        namespace Get {
            namespace Responses {
                export interface $200 {
                    /**
                     * Current white balance
                     */
                    whiteBalance?: number;
                }
            }
        }
        namespace Put {
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
    }
    namespace VideoWhiteBalanceDoAuto {
        namespace Put {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
}

export interface OperationMethods {
}

export interface PathsDictionary {
  ['/event/list']: {
  }
  ['/media/workingset']: {
  }
  ['/media/active']: {
  }
  ['/media/devices/doformatSupportedFilesystems']: {
  }
  ['/media/devices/{deviceName}']: {
  }
  ['/media/devices/{deviceName}/doformat']: {
  }
  ['/system']: {
  }
  ['/system/supportedCodecFormats']: {
  }
  ['/system/codecFormat']: {
  }
  ['/system/videoFormat']: {
  }
  ['/system/supportedVideoFormats']: {
  }
  ['/system/supportedFormats']: {
  }
  ['/system/format']: {
  }
  ['/timelines/0']: {
  }
  ['/timelines/0/add']: {
  }
  ['/transports/0']: {
  }
  ['/transports/0/stop']: {
  }
  ['/transports/0/play']: {
  }
  ['/transports/0/playback']: {
  }
  ['/transports/0/record']: {
  }
  ['/transports/0/timecode']: {
  }
  ['/transports/0/timecode/source']: {
  }
  ['/audio/channel/{channelIndex}/input']: {
  }
  ['/audio/channel/{channelIndex}/input/description']: {
  }
  ['/audio/channel/{channelIndex}/supportedInputs']: {
  }
  ['/audio/channel/{channelIndex}/level']: {
  }
  ['/audio/channel/{channelIndex}/phantomPower']: {
  }
  ['/audio/channel/{channelIndex}/padding']: {
  }
  ['/audio/channel/{channelIndex}/lowCutFilter']: {
  }
  ['/audio/channel/{channelIndex}/available']: {
  }
  ['/colorCorrection/lift']: {
  }
  ['/colorCorrection/gamma']: {
  }
  ['/colorCorrection/gain']: {
  }
  ['/colorCorrection/offset']: {
  }
  ['/colorCorrection/contrast']: {
  }
  ['/colorCorrection/color']: {
  }
  ['/colorCorrection/lumaContribution']: {
  }
  ['/lens/iris']: {
  }
  ['/lens/zoom']: {
  }
  ['/lens/focus']: {
  }
  ['/lens/focus/doAutoFocus']: {
  }
  ['/presets']: {
  }
  ['/presets/active']: {
  }
  ['/presets/{presetName}']: {
  }
  ['/video/iso']: {
  }
  ['/video/gain']: {
  }
  ['/video/whiteBalance']: {
  }
  ['/video/whiteBalance/doAuto']: {
  }
  ['/video/ndFilter']: {
  }
  ['/video/ndFilter/displayMode']: {
  }
  ['/video/shutter']: {
  }
  ['/video/autoExposure']: {
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

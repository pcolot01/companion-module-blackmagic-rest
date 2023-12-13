import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        export interface GetFocus {
            /**
             * Normalised value
             */
            focus?: number;
        }
        export interface GetIris {
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
        /**
         * True when transport is in Output mode and speed is non-zero
         */
        export type GetPlay = boolean;
        export interface GetPlayback {
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
        export interface GetRecord {
            /**
             * Is transport in Input Record mode
             */
            recording?: boolean;
        }
        /**
         * True when transport mode is InputPreview or when in Output mode and speed is 0
         */
        export type GetStop = boolean;
        export interface GetTimecode {
            /**
             * The time of day timecode in units of binary-coded decimal (BCD).
             */
            timecode?: number;
            /**
             * The position of the clip timecode in units of binary-coded decimal (BCD).
             */
            clip?: number;
        }
        export interface GetTimecodeSource {
            timecode?: "Timecode" | "Clip";
        }
        export interface GetTransportMode {
            /**
             * Transport mode Response.
             */
            mode?: "InputPreview" | "InputRecord" | "Output";
        }
        export interface GetZoom {
            /**
             * Focal length in mm
             */
            focalLength?: number;
            /**
             * Normalised value
             */
            normalised?: number;
        }
        export interface PutFocus {
            /**
             * Normalised value
             */
            focus?: number;
        }
        export interface PutIris {
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
        export interface PutPlayback {
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
        export interface PutRecord {
            /**
             * Is transport in Input Record mode
             */
            recording?: boolean;
            /**
             * Used to set the requested clipName to record to, when specifying "recording" attribute to True
             */
            clipName?: string;
        }
        export interface PutTransportMode {
            /**
             * Transport mode Request.
             */
            mode?: "InputPreview" | "Output";
        }
        export interface PutZoom {
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
declare namespace Paths {
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
    namespace GetTransports0 {
        namespace Responses {
            export interface $200 {
                /**
                 * Transport mode Response.
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
    namespace PutLensDoAutoFocus {
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
    namespace PutTransports0 {
        export interface RequestBody {
            /**
             * Transport mode Request.
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
}

export interface OperationMethods {
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
   * getLensIris - Get lens’ aperture.
   */
  'getLensIris'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLensIris.Responses.$200>
  /**
   * putLensIris - Set lens’ aperture.
   */
  'putLensIris'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutLensIris.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensIris.Responses.$200>
  /**
   * getLensZoom - Get lens’ zoom.
   */
  'getLensZoom'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLensZoom.Responses.$200>
  /**
   * putLensZoom - Set lens’ aperture.
   */
  'putLensZoom'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutLensZoom.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensZoom.Responses.$200>
  /**
   * getLensFocus - Get lens’ focus.
   */
  'getLensFocus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLensFocus.Responses.$200>
  /**
   * putLensFocus - Set lens’ focus.
   */
  'putLensFocus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PutLensFocus.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensFocus.Responses.$200>
  /**
   * putLensDoAutoFocus - Perform auto focus.
   */
  'putLensDoAutoFocus'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutLensDoAutoFocus.Responses.$200>
}

export interface PathsDictionary {
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
  ['/lens/iris']: {
    /**
     * getLensIris - Get lens’ aperture.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLensIris.Responses.$200>
    /**
     * putLensIris - Set lens’ aperture.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutLensIris.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensIris.Responses.$200>
  }
  ['/lens/zoom']: {
    /**
     * getLensZoom - Get lens’ zoom.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLensZoom.Responses.$200>
    /**
     * putLensZoom - Set lens’ aperture.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutLensZoom.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensZoom.Responses.$200>
  }
  ['/lens/focus']: {
    /**
     * getLensFocus - Get lens’ focus.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLensFocus.Responses.$200>
    /**
     * putLensFocus - Set lens’ focus.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PutLensFocus.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensFocus.Responses.$200>
  }
  ['/lens/focus/doAutoFocus']: {
    /**
     * putLensDoAutoFocus - Perform auto focus.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutLensDoAutoFocus.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

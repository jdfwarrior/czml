export type InterpolatableNumber = (string | number)[];
export type DoubleNumber = [number, number];
export type TripleNumber = [number, number, number];
export type QuadrupleNumber = [number, number, number, number];
export type HexaNumber = [number, number, number, number, number, number];
export type BooleanValue = boolean;
export type Time = string; // iso8601
export type TimeIntervalCollection = string; // A collection of time intervals, specified in ISO8601 interval format
export type BoundingRectangleValue = QuadrupleNumber | InterpolatableNumber;
export type Cartesian3Value = TripleNumber | InterpolatableNumber;
export type CartographicRadiansValue = TripleNumber | InterpolatableNumber;
export type CartographicDegreesValue = TripleNumber | InterpolatableNumber;
export type Cartesian2Value = DoubleNumber | InterpolatableNumber;
export type UnitCartesian3Value = TripleNumber | InterpolatableNumber;
export type SphericalValue = TripleNumber | InterpolatableNumber;
export type RgbaValue = QuadrupleNumber | InterpolatableNumber;
export type RgbafValue = QuadrupleNumber | InterpolatableNumber;
export type ColorBlendModeValue = "HIGHLIGHT" | "REPLACE" | "MIX";
export type CornerTypeValue = "ROUNDED" | "MITERED" | "BEVELED";
export type HeightReferenceValue =
    | "NONE"
    | "CLAMP_TO_GROUND"
    | "RELATIVE_TO_GROUND";
export type HorizontalOriginValue = "LEFT" | "RIGHT" | "CENTER";
export type LabelStyleValue = "FILL" | "OUTLINE" | "FILL_AND_OUTLINE";
export type DoubleValue = number | InterpolatableNumber;
export type NearFarScalarValue = QuadrupleNumber | InterpolatableNumber;
export type UnitQuaternionValue = QuadrupleNumber | InterpolatableNumber;
export type ShadowModeValue =
    | "DISABLED"
    | "ENABLED"
    | "CAST_ONLY"
    | "RECEIVE_ONLY";
export type StringValue = string;
export type StripeOrientationValue = "HORIZONTAL" | "VERTICAL";
export type CartographicRectangleRadiansValue =
    | QuadrupleNumber
    | InterpolatableNumber;
export type CartographicRectangleDegreesValue =
    | QuadrupleNumber
    | InterpolatableNumber;
export type UriValue = string;
export type VerticalOriginValue = "BASELINE" | "BOTTOM" | "CENTER" | "TOP";
export type InterpolationValue = "LINEAR" | "LAGRANGE" | "HERMITE";
export type ExtrapolationValue = "NONE" | "HOLD" | "EXTRAPOLATE";
export type ReferenceFrameValue = "FIXED" | "INERTIAL";
export type Cartesian3VelocityValue = HexaNumber | InterpolatableNumber;
export type ReferenceValue = string;
export type VelocityReferenceValue = string;
export type UnitSphericalValue = DoubleNumber | InterpolatableNumber;
export type DistanceDisplayConditionValue = DoubleNumber | InterpolatableNumber;
export type IntegerValue = number | InterpolatableNumber;
export type Cartesian2ListValue = number[];
export type Cartesian3ListValue = number[];
export type CartographicRadiansListValue = number[];
export type CartographicDegreesListValue = number[];
export type ReferenceListValue = string[];
export type ClassificationTypeValue = "TERRAIN" | "CESIUM_3D_TILE" | "BOTH";
export type FontValue = string;
export type CockRangeValue = "UNBOUNDED" | "CLAMPED" | "LOOP_STOP";
export type ClockStepValue =
    | "TICK_INDEPENDENT"
    | "SYSTEM_CLOCK_MULTIPLIER"
    | "SYSTEM_CLOCK";
export type Cartesian3ListOfListsValue = number[];
export type CartographicRadiansListOfListsValue = number[];
export type CartographicDegreesListOfListsValue = number[];
export type ReferenceListOfListsValue = string[];
export type ArcTypeValue = "NONE" | "GEODESIC" | "RHUMB";
export type DoubleListValue = number[];
export type SensorValuePortionToDisplayValue =
    | "COMPLETE"
    | "BELOW_ELLIPSOID_HORIZON"
    | "ABOVE_ELLIPSOID_HORIZON";

type Deletable = { delete?: boolean };
type Interpolatable = {
    epoch?: string;
    interpolationAlgorithm?: InterpolationValue; // default "LINEAR"
    interpolationDegree?: number; // default 1
    forwardExtrapolationType?: ExtrapolationValue; // NONE
    forwardExtrapolationDuration?: number; // default 0
    backwardExtrapolationType?: ExtrapolationValue; // NONE
    backwardExtrapolationDuration?: number; // default 0
};

interface Clock {
    currentTime?: Time; // iso8601
    multiplier?: number; // default 1.0
    range: CockRangeValue; // default LOOP_STOP
    step: ClockStepValue; // default SYSTEM_CLOCK_MULTIPLIER
}

interface IBoolean extends Deletable {
    boolean?: BooleanValue;
    reference?: ReferenceValue;
}

interface IString extends Deletable {
    string?: StringValue;
    reference?: ReferenceValue;
}

interface IDouble extends Deletable, Interpolatable {
    number?: DoubleValue;
    reference?: ReferenceValue;
}

interface IUri extends Deletable {
    uri?: UriValue;
    reference?: ReferenceValue;
}

interface IPixelOffset extends Interpolatable, Deletable {
    cartesian2?: Cartesian2Value;
    reference?: ReferenceValue;
}

interface IEyeOffset extends Interpolatable, Deletable {
    cartesian?: Cartesian3Value;
    reference?: ReferenceValue;
}

interface IHorizontalOrigin extends Deletable {
    horizontalOrigin?: HorizontalOriginValue;
    reference?: ReferenceValue;
}

interface IVerticalOrigin extends Deletable {
    verticalOrigin?: VerticalOriginValue;
    reference?: ReferenceValue;
}

interface IHeightReference extends Deletable {
    heightReference?: HeightReferenceValue;
    reference?: ReferenceValue;
}

interface IColor extends Interpolatable, Deletable {
    rgba?: RgbaValue;
    rgbaf?: RgbafValue;
    reference?: ReferenceValue;
}

interface IAlignedAxis extends Interpolatable, Deletable {
    unitCartesian?: UnitCartesian3Value;
    unitSpherical?: UnitSphericalValue;
    reference?: ReferenceValue;
    velocityReference?: VelocityReferenceValue;
}

interface INearFarScalar extends Interpolatable, Deletable {
    nearFarScalar?: NearFarScalarValue;
    reference?: ReferenceValue;
}

interface IBoundingRectangle extends Interpolatable, Deletable {
    boundingRectangle?: BoundingRectangleValue;
    reference?: ReferenceValue;
}

interface IDistanceDisplayCondition extends Interpolatable, Deletable {
    distanceDisplayCondition?: DistanceDisplayConditionValue;
    reference?: ReferenceValue;
}

interface IBoxDimensions extends Interpolatable, Deletable {
    cartesian?: Cartesian3Value;
    reference?: ReferenceValue;
}

interface ISolidColorMaterial {
    color: IColor;
}

interface IRepeat extends Interpolatable, Deletable {
    cartesian2?: Cartesian2Value;
    reference?: ReferenceValue;
}

interface IImageMaterial {
    uri?: IUri;
    repeat?: IRepeat;
    color?: IColor;
    transparent?: IBoolean;
}

interface ILineCount extends Interpolatable, Deletable {
    cartesian2?: Cartesian2Value;
    reference?: ReferenceValue;
}

interface ILineThickness extends Interpolatable, Deletable {
    cartesian2?: Cartesian2Value;
    reference?: ReferenceValue;
}

interface ILineOffset extends Interpolatable, Deletable {
    cartesian2?: Cartesian2Value;
    reference?: ReferenceValue;
}

interface IGridMaterial {
    color?: IColor;
    cellAlpha?: IDouble;
    lineCount?: ILineCount;
    lineThickness?: ILineThickness;
    lineOffset?: ILineOffset;
}

interface IStripeOrientation extends Deletable {
    stripeOrientation?: StripeOrientationValue;
    reference?: ReferenceValue;
}

interface IStripeMaterial {
    orientation?: IStripeOrientation;
    evenColor?: IColor;
    oddColor?: IColor;
    offset?: IDouble;
    repeat?: IDouble;
}

interface ICheckerboardMaterial {
    evenColor?: IColor;
    offColor?: IColor;
    repeat?: IRepeat;
}

interface IMaterial {
    solidColor?: ISolidColorMaterial;
    image?: IImageMaterial;
    grid?: IGridMaterial;
    stripe?: IStripeMaterial;
    checkerboard?: ICheckerboardMaterial;
}

interface IShadowMode extends Deletable {
    shadowMode?: ShadowModeValue;
    reference?: ReferenceValue;
}

interface IInteger extends Interpolatable, Deletable {
    number?: IntegerValue;
    reference?: ReferenceValue;
}

interface IPositionList extends Deletable {
    referenceFrame?: string;
    cartesian?: Cartesian3ListValue;
    cartographicRadians?: CartographicRadiansListValue;
    cartographicDegrees?: CartographicDegreesListValue;
    references?: ReferenceListValue;
}

interface ICornerType extends Deletable {
    cornerType?: CornerTypeValue;
    reference?: ReferenceValue;
}

interface IClassificationType extends Deletable {
    classificationType?: ClassificationTypeValue;
    reference?: ReferenceValue;
}

interface IEllipsoidRadii extends Interpolatable, Deletable {
    cartesian?: Cartesian3Value;
    reference?: ReferenceValue;
}

interface IFont extends Deletable {
    font?: FontValue;
    reference?: ReferenceValue;
}

interface ILabelStyle extends Deletable {
    labelStyle?: LabelStyleValue;
    reference?: ReferenceValue;
}

interface IBackgroundPadding extends Interpolatable, Deletable {
    cartesian2?: Cartesian2Value;
    reference?: ReferenceValue;
}

interface IColorBlendMode extends Deletable {
    colorBlendMode?: ColorBlendModeValue;
    reference?: ReferenceValue;
}

interface ITranslation extends Interpolatable, Deletable {
    cartesian?: Cartesian3Value;
    reference?: ReferenceValue;
}

interface IRotation extends Interpolatable, Deletable {
    unitQuaternion?: UnitQuaternionValue;
    reference?: ReferenceValue;
}

interface IScale extends Interpolatable, Deletable {
    cartesian?: Cartesian3Value;
    reference?: ReferenceValue;
}

interface INodeTransform {
    translation?: ITranslation;
    rotation?: IRotation;
    scale?: IScale;
}

interface INodeTransformations {
    [key: string]: INodeTransformations;
}

interface IArticulation extends Interpolatable, Deletable {
    number?: DoubleValue;
    reference?: ReferenceValue;
}

interface IArticulations {
    [key: string]: IArticulation;
}

interface IPolylineOutlineMaterial {
    color?: IColor;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
}

interface IPolylineArrowMaterial {
    color?: IColor;
}

interface IPolylineDashMaterial {
    color?: IColor;
    gpaColor?: IColor;
    dashLength?: IDouble;
    dashPattern?: IInteger;
}

interface IPolylineGlowMaterial {
    color?: IColor;
    glowPower?: IDouble;
    taperPower?: IDouble;
}

interface IPolylineMaterial {
    solidColor?: ISolidColorMaterial;
    polylineOutline?: IPolylineOutlineMaterial;
    polylineArrow?: IPolylineArrowMaterial;
    polylineDash?: IPolylineDashMaterial;
    polylineGlow?: IPolylineGlowMaterial;
    image?: IImageMaterial;
    grid?: IGridMaterial;
    stripe?: IStripeMaterial;
    checkerboard?: ICheckerboardMaterial;
}

interface IPositionListOfLists extends Deletable {
    cartesian?: Cartesian3ListOfListsValue;
    cartographicRadians?: CartographicRadiansListOfListsValue;
    cartographicDegrees?: CartographicDegreesListOfListsValue;
    references?: ReferenceListOfListsValue;
}

interface IArcType extends Deletable {
    arcType?: ArcTypeValue;
    reference?: ReferenceValue;
}

interface IShape extends Deletable {
    cartesain2?: Cartesian2ListValue;
}

interface IRectangleCoordinates extends Interpolatable, Deletable {
    wsen?: CartographicRectangleRadiansValue;
    wsenDegrees?: CartographicRectangleDegreesValue;
    reference?: ReferenceValue;
}

interface IDoubleList extends Deletable {
    array?: DoubleListValue;
    references?: ReferenceListValue;
}

interface ISensorVolumePortionToDisplay extends Deletable {
    portionToDisplay?: SensorValuePortionToDisplayValue;
    reference?: ReferenceValue;
}

type CustomProperty =
    | BooleanValue
    | BoundingRectangleValue
    | Cartesian3Value
    | CartographicRadiansValue
    | CartographicDegreesValue
    | Cartesian2Value
    | UnitCartesian3Value
    | SphericalValue
    | RgbaValue
    | RgbafValue
    | ColorBlendModeValue
    | CornerTypeValue
    | HeightReferenceValue
    | HorizontalOriginValue
    | LabelStyleValue
    | DoubleValue
    | NearFarScalarValue
    | UnitQuaternionValue
    | ShadowModeValue
    | StringValue
    | StripeOrientationValue
    | CartographicRectangleRadiansValue
    | CartographicRectangleDegreesValue
    | UriValue
    | VerticalOriginValue;

interface CustomProperties {
    [key: string]: CustomProperty;
}

interface IPosition extends Deletable, Interpolatable {
    referenceFrame?: ReferenceFrameValue;
    cartesian?: Cartesian3Value;
    cartographicRadians?: CartographicRadiansValue;
    cartographicDegrees?: CartographicDegreesValue;
    cartesianVelocity?: Cartesian3VelocityValue;
    reference?: ReferenceValue;
}

interface Orientation extends Interpolatable, Deletable {
    unitQuaternion?: UnitQuaternionValue;
    reference?: ReferenceValue;
    velocityReference?: VelocityReferenceValue;
}

interface ViewFrom extends Interpolatable, Deletable {
    cartesian?: Cartesian3Value;
    reference?: ReferenceValue;
}

interface Billboard {
    show?: IBoolean;
    image?: IUri;
    scale?: IDouble;
    pixelOffset?: IPixelOffset;
    eyeOffset?: IEyeOffset;
    horizontalOrigin?: IHorizontalOrigin;
    verticalOrigin?: IVerticalOrigin;
    heightReference?: IHeightReference;
    color?: IColor;
    rotation?: IDouble;
    alignedAxis?: IAlignedAxis;
    sizeInMeters?: IBoolean; // default false
    width?: IDouble;
    height?: IDouble;
    scaleByDistance?: INearFarScalar;
    translucencyByDistance?: INearFarScalar;
    imageSubRegion?: IBoundingRectangle;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    disableDepthTestDistance?: IDouble; // default 0
}

interface Box {
    show?: IBoolean;
    dimensions?: IBoxDimensions;
    heightReference?: IHeightReference;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
}

interface Corridor {
    show?: IBoolean;
    positions?: IPositionList;
    width?: IDouble;
    height?: IDouble;
    heightReference?: IHeightReference;
    extrudedHeight?: IDouble;
    extrudedHeightReference?: IHeightReference;
    cornerType?: ICornerType;
    granularity?: IDouble;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    classificationType?: IClassificationType;
    zIndex?: IInteger;
}

interface Cylinder {
    show?: IBoolean;
    length?: IDouble;
    topRadius?: IDouble;
    bottomRadius?: IDouble;
    heightReference?: IHeightReference;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    numberOfVerticalLines?: IInteger;
    slices?: IInteger;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
}

interface Ellipse {
    shows?: IBoolean;
    semiMajorAxis?: IDouble;
    semiMinorAxis?: IDouble;
    height?: IDouble;
    heightReference?: IHeightReference;
    extrudedHeight?: IDouble;
    extrudedHeightReference?: IHeightReference;
    rotation?: IDouble;
    stRotation?: IDouble;
    granularity?: IDouble;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    numberOfVerticalLines?: IInteger;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    classificationType?: IClassificationType;
    zIndex?: IInteger;
}

interface Ellipsoid {
    show?: IBoolean;
    radii?: IEllipsoidRadii;
    innerRadii?: IEllipsoidRadii;
    minimumClock?: IDouble;
    maximumClock?: IDouble;
    minimumCone?: IDouble;
    maximumCone?: IDouble;
    heightReference?: IHeightReference;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    stackPartitions?: IInteger;
    slicePartitions?: IInteger;
    subdivisions?: IInteger;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
}

interface Label {
    shows?: IBoolean;
    text?: IString;
    font?: IFont;
    style?: ILabelStyle;
    scale?: IDouble;
    showBackground?: IBoolean;
    backgroundColor?: IColor;
    backgroundPadding?: IBackgroundPadding;
    pixelOffset?: IPixelOffset;
    eyeOffset?: IEyeOffset;
    horizontalOrigin?: IHorizontalOrigin;
    verticalOrigin?: IVerticalOrigin;
    heightReference?: IHeightReference;
    fillColor?: IColor;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    translucencyByDistance?: INearFarScalar;
    pixelOffsetScaleByDistance?: INearFarScalar;
    scsaleByDistance?: INearFarScalar;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    disableDepthTestDistance?: IDouble;
}

interface Model {
    show?: IBoolean;
    gltf?: IUri;
    scale?: IDouble;
    minimumPixelSize?: IDouble;
    maximumScale?: IDouble;
    incrementallyLoadTextures?: IBoolean;
    runAnimations?: IBoolean;
    shadows?: IShadowMode;
    heightReference?: IHeightReference;
    silhouetteColor?: IColor;
    silhouetteSize?: IDouble;
    color?: IColor;
    colorBlendMode?: IColorBlendMode;
    colorBlendAmount?: IDouble;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    nodeTranforms?: INodeTransformations;
    articulations?: IArticulations;
}

interface Path {
    show?: IBoolean;
    leadTime?: IDouble;
    trailTime?: IDouble;
    width?: IDouble;
    resolution?: IDouble;
    material?: IPolylineMaterial;
    distanceDisplayCondition?: IDistanceDisplayCondition;
}

interface Point {
    show?: IBoolean;
    pixelSize?: IDouble;
    heightReference?: IHeightReference;
    color?: IColor;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    scaleByDistance?: INearFarScalar;
    translucencyByDistance?: INearFarScalar;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    disableDepthTestDistance?: IDouble;
}

interface Polygon {
    show?: IBoolean;
    positions?: IPositionList;
    holes?: IPositionListOfLists;
    arcType?: IArcType;
    height?: IDouble;
    heightReference?: IHeightReference;
    extrudedHeight?: IDouble;
    extrudedHeightReference?: IHeightReference;
    stRotation?: IDouble;
    granularity?: IDouble;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    perPositionHeight?: IBoolean;
    closeTop?: IBoolean;
    closeBottom?: IBoolean;
    shadows?: IShadowMode;
    distanecDisplayCondition?: IDistanceDisplayCondition;
    classificationType?: IClassificationType;
    zIndex?: IInteger;
}

interface Polyline {
    show?: IBoolean;
    positions?: IPositionList;
    arcType?: IArcType;
    width?: IDouble;
    granularity?: IDouble;
    material?: IPolylineMaterial;
    followSurface?: IBoolean;
    shadows?: IShadowMode;
    depthFailMaterial?: IPolylineMaterial;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    clampToGround?: IBoolean;
    classificationType?: IClassificationType;
    zIndex?: IInteger;
}

interface PolylineVolume {
    show?: IBoolean;
    positions?: IPositionList;
    shape?: IShape;
    cornerType?: ICornerType;
    granularity?: IDouble;
    fill?: IBoolean;
    material?: IPolylineMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
}

interface Rectangle {
    shows?: IBoolean;
    coordinates?: IRectangleCoordinates;
    height?: IDouble;
    heightReference?: IHeightReference;
    extrudedHeight?: IDouble;
    extrudedHeightReference?: IHeightReference;
    rotation?: IDouble;
    stRotation?: IDouble;
    granularity?: IDouble;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
    classificationType?: IClassificationType;
    zIndex?: IInteger;
}

interface Wall {
    show?: IBoolean;
    positions?: IPositionList;
    minimumHeights?: IDoubleList;
    maximumHeights?: IDoubleList;
    granularity?: IDouble;
    fill?: IBoolean;
    material?: IMaterial;
    outline?: IBoolean;
    outlineColor?: IColor;
    outlineWidth?: IDouble;
    shadows?: IShadowMode;
    distanceDisplayCondition?: IDistanceDisplayCondition;
}

interface Tileset {
    show?: IBoolean;
    uri?: IUri;
    maximumScreenSpaceErorr?: IDouble;
}

export interface Packet {
    id?: string;
    delete?: boolean;
    parent?: string;
    name?: string;
    description?: IString;
    clock?: Clock;
    version?: string;
    availability?: TimeIntervalCollection;
    properties?: CustomProperties;
    position?: IPosition;
    orientation?: Orientation;
    viewFrom?: ViewFrom;
    billboard?: Billboard;
    box?: Box;
    corridor?: Corridor;
    cylinder?: Cylinder;
    ellipse?: Ellipse;
    ellipsoid?: Ellipsoid;
    label?: Label;
    model?: Model;
    path?: Path;
    point?: Point;
    polygon?: Polygon;
    polyline?: Polyline;
    polylineVolume?: PolylineVolume;
    rectangle?: Rectangle;
    tileset?: Tileset;
    wall?: Wall;
}

export interface CzmlDocument {
    id: "document";
    version: "1.0,";
}
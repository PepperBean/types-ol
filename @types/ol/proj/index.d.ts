declare module 'ol/proj' {

  import { Coordinate } from 'ol/coordinate';
  import { Extent } from 'ol/extent';
  import Projection from 'ol/proj/Projection';
  import Units from 'ol/proj/Units';

  export function addCommon(): void;

  export function addCoordinateTransforms(source: ProjectionLike, destination: ProjectionLike, forward: ((param0: Coordinate) => Coordinate), inverse: ((param0: Coordinate) => Coordinate)): void;

  export function addEquivalentProjections(projections: Projection[]): void;

  export function addEquivalentTransforms(projections1: Projection[], projections2: Projection[], forwardTransform: TransformFunction, inverseTransform: TransformFunction): void;

  export function addProjection(projection: Projection): void;

  export function addProjections(projections: Projection[]): void;

  export function clearAllProjections(): void;

  export function cloneTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];

  export function createProjection(projection: Projection | string, defaultCode: string): Projection;

  export function createTransformFromCoordinateTransform(coordTransform: ((param0: Coordinate) => Coordinate)): TransformFunction;

  export function equivalent(projection1: Projection, projection2: Projection): boolean;

  export function fromLonLat(coordinate: Coordinate, opt_projection?: ProjectionLike): Coordinate;

  export function get(projectionLike: ProjectionLike): Projection;

  export function getPointResolution(projection: ProjectionLike, resolution: number, point: Coordinate, opt_units?: Units): number;

  export function getTransform(source: ProjectionLike, destination: ProjectionLike): TransformFunction;

  export function getTransformFromProjections(sourceProjection: Projection, destinationProjection: Projection): TransformFunction;

  export function identityTransform(input: number[], opt_output?: number[], opt_dimension?: number): number[];

  export function toLonLat(coordinate: Coordinate, opt_projection?: ProjectionLike): Coordinate;

  export function transform(coordinate: Coordinate, source: ProjectionLike, destination: ProjectionLike): Coordinate;

  export function transformExtent(extent: Extent, source: ProjectionLike, destination: ProjectionLike): Extent;

  export function transformWithProjections(point: Coordinate, sourceProjection: Projection, destinationProjection: Projection): Coordinate;

  export type ProjectionLike = Projection | string;

  export type TransformFunction = ((param0: number[], param1: number[], param2: number) => number[]);

}

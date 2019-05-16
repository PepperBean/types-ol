import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import BaseObject, { ObjectEvent } from '../Object';
import { TransformFunction, ProjectionLike } from '../proj';
import GeometryType from './GeometryType';

export default class Geometry extends BaseObject {
    constructor();
    protected simplifiedGeometryCache: { [key: string]: Geometry };
    protected simplifiedGeometryMaxMinSquaredTolerance: number;
    protected simplifiedGeometryRevision: number;
    protected computeExtent(extent: Extent): Extent;
    intersectsCoordinate(coordinate: Coordinate): boolean;
    getClosestPoint(point: Coordinate, opt_closestPoint?: Coordinate): Coordinate;
    getExtent(opt_extent?: Extent): Extent;
    getSimplifiedGeometry(squaredTolerance: number): Geometry;
    getType(): GeometryType;
    clone(): Geometry;
    intersectsExtent(extent: Extent): boolean;
    rotate(angle: number, anchor: Coordinate): void;
    scale(sx: number, opt_sy?: number, opt_anchor?: Coordinate): void;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    applyTransform(transformFn: TransformFunction): void;
    containsXY(x: number, y: number): boolean;
    simplify(tolerance: number): Geometry;
    transform(source: ProjectionLike, destination: ProjectionLike): Geometry;
    translate(deltaX: number, deltaY: number): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
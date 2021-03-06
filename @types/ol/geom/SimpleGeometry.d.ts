import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import { Transform } from '../transform';
import Geometry from './Geometry';
import GeometryLayout from './GeometryLayout';

export function getStrideForLayout(layout: GeometryLayout): number;
export function transformGeom2D(simpleGeometry: SimpleGeometry, transform: Transform, opt_dest?: number[]): number[];
export default class SimpleGeometry extends Geometry {
    constructor();
    protected flatCoordinates: number[];
    protected stride: number;
    protected layout: GeometryLayout;
    protected setLayout(layout: GeometryLayout, coordinates: any[], nesting: number): void;
    protected getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    getFlatCoordinates(): number[];
    getLastCoordinate(): Coordinate;
    getLayout(): GeometryLayout;
    getCoordinates(): any[];
    getStride(): number;
    getFirstCoordinate(): Coordinate;
    setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    setFlatCoordinates(layout: GeometryLayout, flatCoordinates: number[]): void;
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

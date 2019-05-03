declare module 'ol/format/GeoJSON' {

  import {
    Feature,
    FeatureCollection,
    Geometry,
    GeometryCollection,
    LineString,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Point,
    Polygon
  } from 'geojson';
  import { ReadOptions, WriteOptions } from 'ol/format/Feature';
  import JSONFeature from 'ol/format/JSONFeature';
  import Geometry_1 from 'ol/geom/Geometry';
  import GeometryCollection_1 from 'ol/geom/GeometryCollection';
  import LineString_1 from 'ol/geom/LineString';
  import MultiLineString_1 from 'ol/geom/MultiLineString';
  import MultiPoint_1 from 'ol/geom/MultiPoint';
  import MultiPolygon_1 from 'ol/geom/MultiPolygon';
  import Point_1 from 'ol/geom/Point';
  import Polygon_1 from 'ol/geom/Polygon';
  import { ProjectionLike } from 'ol/proj';

  export default class GeoJSON extends JSONFeature {
    constructor(opt_options?: Options);
  }

  export type GeoJSONFeature = Feature;

  export type GeoJSONFeatureCollection = FeatureCollection;

  export type GeoJSONGeometry = Geometry;

  export type GeoJSONGeometryCollection = GeometryCollection;

  export type GeoJSONLineString = LineString;

  export type GeoJSONMultiLineString = MultiLineString;

  export type GeoJSONMultiPoint = MultiPoint;

  export type GeoJSONMultiPolygon = MultiPolygon;

  export type GeoJSONObject = GeoJSON;

  export type GeoJSONPoint = Point;

  export type GeoJSONPolygon = Polygon;

  export interface Options {
    dataProjection?: ProjectionLike;
    featureProjection?: ProjectionLike;
    geometryName?: string;
    extractGeometryName?: boolean;
  }

}

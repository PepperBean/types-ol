import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';

export default class XMLFeature extends FeatureFormat {
    constructor();
    protected readGeometryFromNode(node: Node, opt_options?: ReadOptions): Geometry;
    protected readFeaturesFromDocument(doc: Document, opt_options?: ReadOptions): Feature[];
    protected readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature[];
    protected readGeometryFromDocument(doc: Document, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromDocument(doc: Document): Projection;
    protected readProjectionFromNode(node: Node): Projection;
    protected writeFeatureNode(feature: Feature, opt_options?: WriteOptions): Node;
    readFeatureFromDocument(doc: Document, opt_options?: ReadOptions): Feature;
    readProjection(source: Document | Node | object | string): Projection;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatureFromNode(node: Node, opt_options?: ReadOptions): Feature;
    readFeatures(source: Document | Node | object | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | object | string, opt_options?: ReadOptions): FeatureLike[];
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeaturesNode(features: Feature[], opt_options?: WriteOptions): Node;
    writeGeometryNode(geometry: Geometry, opt_options?: WriteOptions): Node;
}

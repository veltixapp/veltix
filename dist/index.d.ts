import { Context } from 'react';
import { default as default_2 } from 'react';
import { default as default_3 } from '@scena/react-guides';
import { default as default_4 } from 'react-infinite-viewer';
import { default as default_5 } from 'react-selecto';
import { default as default_6 } from 'react-moveable';
import { default as default_7 } from '../../provider';
import { Frame } from 'scenejs';
import { NameType } from 'scenejs';
import { OnBeforeRenderGroupStart } from 'react-moveable/declaration/types';
import { OnBeforeRenderStart } from 'react-moveable/declaration/types';
import { OnClip } from 'react-moveable/declaration/types';
import { OnDrag } from 'react-moveable/declaration/types';
import { OnDragGroup } from 'react-moveable/declaration/types';
import { OnDragGroupStart } from 'react-moveable/declaration/types';
import { OnDragOrigin } from 'react-moveable/declaration/types';
import { OnDragOriginStart } from 'react-moveable/declaration/types';
import { OnDragStart } from 'react-moveable/declaration/types';
import { OnRender } from 'react-moveable/declaration/types';
import { OnResize } from 'react-moveable/declaration/types';
import { OnResizeGroup } from 'react-moveable/declaration/types';
import { OnResizeGroupStart } from 'react-moveable/declaration/types';
import { OnResizeStart } from 'react-moveable/declaration/types';
import { OnRotate } from 'react-moveable/declaration/types';
import { OnRotateGroup } from 'react-moveable/declaration/types';
import { OnRotateGroupStart } from 'react-moveable/declaration/types';
import { OnRotateStart } from 'react-moveable/declaration/types';
import { OnRound } from 'react-moveable/declaration/types';
import { OnScale } from 'react-moveable/declaration/types';
import { OnScaleGroup } from 'react-moveable/declaration/types';
import { OnScaleGroupStart } from 'react-moveable/declaration/types';
import { OnScaleStart } from 'react-moveable/declaration/types';
import { OnWarp } from 'react-moveable/declaration/types';
import { OnWarpStart } from 'react-moveable/declaration/types';
import * as React_2 from 'react';
import { StoreApi } from 'zustand';
import { UseBoundStore } from 'zustand';
import { VeltixApi as VeltixApi_2 } from '../../..';
import { VeltixApi as VeltixApi_3 } from '..';

export declare enum ConnectionStatus {
    CONNECTED = "CONNECTED",
    DISCONNECTED = "DISCONNECTED",
    FAILED = "FAILED",
    TESTING = "TESTING"
}

declare interface Contributes {
    viewsContainers?: {
        titlebar?: ViewContainerContribution[];
        sidebar?: ViewContainerContribution[];
        footer?: ViewContainerContribution[];
    };
}

export declare interface Dataset {
    id?: string;
    name: string;
    query?: string;
    fields?: Record<string, any>[];
    transform?: Record<string, any>;
    previewData?: Record<string, any>;
    status?: DatasetStatus;
    lastUpdated?: string;
    createdAt?: string;
    updatedAt?: string;
    dataSourceId: string;
    config?: Record<string, any>;
}

export declare enum DatasetStatus {
    READY = "READY",
    ERROR = "ERROR",
    PENDING = "PENDING"
}

export declare interface DataSource {
    id?: string;
    name: string;
    type: DataSourceType;
    status?: ConnectionStatus;
    config: Record<string, any>;
    createdAt?: string;
    updatedAt?: string;
    lastChecked?: string;
}

export declare enum DataSourceType {
    MySQL = "MySQL",
    PostgreSQL = "PostgreSQL",
    MongoDB = "MongoDB",
    REST_API = "REST_API",
    GRAPHQL = "GRAPHQL",
    WEBSOCKET = "WEBSOCKET",
    CUSTOM = "CUSTOM"
}

declare class Editor extends React_2.PureComponent<VeltixProps, Partial<ScenaEditorState>> {
    static defaultProps: {
        width: number;
        height: number;
    };
    state: ScenaEditorState;
    get config(): {
        doc: {
            width: number;
            height: number;
        };
    };
    memory: Memory;
    moveableData: MoveableData;
    horizontalGuides: React_2.RefObject<default_3 | null>;
    verticalGuides: React_2.RefObject<default_3 | null>;
    infiniteViewer: React_2.RefObject<default_4 | null>;
    selecto: React_2.RefObject<default_5 | null>;
    moveableManager: React_2.RefObject<MoveableManager | null>;
    registry: Registry<Veltix_2.NodeManifest>;
    api: VeltixApi_3 | undefined;
    constructor(props: VeltixProps);
    get width(): number;
    get height(): number;
    get selectedTargets(): HTMLElement[];
    render(): React_2.JSX.Element;
    remove(targets: HTMLElement[]): void;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    promiseState(state: Partial<ScenaEditorState>): Promise<void>;
    getSelecto: () => default_5;
    getMoveable: () => default_6<    {}>;
    getSelectedTargets: () => HTMLElement[];
    getSelectedFrames: () => Frame[];
    setSelectedTargets(targets: Array<HTMLElement | SVGElement>): Promise<(HTMLElement | SVGElement)[]>;
    private checkBlur;
}

export declare type ElementInfo = any;

declare class Memory {
    map: Map<any, any>;
    get(key: any): any;
    set(key: any, value: any): Map<any, any>;
    clear(): void;
}

declare class MoveableData extends MoveableHelper {
    private memory;
    selectedTargets: Array<HTMLElement | SVGElement>;
    constructor(memory: Memory);
    setSelectedTargets(targets: Array<HTMLElement | SVGElement>): void;
    getSelectedTargets(): (HTMLElement | SVGElement)[];
    getSelectedFrames(): Frame[];
    renderFrames(): void;
    setOrders(scope: string[], orders: NameType[]): {
        id: string;
        prev: any;
        prevOrders: Record<string, (string | number)[]> | undefined;
        next: any;
        nextOrders: Record<string, (string | number)[]> | undefined;
    }[];
    setProperty(names: string[], value: any): {
        id: string;
        prev: any;
        prevOrders: Record<string, (string | number)[]> | undefined;
        next: any;
        nextOrders: Record<string, (string | number)[]> | undefined;
    }[];
    removeProperties(...names: string[]): {
        id: string;
        prev: any;
        prevOrders: Record<string, (string | number)[]> | undefined;
        next: any;
        nextOrders: Record<string, (string | number)[]> | undefined;
    }[];
    getProperties(properties: string[][], defaultValues: any[]): any[];
    private setValue;
}

declare class MoveableHelper {
    static create(options: Partial<MoveableHelperOptions>): MoveableHelper;
    options: Partial<MoveableHelperOptions>;
    constructor(options?: Partial<MoveableHelperOptions>);
    map: Map<HTMLElement | SVGElement, Frame>;
    render(target: HTMLElement | SVGElement, frame?: Frame): void;
    clear(): void;
    getTargets(): MapIterator<HTMLElement | SVGElement>;
    getFrames(): MapIterator<Frame>;
    getFrame(el: HTMLElement | SVGElement): Frame | undefined;
    setFrame(el: HTMLElement | SVGElement, frame: Frame): Map<HTMLElement | SVGElement, Frame>;
    removeFrame(el: HTMLElement | SVGElement): void;
    createFrame(el: HTMLElement, properites?: {}): Frame;
    setElements(selector: {
        [key: number]: HTMLElement;
        length: number;
    } | string): void;
    onBeforeRenderStart: (e: OnBeforeRenderStart) => void;
    onBeforeRenderGroupStart: (e: OnBeforeRenderGroupStart) => void;
    onDragStart: (e: OnDragStart) => false | undefined;
    onDrag: (e: OnDrag) => void;
    onDragGroupStart: (e: OnDragGroupStart) => void;
    onDragGroup: (e: OnDragGroup) => void;
    onResizeStart: (e: OnResizeStart) => void;
    onResize: (e: OnResize) => void;
    onResizeGroupStart: (e: OnResizeGroupStart) => void;
    onResizeGroup: (e: OnResizeGroup) => void;
    onScaleStart: (e: OnScaleStart) => false | undefined;
    onScale: (e: OnScale) => void;
    onScaleGroupStart: (e: OnScaleGroupStart) => void;
    onScaleGroup: (e: OnScaleGroup) => void;
    onRotateStart: (e: OnRotateStart) => false | undefined;
    onRotate: (e: OnRotate) => void;
    onRotateGroupStart: (e: OnRotateGroupStart) => void;
    onRotateGroup: (e: OnRotateGroup) => void;
    onClip: (e: OnClip) => void;
    onDragOriginStart: (e: OnDragOriginStart) => void;
    onDragOrigin: (e: OnDragOrigin) => void;
    onRound: (e: OnRound) => void;
    onWarpStart: (e: OnWarpStart) => false | undefined;
    onWarp: (e: OnWarp) => void;
    onRender: (e: OnRender) => void;
    private testFrame;
    private testDrag;
    private testResize;
    private testScale;
    private testRotate;
    private testRender;
    private setTranasform;
}

declare interface MoveableHelperOptions {
    useBeforeRender: boolean;
    useRender: boolean;
    createAuto: boolean;
}

declare class MoveableManager extends React_2.PureComponent<{
    selectedTargets: Array<HTMLElement | SVGElement>;
    verticalGuidelines: number[];
    horizontalGuidelines: number[];
    zoom: number;
}> {
    moveable: React_2.RefObject<default_6<{}> | null>;
    getMoveable(): default_6<{}>;
    static contextType: React_2.Context<default_7 & {
        width: number;
        height: number;
        api?: VeltixApi_2;
    }>;
    context: React_2.ContextType<typeof VeltixContext>;
    private get moveableData();
    private get memory();
    private get getSelecto();
    render(): React_2.JSX.Element;
    renderViewportMoveable(): React_2.JSX.Element;
    componentDidMount(): void;
    updateRect(): void;
}

declare class Registry<T extends { type: string }> {
    private components: Map<string, T>;

    constructor(components: T[] = []) {
        this.components = new Map(components.map((component) => [component.type, component]));
    }

    /**
     * Register a component with the given name
     * @param name - Unique identifier for the component
     * @param component - Component to register
     */
    register(name: string, component: T): void {
        if (this.components.has(name)) {
            throw new Error(`Component "${name}" is already registered`);
        }
        this.components.set(name, component);
    }

    /**
     * Get a registered component by name
     * @param name - Name of the component to retrieve
     * @returns The registered component or undefined if not found
     */
    get(name: string): T | undefined {
        return this.components.get(name);
    }

    /**
     * Check if a component is registered
     * @param name - Name of the component to check
     */
    has(name: string): boolean {
        return this.components.has(name);
    }

    /**
     * Remove a registered component
     * @param name - Name of the component to remove
     */
    unregister(name: string): void {
        if (!this.components.has(name)) {
            throw new Error(`Component "${name}" is not registered`);
        }
        this.components.delete(name);
    }

    /**
     * Get all registered component names
     */
    getRegisteredNames(): string[] {
        return Array.from(this.components.keys());
    }

    /**
     * Clear all registered components
     */
    clear(): void {
        this.components.clear();
    }

    /**
     * Get all registered components
     */
    all(): T[] {
        return Array.from(this.components.values());
    }
}

export declare type ScenaEditorState = {
    selectedTargets: HTMLElement[];
};

declare const enum TitlebarAlignment {
    LEFT = 0,
    RIGHT = 1
}

/**
 * 创建 Veltix Store
 * 集成了 canvasStore、editorStore 和 projectStore 的功能
 */
export declare const useVeltixStore: UseBoundStore<StoreApi<VeltixStoreState>>;

export declare const Veltix: typeof Editor;

declare namespace Veltix_2 {
    interface Project {
        id: string
        title: string
        description?: string
        width: number
        height: number
        theme: ThemeConfig
        docs: Doc[] // 添加页面层级
        dataSources: DataSource[]
        createdAt: string
        updatedAt: string
        ownerId: string
        status?: string
        thumbnail?: string
        collaborators?: any[]
    }

    interface Doc {
        id: string
        title: string
        width?: number
        height?: number
        description?: string
        isHome?: boolean
        nodes: Node[]
    }

    interface ThemeConfig {
        mode: 'light' | 'dark'
        primaryColor: string
        backgroundColor: string
        fontFamily?: string
    }

    type ComponentType = 'text' | 'image' | 'kpi' | 'line' | 'bar' | 'pie' | 'table' | 'map' | string

    interface Node {
        id: string
        type: ComponentType
        children?: Node[]
        icon?: string
        title?: string
        position: NodePosition
        dataConfig?: DataBinding
        styleConfig?: StyleConfig
        interaction?: InteractionConfig
    }

    interface NodePosition {
        top: number // px
        left: number // px
        width: number // px
        height: number // px
        zIndex?: number
        rotation?: number
        locked?: boolean
        visible?: boolean
    }

    interface DataBinding {
        /**
         * 数据源 ID（必须）
         */
        sourceId: string

        /**
         * 可选：数据集 ID（如果绑定了已有数据集）
         */
        datasetId?: string

        /**
         * 绑定模式：静态 / 轮询 / WebSocket
         */
        mode: 'static' | 'polling' | 'websocket'

        /**
         * 如果是轮询模式，刷新间隔（ms）
         */
        refreshInterval?: number

        /**
         * 如果是 WebSocket 模式，绑定事件名
         */
        socketEvent?: string

        /**
         * 可选：自定义查询配置（当未使用 datasetId 时）
         */
        query?: QueryConfig

        /**
         * 可选：字段映射（可用于覆盖或补充 dataset 中的定义）
         */
        fieldMapping?: FieldMapping
    }

    interface QueryConfig {
        /**
         * 查询类型：SQL（结构化）、REST、Socket 等
         */
        type: 'rest' | 'sql' | 'socket'

        /**
         * 查询语句或 URL（取决于类型）
         */
        queryString: string

        /**
         * 可选：字段映射（如 API 响应结构复杂）
         */
        fieldMapping?: FieldMapping
    }

    interface FieldMapping {
        /**
         * x 轴字段映射
         */
        xField?: FieldMappingObject

        /**
         * y 轴字段映射
         */
        yField?: FieldMappingObject

        /**
         * 多系列图的分组字段
         */
        seriesField?: FieldMappingObject

        /**
         * 用于显示数值的字段（如标签图、统计卡片）
         */
        valueField?: FieldMappingObject

        /**
         * 标签字段
         */
        labelField?: FieldMappingObject

        /**
         * 额外映射项（如 tooltip、颜色、图片等）
         */
        [key: string]: FieldMappingObject | undefined
    }

    interface FieldMappingObject {
        /**
         * 原始字段名
         */
        sourceField: string

        /**
         * 可选的字段数据处理规则
         */
        dataProcessing?: FieldDataProcessing
    }

    interface FieldDataProcessing {
        /**
         * 内置处理类型（如：log、scale、normalize）
         */
        type?: 'log' | 'scale' | 'normalize' | 'round' | 'custom'

        /**
         * 可选参数（如缩放因子）
         */
        params?: Record<string, any>

        /**
         * 自定义 JS 处理函数（注意安全性）
         * e.g. "return Math.round(value * 100) / 100"
         */
        script?: string
    }

    type StyleConfig = Record<string, any>

    interface InteractionConfig {
        onClick?: {
            targetWidgetIds: string[]
            action: 'filter' | 'highlight'
            filterField: string
        }
    }

    interface DataSource {
        id: string
        name: string
        type: 'api' | 'csv' | 'postgres' | 'googleSheet' | 'MySQL' | string
        config: Record<string, any>
        createdAt?: string
    }

    // 图表信息接口，包含main字段用于渲染
    interface NodeManifest {
        type: string
        title: string
        description: string
        icon: string
        // main字段存储渲染函数，类似package.json
        main: React.FC<{ widget: Veltix_2.Node; data?: any }>
        // 数据配置界面定义
        dataConfigSchema?: DataConfigSchema
        styleConfigSchema?: StyleConfigSchema

        strategy?: {
            transform?(dataConfig: Veltix_2.DataBinding | undefined, chartData: Record<string, any>[]): any
        }

        /**
         * 默认属性
         */
        defaultProps?: Partial<Node>
    }

    // 数据配置界面定义
    interface DataConfigSchema {
        // 字段映射配置
        fieldMapping: FieldMappingConfig[]
        // 数据源配置
        dataSource?: DataSourceConfig
        // 数据处理配置
        dataProcessing?: DataProcessingConfig
        // 实时更新配置
        realTime?: RealTimeConfig
    }

    // 字段映射配置
    interface FieldMappingConfig {
        key: string // 对应FieldMapping中的字段
        label: string // 显示标签
        type: 'text' | 'select' | 'number' | 'textarea'
        required?: boolean
        placeholder?: string
        description?: string
        options?: { label: string; value: string }[] // 用于select类型
        defaultValue?: any
        // 数据处理配置
        dataProcessing?: FieldDataProcessing
    }

    // 字段数据处理配置
    interface FieldDataProcessing {
        // 数据类型
        dataType?: 'string' | 'number' | 'date' | 'datetime' | 'boolean' | 'currency' | 'percentage'
        // 格式化配置
        format?: {
            // 日期时间格式
            dateFormat?: string // 如 'YYYY-MM-DD', 'MM/DD/YYYY'
            timeFormat?: string // 如 'HH:mm:ss', 'HH:mm'
            // 数字格式
            numberFormat?: {
                decimals?: number // 小数位数
                thousandsSeparator?: boolean // 千分位分隔符
                currency?: string // 货币符号
            }
            // 字符串格式
            stringFormat?: {
                maxLength?: number // 最大长度
                case?: 'lower' | 'upper' | 'title' // 大小写
                trim?: boolean // 去除空格
            }
            // 自定义格式化函数
            customFormat?: string // 函数名或表达式
        }
        // 验证规则
        validation?: {
            min?: number | string
            max?: number | string
            pattern?: string // 正则表达式
            required?: boolean
        }
        // 转换规则
        transform?: {
            // 数据转换
            type?: 'uppercase' | 'lowercase' | 'capitalize' | 'trim' | 'round' | 'floor' | 'ceil'
            // 自定义转换函数
            customTransform?: string // 函数名或表达式
        }
    }

    // 数据源配置
    interface DataSourceConfig {
        showApiEndpoint?: boolean
        showApiKey?: boolean
        showAuthentication?: boolean
        authenticationTypes?: string[]
    }

    // 数据处理配置
    interface DataProcessingConfig {
        showFilter?: boolean
        showSort?: boolean
        showLimit?: boolean
        showPagination?: boolean
    }

    // 实时更新配置
    interface RealTimeConfig {
        showAutoRefresh?: boolean
        showWebSocket?: boolean
        showCache?: boolean
    }
    interface StyleConfigSchema {
        sections: ComponentConfigItem[]
    }

    interface ComponentConfigItem {
        title: string
        type: 'axis' | 'legend' | 'tooltip' | 'series' | 'label' | 'custom' | string
        visible?: boolean
        settings: ConfigFormItem[]
    }

    interface ConfigFormItemBase {
        label: string
        name: string
        default?: any
    }

    interface InputFormItem extends ConfigFormItemBase {
        type: 'input'
    }

    interface SwitchFormItem extends ConfigFormItemBase {
        type: 'switch'
    }

    interface NumberFormItem extends ConfigFormItemBase {
        type: 'number'
        min?: number
        max?: number
        step?: number
    }

    interface ColorFormItem extends ConfigFormItemBase {
        type: 'color'
    }

    interface SelectFormItem extends ConfigFormItemBase {
        type: 'select'
        options: { label: string; value: string }[]
    }

    type ConfigFormItem = SwitchFormItem | NumberFormItem | ColorFormItem | SelectFormItem | InputFormItem
}

export declare interface VeltixApi {
    updateProject: (projectId: string, updates: Partial<Veltix_2.Project>) => Promise<Partial<Veltix_2.Project>>;
    getAllDataSources: () => Promise<DataSource[]>;
    createDataSource: (dataSource: Omit<DataSource, 'id' | 'createdAt' | 'updatedAt' | 'lastChecked'>) => Promise<DataSource>;
    updateDataSource: (id: string, updates: Partial<DataSource>) => Promise<DataSource>;
    deleteDataSource: (id: string) => Promise<void>;
    testDataSourceConnection: (dataSource: DataSource) => Promise<{
        status: ConnectionStatus;
        message: string;
    }>;
    getDatasetsByDataSource: (dataSourceId: string) => Promise<Dataset[]>;
    createDataset: (dataset: Omit<Dataset, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Dataset>;
    updateDataset: (id: string, updates: Partial<Dataset>) => Promise<Dataset>;
    deleteDataset: (id: string) => Promise<void>;
}

declare interface VeltixConfig {
    doc?: {
        width: number;
        height: number;
    };
}

declare const VeltixContext: Context<Editor & {
width: number;
height: number;
api?: VeltixApi;
}>;

export declare interface VeltixProps {
    width: number;
    height: number;
    data?: Veltix_2.Project;
    components?: Veltix_2.NodeManifest[];
    contributes?: Contributes;
    api?: VeltixApi;
    config?: VeltixConfig;
}

export declare const veltixStore: {};

/**
 * Veltix Store 类型定义
 * 作为 SDK 暴露给外部组件使用
 */
declare type VeltixStoreState = {
    version: string;
    registerViewContainer: (view: ViewContribution, location: 'titlebar' | 'sidebar') => void;
};

declare interface ViewContainerContribution {
    id: string;
    title: string;
    viewContainer: default_2.ComponentType<any>;
    order?: number;
    when?: string;
    alignment?: TitlebarAlignment;
}

declare type ViewContribution = {
    id: string;
    title: string;
    order?: number;
    icon?: default_2.ReactNode | default_2.ComponentType;
    render: () => default_2.ReactNode;
};

export { }

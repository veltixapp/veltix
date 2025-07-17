import { default as default_2 } from 'react';
import { EventSchema as EventSchema_2 } from '../../../../types/event';
import { FC } from 'react';
import { JSX } from 'react';
import { PersistOptions } from 'zustand/middleware';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { StoreApi } from 'zustand';
import { UseBoundStore } from 'zustand';
import { VeltixProps as VeltixProps_2 } from './types';

export declare const AdvancedSettings: ({ settings, onSettingsChange }: AdvancedSettingsProps) => JSX.Element;

declare interface AdvancedSettingsProps {
    settings?: {
        preventDefault: boolean;
        stopPropagation: boolean;
        debugMode: boolean;
    };
    onSettingsChange?: (settings: {
        preventDefault: boolean;
        stopPropagation: boolean;
        debugMode: boolean;
    }) => void;
}

declare interface BaseNode<N = {}> {
    id: string
    type: string
    children?: BaseNode<N>[]
    icon?: string
    title?: string
    position: NodePosition
    props: NodeProps & N
}

declare interface ColorArrayFormItem extends ConfigFormItemBase {
    type: 'colorArray'
}

declare interface ColorFormItem extends ConfigFormItemBase {
    type: 'color'
}

declare interface ComponentConfigItem {
    title: string
    type: 'axis' | 'legend' | 'tooltip' | 'series' | 'label' | 'custom' | string
    visible?: boolean
    settings: ConfigFormItem[]
}

export declare type Components = Veltix_2.Manifest[] | {
    id: string;
    title: string;
    icon: ViewContribution['icon'];
    components: Veltix_2.Manifest[];
}[];

declare type ConfigFormItem = SwitchFormItem | NumberFormItem | ColorFormItem | ColorArrayFormItem | SelectFormItem | InputFormItem

declare interface ConfigFormItemBase {
    label?: string
    name: string
    default?: any
    placeholder?: string
}

export declare interface ConfiguredEvent {
    id: string;
    triggerType: string;
    actionType: string;
    actionName: string;
    values: Record<string, any>;
    enabled: boolean;
}

declare enum ConnectionStatus {
    CONNECTED = 'CONNECTED',
    DISCONNECTED = 'DISCONNECTED',
    FAILED = 'FAILED',
    TESTING = 'TESTING'
}

declare interface Contributes {
    viewsContainers?: {
        titlebar?: TitlebarViewContainerContribution[];
        sidebar?: SidebarViewContainerContribution[];
    };
}

/**
 * Create a minimal click-only schema
 */
export declare function createClickOnlySchema(customActions?: Record<string, Veltix_2.Event.EventAction>): EventSchema_2;

/**
 * Factory function to create event schemas with common configurations
 */
export declare function createEventSchema(options?: {
    triggers?: string[];
    customActions?: Record<string, Veltix_2.Event.EventAction>;
    excludeActions?: string[];
}): Veltix_2.Event.EventSchema;

/**
 * Create a full schema with all common triggers
 */
export declare function createFullEventSchema(customActions?: Record<string, Veltix_2.Event.EventAction>): EventSchema_2;

declare interface Dataset {
    id?: string
    name: string
    query?: string
    fields?: Record<string, any>[]
    transform?: Record<string, any>
    previewData?: Record<string, any>
    status?: DatasetStatus
    lastUpdated?: string
    createdAt?: string
    updatedAt?: string
    dataSourceId: string
    config?: Record<string, any>
}

declare enum DatasetStatus {
    READY = 'READY',
    ERROR = 'ERROR',
    PENDING = 'PENDING'
}

declare interface DataSource {
    id?: string
    name: string
    type: DataSourceType
    status?: ConnectionStatus
    config: Record<string, any>
    createdAt?: string
    updatedAt?: string
    lastChecked?: string
}

declare enum DataSourceType {
    MySQL = 'MySQL',
    PostgreSQL = 'PostgreSQL',
    MongoDB = 'MongoDB',
    REST_API = 'REST_API',
    GRAPHQL = 'GRAPHQL',
    WEBSOCKET = 'WEBSOCKET',
    CUSTOM = 'CUSTOM'
}

declare interface EditorState {
    selectedNodes: string[];
    nodeContextMenu: {
        open: boolean;
        position: {
            x: number;
            y: number;
        };
        node: Veltix_2.Node | null;
    };
    activeDocId: string;
    selectNode: (nodeId: string) => void;
    setSelectedNodes: (nodeIds: string[]) => void;
    addSelectedNode: (nodeId: string) => void;
    removeSelectedNode: () => void;
    clearSelectedNodes: () => void;
    clearAllSelectedNodes: () => void;
    getSelectedNodes: () => string[];
    openNodeContextMenu: (position: {
        x: number;
        y: number;
    }, node: Veltix_2.Node | null) => void;
    closeNodeContextMenu: () => void;
    getCurrentSelection: () => {
        selectedDoc: Veltix_2.Doc;
        selectedNodes: Veltix_2.Node[];
    };
    selectAll: () => void;
    removeNode: (nodeId: string) => void;
    add: (node: Pick<Veltix_2.Node, 'type'> & Partial<Veltix_2.Node>, position?: Partial<Veltix_2.Node['position']>) => void;
}

export declare interface EventAction {
    label: string;
    type: string;
    name: string;
    fields: EventActionField[];
}

declare interface EventAction_2 {
    label: string
    type: string // emit | link | popup | ... (action type)
    name: string // identifier (may be used as key on component side)
    fields: EventActionField_2[]
}

export declare interface EventActionField {
    label: string;
    name: string;
    type: 'text' | 'select' | 'code' | 'number' | 'color' | 'switch';
    required?: boolean;
    default?: any;
    placeholder?: string;
    language?: 'json' | 'javascript' | string;
    options?: {
        label: string;
        value: any;
    }[];
    min?: number;
    max?: number;
    step?: number;
}

declare interface EventActionField_2 {
    label: string
    name: string
    type: 'text' | 'select' | 'code' | 'number' | 'color' | 'switch' // extensible
    required?: boolean
    default?: any
    placeholder?: string
    language?: 'json' | 'javascript' | string
    options?: { label: string; value: any }[]
    min?: number
    max?: number
    step?: number
}

export declare const EventCard: ({ event, currentTrigger, onUpdate, onUpdateValue, onRemove }: EventCardProps) => JSX.Element | null;

declare interface EventCardProps {
    event: ConfiguredEvent;
    currentTrigger: Veltix_2.Event.EventTrigger | undefined;
    onUpdate: (id: string, updates: Partial<ConfiguredEvent>) => void;
    onUpdateValue: (id: string, fieldName: string, value: any) => void;
    onRemove: (id: string) => void;
}

export declare const EventConfig: ({ schema, initialValue, onChange, onClick }: EventConfigProps) => JSX.Element;

declare type EventConfig_2 = any

declare type EventConfigAction = {
    type: 'SET_SELECTED_TRIGGER';
    payload: string;
} | {
    type: 'ADD_EVENT';
    payload: ConfiguredEvent;
} | {
    type: 'UPDATE_EVENT';
    payload: {
        id: string;
        updates: Partial<ConfiguredEvent>;
    };
} | {
    type: 'UPDATE_EVENT_VALUE';
    payload: {
        id: string;
        fieldName: string;
        value: any;
    };
} | {
    type: 'REMOVE_EVENT';
    payload: string;
} | {
    type: 'UPDATE_ADVANCED_SETTINGS';
    payload: {
        preventDefault: boolean;
        stopPropagation: boolean;
        debugMode: boolean;
    };
} | {
    type: 'SET_ALL';
    payload: EventConfigData;
} | {
    type: 'RESET';
};

declare interface EventConfigContextType {
    state: EventConfigData;
    dispatch: React.Dispatch<EventConfigAction>;
    setSelectedTrigger: (trigger: string) => void;
    addEvent: (event: ConfiguredEvent) => void;
    updateEvent: (id: string, updates: Partial<ConfiguredEvent>) => void;
    updateEventValue: (id: string, fieldName: string, value: any) => void;
    removeEvent: (id: string) => void;
    updateAdvancedSettings: (settings: {
        preventDefault: boolean;
        stopPropagation: boolean;
        debugMode: boolean;
    }) => void;
    reset: () => void;
}

export declare interface EventConfigData {
    selectedTrigger: string;
    configuredEvents: ConfiguredEvent[];
    advancedSettings: {
        preventDefault: boolean;
        stopPropagation: boolean;
        debugMode: boolean;
    };
}

export declare const EventConfigFooter: ({ eventData }: EventConfigFooterProps) => JSX.Element;

declare interface EventConfigFooterProps {
    eventData?: EventConfigData;
}

declare interface EventConfigProps {
    schema: Veltix_2.Event.EventSchema;
    initialValue?: Partial<{
        selectedTrigger: string;
        configuredEvents: ConfiguredEvent[];
        advancedSettings: {
            preventDefault: boolean;
            stopPropagation: boolean;
            debugMode: boolean;
        };
    }>;
    onChange?: (config: {
        selectedTrigger: string;
        configuredEvents: ConfiguredEvent[];
        advancedSettings: {
            preventDefault: boolean;
            stopPropagation: boolean;
            debugMode: boolean;
        };
    }) => void;
    onClick?: () => void;
}

export declare const EventConfigProvider: ({ children, initialValue, onChange }: EventConfigProviderProps) => JSX.Element;

declare interface EventConfigProviderProps {
    children: ReactNode;
    initialValue?: Partial<EventConfigData>;
    onChange?: (config: EventConfigData) => void;
}

export declare interface EventConfigSchema {
    triggers: EventTrigger[];
}

export declare function EventFieldRenderer({ field, value, onChange }: EventFieldRendererProps): JSX.Element;

declare interface EventFieldRendererProps {
    field: Veltix_2.Event.EventActionField;
    value: any;
    onChange: (value: any) => void;
}

export declare const EventList: ({ configuredEvents, selectedTrigger, currentTrigger, onAddEvent, onUpdateEvent, onUpdateEventValue, onRemoveEvent, }: EventListProps) => JSX.Element;

declare interface EventListProps {
    configuredEvents: ConfiguredEvent[];
    selectedTrigger: string;
    currentTrigger: Veltix_2.Event.EventTrigger | undefined;
    onAddEvent: () => void;
    onUpdateEvent: (id: string, updates: Partial<ConfiguredEvent>) => void;
    onUpdateEventValue: (id: string, fieldName: string, value: any) => void;
    onRemoveEvent: (id: string) => void;
}

declare interface EventSchema {
    triggers: EventTrigger_2[]
}

export declare interface EventTrigger {
    type: string;
    label: string;
    description?: string;
    options: EventAction[];
}

declare interface EventTrigger_2 {
    type: string // click | hover | load | ...
    label: string
    description?: string
    options: EventAction_2[]
}

/**
 * Add custom actions to existing schema
 */
export declare function extendEventSchema(schema: Veltix_2.Event.EventSchema, customActions: Record<string, Veltix_2.Event.EventAction>): Veltix_2.Event.EventSchema;

/**
 * Helper function to extend a preset schema with custom actions
 */
export declare function extendPresetSchema(presetName: keyof typeof PRESET_SCHEMAS, customActions: Record<string, Veltix_2.Event.EventAction>): Veltix_2.Event.EventSchema;

/**
 * Helper function to get a preset schema by name
 */
export declare function getPresetSchema(name: keyof typeof PRESET_SCHEMAS): Veltix_2.Event.EventSchema;

declare interface InputFormItem extends ConfigFormItemBase {
    type: 'input'
}

declare type Manifest = Veltix_2.Manifest & {
    hidden?: boolean;
};

declare interface NodePosition {
    top: number
    left: number
    width: number
    height: number
    zIndex?: number
    rotation?: number
    locked?: boolean
    visible?: boolean
}

declare type NodeProps = Record<string, any>

declare interface NumberFormItem extends ConfigFormItemBase {
    type: 'number'
    min?: number
    max?: number
    step?: number
}

export declare const PRESET_SCHEMAS: {
    CLICK_ONLY: Veltix_2.Event.EventSchema;
    INTERACTIVE: Veltix_2.Event.EventSchema;
    DATA_COMPONENT: Veltix_2.Event.EventSchema;
    FULL_FEATURED: Veltix_2.Event.EventSchema;
};

declare type ProjectStore = {
    json: Veltix_2.Project;
    initialize: (json: Veltix_2.Project) => void;
    update: (updates: Partial<Veltix_2.Project>) => void;
    addDoc: (page: Veltix_2.Doc) => void;
    removeDoc: (docId: string) => void;
    updateDoc: (docId: string, updates: Partial<Veltix_2.Doc>) => void;
    getDoc: (docId: string) => Veltix_2.Doc | undefined;
    updateNode: (docId: string, nodeId: string, updates: Partial<Veltix_2.Node>) => void;
    createNode: (docId: string, node: Veltix_2.Node) => void;
    removeNode: (docId: string, nodeId: string) => void;
    cloneNode: (docId: string, nodeId: string) => void;
    getNode: (docId: string, nodeId: string) => Veltix_2.Node | undefined;
    reorderNode: (docId: string, fromIndex: number, toIndex: number, parentPath?: number[]) => void;
    addNode: (widget: Veltix_2.Node) => void;
    createNodeByManifest: (shape: Veltix_2.Manifest) => void;
};

declare interface PropertiesSchema {
    sections: ComponentConfigItem[]
}

declare type RegistryStore = {
    initialize: (initialComponents: Components) => void;
    components: Map<string, Manifest>;
    componentGroups: Map<string, string>;
    /**
     * Register a component with the given name
     * @param name - Unique identifier for the component
     * @param component - Component to register
     */
    register: (component: Manifest) => void;
    /**
     * Get a registered component by name
     * @param name - Name of the component to retrieve
     * @returns The registered component or undefined if not found
     */
    get: (name: string) => Manifest | undefined;
    /**
     * Check if a component is registered
     * @param name - Name of the component to check
     */
    has: (name: string) => boolean;
    /**
     * Remove a registered component
     * @param name - Name of the component to remove
     */
    unregister: (name: string) => void;
    /**
     * Get all registered component names
     */
    getRegisteredNames: () => string[];
    /**
     * Clear all registered components
     */
    clear: () => void;
    /**
     * Get all registered components
     * @param excludeGroups - Optional boolean to exclude grouped components (default: false)
     */
    all: (excludeGroups?: boolean) => Manifest[];
};

declare interface SelectFormItem extends ConfigFormItemBase {
    type: 'select'
    options: { label: string; value: string }[]
}

declare interface SidebarViewContainerContribution extends ViewContainerContribution {
    alignment?: 'top' | 'bottom';
}

declare interface SwitchFormItem extends ConfigFormItemBase {
    type: 'switch'
}

declare interface TitlebarViewContainerContribution extends ViewContainerContribution {
    alignment?: 'left' | 'right';
}

export declare const TriggerSelector: ({ schema, selectedTrigger, onTriggerChange }: TriggerSelectorProps) => JSX.Element;

declare interface TriggerSelectorProps {
    schema?: Veltix_2.Event.EventSchema;
    selectedTrigger: string;
    onTriggerChange: (triggerType: string) => void;
}

declare const useEditorStore: UseBoundStore<Omit<StoreApi<EditorState>, "persist"> & {
persist: {
setOptions: (options: Partial<PersistOptions<EditorState, unknown>>) => void;
clearStorage: () => void;
rehydrate: () => Promise<void> | void;
hasHydrated: () => boolean;
onHydrate: (fn: (state: EditorState) => void) => () => void;
onFinishHydration: (fn: (state: EditorState) => void) => () => void;
getOptions: () => Partial<PersistOptions<EditorState, unknown>>;
};
}>;

export declare const useEventConfig: () => EventConfigContextType;

declare const useProjectStore: UseBoundStore<StoreApi<ProjectStore>>;

export declare const useRegistryStore: UseBoundStore<StoreApi<RegistryStore>>;

/**
 * 创建 Veltix Store
 * 集成了 canvasStore、editorStore 和 projectStore 的功能
 */
export declare const useVeltixStore: UseBoundStore<StoreApi<VeltixStoreState>>;

export declare const useViewRegistryStore: UseBoundStore<StoreApi<ViewRegistry>>;

export declare const Veltix: FC<VeltixProps_2>;

declare namespace Veltix_2 {
    interface BaseProject<D = {}, N = {}> {
        id: string
        title: string
        description?: string
        width: number
        height: number
        theme: ThemeConfig
        docs: Doc<D, N>[] // 添加页面层级
        dataSources: DataSource[]
        createdAt: string
        updatedAt: string
        ownerId: string
        status?: string
        thumbnail?: string
        collaborators?: any[]
    }

    interface BaseDoc<D = {}, N = {}> {
        id: string
        title: string
        width?: number
        height?: number
        description?: string
        isHome?: boolean
        nodes: Node<N>[]
    }

    type Project<P = {}, D = {}, N = {}> = BaseProject<D, N> & P

    interface Doc<D = {}, N = {}> extends BaseDoc<D, N> { }

    interface Node<N = {}> extends BaseNode<N> {
        dataConfig?: DataBinding
        props: Properties
        interaction?: InteractionConfig
        effectConfig?: any
        eventConfig?: EventConfig_2
    }

    interface ThemeConfig {
        mode: 'light' | 'dark'
        primaryColor: string
        backgroundColor: string
        fontFamily?: string
    }

    type ComponentType = 'text' | 'image' | 'kpi' | 'line' | 'bar' | 'pie' | 'table' | 'map' | string

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

    type Properties = Record<string, any>

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
    interface Manifest {
        type: string
        title: string
        description: string

        /**
         * catgeories for the component, used for filtering in the UI.
         */
        categories?: string[]

        /**
         * Icon for the chart/component. Can be a string (emoji, base64 SVG, etc.) or a React component.
         */
        icon: string | React_2.FC | React_2.ComponentType
        // main字段存储渲染函数，类似package.json
        main: (props: { data?: any } & Veltix_2.Node['props']) => React_2.JSX.Element
        // 数据配置界面定义
        dataConfigSchema?: DataConfigSchema
        propertiesSchema?: PropertiesSchema

        /**
         *
         */
        eventConfigSchema?: EventSchema

        strategy?: {
            transform?(dataConfig: Veltix_2.DataBinding | undefined, chartData: Record<string, any>[]): any
        }

        /**
         * 默认属性
         */
        defaultProps?: NodeProps
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

    namespace Event {
            { EventSchema, EventAction, EventActionField, EventTrigger }
    }

    namespace Properties {
        type Schema = PropertiesSchema

            { PropertiesSchema, ComponentConfigItem, ConfigFormItem, ConfigFormItemBase, InputFormItem, SwitchFormItem, NumberFormItem, ColorFormItem, SelectFormItem }
    }

        { Extension, Context }
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

export declare interface VeltixConfig {
    doc?: {
        width: number;
        height: number;
    };
}

declare type VeltixContext = {
    project: ReturnType<typeof useProjectStore.getState>;
    editor: ReturnType<typeof useEditorStore.getState>;
};

export declare interface VeltixOptions {
}

export declare interface VeltixProps {
    data?: Veltix_2.Project;
    components?: Components;
    contributes?: Contributes;
    api?: VeltixApi;
    config?: VeltixConfig;
    onMount?: () => void;
}

export declare const veltixStore: VeltixStoreState;

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
}

export declare const enum ViewContainerLocation {
    Sidebar = "sidebar",
    Panel = "panel",
    AuxiliaryBar = "auxiliarybar",
    TitleBar = "titlebar"
}

declare type ViewContribution = {
    id: string;
    title: string;
    hidden?: boolean;
    isDefault?: boolean;
    order?: number;
    isRemovable?: boolean;
    icon?: default_2.ReactNode | default_2.ComponentType;
    viewContainer: ({ context }: {
        context: VeltixContext;
    }) => default_2.ReactNode;
};

declare type ViewRegistry = {
    views: Record<ViewContainerLocation, ViewContribution[]>;
    initialized: boolean;
    initialize: (contributes: Contributes) => void;
    registerViewContainer: (view: ViewContribution, location: ViewContainerLocation) => void;
    registerExtensionViewContainer: (view: ViewContribution) => void;
    unregisterViewContainer: (id: string) => void;
    getViewsByLocation: (location: ViewContainerLocation) => ViewContribution[];
    getViewContainer: (id: string) => ViewContribution | undefined;
};

export { }

import {funcAction} from "../../../src/expand/controller/FuncAction";

var assert = require('chai').assert;
import * as _ from "lodash";
import {LevelManager} from "../../../src/expand/controller/LevelManager";

const sinon = require('sinon');

describe("Level  test", function () {

    let manager = null;
    const config = {
        startLevel:".Campus",
        endLevel:".Room"
    }
    let mockQueryObjectsResult = [{
        id:"1",
        type:".Campus",
        children:[
            {
                id:"2",
                type:"Building",
                children:[
                    {
                        id:"3",
                        type:"Floor",
                        children:[
                            {
                                id:"4",
                                type:"Room",
                                children:[]
                            }
                        ]
                    }
                ]
            }
        ]
    }]
    const app = {
        level: {
            current: {
                query: () => {
                    return [
                        {
                            name: "test1",
                        },
                        {
                            name: "test2",
                        }
                    ]
                }
            }
        }
    }
    let mockGlobalLib = {
        showObject: (obj) => {

        },
        hideObject: (obj) => {

        },
        createDecorator: (obj, id, type, config) => {
            return {};
        },
        removeDecorator: (obj, id) => {

        },
        createSelector: (obj, app) => {

        },
        fadeInObject: (selector, config) => {

        },
        convertQueryCondition: (query) => {
            return ""
        }
    }
    before(function () {
            funcAction.setApp(app);
            
        }
    );
    this.beforeEach(function () {
        manager = new LevelManager(app, config);
    });
    this.afterEach(() => {
        }
    );

    it("解析thingjs对象，为level", function () {
        const mockQueryObjects = sinon.stub(funcAction, 'queryObjects')
            .callsFake(() => {
                return mockQueryObjectsResult
            });

        manager.parse();
        assert.deepStrictEqual(manager.levels.length,4);
        assert.deepStrictEqual(manager.topLevels.length,1);
        mockQueryObjects.restore();
    });

    it("topLevels,不能为空", function () {
        const mockQueryObjects = sinon.stub(funcAction, 'queryObjects')
            .callsFake(() => {
                return mockQueryObjectsResult
            });

        manager.parse();
        assert.deepStrictEqual(manager.topLevels.length,1);
        assert.isNotOk(_.isNil(manager.topLevels[0]) );

        mockQueryObjects.restore();
    });

    it("endLevel为Building,期待只解析到Building", function () {
        const mockQueryObjects = sinon.stub(funcAction, 'queryObjects')
            .callsFake(() => {
                return mockQueryObjectsResult
            });
        manager = new LevelManager(app,{
            startLevel:".Campus",
            endLevel:".Building"
        })
        manager.parse();
        assert.deepStrictEqual(manager.levels.length,4);
        assert.deepStrictEqual(manager.topLevels.length,1);
        mockQueryObjects.restore();
    });



});
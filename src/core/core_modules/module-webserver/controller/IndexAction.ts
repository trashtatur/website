import {Action} from './Action'
import * as routes from 'express-decorators';

/**
 * @name Index Controller
 * @description Provides Connection to landing page right now
 * @module module-webserver
 * @devnotes
 */
@routes.basePath('/index')
export default class IndexAction extends Action {

    constructor(dirname) {
        super(dirname);
    }

    @routes.get('/index')
    async index(request, response) {
        let dataSide =
            [
                {
                    "isDropdown": false,
                    "frontname": "test1",
                    "content": "http://www.google.de"
                },
                {
                    "isDropdown": false,
                    "frontname": "test2",
                    "content": "http://www.web.de"
                },
                {
                    "isDropdown": true,
                    "frontname": "test14",
                    "SideMenuItems":
                        [
                            {
                                "isDropdown": false,
                                "frontname": "test3",
                                "content": "http://www.yahoo.com"
                            },
                            {
                                "isDropdown": true,
                                "frontname": "test44",
                                "SideMenuItems":
                                    [
                                        {
                                            "isDropdown": false,
                                            "frontname": "test333",
                                            "content": "http://www.gamona.de"
                                        }
                                    ]
                            },
                        ]
                },
                {
                    "isDropdown": false,
                    "frontname": "test23",
                    "content": "http://www.google.de"
                }
            ];
        this.render(response, 'index', {content: "HALLO", data: "MOIN MOIN", SideMenuItems: dataSide});
    }

}


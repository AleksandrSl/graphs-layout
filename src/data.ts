export const data = {
    "projectName": "123",
    "nodes": [
    {
        "id": "1kbcS3961J5CoeJ",
        "typeId": "43ja",
        "title": "AWS Fargate",
        "x": 240,
        "y": -144,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "MLgPDtK8K0_z-ZU"
    },
    {
        "id": "AGi6Y2dHN1-gc6y",
        "typeId": "f9nj",
        "title": "AWS Artifact",
        "x": 160,
        "y": 224,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": null
    },
    {
        "id": "E7r9wcwszHYrp7N",
        "typeId": "7xsa",
        "title": "AWS AppSync",
        "x": 416,
        "y": 144,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": null
    },
    {
        "id": "QQgsIJqCGQj1HtG",
        "ignoreThreats": false,
        "parentGroup": null,
        "title": "AWS Batch",
        "x": -128,
        "y": 144,
        "typeId": "3ubp",
        "datatypeIds": []
    },
    {
        "id": "UzA8pjTkzdKMNm9",
        "typeId": "7qsd",
        "title": "Amazon DynamoDB",
        "x": 336,
        "y": -320,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "bQ3P9AEKfrxFM5R"
    },
    {
        "id": "WQz6gue5ioF0WGS",
        "typeId": "7brb",
        "title": "Amazon FreeRTOS",
        "x": -368,
        "y": -64,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "_pOP8SGUBnaoqeY"
    },
    {
        "id": "YhwoqJ5J4W3tkEY",
        "typeId": "5wqx",
        "title": "Amazon Pinpoint",
        "x": 80,
        "y": -304,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "bQ3P9AEKfrxFM5R"
    },
    {
        "id": "elGWX65eqg-5zZZ",
        "typeId": "8xkz",
        "title": "AWS IoT Button",
        "x": 240,
        "y": -64,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "MLgPDtK8K0_z-ZU"
    },
    {
        "id": "hyDGLnHWxYFd5TE",
        "typeId": "5oy5",
        "title": "AWS AppFlow",
        "x": 432,
        "y": -144,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "S4TKQ8m4leN2eTs"
    },
    {
        "id": "lD0M32uv9DmCt_s",
        "typeId": "4ymq",
        "title": "Amazon Elastic Container Registry",
        "x": -320,
        "y": -144,
        "ignoreThreats": false,
        "datatypeIds": [],
        "parentGroup": "_pOP8SGUBnaoqeY"
    },
    {
        "id": "mY-bClcTQMcHhyx",
        "ignoreThreats": false,
        "parentGroup": "pRCza1iXookcuzt",
        "title": "AWS Elastic Beanstalk",
        "x": -64,
        "y": -144,
        "typeId": "6oft",
        "datatypeIds": []
    }
],
    "groups": [
    {
        "id": "_pOP8SGUBnaoqeY",
        "parentGroup": null,
        "title": "Public Subnet",
        "x": -400,
        "y": -192,
        "width": 240,
        "height": 192,
        "collapsed": false,
        "typeId": "publicSubnet"
    },
    {
        "id": "bQ3P9AEKfrxFM5R",
        "parentGroup": null,
        "width": 720,
        "height": 384,
        "x": -96,
        "y": -368,
        "typeId": "general",
        "title": "General",
        "collapsed": false
    },
    {
        "id": "pRCza1iXookcuzt",
        "parentGroup": "bQ3P9AEKfrxFM5R",
        "width": 176,
        "height": 112,
        "x": -80,
        "y": -192,
        "typeId": "privateSubnet",
        "title": "Private Subnet",
        "collapsed": false
    },
    {
        "id": "MLgPDtK8K0_z-ZU",
        "parentGroup": "bQ3P9AEKfrxFM5R",
        "width": 400,
        "height": 240,
        "x": 208,
        "y": -240,
        "typeId": "stepFunction",
        "title": "Step Function",
        "collapsed": false
    },
    {
        "id": "S4TKQ8m4leN2eTs",
        "parentGroup": "MLgPDtK8K0_z-ZU",
        "width": 176,
        "height": 128,
        "x": 416,
        "y": -192,
        "typeId": "vpc",
        "title": "VPC",
        "collapsed": false
    }
],
    "connections": [
    {
        "id": "0FHHcURNmruAYv7",
        "from": "QQgsIJqCGQj1HtG",
        "to": "mY-bClcTQMcHhyx",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "NZG-wY27kAuLoRx",
        "from": "mY-bClcTQMcHhyx",
        "to": "lD0M32uv9DmCt_s",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "QWrK7sz40nxNx2r",
        "from": "QQgsIJqCGQj1HtG",
        "to": "hyDGLnHWxYFd5TE",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "QZv1HvBRlCAQOa2",
        "from": "1kbcS3961J5CoeJ",
        "to": "mY-bClcTQMcHhyx",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "dNZbmBJQgEGcnnA",
        "from": "elGWX65eqg-5zZZ",
        "to": "WQz6gue5ioF0WGS",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "gcnmTgbtnRCbN1x",
        "from": "E7r9wcwszHYrp7N",
        "to": "hyDGLnHWxYFd5TE",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "gh3llEXUlk25_Ym",
        "from": "QQgsIJqCGQj1HtG",
        "to": "lD0M32uv9DmCt_s",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "hYUVwDV_RLopACP",
        "from": "UzA8pjTkzdKMNm9",
        "to": "E7r9wcwszHYrp7N",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "jmcua-wnHfHq_a7",
        "from": "hyDGLnHWxYFd5TE",
        "to": "elGWX65eqg-5zZZ",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "kkuS7eobgnhe2jn",
        "from": "WQz6gue5ioF0WGS",
        "to": "E7r9wcwszHYrp7N",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "lsVvi34Y_tbUy9z",
        "from": "hyDGLnHWxYFd5TE",
        "to": "1kbcS3961J5CoeJ",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "mfA6NL6azexPBhC",
        "from": "1kbcS3961J5CoeJ",
        "to": "QQgsIJqCGQj1HtG",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "o6uZ7oRDvQD2NBH",
        "from": "UzA8pjTkzdKMNm9",
        "to": "YhwoqJ5J4W3tkEY",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "sGmDZU5u3Ytnp39",
        "from": "1kbcS3961J5CoeJ",
        "to": "elGWX65eqg-5zZZ",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "t826wvD8zA_sN60",
        "from": "E7r9wcwszHYrp7N",
        "to": "elGWX65eqg-5zZZ",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    },
    {
        "id": "yBD47I58f2m_zlN",
        "from": "AGi6Y2dHN1-gc6y",
        "to": "mY-bClcTQMcHhyx",
        "type": "unidirectional",
        "ignoreThreats": false,
        "datatypeIds": []
    }
]
}
function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 128.140.76.145:10003",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 43.102.204.47:8013",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 139.177.229.68:8080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 203.189.137.122:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
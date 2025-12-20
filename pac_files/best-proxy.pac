function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:7413",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.178.87.50:8080",
        "SOCKS 166.249.54.64:7234",
        "SOCKS 38.253.88.242:999",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 128.140.76.145:22413",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 72.10.160.174:27047",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 192.3.120.42:1081",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 103.103.21.80:8000",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 51.250.108.153:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
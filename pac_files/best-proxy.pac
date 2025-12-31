function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.128.41.253:28080",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 49.156.44.114:8080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 103.174.178.160:2080",
        "SOCKS 203.189.154.129:1080",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 200.59.186.178:999",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 36.255.98.167:7316",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 103.141.66.78:1080",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 203.189.153.170:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
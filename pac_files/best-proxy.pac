function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 36.255.98.177:4535",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 91.142.79.166:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 103.82.23.118:6202",
        "SOCKS 36.255.98.177:10000",
        "SOCKS 147.45.124.194:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 202.142.178.206:1080",
        "SOCKS 85.192.56.4:48716",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 62.60.131.193:4632",
        "SOCKS 88.99.10.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
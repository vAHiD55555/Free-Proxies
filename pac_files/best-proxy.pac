function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.215.47.191:10080",
        "SOCKS 176.117.105.28:8080",
        "SOCKS 147.75.34.93:10006",
        "SOCKS 128.140.76.145:10275",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 179.96.28.58:80",
        "SOCKS 119.81.71.27:80",
        "SOCKS 194.87.77.22:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
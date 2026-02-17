function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.235.155.77:47287",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 123.54.197.20:20170",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 202.62.39.87:1080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 185.123.143.251:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
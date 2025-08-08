function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.54.73.223:16000",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 8.220.136.174:8999",
        "SOCKS 27.79.240.238:16000",
        "SOCKS 38.7.131.190:999",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 27.79.167.41:16000",
        "SOCKS 185.13.230.212:8082",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 192.177.139.220:8000",
        "SOCKS 103.189.218.158:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 27.79.195.145:16000",
        "SOCKS 27.79.159.236:16000",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 222.129.33.141:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
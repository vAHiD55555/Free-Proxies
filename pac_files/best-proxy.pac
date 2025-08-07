function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.115.42.157:8044",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 192.177.33.54:8000",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 47.91.110.148:1000",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 212.110.188.207:34405",
        "SOCKS 27.71.128.132:16000",
        "SOCKS 64.225.70.191:8888",
        "SOCKS 171.228.181.175:2001",
        "SOCKS 95.158.15.161:8080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 116.103.143.179:1004",
        "SOCKS 222.59.173.105:45053",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
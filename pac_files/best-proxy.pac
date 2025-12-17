function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.78.74.174:999",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 52.87.167.25:80",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 72.10.160.173:1225",
        "SOCKS 128.140.76.145:10394",
        "SOCKS 192.252.209.158:4145",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 190.119.160.29:56160",
        "SOCKS 120.77.203.0:443",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 128.140.76.145:12308",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 202.40.178.230:64564",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
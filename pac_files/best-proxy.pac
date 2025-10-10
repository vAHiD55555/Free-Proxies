function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.124.15.90:8080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 201.65.173.179:8080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 182.160.105.46:14157",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 188.121.117.214:3128",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 177.234.194.31:999",
        "SOCKS 103.124.227.89:12445",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 47.79.95.169:1122",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
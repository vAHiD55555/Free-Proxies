function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.124.228.87:1080",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 41.128.72.131:1976",
        "SOCKS 41.33.203.227:1976",
        "SOCKS 103.151.22.26:8082",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 190.145.227.114:999",
        "SOCKS 191.103.219.225:48612",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 157.245.154.238:8080",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.92:16287",
        "SOCKS 14.248.84.131:8080",
        "SOCKS 160.25.48.33:9090",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 103.70.79.3:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
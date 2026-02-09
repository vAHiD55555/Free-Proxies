function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:39452",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 146.235.19.84:10805",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 38.23.34.11:40003",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 213.35.110.67:10850",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 110.235.252.146:1080",
        "SOCKS 118.71.86.181:1059",
        "SOCKS 213.35.110.67:10900",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 202.62.55.163:1080",
        "SOCKS 113.121.240.114:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
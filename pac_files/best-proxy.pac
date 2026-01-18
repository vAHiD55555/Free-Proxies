function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:12714",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 152.53.171.242:10021",
        "SOCKS 198.177.253.13:4145",
        "SOCKS 8.210.27.75:1011",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 196.202.91.43:8080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 114.130.153.46:58080",
        "SOCKS 152.53.171.242:38477",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 208.72.153.59:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 152.53.171.242:20901",
        "SOCKS 103.82.23.118:6236",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
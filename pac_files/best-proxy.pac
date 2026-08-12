function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.172.36.213:8080",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 216.106.179.216:49180",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 202.58.77.214:8080",
        "SOCKS 171.253.95.24:1033",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 13.140.164.179:3055",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 103.39.51.156:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 83.147.216.208:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
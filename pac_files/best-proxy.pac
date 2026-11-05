function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.245.71.144:1091",
        "SOCKS 204.152.192.24:10809",
        "SOCKS 45.159.189.203:1080",
        "SOCKS 131.153.1.44:34522",
        "SOCKS 112.169.210.64:1080",
        "SOCKS 8.222.170.146:1111",
        "SOCKS 221.133.129.35:1080",
        "SOCKS 120.24.22.233:1080",
        "SOCKS 5.129.207.19:1080",
        "SOCKS 45.74.31.47:6966",
        "SOCKS 45.74.31.40:4597",
        "SOCKS 31.41.228.112:2080",
        "SOCKS 169.58.4.160:1080",
        "SOCKS 172.86.117.246:1080",
        "SOCKS 94.249.150.70:1080",
        "SOCKS 140.207.114.166:10080",
        "SOCKS 101.32.94.127:1080",
        "SOCKS 69.174.54.159:17331",
        "SOCKS 39.104.59.56:3128",
        "SOCKS 45.74.31.41:5350",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
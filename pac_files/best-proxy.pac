function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 196.204.83.233:1976",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 185.191.236.162:3128",
        "SOCKS 195.74.86.205:80",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 47.250.177.202:80",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 72.10.160.172:5699",
        "SOCKS 62.171.152.87:8888",
        "SOCKS 188.121.117.214:3128",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 211.143.79.108:3128",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 67.43.236.19:25371",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}
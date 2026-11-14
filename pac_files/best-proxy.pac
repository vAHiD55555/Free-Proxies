function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.186.169.160:1081",
        "SOCKS 174.138.165.210:30655",
        "SOCKS 118.179.168.26:9090",
        "SOCKS 85.208.51.17:1085",
        "SOCKS 43.133.30.72:5555",
        "SOCKS 202.79.27.12:1080",
        "SOCKS 118.71.227.218:1100",
        "SOCKS 45.74.31.47:4959",
        "SOCKS 154.44.31.195:555",
        "SOCKS 103.112.68.25:1080",
        "SOCKS 186.246.14.108:9151",
        "SOCKS 45.74.31.42:5634",
        "SOCKS 150.241.71.36:1080",
        "SOCKS 46.250.255.73:1080",
        "SOCKS 69.174.54.109:10402",
        "SOCKS 154.12.58.81:1080",
        "SOCKS 45.74.31.40:4768",
        "SOCKS 47.91.121.127:8181",
        "SOCKS 195.19.50.130:1080",
        "SOCKS 35.204.249.130:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}